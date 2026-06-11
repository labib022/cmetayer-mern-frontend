const SERVICES_LIST = [
  "Moving & Packing",
  "Home Cleaning",
  "Handyman & Repair",
  "Laundry Service",
];

export default function GetAQuote() {
  return (
    <section className="w-full max-w-360 mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 bg-white">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 xl:gap-24">
        {/* ── LEFT ── */}
        <div className="flex flex-col items-start gap-6 flex-1">
          {/* Badge */}
          <div className="flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#08203C]" />
            <span
              style={{ fontFamily: '"Rethink Sans", sans-serif' }}
              className="text-[#08203C] text-sm font-medium"
            >
              Get a Quote
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: '"Rethink Sans", sans-serif',
              letterSpacing: "-1.248px",
            }}
            className="text-[#111] text-3xl sm:text-[32px] font-medium leading-[130%] m-0 max-w-120"
          >
            Looking for Professional Home Management Services?
          </h2>

          {/* Description */}
          <p
            style={{ fontFamily: '"Rethink Sans", sans-serif' }}
            className="text-[#656565] text-base sm:text-[18px] font-normal leading-[140%] m-0 max-w-120"
          >
            Request a free quote today and let our team create a cleaning plan
            tailored to your home or property needs.
          </p>
        </div>

        {/* ── RIGHT — Form Box with rotated bg ── */}
        <div className="relative w-full lg:w-160 shrink-0">
          {/* Rotated background layer */}
          <div
            className="absolute inset-0 rounded-3xl hidden sm:block"
            style={{
              background: "#ECEEF0",
              borderRadius: "24px",
              transform: "rotate(4deg)",
              zIndex: 0,
            }}
          />

          {/* Actual Form Card */}
          <div
            className="relative flex flex-col justify-center items-start gap-6 p-5 sm:p-8 rounded-3xl bg-white"
            style={{
              boxShadow: "0 8px 24px 0 rgba(3, 62, 72, 0.08)",
              borderRadius: "24px",
              zIndex: 1,
            }}
          >
            {/* Sub heading */}
            <p
              style={{ fontFamily: '"Rethink Sans", sans-serif' }}
              className="text-[#444] text-base sm:text-[18px] font-normal leading-[140%] m-0"
            >
              Tell us a bit about your home, and we'll guide you to the right
              cleaning solution.
            </p>

            {/* Form Fields */}
            <div className="w-full flex flex-col gap-4">
              {/* Row 1 — Name + Email */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* ✅ mobile-এ full width, sm+ এ flex-1 */}
                <div
                  className="flex flex-col gap-2 w-full sm:flex-1 p-4 rounded-lg"
                  style={{ background: "rgba(17,17,17,0.02)" }}
                >
                  <label
                    style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                    className="text-[#444] text-base font-semibold leading-[140%]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-transparent border-none outline-none text-sm text-[#999] leading-[140%] h-6 w-full"
                    style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                  />
                </div>
                <div
                  className="flex flex-col gap-2 w-full sm:flex-1 p-4 rounded-lg"
                  style={{ background: "rgba(17,17,17,0.02)" }}
                >
                  <label
                    style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                    className="text-[#444] text-base font-semibold leading-[140%]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-transparent border-none outline-none text-sm text-[#999] leading-[140%] h-6 w-full"
                    style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                  />
                </div>
              </div>

              {/* Row 2 — Phone + Service */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div
                  className="flex flex-col gap-2 w-full sm:flex-1 p-4 rounded-lg"
                  style={{ background: "rgba(17,17,17,0.02)" }}
                >
                  <label
                    style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                    className="text-[#444] text-base font-semibold leading-[140%]"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-transparent border-none outline-none text-sm text-[#999] leading-[140%] h-6 w-full"
                    style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                  />
                </div>
                <div
                  className="flex flex-col gap-2 w-full sm:flex-1 p-4 rounded-lg"
                  style={{ background: "rgba(17,17,17,0.02)" }}
                >
                  <label
                    style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                    className="text-[#444] text-base font-semibold leading-[140%]"
                  >
                    Service Needed
                  </label>
                  <select
                    className="bg-transparent border-none outline-none text-sm text-[#999] leading-[140%] h-6 cursor-pointer w-full"
                    style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a Service
                    </option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3 — Message */}
              <div
                className="flex flex-col gap-2 w-full p-4 rounded-lg"
                style={{ background: "rgba(17,17,17,0.02)" }}
              >
                <label
                  style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                  className="text-[#444] text-base font-semibold leading-[140%]"
                >
                  Message
                </label>
                <textarea
                  placeholder="Tell Us about Your Specific Requests"
                  rows={4}
                  className="bg-transparent border-none outline-none text-sm text-[#999] leading-[140%] resize-none w-full"
                  style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="group inline-flex items-center justify-center gap-3 rounded-3xl cursor-pointer border-none transition-all duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: "#08203C",
                padding: "8px 8px 8px 24px",
              }}
            >
              <span
                style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                className="text-white text-sm sm:text-base font-semibold leading-[140%]"
              >
                Get a Free Quote
              </span>
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path
                    d="M3 8H13M13 8L8 3M13 8L8 13"
                    stroke="#08203C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}