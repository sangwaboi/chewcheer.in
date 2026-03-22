import { createHmac } from "node:crypto";

export default async (req: Request) => {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret) {
    return Response.json(
      { error: "Payment gateway is not configured" },
      { status: 500 },
    );
  }

  const body = await req.json();
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = body;

  if (!razorpay_payment_id || !razorpay_signature) {
    return Response.json({ error: "Missing payment fields" }, { status: 400 });
  }

  // For one-time orders: HMAC(order_id + "|" + payment_id)
  // For subscriptions: HMAC(payment_id + "|" + subscription_id)
  const signatureBase = razorpay_order_id
    ? `${razorpay_order_id}|${razorpay_payment_id}`
    : `${razorpay_payment_id}|${body.razorpay_subscription_id}`;

  const expected = createHmac("sha256", secret)
    .update(signatureBase)
    .digest("hex");

  if (expected !== razorpay_signature) {
    console.warn("Signature mismatch for payment:", razorpay_payment_id);
    return Response.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Signature verified — payment is authentic
  console.log("Payment verified:", razorpay_payment_id);

  return Response.json({ verified: true, payment_id: razorpay_payment_id });
};

export const config = { path: "/api/verify-payment" };
