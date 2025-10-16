"use client";

import About from "@/sections/About";
import BranchesSection from "@/sections/BranchesSection";
import Cta from "@/sections/Cta";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import LeadPastor from "@/sections/LeadPastor";
import Services from "@/sections/Services";
import UpcomingPrograms from "@/sections/UpcomingPrograms";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[100vh] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9),rgba(0,0,0,0.5)),url('/home-hero.jpg')] bg-cover bg-center bg-no-repeat rounded-b-xl w-full pb-20">
        <Header />
        <Hero />
      </section>

      {/* Upcoming Programs */}
      <UpcomingPrograms />
      <About />
      <BranchesSection />
      <Services />
      <LeadPastor />
      <Cta />
      <Footer />
    </div>
  );
}
