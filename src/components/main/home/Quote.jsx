import { useState } from "react";
import { useGetHomePageQuery, useContactUsMutation } from "../../../redux/features/cms/cmsApi";

const SERVICES_LIST = ["Moving & Packing", "Home Cleaning", "Handyman & Repair", "Laundry Service"];
const initialForm = { name: "", email: "", phone: "", service: "", message: "" };

export default function GetAQuote() {
  const [form, setForm]           = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState("");

  const { data } = useGetHomePageQuery();
  const [contactUs, { isLoading }] = useContactUsMutation();

  // Quote[] → { contact_header, description, title }
  const quoteSection = data?.data?.home?.["Quote"]?.[0];
  const heading      = quoteSection?.contact_header || "Looking for Professional Home Management Services?";
  const description  = quoteSection?.description    || "Request a free quote today and let our team create a cleaning plan tailored to your home or property needs.";

  const handleChange = (e) => { setForm((prev) => ({ ...prev, [e.target.name]: e.target.value })); setError(""); };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) { setError("Name, Email and Message are required."); return; }
    try {
      await contactUs({
        name:    form.name,
        email:   form.email,
        purpose: "general_inquiry",
        message: `Service: ${form.service || "Not specified"} | Phone: ${form.phone || "Not provided"} | ${form.message}`,
      }).unwrap();
      setSubmitted(true);
      setForm(initialForm);
    } catch { setError("Something went wrong. Please try again."); }
  };

  return (
    <section className="w-full max-w-360 mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 bg-white">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 xl:gap-24">

        {/* LEFT */}
        <div className="flex flex-col items-start gap-6 flex-1">
          <div className="flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#08203C]" />
            <span style={{ fontFamily: '"Rethink Sans", sans-serif' }} className="text-[#08203C] text-sm font-medium">Get a Quote</span>
          </div>
          <h2 style={{ fontFamily: '"Rethink Sans", sans-serif', letterSpacing: "-1.248px" }}
            className="text-[#111] text-3xl sm:text-[32px] font-medium leading-[130%] m-0 max-w-120">
            {heading}
          </h2>
          <p style={{ fontFamily: '"Rethink Sans", sans-serif' }} className="text-[#656565] text-base sm:text-[18px] font-normal leading-[140%] m-0 max-w-120">
            {description}
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative w-full lg:w-160 shrink-0">
          <div className="absolute inset-0 rounded-3xl hidden sm:block" style={{ background: "#ECEEF0", borderRadius: "24px", transform: "rotate(4deg)", zIndex: 0 }} />
          <div className="relative flex flex-col justify-center items-start gap-6 p-5 sm:p-8 rounded-3xl bg-white"
            style={{ boxShadow: "0 8px 24px 0 rgba(3,62,72,0.08)", borderRadius: "24px", zIndex: 1 }}>

            <p style={{ fontFamily: '"Rethink Sans", sans-serif' }} className="text-[#444] text-base sm:text-[18px] font-normal leading-[140%] m-0">
              Tell us a bit about your home, and we'll guide you to the right cleaning solution.
            </p>

            {submitted && (
              <div className="w-full rounded-xl p-4 text-center" style={{ background: "#edfaf3" }}>
                <p style={{ fontFamily: '"Rethink Sans", sans-serif' }} className="text-green-700 font-semibold text-sm m-0">
                  ✅ Your quote request has been sent! We'll get back to you soon.
                </p>
              </div>
            )}
            {error && <p style={{ fontFamily: '"Rethink Sans", sans-serif' }} className="text-red-500 text-sm m-0">{error}</p>}

            {!submitted && (
              <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col gap-2 w-full sm:flex-1 p-4 rounded-lg" style={{ background: "rgba(17,17,17,0.02)" }}>
                    <label style={{ fontFamily: '"Rethink Sans", sans-serif' }} className="text-[#444] text-base font-semibold leading-[140%]">Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name"
                      className="bg-transparent border-none outline-none text-sm text-[#999] leading-[140%] h-6 w-full" style={{ fontFamily: '"Rethink Sans", sans-serif' }} />
                  </div>
                  <div className="flex flex-col gap-2 w-full sm:flex-1 p-4 rounded-lg" style={{ background: "rgba(17,17,17,0.02)" }}>
                    <label style={{ fontFamily: '"Rethink Sans", sans-serif' }} className="text-[#444] text-base font-semibold leading-[140%]">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address"
                      className="bg-transparent border-none outline-none text-sm text-[#999] leading-[140%] h-6 w-full" style={{ fontFamily: '"Rethink Sans", sans-serif' }} />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col gap-2 w-full sm:flex-1 p-4 rounded-lg" style={{ background: "rgba(17,17,17,0.02)" }}>
                    <label style={{ fontFamily: '"Rethink Sans", sans-serif' }} className="text-[#444] text-base font-semibold leading-[140%]">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number"
                      className="bg-transparent border-none outline-none text-sm text-[#999] leading-[140%] h-6 w-full" style={{ fontFamily: '"Rethink Sans", sans-serif' }} />
                  </div>
                  <div className="flex flex-col gap-2 w-full sm:flex-1 p-4 rounded-lg" style={{ background: "rgba(17,17,17,0.02)" }}>
                    <label style={{ fontFamily: '"Rethink Sans", sans-serif' }} className="text-[#444] text-base font-semibold leading-[140%]">Service Needed</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      className="bg-transparent border-none outline-none text-sm text-[#999] leading-[140%] h-6 cursor-pointer w-full" style={{ fontFamily: '"Rethink Sans", sans-serif' }}>
                      <option value="" disabled>Select a Service</option>
                      {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full p-4 rounded-lg" style={{ background: "rgba(17,17,17,0.02)" }}>
                  <label style={{ fontFamily: '"Rethink Sans", sans-serif' }} className="text-[#444] text-base font-semibold leading-[140%]">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell Us about Your Specific Requests" rows={4}
                    className="bg-transparent border-none outline-none text-sm text-[#999] leading-[140%] resize-none w-full" style={{ fontFamily: '"Rethink Sans", sans-serif' }} />
                </div>
              </div>
            )}

            {!submitted && (
              <button onClick={handleSubmit} disabled={isLoading}
                className="group inline-flex items-center justify-center gap-3 rounded-3xl cursor-pointer border-none transition-all duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: "#08203C", padding: "8px 8px 8px 24px" }}>
                <span style={{ fontFamily: '"Rethink Sans", sans-serif' }} className="text-white text-sm sm:text-base font-semibold leading-[140%]">
                  {isLoading ? "Sending..." : "Get a Free Quote"}
                </span>
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="#08203C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}