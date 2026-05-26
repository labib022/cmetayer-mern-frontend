import heroImg from "../../../assets/images/hero-img.png";

export default function Hero() {
  return (
    <section
      className="mxw lg:px-16 pt-10 pb-16"
      style={{ backgroundColor: "#08203C" }}
    >
      {/* 2 column layout */}
      <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-0">

        {/* LEFT — Text */}
        <div
          className="flex flex-col justify-center gap-6 w-full lg:w-1/2 pr-0 lg:pr-12"
        >
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
        <div className="relative w-w-3/4  lg:w-1/2 min-h-100 lg:min-h-full">
          <img
            src={heroImg}
            alt="Moving team"
            className="w-full h-full object-cover rounded-2xl"
            style={{ minHeight: "400px" }}
          />

          {/* Floating Badge */}
          <div
            className="absolute bottom-4 right-4 bg-white rounded-2xl flex items-center gap-3 p-3 shadow-xl"
            style={{ maxWidth: "220px" }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: "#f0f4ff" }}
            >
              <svg width="20" height="20" fill="none" stroke="#08203C" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <path d="M16 8h4l3 5v4h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm text-[#08203C]">Moving</p>
              <p className="text-[11px] text-[#7a849a] leading-snug">
                Full-service moving, packing, and heavy lifting for homes and offices
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}