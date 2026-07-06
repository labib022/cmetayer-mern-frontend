import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSubmitLaundryBookingMutation } from "../../../../../redux/features/cms/cmsApi";

const inputClass =
  "w-full font-rethink text-sm text-[#656565] bg-white rounded-xl border outline-none transition-all duration-200 px-4 py-3 placeholder:text-[#aab0be]";

const BAG_SIZES = [
  { label: "Small (up to 10 lbs)", value: "small" },
  { label: "Medium (up to 20 lbs)", value: "medium" },
  { label: "Large (up to 30 lbs)", value: "large" },
  { label: "Extra Large (up to 40 lbs)", value: "extra_large" },
];

export default function LaundryContactInfo({ data, setData }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [submitLaundryBooking, { isLoading }] =
    useSubmitLaundryBookingMutation();

  const handleChange = (field) => (e) => {
    setData({ ...data, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  const handleClose = () => navigate("/services/laundry");
  const handleBack = () => navigate("/services/laundry/laundry-booking/step-1");

  const handleSubmit = async () => {
    const newErrors = {};
    if (!data.fullName) newErrors.fullName = "Full name is required";
    if (!data.email) newErrors.email = "Email is required";
    if (!data.phone) newErrors.phone = "Phone number is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const selectedBag = BAG_SIZES.find((b) => b.label === data.bagSize);
    const bagValue = selectedBag?.value || "medium";

    try {
      await submitLaundryBooking({
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        bag_size: bagValue,
        washing_items: data.washType || "standard_clean",
        detergent_type: data.detergent || "standard_clean",
        laundry_date: data.serviceDate || "",
      }).unwrap();

      navigate("/services/laundry/laundry-booking/success");
    } catch (err) {
      console.error("Booking failed:", err);
      alert(err?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F0F0F0] px-4 py-10">
      <div
        className="w-full max-w-135 flex flex-col gap-9 relative"
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
              Book a Laundry
            </h1>
            <span
              className="font-rethink font-normal leading-[140%] shrink-0 pt-1"
              style={{ color: "#656565", fontSize: "14px" }}
            >
              Step 2 of 2
            </span>
          </div>
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
          <div className="flex flex-col gap-1">
            <label
              className="font-rethink font-semibold leading-[140%]"
              style={{ color: "#0B1714", fontSize: "16px" }}
            >
              Full Name <span style={{ color: "#EF4444" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={data.fullName || ""}
              onChange={handleChange("fullName")}
              className={inputClass}
              style={{ borderColor: errors.fullName ? "#EF4444" : "#E3E8EF" }}
            />
            {errors.fullName && (
              <p className="font-rethink text-xs m-0" style={{ color: "#EF4444" }}>
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label
              className="font-rethink font-semibold leading-[140%]"
              style={{ color: "#0B1714", fontSize: "16px" }}
            >
              Email Address <span style={{ color: "#EF4444" }}>*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={data.email || ""}
              onChange={handleChange("email")}
              className={inputClass}
              style={{ borderColor: errors.email ? "#EF4444" : "#E3E8EF" }}
            />
            {errors.email && (
              <p className="font-rethink text-xs m-0" style={{ color: "#EF4444" }}>
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <label
              className="font-rethink font-semibold leading-[140%]"
              style={{ color: "#0B1714", fontSize: "16px" }}
            >
              Phone Number <span style={{ color: "#EF4444" }}>*</span>
            </label>
            <input
              type="tel"
              placeholder="(555) 123-4567"
              value={data.phone || ""}
              onChange={handleChange("phone")}
              className={inputClass}
              style={{ borderColor: errors.phone ? "#EF4444" : "#E3E8EF" }}
            />
            {errors.phone && (
              <p className="font-rethink text-xs m-0" style={{ color: "#EF4444" }}>
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Buttons Row */}
        <div className="flex items-center gap-4 w-full">
          <button
            onClick={handleBack}
            className="font-rethink font-semibold text-sm text-[#0B1714] cursor-pointer hover:bg-[#e0e2e6] transition-colors duration-200 border-none flex items-center justify-center"
            style={{
              width: "173px",
              height: "48px",
              borderRadius: "24px",
              background: "#ECEEF0",
            }}
          >
            Back
          </button>

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity duration-200 border-none disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              padding: "8px 8px 8px 24px",
              borderRadius: "24px",
              background: "#08203C",
              flex: "1 0 0",
            }}
          >
            <span className="w-full text-center font-rethink text-white font-semibold text-base leading-[140%]">
              {isLoading ? "Submitting..." : "Submit"}
            </span>
            <span
              className="flex items-center justify-center w-10 h-10 rounded-full text-white text-base shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}