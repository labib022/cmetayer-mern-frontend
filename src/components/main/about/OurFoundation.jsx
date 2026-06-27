import { useState } from "react";
import aboutImg from "../../../assets/images/about-foundation.png";

const INFO_CARDS = [
  { label: "Based In", value: "Indonesia" },
  { label: "Founded", value: "2017" },
  { label: "Working Hours", value: "Monday – Saturday, 08.00 AM – 06.00 PM", full: true },
];

const RIGHT_CARDS = [
  {
    title: "Our Vision",
    desc: "To redefine home care through exceptional service and genuine care.",
  },
  {
    title: "Our Mission",
    desc: "To deliver consistent, high-quality cleaning services that improve our clients' daily lives while upholding environmental responsibility.",
  },
];

export default function OurFoundation() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="mxw px-4 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-30  rounded-2xl flex flex-col justify-center items-center gap-15">

      {/* 3 Column Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* ── COL 1 — Our Foundation ── */}
        <div className="flex flex-col justify-between gap-8 border border-gray-100 rounded-2xl p-6 sm:p-8 bg-white">
          <div className="flex flex-col gap-4">
            <h2
              className="text-[#0E1109] text-xl sm:text-2xl font-semibold leading-[130%] m-0"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Our Foundation
            </h2>
            <p
              className="text-[#677489] text-base font-normal leading-6 m-0"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              A mission-driven cleaning company focused on trust, reliability,
              and care. A mission-driven cleaning company focused on trust,
              reliability, and care.
            </p>
          </div>

          {/* Info Cards */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              {INFO_CARDS.slice(0, 2).map((card) => (
                <div
                  key={card.label}
                  className="flex flex-col justify-center items-start gap-2 flex-1 p-4 rounded-xl bg-white border border-gray-100"
                >
                  <span
                    className="text-[#677489] text-sm font-normal leading-6"
                    style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                  >
                    {card.label}
                  </span>
                  <span
                    className="text-[#0E1109] text-base font-semibold leading-[140%]"
                    style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                  >
                    {card.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center items-start gap-2 w-full p-4 rounded-xl bg-white border border-gray-100">
              <span
                className="text-[#677489] text-sm font-normal leading-6"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                {INFO_CARDS[2].label}
              </span>
              <span
                className="text-[#0E1109] text-base font-semibold leading-[140%]"
                style={{ fontFamily: '"Rethink Sans", sans-serif' }}
              >
                {INFO_CARDS[2].value}
              </span>
            </div>
          </div>
        </div>

        {/* ── COL 2 — Image ── */}
        <div
          className="rounded-2xl overflow-hidden min-h-80 md:min-h-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={aboutImg}
            alt="Our Foundation"
            className="w-full h-full object-cover object-center"
            style={{
              transition: "transform 700ms ease-in-out",
              transform: isHovered ? "scale(1.02)" : "scale(1)",
            }}
          />
        </div>

        {/* ── COL 3 — Vision + Mission ── */}
        <div className="flex flex-col gap-4">
          {RIGHT_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl border border-gray-100 bg-white flex-1"
            >
              <h3
                className="text-[#0E1109] text-lg sm:text-xl font-semibold leading-[130%] m-0"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                {card.title}
              </h3>
              <p
                className="text-[#677489] text-base font-normal leading-6 m-0"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}