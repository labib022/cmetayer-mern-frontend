import RepairHero from "../../../components/main/services/repair/RepairHero";
import RepairDescription from "../../../components/main/services/repair/RepairDescription";
import OurRepairServices from "../../../components/main/services/repair/OurRepairServices";
import Client from "../../../components/main/home/Clients";
import Faq from "../../../components/main/home/Faq";

export default function RepairPage() {
  return (
  <main className="">
      <RepairHero />
      <RepairDescription />
      <OurRepairServices />
      <Client />
      <Faq />
    </main>
  );
}