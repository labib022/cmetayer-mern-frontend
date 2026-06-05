import CleaningHero from "../../../components/main/services/cleaning/CleaningHero";
import AboutUs from "../../../components/main/services/cleaning/CleaningAboutUs";
import OurCleaningServices from "../../../components/main/services/cleaning/OurCleaningServices";
import Client from "../../../components/main/home/Clients"; 
import Faq from "../../../components/main/home/Faq";


export default function CleaningPage() {
  return (
  <main className="">
      <CleaningHero />
      <AboutUs />
      <OurCleaningServices />
      <Client />
      <Faq />
    </main>
  );
}