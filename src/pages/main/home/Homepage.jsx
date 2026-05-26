import Navbar from "../../../components/main/home/Navbar";
import Hero from "../../../components/main/home/Hero";
import OurValues from "../../../components/main/home/OurValues";
import OurServices from "../../../components/main/home/OurServices";

export default function Homepage() {
  return (
    <main style={{ backgroundColor: "#08203C" }}>
      <Navbar />
      <Hero />
      <OurValues />
      <OurServices />
    </main>
  );
}