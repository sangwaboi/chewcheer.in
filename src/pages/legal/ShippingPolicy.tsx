import { PoliciesLayout } from "./PoliciesLayout.tsx";

export function ShippingPolicy() {
  return (
    <PoliciesLayout title="Shipping and Delivery Policy">
      <p>
        You hereby agree that the delivery dates are estimates, unless a fixed date for the delivery has been expressly
        agreed in writing. The cost for delivery shall be calculated at the time of initiation of Transaction based on the
        shipping address and will be collected from you as a part of the Transaction Amount paid for the products and/or
        services. In the event that you do not receive the delivery even after seven days have passed from the estimated
        date of delivery, you must promptly reach out to us at{" "}
        <a
          className="text-[#4F815E] underline underline-offset-2"
          href="mailto:sangwavishvendr@gmail.com"
        >
          sangwavishvendr@gmail.com
        </a>
        .
      </p>
    </PoliciesLayout>
  );
}
