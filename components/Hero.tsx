import Image from "next/image";

const tickerItems = [
  "Balloon Garlands",
  "Custom Backdrops",
  "Vinyl Lettering",
  "Character Props",
  "Bespoke Setups",
  "San Antonio, TX",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative grain overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Mobile: full-bleed photo + overlay ──────────── */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/images/hero-balloons.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient at bottom so light text remains readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,8,6,0.82) 40%, rgba(10,8,6,0.45) 75%, rgba(10,8,6,0.15) 100%)",
          }}
        />
      </div>

      {/* ── Desktop: full image background with overlay for text ────────────────────── */}
      <div className="hidden lg:block lg:absolute lg:inset-0 overflow-hidden">
        <Image
          src="/images/hero-balloons.jpg"
          alt="Balloon garland event setup by Pop Bestie Co."
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Semi-transparent dark overlay on left side for text readability */}
        <div
          className="absolute inset-y-0 left-0 z-10"
          style={{
            width: "52%",
            background:
              "linear-gradient(to right, rgba(10,8,6,0.6) 0%, rgba(10,8,6,0.3) 70%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Content ─────────────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-24"
        style={{
          minHeight: "100svh",
          paddingTop: "7rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="lg:max-w-[52%]">
          {/* Eyebrow */}
          <p
            className="animate-fade-up text-[11px] font-medium tracking-[0.28em] uppercase mb-10 text-white/70"
            style={{
              animationDelay: "0ms",
            }}
          >
            Est. 2024 &nbsp;·&nbsp; San Antonio, TX
          </p>

          {/* Headline — white on mobile (over dark image), dark on desktop */}
          <h1
            className="font-serif leading-[0.9] mb-8 text-white"
            style={{ fontSize: "clamp(3.5rem, 5.5vw, 5.75rem)" }}
          >
            <span
              className="block animate-fade-up text-white"
              style={{ animationDelay: "80ms" }}
            >
              Transforming
            </span>
            <span
              className="block animate-fade-up text-white"
              style={{ animationDelay: "160ms" }}
            >
              Parties Into
            </span>
            <span
              className="block animate-fade-up italic text-accent"
              style={{ animationDelay: "240ms" }}
            >
              Unforgettable
            </span>
            <span
              className="block animate-fade-up text-white"
              style={{ animationDelay: "320ms" }}
            >
              Moments.
            </span>
          </h1>

          {/* Descriptor */}
          <p
            className="animate-fade-up leading-relaxed mb-12 text-white/70"
            style={{
              animationDelay: "400ms",
              fontSize: "0.95rem",
              maxWidth: "28rem",
            }}
          >
            Custom balloon garlands, stunning backdrops, and bespoke event
            setups — crafted with intention for celebrations that deserve to be
            remembered.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up flex flex-col sm:flex-row items-start sm:items-center gap-6"
            style={{ animationDelay: "500ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-accent text-white text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-accent/85 hover:gap-4"
            >
              Book Your Event
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#services"
              className="text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 border-b pb-px lg:text-text-muted lg:border-text-muted/25 lg:hover:text-text-primary text-white/70 border-white/30 hover:text-white"
            >
              View Packages
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <div
        className="animate-fade-up absolute hidden lg:flex items-center gap-3 z-10"
        style={{
          animationDelay: "700ms",
          bottom: "4.5rem",
          left: "clamp(2rem, 6vw, 6rem)",
          color: "var(--text-muted)",
        }}
      >
        {/* <div
          className="w-px h-10"
          style={{ background: "var(--text-muted)", opacity: 0.3 }}
        /> */}
        {/* <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span> */}
      </div>

      {/* ── Ticker strip ────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden"
        style={{
          background: "rgba(250, 248, 245, 0.88)",
          backdropFilter: "blur(8px)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="animate-marquee flex whitespace-nowrap py-3.5">
          {[0, 1].map((i) => (
            <span key={i} className="inline-flex">
              {tickerItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-5 px-5"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  {item}
                  <span
                    className="flex-shrink-0 rounded-full"
                    style={{
                      width: "3px",
                      height: "3px",
                      background: "var(--accent)",
                      opacity: 0.7,
                    }}
                  />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
