import { useState } from "react";
import product from "../../assets/ChatGPT Image Mar 17, 2026, 05_42_26 PM 2.png";
import plant from "../../assets/ChatGPT Image Mar 17, 2026, 01_58_04 AM 2.svg";

const ProductSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<"subscribe" | "one-time">("subscribe");
  const [qty, setQty] = useState(1);
  const tabs = ["description", "ingredients", "feeding", "details"]
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section id="shop" className="w-full bg-[#F5F5F5] py-20 px-6 font-[Spinnaker]">
      <div className="max-w-6xl mx-auto min-w-0 bg-[#DDE5E0] rounded-3xl p-5 md:p-10">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="flex flex-col items-center">
            <img src={product} className="w-[300px] md:w-[400px]" />

            {/* thumbnails */}
            <div className="flex gap-3 mt-6">
              {[1, 2, 3, 4].map((_, i) => (
                <img key={i} src={product} className="w-16 h-16 cursor-pointer" />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>

            <p className="text-xl mb-2 font-[Cookie]">
              for better digestion & happier dogs
            </p>

            <h2 className="text-4xl font-bold tracking-wider font-[Talina] text-[#66261E] sm:text-5xl md:text-6xl">
              Prebiotic Inulin Sticks
            </h2>

            {/* rating */}
            <div className="flex items-center gap-2 mt-2">
              ⭐⭐⭐⭐⭐ <span className="text-sm">4.8 (190 reviews)</span>
            </div>

            <p className="mt-4 text-sm">
              A simple chew that does more than just taste good...
            </p>

            {/* 🔥 SUBSCRIBE (RADIO) */}
            <div
              onClick={() => setSelectedPlan("subscribe")}
              className={`mt-6 border-2 rounded-xl p-5 cursor-pointer transition-colors ${selectedPlan === "subscribe" ? "border-[#66261E] bg-[#F3E1DE]" : "border-gray-200 bg-white"
                }`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
                  <span className={`w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center ${selectedPlan === "subscribe" ? "border-[#66261E]" : "border-gray-400"
                    }`}>
                    {selectedPlan === "subscribe" && <span className="w-2.5 h-2.5 rounded-full bg-[#66261E]" />}
                  </span>
                  <span className="text-lg font-bold">Subscribe</span>
                  <span className="bg-[#66261E] text-white text-xs font-bold px-3 py-1 rounded-md">SAVE 10%</span>
                </div>
                <div className="flex shrink-0 items-center gap-2 sm:ml-auto">
                  <span className="text-sm text-gray-400 line-through">₹369</span>
                  <span className="text-2xl font-bold">₹332</span>
                </div>
              </div>

              {/* EXPAND */}
              {selectedPlan === "subscribe" && (
                <div className="mt-4 text-sm">
                  <select className="w-full p-3 border border-gray-300 rounded-lg bg-white text-sm">
                    <option>30 Days (Most Popular)</option>
                    <option>15 Days</option>
                  </select>

                  <p className="mt-3 text-xs text-gray-600">
                    Subscribe and Save 30% OFF your first order and get 10% OFF on all recurring orders.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3 font-bold text-[10px] sm:justify-around sm:gap-0">
                    <span className="w-[70px] text-center">your dog never misses a day</span>
                    <span className="w-[70px] text-center">fast,free delivery</span>
                    <span className="w-[70px] text-center">our best prices, always</span>
                    <span className="w-[70px] text-center">cancel anytime, zero pressure</span>
                  </div>
                </div>
              )}
            </div>

            {/* 🔥 ONE TIME */}
            <div
              onClick={() => setSelectedPlan("one-time")}
              className={`mt-4 border-2 rounded-xl p-5 cursor-pointer transition-colors ${selectedPlan === "one-time" ? "border-[#66261E] bg-[#F3E1DE]" : "border-gray-200 bg-white"
                }`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className={`w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center ${selectedPlan === "one-time" ? "border-[#66261E]" : "border-gray-400"
                    }`}>
                    {selectedPlan === "one-time" && <span className="w-2.5 h-2.5 rounded-full bg-[#66261E]" />}
                  </span>
                  <span className="text-lg font-bold">One-Time Purchase</span>
                </div>
                <span className="text-2xl font-bold sm:ml-auto">₹369</span>
              </div>
            </div>

            {/* 🔥 QUANTITY */}
            <div className="mt-6 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center justify-center gap-4 bg-white px-4 py-2 rounded-3xl sm:justify-start">
                <button type="button" onClick={() => setQty(Math.max(1, qty - 1))} className="min-h-[44px] min-w-[44px] cursor-pointer">-</button>
                <span>{qty}</span>
                <button type="button" onClick={() => setQty(qty + 1)} className="min-h-[44px] min-w-[44px] cursor-pointer">+</button>
              </div>

              <button type="button" className="min-h-[44px] w-full flex-1 bg-[#66261E] text-white py-3 rounded-3xl cursor-pointer sm:w-auto">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        {/* 🔥 TABS */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-4 gap-y-2 border-b font-bold sm:justify-around sm:gap-6">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-xs cursor-pointer sm:text-base ${activeTab === tab ? "border-b-2 border-[#66261E]" : ""
                }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* 🔥 TAB CONTENT */}
        <div className="mt-6 grid md:grid-cols-2 gap-10">

          {activeTab === "description" && (
            <>
              <p className="text-sm">
                Chewcheer’s Prebiotic Inulin Sticks are thoughtfully made to support your dog’s digestive health in the most natural way possible. Powered by prebiotic fibre from chicory root and blended with real ingredients like pumpkin, oats, and chicken, each chew works to nourish beneficial gut bacteria and promote smoother digestion.
                <br /><br />
                This helps reduce bloating, regulate stools, and improve overall gut balance. Free from artificial fillers and unnecessary additives, these sticks focus on what truly matters — giving your dog a healthier gut, steady energy, and a noticeable improvement in everyday comfort and happiness.
              </p>
              <img src={plant} />
            </>
          )}

          {activeTab === "ingredients" && <p>Ingredients content...</p>}
          {activeTab === "feeding" && <p>Feeding guide...</p>}
          {activeTab === "details" && <p>Additional details...</p>}

        </div>

      </div>
    </section>
  );
};

export default ProductSection;