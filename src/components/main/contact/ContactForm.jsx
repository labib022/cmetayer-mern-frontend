import { useState } from "react";

const SERVICES_OPTIONS = [
  "Moving & Packing",
  "Home Cleaning",
  "Handyman & Repair",
  "Laundry Service",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  const inputClass = "w-full font-rethink text-sm text-[#0B1714] bg-[#F5F5F5] rounded-xl border border-transparent outline-none transition-all duration-200 px-4 py-3 placeholder:text-[#aab0be] focus:border-[#08203C] focus:bg-white";

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-300 mx-auto flex flex-col gap-16">

        {/* HEADER ROW */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">

          {/* Left */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "#08203C" }} />
              <span className="font-rethink text-base font-semibold leading-[140%]" style={{ color: "#08203C" }}>
                Get in Touch
              </span>
            </div>
            <h2
              className="font-rethink font-medium leading-[120%] tracking-[-1.56px] m-0 text-3xl sm:text-4xl lg:text-[40px]"
              style={{ color: "#08203C", maxWidth: "480px" }}
            >
              Let's Discuss Your Home Management Needs
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start lg:items-end">
            <p
              className="font-rethink font-normal leading-[140%] m-0"
              style={{ color: "#656565", fontSize: "18px", maxWidth: "551px" }}
            >
              We're here to help! Whether you have a question, need a quote, or
              want to schedule a service, just reach out to our friendly team.
            </p>
          </div>
        </div>

        {/* FORM CARD — centered */}
        <div className="flex justify-center w-full">
          <div
            className="w-full flex flex-col gap-6"
            style={{
              maxWidth: "640px",
              padding: "32px",
              borderRadius: "24px",
              background: "#FFF",
              boxShadow: "0 8px 24px 0 rgba(3, 62, 72, 0.08)",
            }}
          >
            {/* Subtitle */}
            <p className="font-rethink text-[#656565] text-sm leading-relaxed m-0">
              Tell us a bit about your home, and we'll guide you to the right
              cleaning solution.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-rethink text-[#0B1714] text-sm font-semibold">Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange("name")}
                    className={inputClass}
                    onFocus={(e) => { e.target.style.borderColor = "#08203C"; e.target.style.background = "#fff"; }}
                    onBlur={(e) => { e.target.style.borderColor = "transparent"; e.target.style.background = "#F5F5F5"; }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-rethink text-[#0B1714] text-sm font-semibold">Email</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange("email")}
                    className={inputClass}
                    onFocus={(e) => { e.target.style.borderColor = "#08203C"; e.target.style.background = "#fff"; }}
                    onBlur={(e) => { e.target.style.borderColor = "transparent"; e.target.style.background = "#F5F5F5"; }}
                  />
                </div>
              </div>

              {/* Phone + Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-rethink text-[#0B1714] text-sm font-semibold">Phone</label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className={inputClass}
                    onFocus={(e) => { e.target.style.borderColor = "#08203C"; e.target.style.background = "#fff"; }}
                    onBlur={(e) => { e.target.style.borderColor = "transparent"; e.target.style.background = "#F5F5F5"; }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-rethink text-[#0B1714] text-sm font-semibold">Service Needed</label>
                  <select
                    value={form.service}
                    onChange={handleChange("service")}
                    className={inputClass}
                    style={{ appearance: "none" }}
                    onFocus={(e) => { e.target.style.borderColor = "#08203C"; e.target.style.background = "#fff"; }}
                    onBlur={(e) => { e.target.style.borderColor = "transparent"; e.target.style.background = "#F5F5F5"; }}
                  >
                    <option value="">Select a Service</option>
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="font-rethink text-[#0B1714] text-sm font-semibold">Message</label>
                <textarea
                  placeholder="Tell Us about Your Specific Requests"
                  rows={4}
                  value={form.message}
                  onChange={handleChange("message")}
                  className={inputClass}
                  style={{ resize: "vertical" }}
                  onFocus={(e) => { e.target.style.borderColor = "#08203C"; e.target.style.background = "#fff"; }}
                  onBlur={(e) => { e.target.style.borderColor = "transparent"; e.target.style.background = "#F5F5F5"; }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="font-rethink inline-flex items-center justify-between gap-3 border-none cursor-pointer hover:opacity-90 transition-opacity duration-200"
                style={{
                  padding: "12px 12px 12px 24px",
                  borderRadius: "40px",
                  background: "#08203C",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "140%",
                  width: "fit-content",
                }}
              >
                Get a Free Quote
                <span
                  className="flex items-center justify-center w-9 h-9 rounded-full text-base shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  →
                </span>
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}