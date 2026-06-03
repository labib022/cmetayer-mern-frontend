import MovingHero from "../../components/main/services/moving/MovingHero";
import Client from "../../components/main/home/Clients";
import Faq from "../../components/main/home/Faq";
import OurServices from "../../components/main/services/moving/OurServices";
import MovingDescription from "../../components/main/services/moving/MovingDescription";

export default function MovingPage() {
  return (
  <main className="">
      <MovingHero />
      <MovingDescription />
      <OurServices />
      <Client />
      <Faq />
    </main>
  );
}