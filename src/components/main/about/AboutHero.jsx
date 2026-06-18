export default function AboutHero() {
  return (
    <section className=" bg-[#08203C] px-4 sm:px-6 lg:px-16 py-4 mx-2 mb-2 rounded-b-3xl "> 
      <div
        className="mxw flex flex-col justify-center items-center gap-16 sm:gap-20 px-6 sm:px-10 md:px-16 lg:px-20 pt-10 pb-16 sm:pb-20 rounded-3xl"
        style={{ backgroundColor: "#08203C" }}
      >
        {/* Heading + Subtext */}
        <div className="flex flex-col items-center gap-6 text-center w-full">

          <h1 className="font-rethink text-white text-center font-medium leading-[120%] tracking-[-1.872px] m-0 text-4xl sm:text-5xl lg:text-[48px]">
            The Easy Lift &amp; Clean Standard
          </h1>

          <p
            className="text-white text-center font-normal leading-6 text-base m-0 w-full max-w-186"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Easy Lift &amp; Clean was founded to revolutionize how you manage
            your home. We provide a single, trusted point of contact for
            moving, repair, laundry, and cleaning services.
          </p>

        </div>
      </div>
    </section>
  );
}