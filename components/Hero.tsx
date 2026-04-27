export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background mimicking balloon photo */}
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
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-white/80 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Transforming Parties Into A
        </p>
        <h1
          className="text-6xl md:text-8xl text-white mb-8 leading-tight"
          style={{ fontFamily: "var(--font-dancing-script)" }}
        >
          Magical Experience!
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
          Custom balloon garlands, stunning backdrops, and unforgettable event setups — crafted with love.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-white text-brand-pink font-semibold text-sm tracking-widest uppercase hover:bg-brand-blush transition-colors"
          >
            Book Now
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/40" />
      </div>
    </section>
  );
}
