"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      if (currentY > lastScrollY.current && currentY > 140) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "what we do", href: "#services" },
    { label: "how we work", href: "#how-we-work" },
    { label: "get in touch", href: "#contact" },
  ];

  return (
    <motion.header
      animate={{ y: hidden && !menuOpen && !shouldReduceMotion ? "-100%" : "0%" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[#f9f8f3]/70 backdrop-blur-md border-b border-[rgba(60,56,49,0.08)] shadow-[0_1px_24px_rgba(60,56,49,0.05)]"
          : "bg-[#f9f8f3] border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Logo — full wordmark */}
        <Link href="/" className="flex items-center group" aria-label="Clysto home">
          <div className="relative h-12 w-[200px] shrink-0">
            <Image
              src="/group-1.png"
              alt="Clysto"
              fill
              sizes="200px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group py-1">
              <Link
                href={link.href}
                className="font-montserrat font-normal text-[14px] text-[#3c3831] lowercase tracking-widest transition-colors duration-300 group-hover:text-[#00917d]"
              >
                {link.label}
              </Link>
              <span
                aria-hidden="true"
                className="absolute left-0 -bottom-0.5 h-px w-full bg-[#00917d] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[#3c3831] transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#3c3831] transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#3c3831] transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#f9f8f3]/95 backdrop-blur-md border-t border-[rgba(60,56,49,0.1)] overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-5 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-montserrat font-normal text-[14px] text-[#3c3831] lowercase tracking-widest hover:text-[#00917d] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.header>
  );
}
