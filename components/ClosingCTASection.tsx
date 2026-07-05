"use client";

import Link from "next/link";
import ScrollReveal from "./motion/ScrollReveal";
import MagneticButton from "./motion/MagneticButton";

export default function ClosingCTASection() {
  return (
    <section
      id="contact"
      className="relative bg-[#f9f8f3] py-20 md:py-24 px-5 md:px-10 border-t border-b border-[rgba(60,56,49,0.1)] overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#00917d]/[0.05] blur-[110px]"
      />

      <div className="relative max-w-[1200px] mx-auto flex flex-col items-center text-center gap-6">
        <ScrollReveal y={18}>
          <h2
            id="cta-heading"
            className="font-montserrat font-light text-[clamp(18px,2vw,26px)] text-[#3c3831] lowercase tracking-[1px] leading-[1.4]"
          >
            we work with a small number of startups at a time.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} y={18}>
          <p className="font-newsreader font-normal text-[clamp(20px,2.5vw,32px)] text-[#3c3831] italic leading-[1.5]">
            if the fit is right, let&apos;s find out.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} y={18} className="mt-4">
          <MagneticButton className="inline-block w-fit" strength={0.22}>
            <Link
              href="mailto:clysto.co@gmail.com"
              className="group relative inline-flex items-center justify-center w-[220px] h-[52px] overflow-hidden bg-transparent border border-[#3c3831] font-montserrat font-normal text-[14px] text-[#3c3831] lowercase tracking-[2px] transition-all duration-300 hover:bg-[#3c3831] hover:text-[#f9f8f3] hover:shadow-[0_12px_28px_-10px_rgba(60,56,49,0.4)] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#3c3831] focus:ring-offset-2 focus:ring-offset-[#f9f8f3]"
            >
              <span className="relative z-10">get in touch</span>
              <span className="absolute inset-0 overflow-hidden rounded-[6px]" aria-hidden="true">
                <span className="absolute top-0 -left-full h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-transform duration-700 ease-out group-hover:translate-x-[420%]" />
              </span>
            </Link>
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
