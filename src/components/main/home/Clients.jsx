import { useGetHomePageQuery } from "../../../redux/features/cms/cmsApi";
import clientImg1 from "../../../assets/images/client-img-1.png";
import clientImg2 from "../../../assets/images/client-img-2.png";

const fallbackCards = [
  { type: "person", img: clientImg1 },
  { type: "stat-dark",  logo: "△", company: "Greenview Apartment", stat: "85+",  label: "Move-Out Cleans Completed", desc: "Fast, detailed turnover cleaning for rental unit transitions." },
  { type: "person", img: clientImg2 },
  { type: "stat-light", logo: "⬡", company: "UrbanStay Suites",    stat: "200+", label: "Guest Turnovers",           desc: "Reliable Airbnb cleaning with consistent finishing." },
];
const fallbackImgs = [clientImg1, clientImg2];

const hoverOn  = (e) => { e.currentTarget.style.transform = "rotate(6deg) translateY(-10px)"; e.currentTarget.style.boxShadow = "12px 8px 0 0 #ECEEF0"; };
const hoverOff = (e) => { e.currentTarget.style.transform = "rotate(0deg) translateY(0)";     e.currentTarget.style.boxShadow = "none"; };

const cardSize = { width: "clamp(220px, 28vw, 300px)", height: "clamp(260px, 32vw, 350px)" };

const PersonCard = ({ card }) => (
  <div className="shrink-0 cursor-pointer" onMouseEnter={hoverOn} onMouseLeave={hoverOff}
    style={{ ...cardSize, borderRadius: "16px", background: `url(${card.img}) lightgray center / cover no-repeat`, transition: "transform 0.3s ease, box-shadow 0.3s ease" }} />
);

const StatDarkCard = ({ card }) => (
  <div className="shrink-0 cursor-pointer" onMouseEnter={hoverOn} onMouseLeave={hoverOff}
    style={{ ...cardSize, padding: "20px", borderRadius: "24px", background: "#08203C", boxShadow: "7px 3px 0 0 #ECEEF0", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <span style={{ color: "#fff", fontFamily: '"Rethink Sans", sans-serif', fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 700 }}>{card.logo}</span>
      <span style={{ color: "rgba(255,255,255,0.75)", fontFamily: '"Rethink Sans", sans-serif', fontSize: "clamp(12px, 1.2vw, 14px)", fontWeight: 500 }}>{card.company}</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <p style={{ color: "#fff", fontFamily: '"Rethink Sans", sans-serif', fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, lineHeight: "1", margin: 0 }}>{card.stat}</p>
      <p style={{ color: "#fff", fontFamily: '"Rethink Sans", sans-serif', fontSize: "clamp(13px, 1.4vw, 16px)", fontWeight: 700, margin: 0 }}>{card.label}</p>
      <p style={{ color: "rgba(255,255,255,0.7)", fontFamily: '"Rethink Sans", sans-serif', fontSize: "clamp(11px, 1.2vw, 14px)", margin: 0, lineHeight: "1.5" }}>{card.desc}</p>
    </div>
  </div>
);

const StatLightCard = ({ card }) => (
  <div className="shrink-0 cursor-pointer" onMouseEnter={hoverOn} onMouseLeave={hoverOff}
    style={{ ...cardSize, padding: "20px", borderRadius: "24px", background: "rgba(8, 32, 60, 0.08)", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <span style={{ color: "#08203C", fontFamily: '"Rethink Sans", sans-serif', fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 700 }}>{card.logo}</span>
      <span style={{ color: "#08203C", fontFamily: '"Rethink Sans", sans-serif', fontSize: "clamp(12px, 1.2vw, 14px)", fontWeight: 500 }}>{card.company}</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <p style={{ color: "#08203C", fontFamily: '"Rethink Sans", sans-serif', fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, lineHeight: "1", margin: 0 }}>{card.stat}</p>
      <p style={{ color: "#08203C", fontFamily: '"Rethink Sans", sans-serif', fontSize: "clamp(13px, 1.4vw, 16px)", fontWeight: 700, margin: 0 }}>{card.label}</p>
      <p style={{ color: "#656565", fontFamily: '"Rethink Sans", sans-serif', fontSize: "clamp(11px, 1.2vw, 14px)", margin: 0, lineHeight: "1.5" }}>{card.desc}</p>
    </div>
  </div>
);

export default function Clients() {
  const { data, isLoading } = useGetHomePageQuery();

  // data.data.home["Clients"][]
  const apiClients = data?.data?.home?.["Clients"];

  const cards = (() => {
    if (!apiClients?.length) return fallbackCards;
    const result = [];
    apiClients.forEach((client, i) => {
      result.push({ type: "person", img: client.image || fallbackImgs[i % fallbackImgs.length] });
      result.push({ type: i % 2 === 0 ? "stat-dark" : "stat-light", logo: client.logo || "△", company: client.company, stat: client.stat, label: client.label, desc: client.description });
    });
    return result;
  })();

  const loopedCards = [...cards, ...cards];

  return (
    <section className="w-full bg-white overflow-hidden py-16">
      <style>{`
        @keyframes marqueeLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .clients-track { display: flex; gap: 40px; width: max-content; animation: marqueeLeft 15s linear infinite; }
        .clients-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="max-w-300 mx-auto px-6 lg:px-16 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "#08203C" }} />
              <span style={{ color: "#08203C", fontFamily: '"Rethink Sans", sans-serif', fontSize: "13px", fontWeight: 500 }}>Clients</span>
            </div>
            <h2 style={{ color: "#08203C", fontFamily: '"Rethink Sans", sans-serif', fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, lineHeight: "1.2", margin: 0 }}>
              Trusted by Home and<br />Property Owners
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-4">
            <p style={{ color: "#7a849a", fontFamily: '"Rethink Sans", sans-serif', fontSize: "14px", lineHeight: "1.6", maxWidth: "340px", margin: 0 }} className="lg:text-right lg:pt-12">
              From family homes to rentals, clients choose for reliable, professional cleaning.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        {isLoading
          ? <div className="flex gap-10 px-5 py-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="shrink-0 rounded-2xl animate-pulse bg-gray-200" style={cardSize} />
              ))}
            </div>
          : <div className="clients-track py-8 px-5">
              {loopedCards.map((card, i) => {
                if (card.type === "person")     return <PersonCard    key={i} card={card} />;
                if (card.type === "stat-dark")  return <StatDarkCard  key={i} card={card} />;
                if (card.type === "stat-light") return <StatLightCard key={i} card={card} />;
                return null;
              })}
            </div>
        }
      </div>
    </section>
  );
}