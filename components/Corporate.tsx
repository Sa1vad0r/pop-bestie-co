const highlights = [
  "Custom packages for any capacity",
  "Invoicing & PO-friendly billing",
  "Dedicated event coordinator",
  "AV & venue-compatible staging",
];

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

export default function Corporate() {
  return (
    <div
      id="corporate"
      className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 mt-6 p-8 lg:p-10 rounded-2xl bg-brand-soft border border-brand-blush border-l-4 border-l-brand-pink"
    >
      <div>
        <p className="text-brand-pink text-[11px] font-medium tracking-[0.28em] uppercase mb-5">
          Corporate &amp; Private Events
        </p>
        <h3
          className="text-brand-deep leading-[0.95] mb-5"
          style={{ fontFamily: "var(--font-dancing-script)", fontSize: "clamp(2rem, 3vw, 2.75rem)" }}
        >
          Structured, on-brand,
          <br className="hidden lg:block" /> and built to scale.
        </h3>
        <p className="text-gray-600 leading-relaxed" style={{ fontSize: "0.875rem", maxWidth: "34rem" }}>
          Planning a company party, product launch, or team-building day? We partner with
          corporate event planners to deliver custom packages sized to your venue and
          headcount, with formal invoicing, capacity planning, AV-friendly staging, and a
          dedicated event coordinator managing every detail from first call to load-out.
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <ul className="space-y-2.5 mb-8">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-600" style={{ fontSize: "0.8125rem" }}>
              <span className="text-brand-pink">
                <Check />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-pink hover:gap-4 transition-all duration-300 self-start"
        >
          Request a Corporate Quote
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
}
