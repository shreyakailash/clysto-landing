"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function ClosingCTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el) => {
              el.classList.add("in-view");
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#f9f8f3] relative py-20 md:py-24 px-5 md:px-10 border-t border-b border-[rgba(60,56,49,0.1)]"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-6">
        <div className="animate-on-scroll">
          <h2
            id="cta-heading"
            className="font-montserrat font-light text-[clamp(18px,2vw,26px)] text-[#3c3831] lowercase tracking-[1px] leading-[1.4]"
          >
            we work with a small number of startups at a time.
          </h2>
        </div>

        <div className="animate-on-scroll stagger-1">
          <p className="font-newsreader font-normal text-[clamp(20px,2.5vw,32px)] text-[#3c3831] italic leading-[1.5]">
            if the fit is right, let&apos;s find out.
          </p>
        </div>

        <div className="animate-on-scroll stagger-2 mt-4">
          <Link
            href="mailto:clysto.co@gmail.com"
            className="inline-flex items-center justify-center w-[220px] h-[52px] bg-transparent border border-[#3c3831] font-montserrat font-normal text-[14px] text-[#3c3831] lowercase tracking-[2px] hover:bg-[#3c3831] hover:text-[#f9f8f3] transition-all duration-300 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#3c3831] focus:ring-offset-2 focus:ring-offset-[#f9f8f3]"
          >
            get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
