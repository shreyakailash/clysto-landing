"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Crosshair, TrendingUp, Layers, PenTool } from "lucide-react";
import ScrollReveal from "./motion/ScrollReveal";

const services: Array<{
  id: string;
  Icon: React.ElementType;
  title: string;
  description: React.ReactNode;
  tags: string[];
  bullets: string[];
}> = [
  {
    id: "positioning",
    Icon: Crosshair,
    title: "positioning",
    description: (
      <>
        Redefining who you serve and why you win. We move you from{" "}
        "commodity" to{" "}
        <strong className="font-medium">"category-of-one"</strong>{" "}
        through rigorous market analysis and narrative design.
      </>
    ),
    tags: ["narrative design", "market analysis"],
    bullets: [],
  },
  {
    id: "gtm",
    Icon: TrendingUp,
    title: "go-to-market",
    description: (
      <>
        Engineered growth paths that actually scale. No hacks, just{" "}
        <strong className="font-medium">high-leverage distribution</strong>{" "}
        strategies mapped to your product's DNA.
      </>
    ),
    tags: [],
    bullets: [],
  },
  {
    id: "product",
    Icon: Layers,
    title: "product experience",
    description: (
      <>
        Bridging the gap between promise and utility. We optimize user
        onboarding, friction points, and value realization cycles to drive retention.
      </>
    ),
    tags: [],
    bullets: ["user onboarding optimization", "friction point analysis"],
  },
  {
    id: "content",
    Icon: PenTool,
    title: "content engine",
    description: (
      <>
        Building authority through thought leadership. We help founders
        articulate their unique worldview to attract the{" "}
        <strong className="font-medium">right pipeline</strong>, automatically.
      </>
    ),
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
  const shouldReduceMotion = useReducedMotion();
  const { Icon } = service;

  return (
    <motion.article
      className="group relative flex flex-col p-8 md:p-10 lg:p-12
        bg-[#f9f8f3] border-0
        transition-colors duration-500 ease-in-out
        hover:bg-[#00917d] cursor-default"
      aria-label={service.title}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -6,
              scale: 1.015,
              boxShadow: "0 24px 48px -18px rgba(0,145,125,0.35)",
              transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
            }
      }
      style={{ willChange: "transform" }}
    >
      <motion.div
        className="mb-8 shrink-0"
        whileHover={shouldReduceMotion ? undefined : { y: -3, x: 2 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <Icon
          size={22}
          strokeWidth={1.5}
          className="text-[#00917d] transition-colors duration-500 group-hover:text-white"
        />
      </motion.div>

      <h3 className="font-montserrat font-normal text-[clamp(18px,2vw,28px)] lowercase mb-5
        text-[#3c3831] transition-colors duration-500
        group-hover:text-white">
        {service.title}
      </h3>

      <p className="font-newsreader font-normal text-[16px] leading-[1.75] flex-1
        text-[rgba(60,56,49,0.88)] transition-colors duration-500
        group-hover:text-[rgba(255,255,255,0.92)]">
        {service.description}
      </p>

      {service.bullets.length > 0 && (
        <ul className="mt-6 flex flex-col gap-2">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full shrink-0
                bg-[rgba(60,56,49,0.4)] transition-colors duration-500
                group-hover:bg-[rgba(255,255,255,0.6)]" />
              <span className="font-montserrat text-[13px] lowercase tracking-wide
                text-[rgba(60,56,49,0.82)] transition-colors duration-500
                group-hover:text-[rgba(255,255,255,0.9)]">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      )}

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
    </motion.article>
  );
}

const BORDER = "border-[rgba(60,56,49,0.12)]";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#f9f8f3] py-20 md:py-24 px-5 md:px-10"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 md:gap-16">
        <ScrollReveal className="flex flex-col gap-4 max-w-[800px]" y={18}>
          <p className="font-montserrat font-normal text-[16px] text-[#00917d] lowercase tracking-widest">
            what we do
          </p>
          <h2
            id="services-heading"
            className="font-montserrat font-light text-[clamp(22px,2.5vw,36px)] text-[#3c3831] leading-[1.4]"
          >
            We start with the <strong className="font-medium">diagnosis.</strong>{" "}
            Everything else follows from that.
          </h2>
        </ScrollReveal>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border ${BORDER}`}>

          <ScrollReveal
            className={`col-span-1 md:col-span-2 lg:col-span-2 border-b lg:border-r ${BORDER}`}
            delay={0}
            y={24}
          >
            <ServiceCard service={services[0]} index={0} />
          </ScrollReveal>

          <ScrollReveal
            className={`col-span-1 border-b md:border-r lg:border-r-0 ${BORDER}`}
            delay={0.08}
            y={24}
          >
            <ServiceCard service={services[1]} index={1} />
          </ScrollReveal>

          <ScrollReveal
            className={`col-span-1 border-b md:border-b-0 lg:border-b-0 lg:border-r ${BORDER}`}
            delay={0.16}
            y={24}
          >
            <ServiceCard service={services[2]} index={2} />
          </ScrollReveal>

          <ScrollReveal className="col-span-1 md:col-span-1 lg:col-span-2" delay={0.24} y={24}>
            <ServiceCard service={services[3]} index={3} />
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
