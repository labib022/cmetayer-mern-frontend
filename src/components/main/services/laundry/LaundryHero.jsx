export default function LaundryHero() {
  return (
    <section className=" px-2 sm:px-6 lg:px-16 py-4 bg-[#08203C] mx-2 mb-2 rounded-b-3xl">
      <div
        className="mxw flex flex-col justify-center items-center gap-16 sm:gap-20 px-6 sm:px-10 md:px-16 lg:px-20 pt-10 pb-16 sm:pb-20 rounded-3xl"
        style={{ backgroundColor: "#08203C" }}
      >
        <div className="flex flex-col items-center gap-6 text-center w-full max-w-225">

          {/* Heading */}
          <h1
            className="font-rethink text-white text-center font-bold leading-[120%] tracking-[-1.872px] m-0 text-4xl sm:text-5xl lg:text-[48px]"
          >
            Laundry & Dry Cleaning
          </h1>

          {/* Subtext */}
          <p
            className="font-rethink text-white text-center font-normal leading-[140%] m-0 text-base sm:text-lg"
            style={{ opacity: 0.8, fontSize: "18px" }}
          >
            Deep cleans, move-in/out, and recurring maid services tailored to your space.
          </p>

        </div>
      </div>
    </section>
  );
}