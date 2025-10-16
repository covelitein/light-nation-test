"use client";

import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    let maxTimeout: number | undefined;
    function finish() {
      // let the animation be visible briefly, then fade out
      setVisible(false);
      // remove from DOM after fade completes
      window.setTimeout(() => setMounted(false), 600);
    }

    const onLoad = () => finish();

    if (document.readyState === "complete") {
      // already loaded
      finish();
    } else {
      window.addEventListener("load", onLoad);
      // safety: don't let the preloader hang forever
      maxTimeout = window.setTimeout(() => finish(), 3000);
    }

    return () => {
      window.removeEventListener("load", onLoad);
      if (maxTimeout) window.clearTimeout(maxTimeout);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0b0b0b] transition-opacity duration-500 ease-out ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <img
          src={`https://www.thelightnationchurch.com/_next/image?url=%2Fauth%2Flight-nation.png&w=1920&q=75&dpl=dpl_DfTJ5uZg6eeHhBCBhnYyvEKDRpyE`}
          alt="light nation"
          className="h-20 object-contain animate-pulse"
        />
        <div className="text-white font-semibold text-lg tracking-tight">
          loading...
        </div>
      </div>
    </div>
  );
}
