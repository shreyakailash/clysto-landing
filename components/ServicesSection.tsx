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
    featured: true,
    size: "large",
  },
  {
    id: "gtm",
    icon: "/icon.svg",
    title: "go-to-market",
    description:
      "Engineered growth paths that actually scale. No hacks, just high-leverage distribution strategies mapped to your product's DNA.",
    tags: [],
    featured: false,
    size: "medium",
  },
  {
    id: "product",
    icon: "/icon-2.svg",
    title: "product experience",
    description:
      "Bridging the gap between promise and utility. We optimize user onboarding, friction points, and value realization cycles to drive retention.",
    tags: [],
    featured: true,
    size: "large",
    bullets: ["user onboarding optimization", "friction point analysis"],
    highlighted: true,
  },
  {
    id: "content",
    icon: "/icon-3.svg",
    title: "content engine",
    description:
      "Building authority through thought leadership. We help founders articulate their unique worldview to attract the right pipeline, automatically.",
    tags: [],
    featured: false,
    size: "medium",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const isHighlighted = service.highlighted;

  return (
    <article
      className={`animate-on-scroll stagger-${index + 1} group relative flex flex-col p-12 border transition-all duration-300 hover:shadow-lg ${
        isHighlighted
          ? "bg-[#00917d] border-[#00917d]"
          : "bg-[#f9f8f3] border-[rgba(60,56,49,0.12)] hover:border-[rgba(60,56,49,0.25)]"
      }`}
      aria-label={service.title}
    >
      {/* Icon */}
      <div className="mb-8 relative w-6 h-6">
        <Image
          src={service.icon}
          alt={`${service.title} icon`}
          fill
          sizes="24px"
          className={`object-contain ${isHighlighted ? "brightness-0 invert" : ""}`}
        />
      </div>

      {/* Title */}
      <h3
        className={`font-montserrat font-normal text-[clamp(20px,2vw,28px)] lowercase mb-6 transition-colors duration-200 ${
          isHighlighted ? "text-white" : "text-[#3c3831]"
        }`}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className={`font-newsreader font-normal text-[16px] leading-[1.75] flex-1 ${
          isHighlighted ? "text-[rgba(255,255,255,0.85)]" : "text-[rgba(60,56,49,0.6)]"
        }`}
      >
        {service.description}
      </p>

      {/* Bullets */}
      {service.bullets && service.bullets.length > 0 && (
        <ul className="mt-6 flex flex-col gap-2">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.6)] shrink-0" />
              <span className="font-montserrat text-[13px] text-[rgba(255,255,255,0.75)] lowercase tracking-wide">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Tags */}
      {service.tags && service.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="font-montserrat text-[12px] text-[#3c3831] lowercase tracking-wide border border-[rgba(60,56,49,0.2)] px-3 py-1.5"
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

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[rgba(60,56,49,0.12)]">
          {/* Row 1: Positioning (2/3 wide) + GTM (1/3 wide) */}
          <div className="md:col-span-2 lg:col-span-2 border-b border-r border-[rgba(60,56,49,0.12)]">
            <ServiceCard service={services[0]} index={0} />
          </div>
          <div className="border-b border-[rgba(60,56,49,0.12)]">
            <ServiceCard service={services[1]} index={1} />
          </div>

          {/* Row 2: Product (1/2 wide) + Content (1/2 wide) */}
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
