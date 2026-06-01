import logo from "/navImg.png";

const QUICK_LINKS = ["About", "Services"];
const LEGAL_LINKS = ["Privacy Policy", "Terms of Service"];
const SOCIAL = ["Instagram", "LinkedIn", "X"];

export default function Footer() {
  return (
    <footer className="w-full px-2 pb-2 pt-14 bg-transparent">
      <div className="w-full bg-[#08203C] rounded-3xl flex flex-col gap-16 p-8 sm:p-10 lg:p-14">

        {/* ── TOP SECTION ── */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-8 px-0 sm:px-4 lg:px-6">

          {/* LEFT — Brand + Email */}
          <div className="flex flex-col gap-6 max-w-85">
            <div className="relative flex items-center gap-3">
              <h3
                className="text-white text-xl sm:text-2xl font-semibold leading-[140%]"
                style={{ fontFamily: '"Rethink Sans", sans-serif' }}
              >
                Stay Updated with
              </h3>
              <img src={logo} alt="Logo" className="h-14 w-34 object-contain" />
            </div>

            <p
              className="text-[#E0E0E0] text-base font-bold leading-[140%] m-0"
              style={{ fontFamily: '"Rethink Sans", sans-serif' }}
            >
              Get cleaning tips, special offers, and updates delivered to your inbox.
            </p>

            <div
              className="flex items-center justify-between w-full rounded-full"
              style={{ background: "rgba(255,255,255,0.16)", padding: "4px 4px 4px 24px" }}
            >
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent border-none outline-none text-white text-sm placeholder-white/50 flex-1"
                style={{ fontFamily: '"Rethink Sans", sans-serif' }}
              />
              <button className="flex items-center justify-center w-11 h-11 rounded-3xl bg-white shrink-0 hover:scale-105 transition-all duration-300 border-none cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L9 3M15 9L9 15" stroke="#08203C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT — Quick Links + Legal */}
          <div className="flex gap-12 sm:gap-16 lg:gap-20">
            <div className="flex flex-col gap-6 w-42">
              <h4
                className="text-white text-base font-semibold leading-[140%] m-0"
                style={{ fontFamily: '"Rethink Sans", sans-serif' }}
              >
                Quick Links
              </h4>
              <div className="flex flex-col gap-4">
                {QUICK_LINKS.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[#E0E0E0] text-sm no-underline hover:text-white transition-colors duration-200"
                    style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 w-42">
              <h4
                className="text-white text-base font-semibold leading-[140%] m-0"
                style={{ fontFamily: '"Rethink Sans", sans-serif' }}
              >
                Legal
              </h4>
              <div className="flex flex-col gap-4">
                {LEGAL_LINKS.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[#E0E0E0] text-sm no-underline hover:text-white transition-colors duration-200"
                    style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM WHITE BOX ── */}
        <div className="w-full bg-white rounded-2xl p-8 sm:p-10 lg:p-12 flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-12">

          {/* Our Location */}
          <div className="flex flex-col gap-2 flex-1 min-w-45">
            <p
              className="text-[#444] text-base font-bold leading-[140%] m-0"
              style={{ fontFamily: '"Rethink Sans", sans-serif' }}
            >
              Our Location
            </p>
            <p
              className="text-[#111] text-lg sm:text-xl font-medium leading-[140%] m-0"
              style={{ fontFamily: '"Rethink Sans", sans-serif', letterSpacing: "-0.78px" }}
            >
              120 King Street West, Suite 1400, Toronto, Ontario, Canada
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 flex-1 min-w-40">
            <p
              className="text-[#444] text-base font-bold leading-[140%] m-0"
              style={{ fontFamily: '"Rethink Sans", sans-serif' }}
            >
              Email
            </p>
            <a
              href="mailto:hello@cleanzy.ca"
              className="text-[#111] text-lg sm:text-xl font-medium leading-[140%] no-underline hover:opacity-70 transition-opacity"
              style={{ fontFamily: '"Rethink Sans", sans-serif', letterSpacing: "-0.78px" }}
            >
              hello@cleanzy.ca
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2 flex-1 min-w-40">
            <p
              className="text-[#444] text-base font-bold leading-[140%] m-0"
              style={{ fontFamily: '"Rethink Sans", sans-serif' }}
            >
              Phone
            </p>
            <a
              href="tel:+14165550198"
              className="text-[#111] text-lg sm:text-xl font-medium leading-[140%] no-underline hover:opacity-70 transition-opacity"
              style={{ fontFamily: '"Rethink Sans", sans-serif', letterSpacing: "-0.78px" }}
            >
              +1 (416) 555-0198
            </a>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-2 flex-1 min-w-40">
            <p
              className="text-[#444] text-base font-bold leading-[140%] m-0"
              style={{ fontFamily: '"Rethink Sans", sans-serif' }}
            >
              Social Media
            </p>
            <div className="flex flex-wrap gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="no-underline px-4 py-1.5 rounded-full border border-[#E0E0E0] text-[#111] text-sm font-medium hover:bg-[#08203C] hover:text-white hover:border-[#08203C] transition-all duration-300"
                  style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}