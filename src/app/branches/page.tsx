import BranchHero from "@/sections/branches/BranchHero";
import BranchesSection from "@/sections/BranchesSection";
import Cta from "@/sections/Cta";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";

export default function BranchesPage() {
  return (
    <div>
      <section className="min-h-[80vh] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9),rgba(0,0,0,0.5)),url('/home-hero.jpg')] bg-cover bg-center bg-no-repeat pb-10">
        <Header />
        <BranchHero />
      </section>
      <BranchesSection />
      <Cta />
      <Footer />
    </div>
  );
}
