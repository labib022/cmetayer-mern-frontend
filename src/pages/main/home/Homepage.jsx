
import Hero from "../../../components/main/home/Hero";
import OurValues from "../../../components/main/home/OurValues";
import OurServices from "../../../components/main/home/OurServices";
import Clients from "../../../components/main/home/Clients";
import Faq from "../../../components/main/home/Faq";
import Quote from "../../../components/main/home/Quote";


export default function Homepage() {
  return (
    <main>

      <div style={{ backgroundColor: "#08203C" }}>
        <Hero />
      </div>

      <OurValues />
      <OurServices />
      <Clients />
      <Faq />
      <Quote /> 
     
    </main>
  );
}