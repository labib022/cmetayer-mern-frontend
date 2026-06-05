import { useState } from "react";
import faq1 from "../../../assets/images/faq-image-1.png";
import faq2 from "../../../assets/images/hero-img-1.png";
import faq3 from "../../../assets/images/service-img-2.png";

const FAQS = [
  {
    question: "What makes Easy Lift & Clean different from other service companies?",
    answer: 'We operate on a "One Call. One Company." philosophy. Instead of juggling multiple contractors for different needs, we provide a centralized platform where you can book moving, cleaning, laundry, and home repair services all under one trusted roof.',
  },
  {
    question: "Are your service professionals vetted and insured?",
    answer: "Yes, all our professionals go through a thorough background check and are fully insured. We only work with trusted, experienced service providers.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No hidden fees. The price you see when booking is the price you pay. We believe in full transparency with our customers.",
  },
  {
    question: "Can I set up a recurring schedule for cleaning or laundry?",
    answer: "Absolutely! You can set up weekly, bi-weekly, or monthly recurring schedules for cleaning and laundry services through your account dashboard.",
  },
  {
    question: "What kind of home repairs do you handle?",
    answer: "We handle a wide range of home repairs including plumbing, electrical, carpentry, painting, appliance installation, and general maintenance tasks.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full max-w-360 mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 bg-white flex flex-col gap-10 sm:gap-12 lg:gap-16">

      {/* ── Top Header ── */}
      <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#08203C]" />
            <span
              style={{ fontFamily: '"Rethink Sans", sans-serif' }}
              className="text-[#08203C] text-sm font-medium"
            >
              FAQs
            </span>
          </div>
          <h2
            style={{ fontFamily: '"Rethink Sans", sans-serif', letterSpacing: "-1.56px" }}
            className="text-[#111] text-3xl sm:text-4xl xl:text-[40px] font-medium leading-[120%] m-0"
          >
            Need Help Before Booking?
          </h2>
        </div>

        <p
          style={{ fontFamily: '"Rethink Sans", sans-serif' }}
          className="text-[#555] text-sm sm:text-base leading-relaxed lg:max-w-100 lg:mt-9 lg:shrink-0"
        >
          Find helpful answers to common questions about scheduling, services,
          and our cleaning team.
        </p>
      </div>

      {/* ── Two Column Body ── */}
      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-16">

        {/* LEFT — FAQ List */}
        <div className="flex-1 flex flex-col">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl"
              style={{
                backgroundColor: openIndex === i ? "rgba(8, 32, 60, 0.04)" : "transparent",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between text-left py-5 sm:py-6 px-4 border-none cursor-pointer group"
              >
                <span
                  style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                  className={`text-sm sm:text-base font-medium leading-[150%] pr-4 transition-colors duration-200 ${
                    openIndex === i ? "text-[#08203C]" : "text-[#111]"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className="shrink-0 transition-transform duration-300"
                  style={{
                    display: "inline-flex",
                    transform: openIndex === i ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M5 10H15M15 10L10 5M15 10L10 15"
                      stroke={openIndex === i ? "#08203C" : "#111111"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT — Answer + Images */}
        <div className="w-full lg:w-115 xl:w-125 shrink-0 flex flex-col gap-6">

          {/* Answer Box */}
          {openIndex !== null ? (
            <div className="bg-[#FAFAFA] rounded-2xl p-5 sm:p-6">
              <span
                style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                className="inline-block text-xs font-semibold text-[#08203C] bg-gray-100 px-3 py-1 rounded-full mb-4"
              >
                Answer
              </span>
              <p
                style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                className="text-[#333] text-sm sm:text-[15px] leading-relaxed m-0"
              >
                {FAQS[openIndex].answer}
              </p>
            </div>
          ) : (
            <div className="border border-gray-100 rounded-2xl p-5 sm:p-6 bg-gray-50">
              <p
                style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                className="text-gray-400 text-sm text-center"
              >
                Select a question to see the answer.
              </p>
            </div>
          )}

          {/* Images */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 h-40 sm:h-50 lg:h-55">
            <div className="rounded-xl overflow-hidden">
              <img src={faq1} alt="service 1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src={faq2} alt="service 2" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src={faq3} alt="service 3" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}