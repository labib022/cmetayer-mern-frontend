import { useState, useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "/navImg.svg";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Moving Services", href: "/services/moving" },
      { label: "Cleaning Services", href: "/services/cleaning" },
      { label: "Laundry Services", href: "/services/laundry" },
      { label: "Home Repair", href: "/services/repair" },
    ],
  },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
const [scrolled, setScrolled] = useState(false);
  const isActive = (href) =>
    location.pathname === href || location.pathname.startsWith(href + "/");

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 10);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
   <div
  className={`sticky top-0 py-4 z-50 bg-[#08203C] transition-all duration-300 ${
    scrolled ? "" : "mt-2 mx-2 rounded-t-3xl"
  }`}
>
      <div className="mxw mx-2">
        <nav className="relative flex h-14 items-center px-4 md:px-6 bg-[#08203C]">
          {/* LEFT — Logo */}
          <div className="flex items-center shrink-0">
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                className="h-12 md:h-24 w-auto object-contain"
              />
            </a>
          </div>

          {/* CENTER — Nav Links */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                // Services with dropdown
                <div key={link.label} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-1.5 no-underline transition-colors duration-200 text-sm lg:text-base leading-[140%] font-rethink bg-transparent border-none cursor-pointer ${
                      isActive(link.href)
                        ? "text-white font-semibold"
                        : "text-[#8899b8] font-normal"
                    }`}
                  >
                    {isActive(link.href) && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    )}
                    {link.label}
                    <span
                      className="transition-transform duration-200"
                      style={{
                        display: "inline-block",
                        transform: dropdownOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        fontSize: "10px",
                        marginLeft: "2px",
                      }}
                    >
                      ▾
                    </span>
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-xl overflow-hidden"
                      style={{ minWidth: "180px", zIndex: 100 }}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className={`block px-5 py-3 font-rethink text-sm no-underline transition-colors duration-150 ${
                            location.pathname === item.href
                              ? "bg-[#08203C] text-white font-semibold"
                              : "text-[#0B1714] hover:bg-[#f5f5f5]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                // Normal link
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
              ),
            )}
          </div>

          {/* RIGHT — Login + Contact Button + Hamburger */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Login Button */}
            <a
              href="/login"
              className="font-rethink hidden md:inline-flex items-center px-7 py-3 rounded-3xl border bg-white text-[#08203C] text-sm font-semibold leading-[140%] no-underline transition-all duration-300 ease-in-out hover:scale-105 shadow-md hover:shadow-xl shrink-0"
            >
              Login
            </a>

            {/* Contact Us Button */}
            <Link
              to="/contact"
              className="group hidden md:inline-flex items-center rounded-3xl bg-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 shadow-md hover:shadow-xl shrink-0 pl-5 pr-2 py-2"
            >
              <span className="font-rethink text-[#08203C] text-sm font-semibold leading-[140%]">
                Contact Us
              </span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#08203C] text-white text-base shrink-0 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                →
              </span>
            </Link>

            {/* Hamburger Mobile */}
            <button
              className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl px-4 py-4 bg-[#08203C] border border-white/10">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`w-full flex items-center justify-between no-underline transition-colors duration-200 py-2.5 px-3 rounded-xl text-sm leading-[140%] font-rethink bg-transparent border-none cursor-pointer ${
                        isActive(link.href)
                          ? "text-white font-semibold bg-white/10"
                          : "text-[#8899b8] font-normal hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {isActive(link.href) && (
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                        )}
                        {link.label}
                      </span>
                      <span
                        style={{
                          transform: mobileServicesOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.2s",
                          fontSize: "10px",
                        }}
                      >
                        ▾
                      </span>
                    </button>

                    {/* Mobile Dropdown */}
                    {mobileServicesOpen && (
                      <div className="ml-4 mt-1 flex flex-col gap-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className={`block py-2 px-3 rounded-xl font-rethink text-sm no-underline transition-colors duration-150 ${
                              location.pathname === item.href
                                ? "text-white font-semibold bg-white/10"
                                : "text-[#8899b8] hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
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
                ),
              )}

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
