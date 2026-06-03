import ContactForm from "../../components/main/contact/ContactForm";
import ContactHero from "../../components/main/contact/ContactHero";
import ContactInfo from "../../components/main/contact/ContactInfo";
import Faq from "../../components/main/home/Faq";




export default function Contact() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <Faq />
    </main>
  );
}