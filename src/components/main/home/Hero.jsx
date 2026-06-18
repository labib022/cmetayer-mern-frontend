import { useEffect, useRef, useState } from "react";
import heroImg1 from "../../../assets/images/hero-img-1.png";
import heroImg2 from "../../../assets/images/hero-img-2.png";
import heroImg3 from "../../../assets/images/hero-img-3.png";
import heroImg4 from "../../../assets/images/hero-img-4.png";

export default function Hero() {
  const services = [
    {
      title: "Moving",
      img: heroImg1,
      desc: "Full-service moving, packing, and heavy lifting for homes and offices",
      iconBg: "#f0f4ff",
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="#08203C"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <path d="M16 8h4l3 5v4h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      title: "Packing",
      img: heroImg2,
      desc: "Professional packing with quality materials to keep your items safe",
      iconBg: "#edfaf3",
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="#0a6640"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <line x1="12" y1="12" x2="12" y2="17" />
          <line x1="9.5" y1="14.5" x2="14.5" y2="14.5" />
        </svg>
      ),
    },
    {
      title: "Storage",
      img: heroImg3,
      desc: "Secure short and long-term storage solutions for any size load",
      iconBg: "#f5f0ff",
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="#7c3aed"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="4" width="20" height="5" rx="1" />
          <rect x="2" y="12" width="20" height="5" rx="1" />
          <line x1="6" y1="6.5" x2="6.01" y2="6.5" />
          <line x1="6" y1="14.5" x2="6.01" y2="14.5" />
        </svg>
      ),
    },
    {
      title: "Office Relocation",
      img: heroImg4,
      desc: "Hassle-free office moves with minimal downtime for your business",
      iconBg: "#fff7ed",
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="#b45309"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
    },
  ];
  const FADE_DURATION = 400;
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState(0); 
  const [isFading, setIsFading] = useState(false);
  const timerRef = useRef(null);

  const goTo = (next) => {
    if (isFading || next === current) return;

    // Step 1: fade out শুরু
    setIsFading(true);

    setTimeout(() => {
      // Step 2: content swap 
      setDisplayed(next);
      setCurrent(next);

      // Step 3: fade in
      setIsFading(false);
    }, FADE_DURATION);
  };

  // Auto cycle
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % services.length;
        goTo(next);
        return prev;
      });
    }, 3500);
    return () => clearInterval(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFading]);

  const active = services[displayed];

  return (
    <section
      className="mxw lg:px-16 pt-10 pb-16"
      style={{ backgroundColor: "#08203C" }}
    >
      {/* 2 column layout */}
      <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-0">
        {/* LEFT — Text */}
        <div className="flex flex-col justify-center gap-6 w-full lg:w-1/2 pr-0 lg:pr-12">
          <h1
            className="text-white font-extrabold leading-[1.1] text-5xl sm:text-6xl lg:text-[64px]"
            style={{ fontFamily: '"Rethink Sans", sans-serif' }}
          >
            One Call.One <br /> Company.
          </h1>
          <p
            className="text-[#8899b8] text-base leading-relaxed max-w-105"
            style={{ fontFamily: '"Rethink Sans", sans-serif' }}
          >
            Book trusted moving, cleaning, repair, and laundry services
            instantly. We manage your home so you don't have to.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-10 mt-38">
            {[
              ["100M", "Happy customers"],
              ["99%", "Client happiness"],
              ["100+", "Team members"],
            ].map(([num, label], i) => (
              <div key={label} className="flex items-center gap-10">
                <div>
                  <p
                    className="text-white font-extrabold text-4xl sm:text-5xl leading-tight"
                    style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                  >
                    {num}
                  </p>
                  <p
                    className="text-[#8899b8] text-sm mt-1"
                    style={{ fontFamily: '"Rethink Sans", sans-serif' }}
                  >
                    {label}
                  </p>
                </div>
                {i < 2 && (
                  <div
                    className="h-12 w-px hidden sm:block"
                    style={{ backgroundColor: "#1e3a5f" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Image full height */}
        <div className="relative w-3/4 lg:w-1/2 min-h-100 lg:min-h-full">
          {/* Image fade */}
          <img
            src={active.img}
            alt="Moving team"
            className="w-full h-full object-cover rounded-2xl"
            style={{
              minHeight: "400px",
              opacity: isFading ? 0 : 1,
              transition: `opacity ${FADE_DURATION}ms ease`,
            }}
          />

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-4 flex gap-1.5 items-center">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  width: i === current ? "30px" : "10px",
                  background:
                    i === current ? "white" : "rgba(255,255,255,0.45)",
                }}
              />
            ))}
          </div>

          {/* Floating Badge */}
          <div
            className="absolute bottom-4 right-4 bg-white rounded-2xl flex items-center gap-3 p-3 shadow-xl"
            style={{ maxWidth: "220px" }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{
                backgroundColor: active.iconBg,
                transition: `background ${FADE_DURATION}ms ease`,
              }}
            >
              {active.icon}
            </div>

            <div
              style={{
                opacity: isFading ? 0 : 1,
                transform: isFading ? "translateY(4px)" : "translateY(0px)",
                transition: `opacity ${FADE_DURATION}ms ease, transform ${FADE_DURATION}ms ease`,
              }}
            >
              <p className="font-bold text-sm text-[#08203C]">{active.title}</p>
              <p className="text-[11px] text-[#7a849a] leading-snug">
                {active.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
