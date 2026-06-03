import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";

const CONTACT_ITEMS = [
  {
    icon: <MdPhone size={24} color="#fff" />,
    label: "Phone Number",
    value: "+ (1290) 8983 143 99988",
  },
  {
    icon: <MdEmail size={24} color="#fff" />,
    label: "Email",
    value: "info.realora@gmail.com",
  },
  {
    icon: <MdLocationOn size={24} color="#fff" />,
    label: "Address",
    value: "4140 Parker Rd. New Mexico 31134",
  },
  {
    icon: <MdAccessTime size={24} color="#fff" />,
    label: "Opening hours",
    value: "Monday – Friday: 8am – 8pm",
  },
];

export default function ContactInfo() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-300 mx-auto flex flex-col gap-12">

        {/* HEADER ROW */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">

          {/* Left */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full inline-block"
                style={{ backgroundColor: "#08203C" }}
              />
              <span
                className="font-rethink text-base font-semibold leading-[140%]"
                style={{ color: "#08203C" }}
              >
                Contact Info
              </span>
            </div>
            <h2
              className="font-rethink font-medium leading-[120%] tracking-[-1.56px] m-0 text-3xl sm:text-4xl lg:text-[40px]"
              style={{ color: "#08203C", maxWidth: "480px" }}
            >
              <span style={{ color: "#08203C" }}>Connect</span>{" "}
              <span style={{ color: "#111" }}>with Our Team</span>
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start lg:items-end">
            <p
              className="font-rethink font-normal leading-[140%] m-0"
              style={{ color: "#656565", fontSize: "18px", maxWidth: "551px" }}
            >
              Reach out to Cleanzy through our official contact details for
              quick assistance.
            </p>
          </div>
        </div>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTACT_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex flex-col justify-center items-start gap-4"
              style={{
                padding: "24px 32px",
                borderRadius: "20px",
                background: "#FAFAFA",
                flex: "1 0 0",
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "#08203C",
                }}
              >
                {item.icon}
              </div>

              {/* Label */}
              <p
                className="font-rethink font-semibold leading-[140%] m-0 text-base"
                style={{ color: "#0B1714" }}
              >
                {item.label}
              </p>

              {/* Value */}
              <p
                className="font-rethink font-normal leading-[140%] m-0"
                style={{ color: "#656565", fontSize: "16px" }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* MAP */}
        <div className="w-full rounded-[20px] overflow-hidden shadow-lg border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.5674!2d-0.6571302!3d51.4785147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487671f3dc804c49%3A0x56432cb6586c9661!2sMarvell%20Glass!5e0!3m2!1sen!2sbd!4v1776047146030!5m2!1sen!2sbd"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Map"
          />
        </div>

      </div>
    </section>
  );
}