import movingImg from "../../../../assets/images/moving-img-1.png";
import { MdCheckCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const INCLUDED_SERVICES = [
  "Professional packing with quality materials",
  "Careful loading and unloading",
  "Secure transportation in modern vehicles",
  "Furniture disassembly and reassembly",
  "Unpacking and setup in your new home",
];

export default function MovingDescription() {
  return (
    <section className="w-full bg-white">
      <div
        className="max-w-360 mx-auto flex flex-col items-center gap-16"
        style={{ padding: "96px 64px" }}
      >
        <div className="flex flex-col lg:flex-row items-start gap-16 w-full">
          {/* LEFT — Text Content */}
          <div className="flex flex-col gap-8 flex-1">
            {/* Description */}
            <div className="flex flex-col gap-4">
              <h2
                className="font-rethink font-bold leading-[140%] tracking-[-0.936px] m-0"
                style={{ color: "#0E1109", fontSize: "24px" }}
              >
                Description
              </h2>
              <p
                className="font-rethink font-normal leading-[140%] m-0"
                style={{ color: "#677489", fontSize: "18px" }}
              >
                Our moving and packing services ensure a seamless relocation.
                Whether you're moving locally or nationally, our skilled team
                manages everything from packing to transportation. With Easy
                Lift &amp; Clean, your belongings are safe with us. We use
                top-quality materials and techniques to protect your items. Let
                us handle the moving stress, so you can focus on your new home.
              </p>
            </div>

            {/* Included Services */}
            <div className="flex flex-col gap-5">
              <h3
                className="m-0 font-semibold leading-[26px]"
                style={{
                  color: "#0E1109",
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: "20px",
                }}
              >
                Included Services
              </h3>

              <div className="flex flex-col gap-4">
                {INCLUDED_SERVICES.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <MdCheckCircle
                      size={22}
                      color="#08203C"
                      className="shrink-0"
                    />
                    <span
                      className="font-rethink font-normal leading-[140%]"
                      style={{ color: "#656565", fontSize: "18px" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Image + Price Card */}
          <div
            className="flex flex-col justify-end items-center gap-5 shrink-0"
            style={{
              width: "551px",
              height: "517px",
              padding: "12px",
              borderRadius: "24px",
              border: "1px solid #E3E8EF",
              background: `url(${movingImg}) lightgray 50% / cover no-repeat`,
            }}
          >
            {/* Price Card */}
            <div
              className="flex justify-between items-end gap-5 w-full"
              style={{
                padding: "18px",
                borderRadius: "24px",
                border: "1px solid #E3E8EF",
                background: "#FFF",
              }}
            >
              {/* Price Info */}
              <div className="flex flex-col gap-1">
                <span
                  className="font-rethink font-normal leading-[140%]"
                  style={{ color: "#677489", fontSize: "16px" }}
                >
                  Start From
                </span>
                <div className="flex items-baseline gap-1">
                  <span
                    className="font-rethink font-medium leading-[130%] tracking-[-1.248px]"
                    style={{ color: "#08203C", fontSize: "32px" }}
                  >
                    $75
                  </span>
                  <span
                    className="font-rethink font-medium leading-[140%] tracking-[-0.936px]"
                    style={{ color: "#08203C", fontSize: "24px" }}
                  >
                    / hr
                  </span>
                </div>
              </div>

              {/* Book Now Button */}
              <Link
                to="/services/moving/book/step-1"
                className="flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity duration-200 no-underline"
                style={{
                  padding: "8px 8px 8px 24px",
                  borderRadius: "24px",
                  background: "#08203C",
                  flex: "1 0 0",
                  maxWidth: "180px",
                }}
              >
                <span className="font-rethink text-white font-semibold text-base leading-[140%]">
                  Book Now
                </span>
                <span
                  className="flex items-center justify-center w-9 h-9 rounded-full text-white text-base shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
