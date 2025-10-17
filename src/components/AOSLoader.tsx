"use client";

import { useEffect } from "react";

export default function AOSLoader() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
    script.onload = () => {
      // @ts-ignore
      if (window.AOS) {
        // @ts-ignore
        window.AOS.init({
          duration: 800,
          easing: "ease-in-out",
          once: true,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <link
      href="https://unpkg.com/aos@2.3.1/dist/aos.css"
      rel="stylesheet"
    />
  );
}
