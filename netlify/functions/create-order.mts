const UNIT_PRICES: Record<string, number> = {
  "one-time": 36900,
  subscribe: 33200,
};

export default async (req: Request) => {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    return Response.json(
      { error: "Payment gateway is not configured" },
      { status: 500 },
    );
  }

  const body = await req.json();
  const plan: string = body.plan ?? "one-time";
  const quantity: number = Math.max(1, Math.floor(Number(body.quantity) || 1));
  const unitPrice = UNIT_PRICES[plan] ?? UNIT_PRICES["one-time"];
  const amount = quantity * unitPrice;

  const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

  const res = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify({
      amount,
      currency: "INR",
      receipt: `cc_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      notes: {
        product: "Prebiotic Inulin Sticks",
        plan,
        quantity: String(quantity),
      },
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.error("Razorpay order creation failed:", err);
    return Response.json(
      { error: "Failed to create order" },
      { status: 502 },
    );
  }

  const order = await res.json();

  return Response.json({
    order_id: order.id,
    amount: order.amount,
    currency: order.currency,
    key_id: keyId,
  });
};

export const config = { path: "/api/create-order" };
