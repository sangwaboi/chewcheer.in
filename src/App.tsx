import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import CheckoutSuccess from "./pages/CheckoutSuccess.tsx";
import { RefundPolicy } from "./pages/legal/RefundPolicy.tsx";
import { ShippingPolicy } from "./pages/legal/ShippingPolicy.tsx";
import { TermsAndConditions } from "./pages/legal/TermsAndConditions.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout/success" element={<CheckoutSuccess />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/refund-and-cancellation-policy" element={<RefundPolicy />} />
      <Route path="/shipping-and-delivery-policy" element={<ShippingPolicy />} />
      <Route path="/terms-conditions" element={<Navigate to="/terms-and-conditions" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
