"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(250, 248, 245, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#home"
          className="font-serif tracking-wide hover:text-accent transition-colors duration-300"
          style={{
            fontSize: "1.35rem",
            color: scrolled ? "var(--text-primary)" : "white",
          }}
        >
          Pop Bestie Co.
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 hover:text-accent"
              style={{ color: scrolled ? "var(--text-muted)" : "white" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2.5 bg-accent text-white text-[11px] font-semibold tracking-[0.18em] uppercase hover:bg-accent/85 transition-colors duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px transition-all duration-300"
              style={{
                width: i === 1 ? (open ? "0" : "1rem") : "1.5rem",
                background: scrolled ? "var(--text-primary)" : "white",
                opacity: i === 1 && open ? 0 : 1,
                transform:
                  i === 0 && open
                    ? "rotate(45deg) translateY(3px)"
                    : i === 2 && open
                      ? "rotate(-45deg) translateY(-3px)"
                      : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: open ? "300px" : "0",
          borderTop: open ? "1px solid var(--border)" : "1px solid transparent",
          background: "rgba(250, 248, 245, 0.97)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[11px] font-medium tracking-[0.2em] uppercase text-text-muted hover:text-text-primary transition-colors hover:text-black"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 bg-accent text-white text-[11px] font-semibold tracking-[0.18em] uppercase text-center"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
