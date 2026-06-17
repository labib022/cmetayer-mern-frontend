import logo from "/navImg.svg";
import { Link } from "react-router-dom";

const QUICK_LINKS = [
  { label: "About", to: "/about" },
  { label: "Services", to: "services/moving" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
];

const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
];

export default function Footer() {
  return (
    <footer className="w-full px-2 pb-2 pt-14 bg-transparent">
      <div className="w-full bg-[#08203C] rounded-3xl flex flex-col gap-16">
        {/* ── TOP SECTION ── */}
        <div className="p-5 sm:p-10 lg:p-12">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-8 px-0 sm:px-4 lg:px-6">
            {/* LEFT — Brand + Email */}
            <div className="flex flex-col gap-6">
              <div className="relative flex items-center gap-3">
                <h3
                  className="text-white text-xl sm:text-2xl font-semibold leading-[140%]"
                  style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                >
                  Stay Updated with
                </h3>
                <Link
                  to="/"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-34 md:w-55 object-contain cursor-pointer"
                  />
                </Link>
              </div>

              <p
                className="text-[#E0E0E0] text-base font-bold leading-[140%] m-0"
                style={{ fontFamily: '"Rethink Sans", sans-serif' }}
              >
                Get cleaning tips, special offers, and updates delivered to your inbox.
              </p>

              <div
                className="flex items-center justify-between w-full rounded-full"
                style={{
                  background: "rgba(255,255,255,0.16)",
                  padding: "4px 4px 4px 24px",
                }}
              >
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-transparent border-none outline-none text-white text-sm placeholder-white/50 flex-1"
                  style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                />
                <button className="flex items-center justify-center w-11 h-11 rounded-3xl bg-white shrink-0 hover:scale-105 transition-all duration-300 border-none cursor-pointer">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M3 9H15M15 9L9 3M15 9L9 15"
                      stroke="#08203C"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* RIGHT — Quick Links + Legal */}
            <div className="flex gap-12 sm:gap-16 lg:gap-20">
              {/* Quick Links */}
              <div className="flex flex-col gap-6 w-42">
                <h4
                  className="text-white text-base font-semibold leading-[140%] m-0"
                  style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                >
                  Quick Links
                </h4>
                <div className="flex flex-col gap-4">
                  {QUICK_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="text-[#E0E0E0] text-sm no-underline hover:text-white transition-colors duration-200"
                      style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Legal */}
              <div className="flex flex-col gap-6 w-42">
                <h4
                  className="text-white text-base font-semibold leading-[140%] m-0"
                  style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                >
                  Legal
                </h4>
                <div className="flex flex-col gap-4">
                  {LEGAL_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="text-[#E0E0E0] text-sm no-underline hover:text-white transition-colors duration-200"
                      style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM WHITE BOX ── */}
        <div className="p-2">
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

            {/* ✅ Social Media — dynamic, real links */}
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
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="no-underline px-4 py-1.5 rounded-full border border-[#E0E0E0] text-[#111] text-sm font-medium hover:bg-[#08203C] hover:text-white hover:border-[#08203C] transition-all duration-300"
                    style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}