"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    id: "positioning",
    icon: "/icon-1.svg",
    title: "positioning",
    description:
      'Redefining who you serve and why you win. We move you from "commodity" to "category-of-one" through rigorous market analysis and narrative design.',
    tags: ["narrative design", "market analysis"],
    bullets: [],
  },
  {
    id: "gtm",
    icon: "/icon.svg",
    title: "go-to-market",
    description:
      "Engineered growth paths that actually scale. No hacks, just high-leverage distribution strategies mapped to your product's DNA.",
    tags: [],
    bullets: [],
  },
  {
    id: "product",
    icon: "/icon-2.svg",
    title: "product experience",
    description:
      "Bridging the gap between promise and utility. We optimize user onboarding, friction points, and value realization cycles to drive retention.",
    tags: [],
    bullets: ["user onboarding optimization", "friction point analysis"],
  },
  {
    id: "content",
    icon: "/icon-3.svg",
    title: "content engine",
    description:
      "Building authority through thought leadership. We help founders articulate their unique worldview to attract the right pipeline, automatically.",
    tags: [],
    bullets: [],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <article
      className={`animate-on-scroll stagger-${index + 1} group relative flex flex-col p-12
        bg-[#f9f8f3] border-0
        transition-colors duration-500 ease-in-out
        hover:bg-[#00917d] cursor-default`}
      aria-label={service.title}
    >
      {/* Icon — teal by default, white on hover */}
      <div className="mb-8 relative w-6 h-6">
        <Image
          src={service.icon}
          alt={`${service.title} icon`}
          fill
          sizes="24px"
          className="object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert"
        />
      </div>

      {/* Title */}
      <h3 className="font-montserrat font-normal text-[clamp(20px,2vw,28px)] lowercase mb-6
        text-[#3c3831] transition-colors duration-500
        group-hover:text-white">
        {service.title}
      </h3>

      {/* Description */}
      <p className="font-newsreader font-normal text-[16px] leading-[1.75] flex-1
        text-[rgba(60,56,49,0.6)] transition-colors duration-500
        group-hover:text-[rgba(255,255,255,0.85)]">
        {service.description}
      </p>

      {/* Bullets */}
      {service.bullets.length > 0 && (
        <ul className="mt-6 flex flex-col gap-2">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full shrink-0
                bg-[rgba(60,56,49,0.4)] transition-colors duration-500
                group-hover:bg-[rgba(255,255,255,0.6)]" />
              <span className="font-montserrat text-[13px] lowercase tracking-wide
                text-[rgba(60,56,49,0.6)] transition-colors duration-500
                group-hover:text-[rgba(255,255,255,0.8)]">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Tags */}
      {service.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="font-montserrat text-[12px] lowercase tracking-wide px-3 py-1.5
                border transition-colors duration-500
                text-[#3c3831] border-[rgba(60,56,49,0.2)]
                group-hover:text-white group-hover:border-[rgba(255,255,255,0.4)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default function ServicesSection() {
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
      id="services"
      ref={sectionRef}
      className="bg-[#f9f8f3] py-24 px-10"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        {/* Section header */}
        <div className="animate-on-scroll flex flex-col gap-4 max-w-[800px]">
          <p className="font-montserrat font-normal text-[16px] text-[#00917d] lowercase tracking-widest">
            what we do
          </p>
          <h2
            id="services-heading"
            className="font-montserrat font-light text-[clamp(22px,2.5vw,36px)] text-[#3c3831] leading-[1.4]"
          >
            We start with the diagnosis. Everything else follows from that.
          </h2>
        </div>

        {/* Services grid — outer border, inner dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[rgba(60,56,49,0.12)]">
          {/* Row 1: Positioning (2 cols) + GTM (1 col) */}
          <div className="md:col-span-2 lg:col-span-2 border-b border-r border-[rgba(60,56,49,0.12)]">
            <ServiceCard service={services[0]} index={0} />
          </div>
          <div className="border-b border-[rgba(60,56,49,0.12)]">
            <ServiceCard service={services[1]} index={1} />
          </div>

          {/* Row 2: Product (1 col) + Content (2 cols) */}
          <div className="md:col-span-1 border-r border-[rgba(60,56,49,0.12)]">
            <ServiceCard service={services[2]} index={2} />
          </div>
          <div className="md:col-span-1 lg:col-span-2">
            <ServiceCard service={services[3]} index={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
