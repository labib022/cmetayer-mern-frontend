const VALUES = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#08203C" strokeWidth="1.6" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "Attention to Detail",
    desc: "We clean thoroughly, focusing on the small details that make a big difference.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#08203C" strokeWidth="1.6" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    title: "Reliable Professionals",
    desc: "Our trained cleaners arrive on time and treat every home with care.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#08203C" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M3 6l3 1 2-3 2 3 3-1-1 3h-8l-1-3z" />
        <path d="M3 10c0 6 4 10 9 12 5-2 9-6 9-12H3z" />
      </svg>
    ),
    title: "Safe & Eco-Friendly",
    desc: "We use safe cleaning products that are gentle on your family and the environment.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#08203C" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M3 18h18M3 6h18M3 12h18" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="12" r="2" />
        <circle cx="17" cy="6" r="2" />
      </svg>
    ),
    title: "Customer-First Service",
    desc: "Your comfort and satisfaction are always our top priority.",
  },
];

export default function OurValues() {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-0">

        {/* LEFT — Label + Title + Desc */}
        <div className="w-full lg:w-[35%] flex flex-col gap-4 pr-0 lg:pr-12">
          {/* Our Values label */}
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: "#08203C" }}
            />
            <span
              className="text-sm font-medium"
              style={{
                color: "#08203C",
                fontFamily: '"Rethink Sans", sans-serif',
              }}
            >
              Our Values
            </span>
          </div>

          <h2
            className="font-extrabold leading-tight text-3xl sm:text-4xl lg:text-[40px]"
            style={{
              color: "#08203C",
              fontFamily: '"Rethink Sans", sans-serif',
            }}
          >
            Why Choose{" "}
            <br />
            <span style={{ color: "#08203C" }}>EASY LIFT &amp; CLEAN</span>
          </h2>

          <p
            className="text-base leading-relaxed"
            style={{
              color: "#7a849a",
              fontFamily: '"Rethink Sans", sans-serif',
            }}
          >
            Our values guide how we work, clean, and care for every home we
            serve.
          </p>
        </div>

        {/* RIGHT — 2x2 Grid */}
        <div
          className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2"
          style={{ border: "1px dashed #dde1ec", borderRadius: "16px", overflow: "hidden" }}
        >
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className="flex flex-col gap-4 p-8"
              style={{
                borderRight: i % 2 === 0 ? "1px dashed #dde1ec" : "none",
                borderBottom: i < 2 ? "1px dashed #dde1ec" : "none",
              }}
            >
              {/* Icon circle */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#f0f3f9" }}
              >
                {v.icon}
              </div>

              <h3
                className="font-bold text-lg"
                style={{
                  color: "#08203C",
                  fontFamily: '"Rethink Sans", sans-serif',
                }}
              >
                {v.title}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#7a849a",
                  fontFamily: '"Rethink Sans", sans-serif',
                }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}