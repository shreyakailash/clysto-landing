"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: number;
  once?: boolean;
  as?: "div";
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 28,
  scale = 0.985,
  once = true,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : y,
      scale: shouldReduceMotion ? 1 : scale,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.85,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
