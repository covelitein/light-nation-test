"use client";
import { RippleButton } from "@/components/ui/beam-color";
import { Video } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-[100vh] flex items-center justify-center flex-col gap-6 text-center text-white pt-24 pb-[20rem]">
      <h3 className="lg:text-6xl text-4xl font-bold">WELCOME TO LIGHT NATION</h3>
      <p className="sm:text-lg text-base max-md:px-5 max-sm:px-4">
        We are a church with the vision to raise kingdom-minded culture shapers{" "}
        <br />
        and global leaders who influence every sphere of life with kingdom
        principles.
      </p>
      <RippleButton className="bg-red-500 hover:bg-red-600 hover:scale-105 cursor-pointer text-xl h-auto w-auto [&_svg:not([class*='size-'])]:size-6 py-4 has-[>svg]:px-9">
        Watch Live
        <Video />
      </RippleButton>
    </section>
  );
}
