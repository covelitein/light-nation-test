"use client";

import { MapPin, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

const branches = [
  {
    id: 1,
    name: "Faith Cathedral, Lagos",
    address: "12 Grace Avenue, Victoria Island, Lagos",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    name: "Grace Chapel, Abuja",
    address: "34 New Dawn Street, Garki, Abuja",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    name: "The Lighthouse, Accra",
    address: "Kingsway Junction, Osu, Accra, Ghana",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    name: "Mountain of Light, Nairobi",
    address: "Hope Street, Westlands, Nairobi, Kenya",
    image:
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    name: "Revival Center, Port Harcourt",
    address: "15 Unity Road, GRA Phase 2, Port Harcourt",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    name: "Dominion Sanctuary, Johannesburg",
    address: "45 Liberty Blvd, Sandton, Johannesburg",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function BranchesSection() {
  const pathname = usePathname() || "/";
  return (
    <section
      id="branches"
      className="py-20 px-5 md:px-20 bg-[#0b0b0b] text-white"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          Our Branches
        </h2>
        <p className="max-w-xl mx-auto">
          Experience God’s presence at any of our vibrant branches across
          Africa. You’re always welcome home!
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {branches.map((branch) => (
          <div
            data-aos="fade-up"
            key={branch.id}
            className="group relative h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-700 cursor-pointer"
            style={{
              backgroundImage: `url(${branch.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-500" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 transition-transform duration-700 group-hover:translate-y-[-10px]">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-red-500 transition-colors duration-500">
                {branch.name}
              </h3>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>{branch.address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-12 flex justify-center">
        {pathname !== "/branches" && (
          <a
            href="/branches"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition group"
          >
            View More Branches
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        )}
      </div>
    </section>
  );
}
