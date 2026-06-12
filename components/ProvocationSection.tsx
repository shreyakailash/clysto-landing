"use client";

import { useEffect, useRef } from "react";

export default function ProvocationSection() {
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
      ref={sectionRef}
      className="bg-[#f9f8f3] py-16 md:py-24 px-5 md:px-10"
      aria-label="Provocation"
    >
      <div className="max-w-[696px] mx-auto text-center animate-on-scroll">
        <blockquote className="font-newsreader font-normal italic text-[clamp(22px,2.8vw,36px)] text-[#3c3831] leading-[1.65]">
          &ldquo;the real problem is almost never the one you came in with.
          we help you find it out.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
