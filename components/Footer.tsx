"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const socialLinks = [
  {
    label: "Gmail",
    href: "mailto:clysto.co@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/clysto/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer
      className="bg-[#f9f8f3] border-t border-[rgba(60,56,49,0.1)] px-5 md:px-10 py-10"
      aria-label="Footer"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        {/* Top row: Logo + Nav links + Social */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group" aria-label="Clysto home">
            <div className="relative h-14 w-[224px]">
              <Image
                src="/group-1.png"
                alt="Clysto"
                fill
                sizes="224px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-8">
              {[
                { label: "what we do", href: "#services" },
                { label: "how we work", href: "#how-we-work" },
                { label: "get in touch", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-montserrat font-normal text-[13px] text-[rgba(60,56,49,0.5)] lowercase tracking-widest hover:text-[#00917d] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4" aria-label="Social links">
            {socialLinks.map((s) => (
              <motion.div
                key={s.label}
                whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.08 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full
                    text-[rgba(60,56,49,0.45)] border border-[rgba(60,56,49,0.15)]
                    hover:text-[#00917d] hover:border-[#00917d] hover:shadow-[0_6px_16px_-6px_rgba(0,145,125,0.4)]
                    transition-colors duration-200"
                >
                  {s.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom row: copyright */}
        <div className="border-t border-[rgba(60,56,49,0.08)] pt-6">
          <p className="font-montserrat font-normal text-[12px] text-[rgba(60,56,49,0.35)] lowercase tracking-wide">
            © {currentYear} clysto. all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
