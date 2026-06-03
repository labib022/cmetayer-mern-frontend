export default function MovingHero() {
  return (
    <section className="w-full px-2 sm:px-6 lg:px-16 py-4 bg-[#08203C]">
      <div
        className="w-full flex flex-col justify-center items-center gap-16 sm:gap-20 px-6 sm:px-10 md:px-16 lg:px-20 pt-10 pb-16 sm:pb-20 rounded-3xl"
        style={{ backgroundColor: "#08203C" }}
      >
        <div className="flex flex-col items-center gap-6 text-center w-full max-w-225">

          {/* Heading */}
          <h1
            className="font-rethink text-white text-center font-bold leading-[120%] tracking-[-1.872px] m-0 text-4xl sm:text-5xl lg:text-[48px]"
          >
            Moving &amp; Packing Services
          </h1>

          {/* Subtext */}
          <p
            className="font-rethink text-white text-center font-normal leading-[140%] m-0 text-base sm:text-lg"
            style={{ opacity: 0.8, fontSize: "18px" }}
          >
            Easygoing moving, whether it's around the block or across the
            country, with expert packing to help you out.
          </p>

        </div>
      </div>
    </section>
  );
}