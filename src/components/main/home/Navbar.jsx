import { useState } from "react";
import logo from "/navImg.png";

const NAV_LINKS = ["Home", "About", "Services"];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full pt-4 md:pt-6">
      <nav
        className="relative flex h-auto md:h-[64px] items-center px-4 md:px-6 py-3 md:py-0"
        style={{
          backgroundColor: "#08203C",
          borderRadius: "9990px",
        }}
      >
        {/* LEFT — Logo */}
        <div className="flex items-center px-20 flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-[48px] md:h-[64px] w-auto object-contain"
          />
        </div>

        {/* CENTER — Nav Links */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(i);
              }}
              className="flex items-center gap-1.5 no-underline transition-colors duration-200 text-sm lg:text-base"
              style={{
                color: activeTab === i ? "#FFF" : "#8899b8",
                fontFamily: '"Rethink Sans", sans-serif',
                fontWeight: activeTab === i ? 600 : 400,
                lineHeight: "140%",
              }}
            >
              {activeTab === i && (
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white" />
              )}
              {link}
            </a>
          ))}
        </div>

        {/* RIGHT — Contact Button + Hamburger */}
        <div className="flex items-center gap-3 ml-auto">
          <button
            className="hidden md:flex items-center rounded-3xl bg-white border-none cursor-pointer hover:opacity-90 transition-opacity shrink-0"
            style={{ padding: "8px 8px 8px 20px" }}
          >
            <span
              style={{
                color: "#08203C",
                fontFamily: '"Rethink Sans", sans-serif',
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "140%",
              }}
            >
              Contact Us
            </span>
            <span
              className="flex items-center justify-center w-8 h-8 rounded-full text-white text-base shrink-0 ml-2"
              style={{ backgroundColor: "#08203C" }}
            >
              →
            </span>
          </button>

          {/* Hamburger Mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="block w-6 h-0.5" style={{ backgroundColor: "#FFF" }} />
            <span className="block w-6 h-0.5" style={{ backgroundColor: "#FFF" }} />
            <span className="block w-6 h-0.5" style={{ backgroundColor: "#FFF" }} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div
          className="md:hidden mt-2 rounded-2xl px-4 py-4"
          style={{ backgroundColor: "#08203C" }}
        >
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(i);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-1.5 no-underline transition-colors duration-200 py-2"
                style={{
                  color: activeTab === i ? "#FFF" : "#8899b8",
                  fontFamily: '"Rethink Sans", sans-serif',
                  fontSize: "14px",
                  fontWeight: activeTab === i ? 600 : 400,
                  lineHeight: "140%",
                }}
              >
                {activeTab === i && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white" />
                )}
                {link}
              </a>
            ))}
            <a
              href="/contact"
              className="w-full flex items-center justify-center rounded-2xl bg-white border-none cursor-pointer hover:opacity-90 transition-opacity mt-3 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span
                style={{
                  color: "#08203C",
                  fontFamily: '"Rethink Sans", sans-serif',
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                Contact Us →
              </span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}