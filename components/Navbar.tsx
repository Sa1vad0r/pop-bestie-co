"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className={`text-xl font-bold tracking-wide transition-colors ${
            scrolled ? "text-brand-pink" : "text-white"
          }`}
          style={{ fontFamily: "var(--font-dancing-script)" }}
        >
          Pop Bestie Co.
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs font-semibold tracking-widest uppercase transition-colors hover:text-brand-pink ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 rounded-full text-xs font-semibold border-[1px] border-white tracking-widest uppercase bg-brand-pink text-white hover:bg-brand-deep transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden flex flex-col gap-1.5 p-1 ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? "bg-gray-700" : "bg-white"
            } ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? "bg-gray-700" : "bg-white"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? "bg-gray-700" : "bg-white"
            } ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold tracking-widest uppercase text-gray-700 hover:text-brand-pink transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase bg-brand-pink text-white text-center hover:bg-brand-deep transition-colors"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
