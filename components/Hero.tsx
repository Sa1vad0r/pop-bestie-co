import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Balloon photo background */}
      <Image
        src="/images/hero-balloons.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Pink gradient overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(173,20,87,0.55) 0%, rgba(233,30,140,0.45) 50%, rgba(173,20,87,0.65) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-white/80 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Transforming Parties Into A
        </p>
        <h1
          className="text-6xl md:text-8xl text-white mb-8 leading-tight drop-shadow-lg"
          style={{ fontFamily: "var(--font-dancing-script)" }}
        >
          Magical Experience!
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto drop-shadow">
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/40" />
      </div>
    </section>
  );
}
