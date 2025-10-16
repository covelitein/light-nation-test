import React from "react";

export default function About() {
  return (
    <section id="about" className="mt-5 lg:px-24 sm:px-16 px-4 pb-10">
      <div
        className="min-h-[90vh] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9),rgba(0,0,0,0.5)),url('/about-ln.jpg')] bg-no-repeat flex items-center sm:justify-end justify-center sm:pr-10 py-20 bg-cover bg-center"
        style={{ backgroundPosition: "55% 40%" }}
      >
        <div
          className="
            text-white 
            lg:w-2/5 
            md:w-1/2 
            sm:w-4/5 
            w-full 
            sm:px-9 
            px-5 
            py-10 
            bg-black/60 
            rounded-lg 
            backdrop-blur-sm 
            border 
            border-white/20 
            sm:mr-10 
            mx-4 
            text-sm 
            sm:text-base
          "
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-white mb-5 sm:mb-6 font-bold text-center sm:text-left">
            ABOUT LIGHT NATION
          </h3>
          <p className="leading-relaxed text-gray-100 text-justify sm:text-left">
            Light Nation is more than a church, we are a family rooted in full
            love, guided by faith, and driven by purpose. Our vision to raise
            kingdom-minded culture shapers and global leaders who influence
            every sphere of life with kingdom principles. To do this, we teach
            the undiluted truth of scriptures, with Christ as the central focus,
            we also take discipleship seriously and organise regular meetings
            and seminars focused on achieving our above-stated vision.
            <br />
            <br />
            <br /> The Light Nation Church is led by Apostle Femi Lazarus and
            Pastor Miracle Femi Lazarus, both of whom exemplify servant
            leadership, passionate teaching, and a heart for raising sons and
            daughters in the faith. We love effortlessly, sacrifice selflessly,
            and walk boldly in faith with a spirit of excellence. Whether you’re
            taking your first step towards God or looking for a place to grow
            deeper, Light Nation is a home where you belong.
          </p>
        </div>
      </div>
    </section>
  );
}
