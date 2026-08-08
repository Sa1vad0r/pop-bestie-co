import Corporate from "@/components/Corporate";

const packages = [
  {
    name: "Signature Setup",
    tagline: "A refined design that blends elegance with personality.",
    description:
      "Includes a 7.2 ft or 6.6 ft wooden backdrop in your chosen color, paired with balloon garlands on both sides. Styled in up to three colors with custom vinyl lettering, plus a 3 ft character prop for a standout detail.",
    includes: [
      "7.2 ft or 6.6 ft wooden backdrop",
      "Full garland left & half garland right (up to 3 colors)",
      "Custom vinyl lettering",
      "One 3 ft character prop",
    ],
    price: "$400",
    badge: "Most Popular",
    featured: true,
  },
  {
    name: "Essential",
    tagline: "Polished and balanced on both sides.",
    includes: [
      "7.2 ft or 6.6 ft wooden backdrop",
      "Full garland left & half garland right (up to 3 colors)",
      "Custom vinyl lettering",
    ],
    price: "$350",
    badge: null,
    featured: false,
  },
  {
    name: "Corporate Balloon Arch",
    tagline: "Traditional organic, built for brand events.",
    includes: [
      "Semi-circle traditional organic arch",
      "Up to 3 balloon colors",
      "Custom balloon foil or logo",
      "$2M general liability COI issued on request",
      "W-9 on file, Net 30 terms",
      "On-time or the install is free",
    ],
    price: "$525",
    badge: "Corporate",
    featured: false,
  },
  {
    name: "Luxe",
    tagline: "Layered depth with visual impact.",
    includes: [
      "Two wooden backdrops (7.2 ft & 6.6 ft)",
      "8 ft garland left & 5 ft garland right (up to 3 colors)",
      "Custom vinyl lettering",
      "One 3 ft character prop",
    ],
    price: "$550",
    badge: null,
    featured: false,
  },
  {
    name: "Luxe 2.0",
    tagline: "Movement and texture, redefined.",
    includes: [
      "7.2 ft wooden backdrop",
      "6.6 ft wooden open ruffle arch",
      "8 ft garland with flow-through arch design (up to 3 colors)",
      "Custom vinyl lettering",
      "One 3 ft character prop",
    ],
    price: "$600",
    badge: null,
    featured: false,
  },
  {
    name: "Luxe 3.0",
    tagline: "The full statement — three arches, seamless.",
    includes: [
      "Wooden arches: 7.2 ft, 6.6 ft & 6.6 ft open ruffle",
      "7.2 ft & 6.6 ft backdrops",
      "7 ft garland left & 8 ft flow-through arch garland (up to 3 colors)",
      "Custom vinyl lettering",
      "One 3 ft character prop",
    ],
    price: "$700",
    badge: "Ultimate",
    featured: false,
  },
];

const balloonTowers = {
  name: "Balloon Towers",
  includes: ["6 ft tall", "Customized with logo", "Up to 3 balloon colors", "Streamer colors of your choice"],
  price: "$150",
};

function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 mt-0.75">
      <path
        d="M2 6l3 3 5-5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 mb-16 pb-16 border-b border-brand-blush">
          <div>
            <p className="text-brand-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-6">
              What We Offer
            </p>
            <h2
              className="text-brand-deep leading-[0.95]"
              style={{ fontFamily: "var(--font-dancing-script)", fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
            >
              Every setup, <span className="text-gray-400 italic">built for your</span> moment.
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-gray-500 leading-relaxed mb-6" style={{ fontSize: "0.9rem", maxWidth: "28rem" }}>
              Every package is fully customizable — colors, lettering, and props tailored to
              your vision. No two setups are ever the same.
            </p>
            <a
              href="#contact"
              className="self-start inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-pink hover:text-brand-deep transition-colors duration-300 border-b border-brand-blush pb-px"
            >
              Get a Custom Quote
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* Package grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-auto">
          {packages.map((pkg) =>
            pkg.featured ? (
              <div
                key={pkg.name}
                className="relative flex flex-col col-span-1 md:col-span-2 md:row-span-2 p-8 lg:p-10 overflow-hidden rounded-2xl"
                style={{ background: "linear-gradient(160deg, var(--color-brand-pink) 0%, var(--color-brand-deep) 100%)" }}
              >
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <span className="text-[10px] font-semibold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full bg-brand-deep text-white">
                    {pkg.badge}
                  </span>
                </div>
                <div className="relative z-10 mb-6">
                  <h3
                    className="text-white leading-none mb-2"
                    style={{ fontFamily: "var(--font-dancing-script)", fontSize: "clamp(2.75rem, 4vw, 4rem)" }}
                  >
                    {pkg.name}
                  </h3>
                  <p className="italic text-sm text-white/80">{pkg.tagline}</p>
                </div>
                <p className="relative z-10 leading-relaxed mb-8 text-sm text-white/90" style={{ maxWidth: "38rem" }}>
                  {pkg.description}
                </p>
                <div className="relative z-10 w-10 h-px mb-6 bg-white/30" />
                <ul className="relative z-10 space-y-2.5 mb-auto">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                      <span className="text-white mt-0.5">
                        <Check />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="relative z-10 flex items-end justify-between mt-10 pt-6 border-t border-white/25">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase mb-1 text-white/70">Starting at</p>
                    <p className="text-4xl font-bold text-white">{pkg.price}</p>
                  </div>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase px-5 py-3 rounded-full bg-white text-brand-deep hover:bg-brand-blush hover:gap-4 transition-all duration-300"
                  >
                    Book This Setup
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            ) : (
              <div
                key={pkg.name}
                className="relative flex flex-col p-7 rounded-2xl bg-brand-soft border border-brand-blush hover:shadow-lg hover:shadow-brand-pink/10 transition-shadow duration-300"
              >
                {pkg.badge && (
                  <span className="self-start mb-4 text-[10px] font-semibold tracking-[0.25em] uppercase px-2.5 py-1 rounded-full text-brand-pink bg-brand-blush border border-brand-pink/20">
                    {pkg.badge}
                  </span>
                )}
                <h3
                  className="text-brand-deep leading-none mb-1"
                  style={{ fontFamily: "var(--font-dancing-script)", fontSize: "2rem" }}
                >
                  {pkg.name}
                </h3>
                <p className="italic text-sm text-gray-500 mb-5">{pkg.tagline}</p>
                <ul className="space-y-2 mb-auto">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="text-brand-pink mt-0.5">
                        <Check />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-end justify-between mt-6 pt-5 border-t border-brand-blush">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase mb-0.5 text-gray-400">From</p>
                    <p className="text-3xl font-bold text-brand-deep">{pkg.price}</p>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase px-4 py-2.5 rounded-full bg-brand-pink text-white hover:bg-brand-deep transition-colors duration-300"
                  >
                    Book
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            )
          )}
        </div>

        {/* Corporate & Private Events */}
        <Corporate />

        {/* Balloon Towers banner */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-4 p-7 lg:p-8 rounded-2xl bg-brand-soft border border-brand-blush">
          <div>
            <h4
              className="text-brand-deep mb-2"
              style={{ fontFamily: "var(--font-dancing-script)", fontSize: "1.75rem" }}
            >
              {balloonTowers.name}
            </h4>
            <ul className="flex flex-wrap gap-x-6 gap-y-1.5">
              {balloonTowers.includes.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-brand-pink">
                    <Check />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase mb-0.5 text-gray-400">From</p>
              <p className="text-3xl font-bold text-brand-deep">{balloonTowers.price}</p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase px-4 py-2.5 rounded-full bg-brand-pink text-white hover:bg-brand-deep transition-colors duration-300 whitespace-nowrap"
            >
              Book
              <ArrowIcon />
            </a>
          </div>
        </div>

        <p className="text-center mt-12 text-sm text-gray-400" style={{ letterSpacing: "0.05em" }}>
          All packages include setup and breakdown. Travel fees may apply outside the San
          Antonio area.
          <a href="#contact" className="ml-2 text-brand-pink hover:underline">
            Ask us about your location.
          </a>
        </p>
      </div>
    </section>
  );
}
