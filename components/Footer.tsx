import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#f9f8f3] border-t border-[rgba(60,56,49,0.1)] px-10 py-8"
      aria-label="Footer"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-12 h-12">
            <Image
              src="/clysto--2--1.svg"
              alt="Clysto"
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
          <span className="font-montserrat font-light text-[20px] text-[#3c3831] lowercase tracking-[3px] group-hover:text-[#00917d] transition-colors duration-200">
            clysto
          </span>
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

        {/* Copyright */}
        <p className="font-montserrat font-normal text-[12px] text-[rgba(60,56,49,0.4)] lowercase tracking-wide">
          © {currentYear} clysto. all rights reserved.
        </p>
      </div>
    </footer>
  );
}
