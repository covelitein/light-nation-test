"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import Reveal from "@/components/ui/Reveal";
import { usePathname } from "next/navigation";

export default function LeadPastor() {
  const pathname = usePathname() || "/";
  return (
    <Reveal as="section" id="leadpastor" className="bg-[#0b0b0b] text-white py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/leadpastor.webp"
            alt="Lead Pastor"
            className="h-[22rem] sm:h-[26rem] md:h-[30rem] w-auto object-cover rounded-xl shadow-2xl border border-white/10"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left space-y-6">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Our Lead Pastor
          </h3>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Apostle Femi Lazarus is the lead pastor of <span className="text-red-400 font-semibold">Light Nation Church</span>. 
            He is also the principal of the International School of Ministry, and a public health 
            professional by training. Married to Pastor Miracle Femi-Lazarus, they are blessed with 
            two daughters. Apostle Femi is known for his passionate teaching, servant leadership, and 
            his advocacy for unity within the body of Christ. Through his social media and ministry, he 
            brings a balanced message that strengthens believers and draws people closer to purpose.
          </p>

          <div className="pt-6">
            { !pathname.startsWith("/branches") && (
            <a href="/#branches" className="flex items-center gap-2 mx-auto md:mx-0 px-6 py-3 rounded-full bg-red-500 text-white text-sm sm:text-base font-medium hover:bg-red-600 transition-all group shadow-md w-auto">
              View More Branches
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
