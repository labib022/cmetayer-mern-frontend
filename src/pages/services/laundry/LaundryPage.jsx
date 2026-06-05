import LaundryHero from "../../../components/main/services/laundry/LaundryHero";
import LaundryAboutUs from "../../../components/main/services/laundry/LaundryAboutUs";
import OurLaundryServices from "../../../components/main/services/laundry/OurLaundryServices";
import Client from "../../../components/main/home/Clients";
import Faq from "../../../components/main/home/Faq"; 



export default function LaundryPage() {
  return (
     <main className="">
         <LaundryHero />
         <LaundryAboutUs />
         <OurLaundryServices />
         <Client />
         <Faq />
       </main>
  );
}