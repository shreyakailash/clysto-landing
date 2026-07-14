"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "about", href: "/about" },
    { label: "contact us", href: "/contact" },
    { label: "faqs", href: "/faqs" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-[#f9f8f3]">
      <nav className="max-w-[1280px] mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
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

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="relative group py-1">
                <Link
                  href={link.href}
                  className={`font-montserrat font-normal text-[14px] lowercase tracking-widest transition-colors duration-300 ${
                    isActive ? "text-[#00917d]" : "text-[#3c3831] group-hover:text-[#00917d]"
                  }`}
                >
                  {link.label}
                </Link>
                <span
                  aria-hidden="true"
                  className={`absolute left-0 -bottom-0.5 h-px w-full bg-[#00917d] origin-left transition-transform duration-300 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-[#3c3831] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-[#3c3831] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#3c3831] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      <div className={`md:hidden bg-[#f9f8f3]/95 backdrop-blur-md border-t border-[rgba(60,56,49,0.1)] overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="px-5 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-montserrat font-normal text-[14px] lowercase tracking-widest transition-colors duration-200 ${
                  pathname === link.href ? "text-[#00917d]" : "text-[#3c3831] hover:text-[#00917d]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
