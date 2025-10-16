"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

type Props<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number; // px to start from (negative moves up)
  /**
   * If true, trigger animation once on mount (page load) instead of on scroll
   */
  triggerOnLoad?: boolean;
} & Omit<React.ComponentPropsWithoutRef<T>, "children" | "className"> &
  MotionProps;

/**
 * Reveal component — animates children on scroll (up → down with fade)
 * Usage: <Reveal as="section" className="...">...</Reveal>
 */
export default function Reveal<T extends React.ElementType = "div">({
  as,
  children,
  className,
  delay = 0,
  distance = 30,
  triggerOnLoad = false,
  ...rest
}: Props<T>) {
  const Component = (as || "div") as any;
  const MotionComp = motion(Component);

  const motionProps: MotionProps = triggerOnLoad
    ? {
        initial: { opacity: 0, y: -distance },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: "easeOut", delay },
      }
    : {
        initial: { opacity: 0, y: -distance },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.7, ease: "easeOut", delay },
      };

  return (
    <MotionComp className={className} {...motionProps} {...(rest as MotionProps)}>
      {children}
    </MotionComp>
  );
}
