import { createHmac } from "node:crypto";

export default async (req: Request) => {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) {
    return new Response("Webhook secret not configured", { status: 500 });
  }

  const rawBody = await req.text();
  const signature = req.headers.get("x-razorpay-signature") ?? "";

  const expected = createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

  if (expected !== signature) {
    console.warn("Webhook signature verification failed");
    return new Response("Invalid signature", { status: 401 });
  }

  // Signature verified — process the event
  const event = JSON.parse(rawBody);
  const eventType: string = event.event;

  switch (eventType) {
    case "payment.captured": {
      const payment = event.payload?.payment?.entity;
      console.log(
        `Payment captured: ${payment?.id} — ₹${(payment?.amount ?? 0) / 100}`,
      );
      break;
    }
    case "payment.failed": {
      const payment = event.payload?.payment?.entity;
      console.warn(`Payment failed: ${payment?.id}`);
      break;
    }
    case "order.paid": {
      const order = event.payload?.order?.entity;
      console.log(`Order paid: ${order?.id}`);
      break;
    }
    default:
      console.log(`Unhandled webhook event: ${eventType}`);
  }

  return Response.json({ received: true });
};

export const config = { path: "/api/webhook" };
