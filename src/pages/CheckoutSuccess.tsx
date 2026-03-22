import { Link, useSearchParams } from "react-router-dom";

export default function CheckoutSuccess() {
  const [params] = useSearchParams();
  const paymentId = params.get("payment_id");

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f9f6f0] px-4 font-[Spinnaker]">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#4F815E]/10">
          <svg
            className="h-8 w-8 text-[#4F815E]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="font-[Talina] text-3xl text-[#4F815E]">
          Order Confirmed!
        </h1>

        <p className="mt-3 text-gray-600">
          Thank you for choosing ChewCheer. Your dog's gut will thank you!
        </p>

        {paymentId && (
          <p className="mt-4 rounded-lg bg-gray-50 px-4 py-2 text-xs text-gray-500">
            Payment ID: {paymentId}
          </p>
        )}

        <Link
          to="/"
          className="mt-6 inline-block rounded-xl bg-[#4F815E] px-6 py-3 text-sm font-bold text-white no-underline transition-colors hover:bg-[#3d6a4c]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
