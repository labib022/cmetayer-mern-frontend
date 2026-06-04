import { Link, useNavigate } from "react-router-dom";

const inputClass = "w-full font-rethink text-sm text-[#656565] bg-white rounded-xl border border-[#E3E8EF] outline-none transition-all duration-200 px-4 py-3 placeholder:text-[#aab0be] focus:border-[#08203C]";

export default function StepThree({ data, setData }) {
  const navigate = useNavigate();

  const handleChange = (field) => (e) =>
    setData({ ...data, [field]: e.target.value });

  const handleClose = () => navigate("/services/moving");

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F0F0F0] px-4 py-10">
      <div
        className="w-full max-w-[540px] flex flex-col gap-[35px] relative"
        style={{
          padding: "83px 32px 32px 32px",
          borderRadius: "32px",
          background: "#FAFAFA",
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#E3E8EF] text-[#0B1714] cursor-pointer hover:bg-gray-100 transition-colors duration-200"
          style={{ fontSize: "18px" }}
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <h1
              className="font-rethink font-bold leading-[130%] tracking-[-1.248px] m-0"
              style={{ color: "#0F172B", fontSize: "32px" }}
            >
              Build Your Moving Project
            </h1>
            <span
              className="font-rethink font-normal leading-[140%] shrink-0 pt-1"
              style={{ color: "#656565", fontSize: "14px" }}
            >
              Step 2 of 3
            </span>
          </div>

          {/* Progress Bar — full */}
          <div className="w-full h-1.5 rounded-full bg-[#E3E8EF] overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: "100%", backgroundColor: "#08203C" }}
            />
          </div>
        </div>

        {/* Form Card */}
        <div
          className="flex flex-col gap-5 w-full"
          style={{
            padding: "20px",
            borderRadius: "16px",
            background: "#fff",
            border: "1px solid #E3E8EF",
          }}
        >
          <h2
            className="font-rethink font-bold leading-[140%] tracking-[-0.936px] m-0"
            style={{ color: "#0F172B", fontSize: "24px" }}
          >
            Contact Info
          </h2>

          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label
              className="font-rethink font-semibold leading-[140%]"
              style={{ color: "#0B1714", fontSize: "16px" }}
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={data.fullName || ""}
              onChange={handleChange("fullName")}
              className={inputClass}
              onFocus={(e) => (e.target.style.borderColor = "#08203C")}
              onBlur={(e) => (e.target.style.borderColor = "#E3E8EF")}
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-2">
            <label
              className="font-rethink font-semibold leading-[140%]"
              style={{ color: "#0B1714", fontSize: "16px" }}
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={data.email || ""}
              onChange={handleChange("email")}
              className={inputClass}
              onFocus={(e) => (e.target.style.borderColor = "#08203C")}
              onBlur={(e) => (e.target.style.borderColor = "#E3E8EF")}
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label
              className="font-rethink font-semibold leading-[140%]"
              style={{ color: "#0B1714", fontSize: "16px" }}
            >
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="(555) 123-4567"
              value={data.phone || ""}
              onChange={handleChange("phone")}
              className={inputClass}
              onFocus={(e) => (e.target.style.borderColor = "#08203C")}
              onBlur={(e) => (e.target.style.borderColor = "#E3E8EF")}
            />
          </div>
        </div>

        {/* Buttons Row */}
        <div className="flex items-center gap-4 w-full">

          {/* Back Button */}
          <Link
            to="/services/moving/book/step-2"
            className="font-rethink font-semibold text-sm text-[#0B1714] cursor-pointer hover:bg-[#e0e2e6] transition-colors duration-200 no-underline flex items-center justify-center"
            style={{
              width: "173px",
              height: "48px",
              padding: "10px 55px",
              borderRadius: "24px",
              background: "#ECEEF0",
            }}
          >
            Back
          </Link>

          {/* Next Step Button */}
          <Link
            to="/services/moving/book/success"
            className="flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity duration-200 no-underline"
            style={{
              padding: "8px 8px 8px 24px",
              borderRadius: "24px",
              background: "#08203C",
              flex: "1 0 0",
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