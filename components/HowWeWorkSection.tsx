"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "diagnose",
    description:
      "A 2-week deep dive into your metrics, product, and market perception to find the real friction point.",
  },
  {
    number: "02",
    title: "align",
    description:
      "Ensuring product and narrative are telling the same story to the same audience.",
  },
  {
    number: "03",
    title: "execute",
    description:
      "Hands-on implementation of the strategy. We don't just write PDFs; we ship.",
  },
  {
    number: "04",
    title: "measure",
    description:
      "Closing the loop with data to ensure the new foundation is actually driving growth.",
  },
];

export default function HowWeWorkSection() {
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
      id="how-we-work"
      ref={sectionRef}
      className="bg-[#f9f8f3] py-20 md:py-24 px-5 md:px-10"
      aria-labelledby="how-we-work-heading"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-5">
        {/* Section label */}
        <div className="animate-on-scroll">
          <p
            id="how-we-work-heading"
            className="font-montserrat font-normal text-[16px] text-[#00917d] lowercase tracking-widest"
          >
            how we work
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col max-w-[672px]">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`animate-on-scroll stagger-${i + 1} flex gap-8 items-start py-8 ${
                i < steps.length - 1
                  ? "border-b border-[rgba(60,56,49,0.1)]"
                  : ""
              }`}
            >
              {/* Number */}
              <div
                className="font-montserrat font-normal text-[clamp(40px,6vw,72px)] text-[#00917d] leading-none shrink-0 w-16 md:w-[100px] tabular-nums"
                aria-hidden="true"
              >
                {step.number}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 pt-2">
                <h3 className="font-montserrat font-normal text-[16px] text-[#3c3831] lowercase leading-[1.5]">
                  {step.title}
                </h3>
                <p className="font-newsreader font-normal text-[16px] text-[rgba(60,56,49,0.6)] leading-[1.75]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
