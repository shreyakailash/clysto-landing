"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f9f8f3] pt-32 pb-24 px-10"
      aria-label="Hero"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 min-h-[528px] justify-center">
        <div className="animate-on-scroll max-w-[800px]">
          <h1 className="font-montserrat font-light text-[clamp(32px,4vw,48px)] text-[rgba(60,56,49,0.71)] lowercase tracking-[3px] leading-[1.55]">
            most startups don&apos;t have a growth problem. they have a
            clarity problem.
          </h1>
        </div>

        <div className="animate-on-scroll stagger-1 max-w-[576px]">
          <p className="font-newsreader font-normal text-[clamp(18px,2.2vw,24px)] text-[#3c3831] leading-[1.7]">
            Clysto is a growth studio for early-stage startups. We find
            what&apos;s actually holding you back — then fix it. Positioning,
            go-to-market, product experience, content.
          </p>
        </div>

        <div className="animate-on-scroll stagger-2 flex flex-col gap-6 pt-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center w-[232px] h-[59px] bg-[#00917d] rounded-[6px] font-montserrat font-normal text-[16px] text-white lowercase tracking-[2.4px] hover:bg-[#007a6a] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00917d] focus:ring-offset-2 focus:ring-offset-[#f9f8f3]"
          >
            book a call
          </Link>

          <div className="flex items-center gap-3">
            <span className="font-montserrat font-normal text-[13px] text-[rgba(60,56,49,0.5)] lowercase tracking-widest">
              no commitment needed
            </span>
            <span className="w-4 h-px bg-[rgba(60,56,49,0.2)]" />
            <span className="font-montserrat font-normal text-[13px] text-[rgba(60,56,49,0.5)] lowercase tracking-widest">
              early-stage founders only
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
