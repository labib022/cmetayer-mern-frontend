import { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "/navImg.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href) => location.pathname === href;

  return (
    <div className="w-full sticky top-0 py-6 z-50 bg-[#08203C]">
      <div className="max-w-385 mx-auto px-4 md:px-8">

        <nav className="relative flex h-14 items-center px-4 md:px-6 bg-[#08203C]">

          {/* LEFT — Logo */}
          <div className="flex items-center shrink-0">
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                className="h-12 md:h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* CENTER — Nav Links */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex items-center gap-1.5 no-underline transition-colors duration-200 text-sm lg:text-base leading-[140%] font-rethink ${
                  isActive(link.href)
                    ? "text-white font-semibold"
                    : "text-[#8899b8] font-normal"
                }`}
              >
                {isActive(link.href) && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                )}
                {link.label}
              </a>
            ))}
          </div>

          {/* RIGHT — Login + Contact Button + Hamburger */}
          <div className="flex items-center gap-3 ml-auto">

            {/* Login Button */}
            <a
              href="/login"
              className="font-rethink hidden md:inline-flex items-center px-8 py-3 rounded-3xl border  bg-white text-[#08203C] text-sm font-semibold leading-[140%] no-underline transition-all duration-300 ease-in-out hover:scale-105 shadow-md hover:shadow-xl shrink-0"
            >
              Login
            </a>

            {/* Contact Us Button */}
            <button className="group hidden md:inline-flex items-center rounded-3xl bg-white border-none cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 shadow-md hover:shadow-xl shrink-0 pl-5 pr-2 py-2">
              <span className="font-rethink text-[#08203C] text-sm font-semibold leading-[140%]">
                Contact Us
              </span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#08203C] text-white text-base shrink-0 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                →
              </span>
            </button>

            {/* Hamburger Mobile */}
            <button
              className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl px-4 py-4 bg-[#08203C] border border-white/10">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-1.5 no-underline transition-colors duration-200 py-2.5 px-3 rounded-xl text-sm leading-[140%] font-rethink ${
                    isActive(link.href)
                      ? "text-white font-semibold bg-white/10"
                      : "text-[#8899b8] font-normal hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive(link.href) && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  )}
                  {link.label}
                </a>
              ))}

              {/* Mobile Login */}
              <a
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="font-rethink w-full flex items-center justify-center rounded-2xl border border-white/30 text-white hover:bg-white/10 transition-all duration-200 mt-2 py-2.5 text-sm font-semibold no-underline"
              >
                Login
              </a>

              {/* Mobile Contact Us */}
              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="font-rethink w-full flex items-center justify-center rounded-2xl bg-white hover:opacity-90 transition-opacity mt-2 py-2.5 text-[#08203C] text-sm font-semibold no-underline"
              >
                Contact Us →
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}