import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdImage } from "react-icons/md";

const SERVICE_CATEGORIES = [
  "Plumbing Repair",
  "Electrical Work",
  "Furniture Assembly",
  "Painting & Drywall",
  "Door & Window Repair",
  "General Maintenance",
];

const inputClass = "w-full font-rethink text-sm text-[#656565] bg-white outline-none transition-all duration-200 px-3 py-3 gap-3"

export default function RepairBookingPage() {
  const navigate = useNavigate();
  const fileRef = useRef(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceCategory: "",
    description: "",
    photo: null,
    photoPreview: null,
  });

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be under 5MB");
      return;
    }
    setForm({
      ...form,
      photo: file,
      photoPreview: URL.createObjectURL(file),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Repair request:", form);
    navigate("/services/repair/book/success");
  };

  const handleClose = () => navigate("/services/repair");

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F0F0F0] px-4 py-10">
      <div
        className="w-full max-w-135 flex flex-col gap-8 relative"
        style={{
          padding: "83px 32px 32px 32px",
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
          Request a Repair Quote
        </h1>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full"
        >
          <div
            className="flex flex-col gap-5 w-full"
            style={{
              padding: "20px",
              borderRadius: "16px",
              background: "#fff",
              border: "1px solid #E3E8EF",
            }}
          >

            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="font-rethink font-semibold leading-[140%]" style={{ color: "#0B1714", fontSize: "16px" }}>
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={handleChange("fullName")}
                required
                className={inputClass}
                style={{
                  borderRadius: "8px",
                  border: "0.5px solid #E8EDE4",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#08203C")}
                onBlur={(e) => (e.target.style.borderColor = "#E8EDE4")}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-rethink font-semibold leading-[140%]" style={{ color: "#0B1714", fontSize: "16px" }}>
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange("email")}
                required
                className={inputClass}
                style={{
                  borderRadius: "8px",
                  border: "0.5px solid #E8EDE4",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#08203C")}
                onBlur={(e) => (e.target.style.borderColor = "#E8EDE4")}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="font-rethink font-semibold leading-[140%]" style={{ color: "#0B1714", fontSize: "16px" }}>
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+880********"
                value={form.phone}
                onChange={handleChange("phone")}
                required
                className={inputClass}
                style={{
                  borderRadius: "8px",
                  border: "0.5px solid #E8EDE4",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#08203C")}
                onBlur={(e) => (e.target.style.borderColor = "#E8EDE4")}
              />
            </div>

            {/* Service Category */}
            <div className="flex flex-col gap-2">
              <label className="font-rethink font-semibold leading-[140%]" style={{ color: "#0B1714", fontSize: "16px" }}>
                Service Category
              </label>
              <div className="relative">
                <select
                  value={form.serviceCategory}
                  onChange={handleChange("serviceCategory")}
                  className={`${inputClass} appearance-none cursor-pointer`}
                  style={{
                    borderRadius: "8px",
                    border: "0.5px solid #E8EDE4",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#08203C")}
                  onBlur={(e) => (e.target.style.borderColor = "#E8EDE4")}
                >
                  <option value="">Select a category</option>
                  {SERVICE_CATEGORIES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#aab0be] pointer-events-none">▾</span>
              </div>
            </div>

            {/* Describe the Issue */}
            <div className="flex flex-col gap-2">
              <label className="font-rethink font-semibold leading-[140%]" style={{ color: "#0B1714", fontSize: "16px" }}>
                Describe the Issue
              </label>
              <textarea
                placeholder="E.g., The sink in the master bathroom is leaking from the P-trap..."
                value={form.description}
                onChange={handleChange("description")}
                rows={4}
                className={inputClass}
                style={{
                  borderRadius: "8px",
                  border: "0.5px solid #E8EDE4",
                  resize: "vertical",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#08203C")}
                onBlur={(e) => (e.target.style.borderColor = "#E8EDE4")}
              />
            </div>

            {/* Upload Photo */}
            <div className="flex flex-col gap-2">
              <label className="font-rethink font-semibold leading-[140%]" style={{ color: "#0B1714", fontSize: "16px" }}>
                Upload Photo (Optional)
              </label>
              <div
                className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                style={{
                  borderRadius: "14px",
                  border: "2px dashed #ECEEF0",
                  padding: "24px 16px",
                  minHeight: "120px",
                }}
                onClick={() => fileRef.current?.click()}
              >
                {form.photoPreview ? (
                  <img
                    src={form.photoPreview}
                    alt="Preview"
                    className="max-h-25 rounded-xl object-contain"
                  />
                ) : (
                  <>
                    <MdImage size={32} color="#ECEEF0" />
                    <p
                      className="font-rethink font-medium text-center m-0"
                      style={{ color: "#08203C", fontSize: "14px", lineHeight: "20px" }}
                    >
                      Click to upload
                    </p>
                    <p
                      className="font-rethink font-normal text-center m-0"
                      style={{ color: "#656565", fontSize: "12px", lineHeight: "16px" }}
                    >
                      PNG, JPG up to 5MB
                    </p>
                  </>
                )}
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/png, image/jpeg"
                  className="hidden"
                  onChange={handlePhoto}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-between cursor-pointer border-none hover:opacity-90 transition-opacity duration-200"
            style={{
              padding: "8px 8px 8px 24px",
              borderRadius: "24px",
              background: "#08203C",
            }}
          >
            <span
              className="font-rethink text-white font-semibold leading-[140%]"
              style={{ fontSize: "16px" }}
            >
              Submit Request
            </span>
            <span
              className="flex items-center justify-center rounded-3xl bg-white shrink-0"
              style={{ padding: "8px", width: "40px", height: "40px" }}
            >
              <span style={{ color: "#08203C", fontSize: "16px", aspectRatio: "1/1" }}>→</span>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}