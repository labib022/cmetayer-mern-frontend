import { useState } from "react";
import img1 from "../../../../assets/images/service-img-1.png";
import img2 from "../../../../assets/images/service-img-2.png";
import img4 from "../../../../assets/images/service-img-4.png";

const SERVICES = [
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
    title: "Laundry Service",
    desc: "Wash, dry, and fold with professional services delivered to your door.",
    img: img4,
  },
];

export default function OurServices() {
  const [start] = useState(0);
  const visible = SERVICES.slice(start, start + 3);

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-16">
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
              className="font-rethink font-extrabold text-3xl sm:text-4xl leading-tight"
              style={{ color: "#08203C" }}
            >
              You May Also Like
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            <p
              className="font-rethink text-sm leading-relaxed max-w-85 lg:text-right"
              style={{ color: "#7a849a", paddingTop: "48px" }}
            >
              Choose a service from the list below to get an instant quote or
              make a reservation immediately!
            </p>

            {/* Arrows */}
            <div className="flex items-center gap-3"></div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="flex flex-wrap lg:flex-nowrap gap-5">
          {visible.map((s) => (
            <div
              key={s.title}
              className="relative flex-1 min-w-70 sm:min-w-0 rounded-2xl overflow-hidden cursor-pointer group"
              style={{ minHeight: "320px" }}
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ minHeight: "320px" }}
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
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div
                  style={{
                    display: "flex",
                    padding: "16px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "8px",
                    borderRadius: "8px",
                    background: "rgba(8, 32, 60, 0.40)",
                    backdropFilter: "blur(50.75px)",
                    WebkitBackdropFilter: "blur(50.75px)",
                  }}
                >
                  {/* Title */}
                  <h3
                    className="font-rethink font-medium leading-[140%] tracking-[-0.936px] m-0"
                    style={{ color: "#FFF", fontSize: "24px" }}
                  >
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="font-rethink font-normal leading-[140%] m-0"
                    style={{ color: "#ECEEF0", fontSize: "12px" }}
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
