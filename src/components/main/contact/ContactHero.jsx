export default function ContactHero() {
  return (
    <section className="w-full bg-[#08203C] px-4 sm:px-6 lg:px-16 py-4">
      <div
        className="w-full flex flex-col justify-center items-center gap-16 sm:gap-20 px-6 sm:px-10 md:px-16 lg:px-20 pt-10 pb-16 sm:pb-20 rounded-3xl"
        style={{ backgroundColor: "#08203C" }}
      >
        {/* Heading + Subtext */}
        <div className="flex flex-col items-center gap-6 text-center w-full">
          <h1 className="font-rethink text-white text-center font-medium leading-[120%] tracking-[-1.872px] m-0 text-4xl sm:text-5xl lg:text-[48px]">
            Send Us a Message
          </h1>

          <p
            className="text-white text-center font-normal leading-7 text-base m-0 w-full max-w-186"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            We take pride in our meticulous attention to detail and  unwavering <br />
            commitment to customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}
