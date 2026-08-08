import Image from "next/image";

const facts = [
  { label: "Est.", value: "2024" },
  { label: "Based in", value: "San Antonio, TX" },
  { label: "By day", value: "Nurses" },
  { label: "By passion", value: "Event artists" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border)",
        paddingTop: "6rem",
        paddingBottom: "7rem",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Asymmetric split: 44% photo / 56% content */}
        <div className="grid grid-cols-1 lg:grid-cols-[44%_56%] gap-16 lg:gap-24 items-start">
          {/* ── Photo panel ───────────────────────────────── */}
          <div className="reveal relative self-start">
            {/* Decorative offset frame in accent */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: 0,
                transform: "translate(14px, 14px)",
                border: "1.5px solid var(--accent)",
                opacity: 0.22,
              }}
            />

            {/* Photo */}
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src="/images/about-nancy-jalynn.jpg"
                alt="Jalynn and Nancy  — Pop Bestie Co."
                fill
                className="object-cover object-top"
                sizes="(max-width: 1023px) 100vw, 44vw"
              />
              {/* Subtle warm tint at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/4 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(233,30,140,0.04), transparent)",
                }}
              />
            </div>

            {/* Floating name tag — bottom left corner */}
            <div
              className="absolute bottom-6 left-6 px-4 py-3"
              style={{
                background: "rgba(250,248,245,0.92)",
                backdropFilter: "blur(8px)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="font-serif text-text-primary"
                style={{ fontSize: "1.1rem" }}
              >
                Jalynn &amp; Nancy
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-text-muted mt-0.5">
                Founders, Pop Bestie Co.
              </p>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-max px-4 py-2 rounded-full bg-white shadow-md border border-brand-blush text-xs font-semibold text-brand-deep tracking-wide">
              Nancy &amp; Jalynn, Founders
            </div>
          </div>

          {/* ── Content panel ─────────────────────────────── */}
          <div className="flex flex-col justify-start lg:pt-6">
            {/* Eyebrow */}
            <p
              className="reveal text-[11px] font-medium tracking-[0.28em] uppercase mb-6"
              style={{ color: "var(--accent)" }}
            >
              The Faces Behind the Magic
            </p>

            {/* Heading */}
            <h2
              className="reveal font-serif text-text-primary leading-[0.88] mb-8"
              style={{ fontSize: "clamp(3rem, 4.5vw, 4.75rem)" }}
            >
              Meet Jalynn
              <br />
              &amp; Nancy.
            </h2>

            {/* Body */}
            <div
              className="reveal space-y-5 text-text-muted leading-relaxed mb-10"
              style={{ fontSize: "0.9375rem", maxWidth: "34rem" }}
            >
              <p>
                We&apos;re the faces behind Pop Bestie — two nurses by day,
                event-loving perfectionists by passion.
              </p>
              <p>
                We live for all things elevated, colorful, and extra. We believe
                every celebration deserves a genuine &ldquo;wow&rdquo; moment —
                and we&apos;ve always been the hosts, the planners, the ones who
                go above and beyond for the people they love.
              </p>
              <p>
                Starting Pop Bestie just made sense. That same care now shows
                up in everything we take on — from backyard birthdays to
                corporate celebrations across San Antonio. Thank you for being
                here.
              </p>
            </div>

            {/* Signature line */}
            <p
              className="reveal font-serif italic text-accent mb-12"
              style={{ fontSize: "2rem", lineHeight: 1.1 }}
            >
              Let&apos;s make some magic.
            </p>

            {/* Fact grid */}
            <div
              className="reveal grid grid-cols-2 gap-x-6 gap-y-0 pt-8"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="py-5"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <p
                    className="text-[10px] tracking-[0.22em] uppercase mb-1.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {f.label}
                  </p>
                  <p
                    className="font-serif text-text-primary"
                    style={{ fontSize: "1.5rem", lineHeight: 1 }}
                  >
                    {f.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
