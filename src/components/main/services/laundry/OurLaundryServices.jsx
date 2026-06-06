import { useState } from "react";
import img1 from "../../../../assets/images/service-img-1.png";
import img2 from "../../../../assets/images/service-img-2.png";
import img3 from "../../../../assets/images/service-img-3.png";

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
    title: "Handyman & Repair",
    desc: "Plumbing, electrical, assembly, and general professional home repairs.",
    img: img3,
  },
];

export default function OurServices() {
  const [start] = useState(0);
  const visible = SERVICES.slice(start, start + 3);

  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-300 mx-auto">

        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8 sm:mb-10">

          {/* Left */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full inline-block bg-[#08203C]" />
              <span className="font-rethink text-sm font-medium text-[#08203C]">
                Our Services
              </span>
            </div>
            <h2 className="font-rethink font-extrabold text-3xl sm:text-4xl leading-tight text-[#08203C]">
              Comprehensive Home Services
              <br />
              You Can Count On
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="font-rethink text-sm leading-relaxed max-w-85 lg:text-right text-[#7a849a] pt-0 sm:pt-6 lg:pt-12">
              Choose a service from the list below to get an instant quote or
              make a reservation immediately!
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {visible.map((s) => (
            <div
              key={s.title}
              className="relative rounded-2xl overflow-hidden cursor-pointer group min-h-70 sm:min-h-80"
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 min-h-70 sm:min-h-80"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(0deg, rgba(13,31,60,0.92) 0%, transparent 55%)",
                }}
              />

              {/* Glassmorphism Text Card */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div
                  className="flex flex-col items-start gap-2 p-4 rounded-lg"
                  style={{
                    background: "rgba(8, 32, 60, 0.40)",
                    backdropFilter: "blur(50.75px)",
                    WebkitBackdropFilter: "blur(50.75px)",
                  }}
                >
                  <h3 className="font-rethink font-medium leading-[140%] tracking-[-0.936px] m-0 text-white text-xl sm:text-2xl">
                    {s.title}
                  </h3>
                  <p className="font-rethink font-normal leading-[140%] m-0 text-[#ECEEF0] text-xs">
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