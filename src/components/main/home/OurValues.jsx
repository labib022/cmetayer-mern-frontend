import { useGetHomePageQuery } from "../../../redux/features/cms/cmsApi";
import attentionIcon from "../../../assets/icons/value-attension.svg";
import reliableIcon from "../../../assets/icons/value-reliable.svg";
import safeIcon from "../../../assets/icons/value-safe.svg";
import customerIcon from "../../../assets/icons/value-customer.svg";

const fallbackValues = [
  { icon: attentionIcon, title: "Attention to Detail",    desc: "We clean thoroughly, focusing on the small details that make a big difference." },
  { icon: reliableIcon,  title: "Reliable Professionals", desc: "Our trained cleaners arrive on time and treat every home with care." },
  { icon: safeIcon,      title: "Safe & Eco-Friendly",    desc: "We use safe cleaning products that are gentle on your family and the environment." },
  { icon: customerIcon,  title: "Customer-First Service", desc: "Your comfort and satisfaction are always our top priority." },
];

const iconMap = {
  attention: attentionIcon,
  reliable:  reliableIcon,
  safe:      safeIcon,
  customer:  customerIcon,
};

export default function OurValues() {
  const { data, isLoading } = useGetHomePageQuery();

  // data.data.home["Our Values"][]
  const apiValues = data?.data?.home?.["Our Values"];

  const values = (() => {
    if (!apiValues?.length) return fallbackValues;
    return apiValues.map((item) => {
      const key = Object.keys(iconMap).find((k) => item.title?.toLowerCase().includes(k));
      return {
        icon:  iconMap[key] || attentionIcon,
        title: item.title,
        desc:  item.description,
      };
    });
  })();

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-16">
      <div className="max-w-300 mx-auto flex flex-col lg:flex-row gap-12 lg:gap-0">

        {/* LEFT */}
        <div className="w-full lg:w-[35%] flex flex-col gap-4 pr-0 lg:pr-12">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "#08203C" }} />
            <span className="text-sm font-medium" style={{ color: "#08203C", fontFamily: '"Rethink Sans", sans-serif' }}>
              Our Values
            </span>
          </div>
          <h2 className="font-extrabold leading-tight text-3xl sm:text-4xl lg:text-[40px]"
            style={{ color: "#08203C", fontFamily: '"Rethink Sans", sans-serif' }}>
            Why Choose <br />
            <span>EASY LIFT &amp; CLEAN</span>
          </h2>
          <p className="text-base leading-relaxed"
            style={{ color: "#7a849a", fontFamily: '"Rethink Sans", sans-serif' }}>
            Our values guide how we work, clean, and care for every home we serve.
          </p>
        </div>

        {/* RIGHT — 2x2 Grid */}
        <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2"
          style={{ borderRadius: "16px", overflow: "hidden" }}>
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-4 p-8 animate-pulse"
                  style={{ borderRight: i % 2 === 0 ? "1px dashed #dde1ec" : "none", borderBottom: i < 2 ? "1px dashed #dde1ec" : "none" }}>
                  <div className="w-12 h-12 rounded-full bg-gray-200" />
                  <div className="h-4 w-2/3 bg-gray-200 rounded" />
                  <div className="h-3 w-full bg-gray-100 rounded" />
                </div>
              ))
            : values.map((v, i) => (
                <div key={v.title} className="flex flex-col gap-4 p-8"
                  style={{ borderRight: i % 2 === 0 ? "1px dashed #dde1ec" : "none", borderBottom: i < 2 ? "1px dashed #dde1ec" : "none" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#f0f3f9" }}>
                    <img src={v.icon} alt={v.title} className="w-6 h-6 object-contain" />
                  </div>
                  <h3 className="font-bold text-lg" style={{ color: "#08203C", fontFamily: '"Rethink Sans", sans-serif' }}>
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#7a849a", fontFamily: '"Rethink Sans", sans-serif' }}>
                    {v.desc}
                  </p>
                </div>
              ))}
        </div>

      </div>
    </section>
  );
}