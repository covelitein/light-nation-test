"use client";

import React, { ReactNode, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const CustomSwiper = ({
  children,
  slidesPerView = 3,
  spaceBetween = 24,
  className = "",
}: {
  children: ReactNode;
  slidesPerView: number;
  spaceBetween: number;
  className?: string;
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={`relative w-full ${className}`}>
      {/* --- Controls --- */}
      <div className="flex items-center justify-between mb-10 w-full">
        <div className="text-white sm:text-3xl font-bold">UPCOMING PROGRAMS</div>
        <div className="flex items-center gap-3">
          <button
            ref={prevRef}
            className="p-2 rounded-full cursor-pointer bg-gray-100 hover:bg-red-500 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            ref={nextRef}
            className="p-2 rounded-full cursor-pointer bg-gray-100 hover:bg-red-500 hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Pagination (custom position) */}
        <div className="swiper-pagination !w-auto !text-red-500 absolute -bottom-[30rem]"></div>
      </div>

      {/* --- Swiper --- */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-red-500",
          bulletActiveClass: "!bg-red-600",
        }}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation === "object"
          ) {
            (swiper.params.navigation as any).prevEl = prevRef.current;
            (swiper.params.navigation as any).nextEl = nextRef.current;
          }
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: slidesPerView, spaceBetween: spaceBetween },
        }}
        className="!overflow-visible"
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>
            <div className="h-full">{child}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;