import { useState, useEffect } from "react";
import { useGetCmsSectionQuery } from "../../../redux/features/cms/cmsApi";

import img1 from "../../../assets/images/service-img-1.png";
import img2 from "../../../assets/images/service-img-2.png";
import img3 from "../../../assets/images/service-img-3.png";
import img4 from "../../../assets/images/service-img-4.png";

const fallbackServices = [
  {
    title: "Moving & Packing",
    desc: "Stress-free local and long-distance moving with professional packing.",
    img: img1,
  },
  {
    title: "Home Cleaning",
    desc: "Deep cleans, move-in/out, and recurring with professional maid services.",
    img: img2,
  },
  {
    title: "Handyman & Repair",
    desc: "Plumbing, electrical, assembly, and general professional home repairs.",
    img: img3,
  },
  {
    title: "Laundry Service",
    desc: "Wash, dry, and fold with professional services delivered to your door.",
    img: img4,
  },
];

const fallbackImgs = [img1, img2, img3, img4];

function getVisibleCount() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

export default function OurServices() {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  const { data, isLoading, isError } = useGetCmsSectionQuery({
    page_name: "home",
    section_name: "services",
  });

  const services = (() => {
    if (isLoading || isError || !data?.data?.services) return fallbackServices;
    return data.data.services.map((item, i) => ({
      title: item.title,
      desc: item.description,
      img: item.image || fallbackImgs[i % fallbackImgs.length],
    }));
  })();

  const sectionTitle = data?.data?.title || "Comprehensive Home Services\nYou Can Count On";
  const sectionDesc =
    data?.data?.subtitle ||
    "Choose a service from the list below to get an instant quote or make a reservation immediately!";

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
      setStart(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // services length বদলালে start reset
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStart(0);
  }, [services.length]);

  const visible = services.slice(start, start + visibleCount);
  const maxStart = services.length - visibleCount;

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-300 mx-auto">

        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-10">

          {/* Left */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full inline-block"
                style={{ backgroundColor: "#08203C" }}
              />
              <span
                className="font-rethink text-sm font-medium"
                style={{ color: "#08203C" }}
              >
                Our Services
              </span>
            </div>
            <h2
              className="font-rethink font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight"
              style={{ color: "#08203C" }}
            >
              {sectionTitle.includes("\n")
                ? sectionTitle.split("\n").map((line, i) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))
                : sectionTitle}
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            <p
              className="font-rethink text-sm leading-relaxed max-w-85 lg:text-right"
              style={{ color: "#7a849a" }}
            >
              {sectionDesc}
            </p>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setStart(Math.max(0, start - 1))}
                disabled={start === 0}
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 border-none text-white hover:-translate-y-1 disabled:opacity-40"
                style={{ background: "#08203C" }}
              >
                ←
              </button>
              <button
                onClick={() => setStart(Math.min(maxStart, start + 1))}
                disabled={start >= maxStart}
                className="w-10 h-10 rounded-full flex items-center justify-center border-none cursor-pointer transition-all duration-200 text-white hover:-translate-y-1 disabled:opacity-40"
                style={{ backgroundColor: "#08203C" }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {isLoading
            ? Array.from({ length: visibleCount }).map((_, i) => (
                <div
                  key={i}
                  className="w-full rounded-2xl overflow-hidden animate-pulse bg-gray-200"
                  style={{ minHeight: "280px" }}
                />
              ))
            : visible.map((s) => (
                <div
                  key={s.title}
                  className="relative w-full rounded-2xl overflow-hidden cursor-pointer group"
                  style={{ minHeight: "280px" }}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ minHeight: "280px" }}
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(13,31,60,0.92) 0%, transparent 55%)",
                    }}
                  />

                  {/* Glassmorphism Text Card */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <div
                      style={{
                        display: "flex",
                        padding: "12px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "6px",
                        borderRadius: "8px",
                        background: "rgba(8, 32, 60, 0.40)",
                        backdropFilter: "blur(50.75px)",
                        WebkitBackdropFilter: "blur(50.75px)",
                      }}
                    >
                      <h3
                        className="font-rethink font-medium leading-[140%] tracking-[-0.936px] m-0 text-base sm:text-lg lg:text-[24px]"
                        style={{ color: "#FFF" }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className="font-rethink font-normal leading-[140%] m-0 text-[11px] sm:text-[12px]"
                        style={{ color: "#ECEEF0" }}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>

      </div>
    </section>
  );
}