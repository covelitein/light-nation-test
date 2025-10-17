"use client";

import { programs } from "@/constants";
import CustomSwiper from "./CustomSwiper";
import { Calendar, MapPin } from "lucide-react";

export default function UpcomingPrograms() {
  return (
    <div
      id="programs"
      data-aos="fade-up"
      className="max-w-[90%] mx-auto overflow-hidden pb-20 -mt-60"
    >
      <CustomSwiper slidesPerView={3.2} spaceBetween={24}>
        {programs.map((program) => (
          <div
            key={program.id}
            className="relative group rounded-2xl overflow-hidden shadow-lg h-[500px] cursor-pointer"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${program.image})`,
              }}
            />

            {/* Fade Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Initial Info (visible before hover) */}
            <div className="absolute bottom-6 left-6 z-10 text-white transition-all duration-500 group-hover:opacity-0">
              <h3 className="text-xl font-semibold mb-1">{program.title}</h3>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {program.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {program.location}
                </span>
              </div>
            </div>

            {/* Description (slides up and fades in) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 py-8 bg-black/70 backdrop-blur-sm opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out z-20">
              <h3 className="text-2xl font-semibold mb-3">{program.title}</h3>
              <p className="text-sm mb-5 max-w-md">{program.description}</p>
              <button className="px-5 py-2 text-sm bg-red-500 rounded-full hover:bg-red-600 transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </CustomSwiper>
    </div>
  );
}
