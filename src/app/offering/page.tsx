import Cta from "@/sections/Cta";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import OfferingDetails from "@/sections/offering/OfferingDetails";
import OfferingHero from "@/sections/offering/OfferingHero";

export default function OfferingPage() {
  return (
    <div>
      <section className="min-h-[80vh] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9),rgba(0,0,0,0.5)),url('/offering-2.png')] bg-cover bg-center bg-no-repeat">
        <Header />
        <OfferingHero />
      </section>
      <OfferingDetails />
      <Cta />
      <Footer />
    </div>
  );
}
