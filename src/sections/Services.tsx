"use client";

import { Clock } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Supernatural Sunday Service",
    day: "SUNDAY",
    time: "8:30 AM",
    topImage:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
    bottomImage:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Bible Study",
    day: "TUESDAY",
    time: "5:30 PM",
    topImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    bottomImage:
      "https://images.unsplash.com/photo-1628716957555-f88f182aadfe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHlvdXRoc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
  },
  {
    id: 3,
    title: "Prayer Meeting",
    day: "FRIDAY",
    time: "5:30 PM",
    topImage:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    bottomImage:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-[#0b0b0b] text-white overflow-hidden sm:px-20 px-5"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-14 sm:px-5 px-3">
        <h2 className="text-4xl md:text-4xl font-bold text-white mb-4 tracking-wide">
          OUR SERVICES
        </h2>
        <p className="max-w-2xl mx-auto text-base">
          You can be a part of us and be present in any of our weekly services
          at Light Nation. Encounter God's power and purpose for your life.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto sm:px-5 px-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            data-aos="fade-zoom-in"
            key={service.id}
            className="group bg-[#111] rounded-3xl overflow-hidden shadow-md hover:shadow-red-600/30 transition-all duration-700 flex flex-col hover:-translate-y-2 hover:scale-[1.02]"
          >
            {/* Top Image */}
            <div className="relative h-[260px] w-full overflow-hidden">
              <img
                src={service.topImage}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Bottom Image + Info */}
            <div className="relative h-[220px] w-full overflow-hidden flex flex-col justify-end">
              <img
                src={service.bottomImage}
                alt={`${service.day} background`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-700" />

              {/* Info Text */}
              <div className="absolute bottom-5 left-5 transform group-hover:-translate-y-1 transition-transform duration-500">
                <h3 className="text-lg font-extrabold leading-tight tracking-wide">
                  {service.day} <br /> {service.title.toUpperCase()}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-sm font-medium text-gray-300">
                  <Clock className="w-4 h-4 text-red-500" />
                  <span>{service.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
