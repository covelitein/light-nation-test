import { ArrowRight } from "lucide-react";
import React from "react";

export default function Cta() {
  return (
    <section
      id="cta"
      className='relative min-h-[90vh] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.85),rgba(0,0,0,0.7)),url("/subBan.jpg")] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white text-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-24 mt-8'
    >
      {/* Optional overlay for smoother contrast */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl space-y-6 sm:space-y-8">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Subscribe to Ambience TV Today
        </h4>

        <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
          We are committed to touching hearts and transforming lives across the
          globe — delivering inspirational messages, powerful teachings, and
          uplifting content that draw men into the Kingdom of God.
        </p>

        <div className="pt-6 sm:pt-8 flex justify-center">
          <a href="/offering" className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-red-500 text-white text-sm sm:text-base font-medium hover:bg-red-600 transition-all group shadow-md">
            Subscribe Now
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
