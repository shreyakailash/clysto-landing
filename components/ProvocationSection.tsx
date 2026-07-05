"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const quoteText =
  "\u201cthe real problem is almost never the one you came in with. we help you find it out.\u201d";

export default function ProvocationSection() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const [showCursor, setShowCursor] = useState(true);

  const characters = Array.from(quoteText);
  const perCharDelay = 0.018;
  const totalTypingDuration = characters.length * perCharDelay;

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;
    const timeout = setTimeout(() => setShowCursor(false), (totalTypingDuration + 1) * 1000);
    return () => clearTimeout(timeout);
  }, [isInView, shouldReduceMotion, totalTypingDuration]);

  return (
    <section
      className="relative bg-[#3c3831] py-16 md:py-24 px-5 md:px-10 overflow-hidden"
      aria-label="Provocation"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[280px] rounded-full bg-[#00917d]/[0.1] blur-[100px]"
      />
      <motion.div
        ref={containerRef}
        className="relative max-w-[696px] mx-auto text-center"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20, scale: shouldReduceMotion ? 1 : 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <blockquote className="font-newsreader font-normal italic text-[clamp(22px,2.8vw,36px)] text-[#f9f8f3] leading-[1.65]">
          {shouldReduceMotion ? (
            quoteText
          ) : (
            <>
              {characters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.01, delay: i * perCharDelay }}
                >
                  {char}
                </motion.span>
              ))}
              {showCursor && (
                <motion.span
                  aria-hidden="true"
                  className="inline-block w-[2px] h-[0.85em] bg-[#f9f8f3] ml-1 align-middle"
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    times: [0, 0.5, 0.5, 1],
                    delay: totalTypingDuration,
                  }}
                />
              )}
            </>
          )}
        </blockquote>
      </motion.div>
    </section>
  );
}
