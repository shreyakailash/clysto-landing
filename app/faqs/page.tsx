"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";

const faqs = [
  {
    q: "What services does Clysto offer?",
    a: "We help startups turn ideas into products people actually want to use. Our services span web design, product strategy, technical development, and marketing, giving founders everything they need to build, launch, and grow under one roof.",
  },
  {
    q: "Why choose Clysto over a traditional agency?",
    a: "Most agencies market a product after it's built—even if the product itself has usability or technical issues. We believe growth starts with getting the product right. By bringing together strategy, design, development, and marketing, we help fix the entire loop before your product reaches users.",
  },
  {
    q: "Who do you work with?",
    a: "We partner with early-stage founders, startups, businesses, student-led ventures, and organizations that are building new products or improving existing ones. Whether you're validating an idea or scaling your business, we tailor our approach to your stage.",
  },
  {
    q: "How does the process work?",
    a: "Every project begins with a discovery call where we understand your goals, users, and challenges. From there, we define the scope, create a roadmap, design and build the solution, gather feedback, and iterate until launch.",
  },
  {
    q: "How long does a project take?",
    a: "Every project is different. Smaller engagements may take a few weeks, while larger product design and development projects can take several months. We'll share a realistic timeline during the discovery phase.",
  },
  {
    q: "How much do your services cost?",
    a: "Every project is unique, so we don't offer one-size-fits-all pricing. After a discovery call to understand your requirements, goals, and scope, we'll provide a tailored proposal with transparent pricing.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work remotely with clients across different countries and time zones, making collaboration seamless through modern communication and project management tools.",
  },
  {
    q: "What if I only need one service?",
    a: "That's absolutely fine. Whether you need product strategy, web design, technical development, marketing, or support across the entire product lifecycle, we can tailor our involvement to your needs.",
  },
  {
    q: "How do I get started?",
    a: "Reach out through our contact form or email us with your project details. We'll schedule a discovery call to learn more about your goals and explore how Clysto can help bring your vision to life.",
  },
];

export default function FAQsPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="bg-[#f9f8f3] min-h-screen">
      <Navbar />

      <section className="max-w-[860px] mx-auto px-5 md:px-10 pt-28 md:pt-36 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-18"
        >
          <p className="font-montserrat font-normal text-[13px] text-[#00917d] lowercase tracking-widest mb-5">
            faqs
          </p>
          <h1 className="font-montserrat font-light text-[clamp(26px,3vw,44px)] text-[#3c3831] lowercase leading-[1.35] tracking-[1.5px]">
            things people usually ask.
          </h1>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex flex-col"
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="border-t border-[rgba(60,56,49,0.12)] last:border-b"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                >
                  <span
                    className={`font-montserrat font-normal text-[15px] leading-[1.55] tracking-[0.5px] transition-colors duration-300 ${
                      isOpen ? "text-[#00917d]" : "text-[#3c3831] group-hover:text-[#00917d]"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="7"
                        y1="0"
                        x2="7"
                        y2="14"
                        stroke={isOpen ? "#00917d" : "rgba(60,56,49,0.45)"}
                        strokeWidth="1"
                      />
                      <line
                        x1="0"
                        y1="7"
                        x2="14"
                        y2="7"
                        stroke={isOpen ? "#00917d" : "rgba(60,56,49,0.45)"}
                        strokeWidth="1"
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-newsreader text-[17px] text-[rgba(60,56,49,0.88)] leading-[1.8] pb-7 pr-10">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="mt-16 pt-10 border-t border-[rgba(60,56,49,0.12)]"
        >
          <p className="font-newsreader text-[17px] text-[rgba(60,56,49,0.85)] leading-[1.8]">
            Still have questions?{" "}
            <a
              href="/contact"
              className="text-[#00917d] underline underline-offset-4 decoration-[rgba(0,145,125,0.35)] hover:decoration-[#00917d] transition-all duration-200"
            >
              reach out to us
            </a>
            .
          </p>
        </motion.div>
      </section>
    </main>
  );
}
