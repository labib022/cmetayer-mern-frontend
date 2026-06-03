import OurFoundation from "../../components/main/about/OurFoundation";
import AboutHero from "../../components/main/about/AboutHero";
import AboutVideo from "../../components/main/about/AboutVideo";
import OurTeam from "../../components/main/about/OurTeam";
import Faq from "../../components/main/home/Faq";


export default function About() {
  return (
    <main>
      <AboutHero />
      <OurFoundation />
      <AboutVideo />
      <OurTeam />

      <Faq />
    </main>
  );
}