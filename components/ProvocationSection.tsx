"use client";

import ScrollReveal from "./motion/ScrollReveal";

export default function ProvocationSection() {
  return (
    <section
      className="relative bg-[#f9f8f3] py-16 md:py-24 px-5 md:px-10 overflow-hidden"
      aria-label="Provocation"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[280px] rounded-full bg-[#00917d]/[0.04] blur-[100px]"
      />
      <ScrollReveal className="relative max-w-[696px] mx-auto text-center" y={20} scale={0.98}>
        <blockquote className="font-newsreader font-normal italic text-[clamp(22px,2.8vw,36px)] text-[#3c3831] leading-[1.65]">
          &ldquo;the real problem is almost never the one you came in with.
          we help you find it out.&rdquo;
        </blockquote>
      </ScrollReveal>
    </section>
  );
}
