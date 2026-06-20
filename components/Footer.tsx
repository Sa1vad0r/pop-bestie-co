const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--text-primary)",
        borderTop: "3px solid var(--accent)",
      }}
    >
      {/* Main grid */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-16"
        style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
      >

        {/* Brand */}
        <div>
          <p
            className="font-serif mb-3"
            style={{ fontSize: "2rem", color: "var(--bg-primary)", lineHeight: 1 }}
          >
            Pop Bestie Co.
          </p>
          <p
            className="leading-relaxed mb-8"
            style={{
              fontSize: "0.875rem",
              color: "rgba(240,235,227,0.45)",
              maxWidth: "22rem",
            }}
          >
            Balloon garlands, custom backdrops, and bespoke event setups — crafted
            with intention for celebrations that deserve to be remembered.
            Based in Houston, TX.
          </p>
          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/popbestieco?igsh=MWlmZzc2Nzh2NmFhZA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-icon"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/share/18HWdNCozk/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer-icon"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-4">
          <p
            className="text-[10px] font-semibold tracking-[0.25em] uppercase mb-2"
            style={{ color: "rgba(240,235,227,0.3)" }}
          >
            Navigate
          </p>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="footer-link text-[11px] font-medium tracking-[0.18em] uppercase"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <p
            className="text-[10px] font-semibold tracking-[0.25em] uppercase mb-2"
            style={{ color: "rgba(240,235,227,0.3)" }}
          >
            Get in Touch
          </p>
          <a
            href="mailto:popbestieco@gmail.com"
            className="footer-link text-[11px] tracking-[0.05em]"
          >
            popbestieco@gmail.com
          </a>
          <p className="text-[11px]" style={{ color: "rgba(240,235,227,0.35)" }}>
            Houston, TX
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 self-start"
            style={{
              background: "var(--accent)",
              color: "white",
            }}
          >
            Book Now
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 py-5"
        style={{ borderTop: "1px solid rgba(240,235,227,0.07)" }}
      >
        <p className="text-[11px]" style={{ color: "rgba(240,235,227,0.25)" }}>
          &copy; {new Date().getFullYear()} Pop Bestie Co. All rights reserved.
        </p>
        <p className="text-[11px]" style={{ color: "rgba(240,235,227,0.2)" }}>
          Houston, TX &nbsp;·&nbsp; Est. 2024
        </p>
      </div>
    </footer>
  );
}
