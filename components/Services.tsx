import Corporate from "@/components/Corporate";

const packages = [
  {
    id: "signature",
    name: "Signature",
    label: "Most Popular",
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
    featured: true,
  },
  {
    id: "essential",
    name: "Essential",
    label: null,
    tagline: "Polished and balanced on both sides.",
    description:
      "A 7.2 ft or 6.6 ft wooden backdrop with garlands on both sides in up to three colors and custom vinyl lettering.",
    includes: [
      "7.2 ft or 6.6 ft wooden backdrop",
      "Full garland left & half garland right (up to 3 colors)",
      "Custom vinyl lettering",
    ],
    price: "$350",
    featured: false,
  },
  {
    id: "corporate-arch",
    name: "Corporate Balloon Arch",
    label: "Corporate",
    tagline: "Traditional organic, built for brand events.",
    description:
      "A semi-circle balloon arch in your brand colors, finished with custom balloon foil or logo work — sized and staged for corporate activations.",
    includes: [
      "Semi-circle traditional organic arch",
      "Up to 3 balloon colors",
      "Custom balloon foil or logo",
      "$2M general liability COI issued on request",
      "W-9 on file, Net 30 terms",
      "On-time or the install is free",
    ],
    price: "$525",
    featured: false,
  },
  {
    id: "luxe",
    name: "Luxe",
    label: null,
    tagline: "Layered depth with visual impact.",
    description:
      "Two wooden backdrops framed by an 8 ft garland on the left and a 5 ft garland on the right, plus a character prop.",
    includes: [
      "Two wooden backdrops (7.2 ft & 6.6 ft)",
      "8 ft garland left & 5 ft garland right (up to 3 colors)",
      "Custom vinyl lettering",
      "One 3 ft character prop",
    ],
    price: "$550",
    featured: false,
  },
  {
    id: "luxe-2",
    name: "Luxe 2.0",
    label: null,
    tagline: "Movement and texture, redefined.",
    description:
      "A 7.2 ft backdrop paired with a 6.6 ft open ruffle arch. An 8 ft garland flows left and through the arch.",
    includes: [
      "7.2 ft wooden backdrop",
      "6.6 ft wooden open ruffle arch",
      "8 ft garland with flow-through arch design (up to 3 colors)",
      "Custom vinyl lettering",
      "One 3 ft character prop",
    ],
    price: "$600",
    featured: false,
  },
  {
    id: "luxe-3",
    name: "Luxe 3.0",
    label: "Ultimate",
    tagline: "The full statement — three arches, seamless.",
    description:
      "Three wooden arches with dual backdrops, a 7 ft garland on the left, and an 8 ft flow-through arch design — the pinnacle of our craft.",
    includes: [
      "Wooden arches: 7.2 ft, 6.6 ft & 6.6 ft open ruffle",
      "7.2 ft & 6.6 ft backdrops",
      "7 ft garland left & 8 ft flow-through arch garland (up to 3 colors)",
      "Custom vinyl lettering",
      "One 3 ft character prop",
    ],
    price: "$700",
    featured: false,
  },
];

const corporateTower = {
  id: "corporate-towers",
  name: "Balloon Towers",
  price: "$150",
  includes: [
    "6 ft tall",
    "Customized with logo",
    "Up to 3 balloon colors",
    "Streamer colors of your choice",
  ],
};

/* ── Icon: thin check mark ──────────────────────────────── */
function CheckIcon() {
  return (
    <svg
      className="flex-shrink-0 mt-[3px]"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
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

/* ── Arrow icon ─────────────────────────────────────────── */
function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

/* ── Signature (featured) card — solid pink fill ────────── */
function FeaturedCard({ pkg }: { pkg: (typeof packages)[0] }) {
  return (
    <div
      className="reveal relative flex flex-col col-span-1 md:col-span-2 md:row-span-2 p-8 lg:p-10 overflow-hidden rounded-2xl"
      style={{
        background: "linear-gradient(160deg, var(--accent) 0%, #B01368 100%)",
      }}
    >
      {/* Label / ribbon */}
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <span
          className="text-[10px] font-semibold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full"
          style={{
            color: "#fff",
            background: "#241118",
          }}
        >
          {pkg.label}
        </span>
      </div>

      {/* Name + tagline */}
      <div className="relative z-10 mb-6">
        <h3
          className="font-serif italic text-white leading-none mb-2"
          style={{ fontSize: "clamp(2.5rem, 4vw, 3.75rem)" }}
        >
          {pkg.name} Setup
        </h3>
        <p
          className="font-serif italic"
          style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.88)" }}
        >
          {pkg.tagline}
        </p>
      </div>

      {/* Description */}
      <p
        className="relative z-10 leading-relaxed mb-8"
        style={{
          fontSize: "0.875rem",
          maxWidth: "38rem",
          color: "rgba(255,255,255,0.85)",
        }}
      >
        {pkg.description}
      </p>

      {/* Divider */}
      <div
        className="relative z-10 w-10 h-px mb-6"
        style={{ background: "rgba(255,255,255,0.3)" }}
      />

      {/* Includes */}
      <ul className="relative z-10 space-y-2.5 mb-auto">
        {pkg.includes.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3"
            style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.92)" }}
          >
            <span className="text-white mt-[1px]">
              <CheckIcon />
            </span>
            {item}
          </li>
        ))}
      </ul>

      {/* Price + CTA */}
      <div
        className="relative z-10 flex items-end justify-between mt-10 pt-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.25)" }}
      >
        <div>
          <p
            className="text-[10px] tracking-[0.2em] uppercase mb-1"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Starting at
          </p>
          <p
            className="font-serif text-white"
            style={{ fontSize: "3rem", lineHeight: 1 }}
          >
            {pkg.price}
          </p>
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase px-5 py-3 rounded-full hover:gap-4 transition-all duration-300"
          style={{ background: "#fff", color: "#B01368" }}
        >
          Book This Setup
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
}

/* ── Standard card — blush pink fill ────────────────────── */
function Card({ pkg, delay }: { pkg: (typeof packages)[0]; delay: number }) {
  return (
    <div
      className="reveal service-card relative flex flex-col p-7 group rounded-2xl"
      style={{
        background: "rgba(233,30,140,0.06)",
        border: "1px solid rgba(233,30,140,0.12)",
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Label if any */}
      {pkg.label && (
        <span
          className="self-start mb-4 text-[10px] font-semibold tracking-[0.25em] uppercase px-2.5 py-1 rounded-full"
          style={{
            color: "var(--accent)",
            background: "rgba(233,30,140,0.1)",
            border: "1px solid rgba(233,30,140,0.2)",
          }}
        >
          {pkg.label}
        </span>
      )}

      {/* Name */}
      <h3
        className="font-serif italic text-[#B01368] leading-none mb-1"
        style={{ fontSize: "1.875rem" }}
      >
        {pkg.name}
      </h3>
      <p
        className="font-serif italic text-text-muted mb-5"
        style={{ fontSize: "0.875rem" }}
      >
        {pkg.tagline}
      </p>

      {/* Includes */}
      <ul className="space-y-2 mb-auto">
        {pkg.includes.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-text-muted"
            style={{ fontSize: "0.8rem" }}
          >
            <span className="text-accent mt-[1px]">
              <CheckIcon />
            </span>
            {item}
          </li>
        ))}
      </ul>

      {/* Price + CTA */}
      <div
        className="flex items-end justify-between mt-6 pt-5"
        style={{ borderTop: "1px solid rgba(233,30,140,0.15)" }}
      >
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-text-muted mb-0.5">
            From
          </p>
          <p
            className="font-serif text-text-primary"
            style={{ fontSize: "2rem", lineHeight: 1 }}
          >
            {pkg.price}
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase px-4 py-2.5 rounded-full transition-colors duration-300"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          Book
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────── */
export default function Services() {
  const [signature, essential, corporateArch, luxe, luxe2, luxe3] = packages;

  return (
    <section
      id="services"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border)",
        paddingTop: "6rem",
        paddingBottom: "7rem",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* ── Section header ────────────────────────────── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 mb-16 pb-16"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div>
            <p
              className="reveal text-[11px] font-medium tracking-[0.28em] uppercase mb-6"
              style={{ color: "var(--accent)" }}
            >
              What We Offer
            </p>
            <h2
              className="reveal font-serif text-text-primary leading-[0.9]"
              style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
            >
              Every setup,
              <br />
              <span className="italic text-text-muted">built for your</span>
              <br />
              moment.
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p
              className="reveal text-text-muted leading-relaxed mb-6"
              style={{ fontSize: "0.9rem", maxWidth: "28rem" }}
            >
              Every package is fully customizable — colors, lettering, and props
              tailored to your vision. No two setups are ever the same.
            </p>
            <a
              href="#contact"
              className="reveal self-start inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-text-muted hover:text-text-primary transition-colors duration-300 border-b pb-px"
              style={{ borderColor: "var(--border)" }}
            >
              Get a Custom Quote
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* ── Bento grid ───────────────────────────────── */}
        {/*
          3-col layout:
          Row 1-2: [Signature col-span-2 row-span-2] [Essential]
                                                      [Corporate Arch]
          Row 3:   [Luxe]  [Luxe 2.0]  [Luxe 3.0]
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-auto">
          {/* Signature — featured, 2×2 */}
          <FeaturedCard pkg={signature} />

          {/* Essential */}
          <Card pkg={essential} delay={80} />

          {/* Corporate Balloon Arch */}
          <Card pkg={corporateArch} delay={160} />

          {/* Luxe row */}
          <Card pkg={luxe} delay={0} />
          <Card pkg={luxe2} delay={80} />
          <Card pkg={luxe3} delay={160} />
        </div>

        {/* ── Corporate & Private Events ─────────────────── */}
        <div
          id="corporate"
          className="reveal grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 mt-6 p-8 lg:p-10 rounded-2xl"
          style={{
            background: "var(--bg-primary)",
            border: "1px solid rgba(233,30,140,0.15)",
            borderLeft: "3px solid var(--accent)",
          }}
        >
          <div>
            <p
              className="text-[11px] font-medium tracking-[0.28em] uppercase mb-5"
              style={{ color: "var(--accent)" }}
            >
              Corporate &amp; Private Events
            </p>
            <h3
              className="font-serif text-text-primary leading-[0.95] mb-5"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Structured, on-brand,
              <br className="hidden lg:block" /> and built to scale.
            </h3>
            <p
              className="text-text-muted leading-relaxed"
              style={{ fontSize: "0.875rem", maxWidth: "34rem" }}
            >
              Planning a company party, product launch, or team-building day?
              We partner with corporate event planners to deliver custom
              packages sized to your venue and headcount, with formal
              invoicing, capacity planning, AV-friendly staging, and a
              dedicated event coordinator managing every detail from first
              call to load-out.
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <ul className="space-y-2.5 mb-8">
              {[
                "Custom packages for any capacity",
                "Invoicing & PO-friendly billing",
                "Dedicated event coordinator",
                "AV & venue-compatible staging",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-text-muted"
                  style={{ fontSize: "0.8125rem" }}
                >
                  <span className="text-accent mt-[1px]">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-accent hover:gap-4 transition-all duration-300 self-start"
            >
              Request a Corporate Quote
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* ── Balloon Towers add-on ────────────────────── */}
        <div
          className="reveal flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-4 p-7 lg:p-8 rounded-2xl"
          style={{
            background: "rgba(233,30,140,0.06)",
            border: "1px solid rgba(233,30,140,0.12)",
          }}
        >
          <div>
            <h4
              className="font-serif italic text-[#B01368] mb-2"
              style={{ fontSize: "1.5rem" }}
            >
              {corporateTower.name}
            </h4>
            <ul className="flex flex-wrap gap-x-6 gap-y-1.5">
              {corporateTower.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-text-muted"
                  style={{ fontSize: "0.8rem" }}
                >
                  <span className="text-accent">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-text-muted mb-0.5">
                From
              </p>
              <p
                className="font-serif text-text-primary"
                style={{ fontSize: "2rem", lineHeight: 1 }}
              >
                {corporateTower.price}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase px-4 py-2.5 rounded-full transition-colors duration-300 whitespace-nowrap"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              Book
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* ── Footer note ──────────────────────────────── */}
        <p
          className="reveal text-center text-text-muted mt-12"
          style={{ fontSize: "0.8rem", letterSpacing: "0.05em" }}
        >
          All packages include setup and breakdown. Travel fees may apply
          outside the San Antonio area.
          <a href="#contact" className="ml-2 text-accent hover:underline">
            Ask us about your location.
          </a>
        </p>
      </div>
    </section>
  );
}
