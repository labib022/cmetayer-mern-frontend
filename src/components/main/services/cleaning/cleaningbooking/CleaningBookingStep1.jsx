
import { Link, useNavigate } from "react-router-dom";
import { MdCalendarToday, MdShoppingCart } from "react-icons/md";

const SERVICE_CATEGORIES = [
  "Standard Clean",
  "Deep Clean",
  "Move-In / Move-Out Clean",
  "Post-Construction Clean",
  "Airbnb Turnover Clean",
];

const FREQUENCY_OPTIONS = [
  { label: "One-time (0%)", discount: 0 },
  { label: "Weekly (-15%)", discount: 0.15 },
  { label: "Bi-weekly (-10%)", discount: 0.10 },
  { label: "Monthly (-5%)", discount: 0.05 },
];

const BASE_PRICE = 45; // per bed+bath combo
const VAT_RATE = 0.08; // 8%

export default function CleaningBookingStep1({ data, setData }) {
  const navigate = useNavigate();

  const handleClose = () => navigate("/services/cleaning");

  const inc = (field) => setData({ ...data, [field]: (data[field] || 1) + 1 });
  const dec = (field) => setData({ ...data, [field]: Math.max(1, (data[field] || 1) - 1) });

  const bedrooms = data.bedrooms || 1;
  const bathrooms = data.bathrooms || 1;
  const category = data.serviceCategory || SERVICE_CATEGORIES[0];
  const frequency = data.frequency || FREQUENCY_OPTIONS[0].label;
  const freqObj = FREQUENCY_OPTIONS.find((f) => f.label === frequency) || FREQUENCY_OPTIONS[0];

  const baseTotal = BASE_PRICE * bedrooms * bathrooms;
  const discounted = baseTotal * (1 - freqObj.discount);
  const tax = discounted * VAT_RATE;
  const total = discounted + tax;

  const inputClass = "w-full font-rethink text-sm text-[#656565] bg-white rounded-xl border border-[#E3E8EF] outline-none transition-all duration-200 px-4 py-3 focus:border-[#08203C]";

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F0F0F0] px-4 py-10">
      <div
        className="w-full max-w-190 flex flex-col gap-8 relative"
        style={{
          padding: "80px 32px 32px 32px",
          borderRadius: "32px",
          background: "#FAFAFA",
        }}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#E3E8EF] text-[#0B1714] cursor-pointer hover:bg-gray-100 transition-colors duration-200 text-lg"
        >
          ✕
        </button>

        {/* Title */}
        <h1
          className="font-rethink font-medium leading-[130%] tracking-[-1.248px] m-0"
          style={{ color: "#0F172B", fontSize: "32px" }}
        >
          Book a Cleaning
        </h1>

        {/* Main Grid */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">

          {/* LEFT — Form */}
          <div
            className="flex flex-col gap-5 flex-1"
            style={{
              padding: "20px",
              borderRadius: "16px",
              background: "#fff",
              border: "1px solid #E3E8EF",
            }}
          >
            {/* Home Size */}
            <h2
              className="font-rethink font-medium leading-[140%] tracking-[-0.936px] m-0"
              style={{ color: "#0F172B", fontSize: "24px" }}
            >
              Home Size
            </h2>

            {/* Bedrooms */}
            <div className="flex items-center justify-between py-3 border-b border-[#E3E8EF]">
              <span className="font-rethink font-medium text-[#0B1714] text-base">Bedrooms</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => dec("bedrooms")}
                  className="w-8 h-8 rounded-full border border-[#E3E8EF] bg-white flex items-center justify-center cursor-pointer hover:border-[#08203C] transition-colors duration-200 text-[#0B1714] font-bold"
                >
                  −
                </button>
                <span className="font-rethink font-medium text-[#0B1714] w-4 text-center">{bedrooms}</span>
                <button
                  onClick={() => inc("bedrooms")}
                  className="w-8 h-8 rounded-full border border-[#E3E8EF] bg-white flex items-center justify-center cursor-pointer hover:border-[#08203C] transition-colors duration-200 text-[#0B1714] font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Bathrooms */}
            <div className="flex items-center justify-between py-3 border-b border-[#E3E8EF]">
              <span className="font-rethink font-medium text-[#0B1714] text-base">Bathrooms</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => dec("bathrooms")}
                  className="w-8 h-8 rounded-full border border-[#E3E8EF] bg-white flex items-center justify-center cursor-pointer hover:border-[#08203C] transition-colors duration-200 text-[#0B1714] font-bold"
                >
                  −
                </button>
                <span className="font-rethink font-medium text-[#0B1714] w-4 text-center">{bathrooms}</span>
                <button
                  onClick={() => inc("bathrooms")}
                  className="w-8 h-8 rounded-full border border-[#E3E8EF] bg-white flex items-center justify-center cursor-pointer hover:border-[#08203C] transition-colors duration-200 text-[#0B1714] font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Service Category */}
            <div className="flex flex-col gap-2">
              <label className="font-rethink font-semibold text-[#0B1714] text-base leading-[140%]">
                Service Category
              </label>
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setData({ ...data, serviceCategory: e.target.value })}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  {SERVICE_CATEGORIES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#aab0be] pointer-events-none">▾</span>
              </div>
            </div>

            {/* Service Date & Time */}
            <div className="flex flex-col gap-2">
              <label className="font-rethink font-semibold text-[#0B1714] text-base leading-[140%]">
                Service Date &amp; Time
              </label>
              <div className="relative">
                <input
                  type="datetime-local"
                  value={data.serviceDate || ""}
                  onChange={(e) => setData({ ...data, serviceDate: e.target.value })}
                  className={`${inputClass} pr-10`}
                  onFocus={(e) => (e.target.style.borderColor = "#08203C")}
                  onBlur={(e) => (e.target.style.borderColor = "#E3E8EF")}
                />
                <MdCalendarToday size={16} color="#aab0be" className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Frequency */}
            <div className="flex flex-col gap-2">
              <label className="font-rethink font-semibold text-[#0B1714] text-base leading-[140%]">
                Frequency
              </label>
              <div className="relative">
                <select
                  value={frequency}
                  onChange={(e) => setData({ ...data, frequency: e.target.value })}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  {FREQUENCY_OPTIONS.map((f) => (
                    <option key={f.label} value={f.label}>{f.label}</option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#aab0be] pointer-events-none">▾</span>
              </div>
            </div>
          </div>

          {/* RIGHT — Order Summary */}
          <div
            className="flex flex-col gap-4 w-full lg:w-55 shrink-0"
            style={{
              padding: "20px",
              borderRadius: "16px",
              background: "#fff",
              border: "1px solid #E3E8EF",
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-2">
              <MdShoppingCart size={18} color="#0B1714" />
              <h3 className="font-rethink font-semibold text-[#0B1714] text-base m-0">
                Order Summary
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              {/* Bed + Bath */}
              <div className="flex items-center justify-between">
                <span className="font-rethink text-sm text-[#656565]">
                  {bedrooms} Bed, {bathrooms} Bath
                </span>
                <span className="font-rethink text-sm font-medium text-[#0B1714]">
                  ${BASE_PRICE * bedrooms * bathrooms}
                </span>
              </div>

              {/* Service */}
              <div className="flex items-center justify-between">
                <span className="font-rethink text-sm text-[#656565]">{category}</span>
                <span className="font-rethink text-sm font-medium text-[#0B1714]">x1</span>
              </div>

              {/* Discount if any */}
              {freqObj.discount > 0 && (
                <div className="flex items-center justify-between">
                  <span className="font-rethink text-sm text-[#079455]">Discount</span>
                  <span className="font-rethink text-sm font-medium text-[#079455]">
                    -{(freqObj.discount * 100).toFixed(0)}%
                  </span>
                </div>
              )}

              {/* Taxes */}
              <div className="flex items-center justify-between">
                <span className="font-rethink text-sm text-[#656565]">Taxes (8%)</span>
                <span className="font-rethink text-sm font-medium text-[#0B1714]">
                  ${tax.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#E3E8EF]" />

            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="font-rethink font-medium text-[#0B1714] text-base">Total</span>
              <span
                className="font-rethink font-bold tracking-[-1.248px]"
                style={{ color: "#08203C", fontSize: "28px" }}
              >
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 w-full">
          <Link
            to="/services/cleaning"
            className="font-rethink font-semibold text-sm text-[#0B1714] cursor-pointer hover:bg-[#e0e2e6] transition-colors duration-200 no-underline flex items-center justify-center"
            style={{
              width: "173px",
              height: "48px",
              borderRadius: "24px",
              background: "#ECEEF0",
            }}
          >
            Back
          </Link>

          <Link
            to="/services/cleaning/book/success"
            className="flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity duration-200 no-underline"
            style={{
              padding: "8px 8px 8px 24px",
              borderRadius: "24px",
              background: "#08203C",
              flex: "1 0 0",
              height: "48px"
            }}
          >
            <span className="font-rethink text-white font-semibold text-base leading-[140%]">
              Next Step
            </span>
            <span
              className="flex items-center justify-center w-10 h-10 rounded-full text-white text-base shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              →
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
}