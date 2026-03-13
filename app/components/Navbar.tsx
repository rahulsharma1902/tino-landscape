"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0f1a0f]/95 backdrop-blur-md shadow-xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center group">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#4a8c2a]/60 ring-offset-2 ring-offset-transparent shadow-lg shadow-black/40 group-hover:ring-[#d4a843] group-hover:scale-105 transition-all duration-300">
            <Image
              src="/logo.jpg"
              alt="Tino's Landscape, Lighting & Construction logo"
              width={48}
              height={48}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="ml-3 flex flex-col leading-tight">
            <span className="text-white font-display text-base font-bold group-hover:text-[#d4a843] transition-colors">
              Tino&apos;s Landscape
            </span>
            <span className="text-[#d4a843] text-[10px] font-medium tracking-widest uppercase">
              Lighting &amp; Construction
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-[#d4a843] text-sm font-medium transition-colors duration-200 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4a843] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#4a8c2a] hover:bg-[#3d7523] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-900/40 hover:-translate-y-0.5"
          >
            Free Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#0f1a0f]/98 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          open ? "max-h-80 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-[#d4a843] text-base font-medium py-1 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-[#4a8c2a] text-white font-semibold px-5 py-2.5 rounded-full text-center mt-2"
          >
            Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
