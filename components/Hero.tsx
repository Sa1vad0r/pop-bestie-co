const tickerItems = [
  "Balloon Garlands",
  "Custom Backdrops",
  "Vinyl Lettering",
  "Character Props",
  "Bespoke Setups",
  "San Antonio, TX",
];

function TickerGroup() {
  return (
    <span className="inline-flex">
      {tickerItems.map((item) => (
        <span
          key={item}
          className="inline-flex items-center gap-5 px-5 text-[10px] font-semibold tracking-[0.25em] uppercase text-brand-deep/70"
        >
          {item}
          <span className="shrink-0 w-[3px] h-[3px] rounded-full bg-brand-pink/70" />
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #ad1457 0%, #e91e8c 40%, #f06292 75%, #f8bbd0 100%)",
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute top-[-80px] left-[-80px] w-80 h-80 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-60px] right-[-60px] w-96 h-96 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 right-[10%] w-48 h-48 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/4 left-[15%] w-32 h-32 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 pb-20 max-w-3xl mx-auto">
        <p className="text-white/80 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Transforming Parties Into
        </p>
        <h1
          className="text-6xl md:text-8xl text-white mb-8 leading-tight"
          style={{ fontFamily: "var(--font-dancing-script)" }}
        >
          Unforgettable Moments.
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl mx-auto">
          From intimate weekend gatherings to large-scale corporate events, our custom balloon
          garlands, stunning backdrops, and bespoke setups make hosting effortless — crafted
          with intention for celebrations that deserve to be remembered.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-white text-brand-pink font-semibold text-sm tracking-widest uppercase hover:bg-brand-blush transition-colors"
          >
            Book Your Event
          </a>
          <a
            href="#services"
            className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
          >
            View Packages
          </a>
          <a
            href="#corporate"
            className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
          >
            Corporate &amp; Private Events
          </a>
        </div>
      </div>

      {/* Looping ticker */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden border-t border-white/30"
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="animate-marquee flex whitespace-nowrap py-3.5">
          <TickerGroup />
          <TickerGroup />
        </div>
      </div>
    </section>
  );
}
