"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  Variants,
} from "framer-motion";
import MagneticButton from "./motion/MagneticButton";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 40, damping: 20, mass: 0.6 });
  const springY = useSpring(mvY, { stiffness: 40, damping: 20, mass: 0.6 });
  const springXInverse = useTransform(springX, (v) => -v * 0.6);
  const springYInverse = useTransform(springY, (v) => -v * 0.6);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const relX = (e.clientX / innerWidth - 0.5) * 2;
      const relY = (e.clientY / innerHeight - 0.5) * 2;
      mvX.set(relX * 18);
      mvY.set(relY * 14);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion, mvX, mvY]);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.01 : 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className="relative bg-[#f9f8f3] pt-28 md:pt-32 pb-20 md:pb-24 px-5 md:px-10 overflow-hidden"
      aria-label="Hero"
    >
      {/* Ambient gradient lighting */}
      <motion.div
        aria-hidden="true"
        style={{ x: springX, y: springY }}
        className="pointer-events-none absolute -top-32 -right-10 md:-right-20 w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full bg-[#00917d]/[0.08] blur-[90px] md:blur-[110px]"
      />
      <motion.div
        aria-hidden="true"
        style={{ x: springXInverse, y: springYInverse }}
        className="pointer-events-none absolute top-1/3 -left-16 md:-left-24 w-[220px] h-[220px] md:w-[320px] md:h-[320px] rounded-full bg-[#00917d]/[0.05] blur-[80px] md:blur-[100px]"
      />

      {/* Gentle floating decorative particles */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute top-24 right-[12%] w-1.5 h-1.5 rounded-full bg-[#00917d]/40 hidden md:block"
          />
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="pointer-events-none absolute bottom-32 right-[22%] w-1 h-1 rounded-full bg-[#00917d]/30 hidden md:block"
          />
        </>
      )}

      <motion.div
        className="relative max-w-[1200px] mx-auto flex flex-col gap-8 min-h-[528px] justify-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item} className="max-w-[800px]">
          <h1 className="font-montserrat font-light text-[clamp(32px,4vw,48px)] text-[#3c3831] lowercase tracking-[3px] leading-[1.55]">
            the bridge between where your brand is, and where it{" "}
            <em className="font-newsreader tracking-[0px] text-[#00917d]">deserves to be.</em>
          </h1>
        </motion.div>

        <motion.div variants={item} className="max-w-[576px]">
          <p className="font-newsreader font-normal text-[clamp(17px,1.9vw,21px)] text-[#3c3831] leading-[1.75]">
            Most agencies just drive traffic. Clysto builds the systems that convert it. We align your brand, product, and marketing into one growth system that turns attention into customers and customers into long-term revenue.
          </p>
        </motion.div>

        <motion.div variants={item} className="flex flex-col gap-6 pt-4">
          <MagneticButton className="inline-block w-fit" strength={0.25}>
            <Link
              href="https://tally.so/r/NpPBBG"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-[232px] h-[59px] overflow-hidden bg-[#00917d] rounded-[6px] font-montserrat font-normal text-[16px] text-white lowercase tracking-[2.4px] transition-[background-color,box-shadow] duration-300 hover:bg-[#007a6a] hover:shadow-[0_12px_30px_-8px_rgba(0,145,125,0.55)] focus:outline-none focus:ring-2 focus:ring-[#00917d] focus:ring-offset-2 focus:ring-offset-[#f9f8f3]"
            >
              <span className="relative z-10">book a call</span>
              <span className="absolute inset-0 overflow-hidden rounded-[6px]" aria-hidden="true">
                <span className="absolute top-0 -left-full h-full w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 transition-transform duration-700 ease-out group-hover:translate-x-[420%]" />
              </span>
            </Link>
          </MagneticButton>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-montserrat font-normal text-[12px] md:text-[13px] text-[rgba(60,56,49,0.72)] lowercase tracking-wide md:tracking-widest">
              no commitment needed
            </span>
            <span className="w-3 md:w-4 h-px bg-[rgba(60,56,49,0.35)] shrink-0" />
            <span className="font-montserrat font-normal text-[12px] md:text-[13px] text-[rgba(60,56,49,0.72)] lowercase tracking-wide md:tracking-widest">
              early-stage founders only
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
