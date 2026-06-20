const featured = {
  text: "Nancy is hands down the BEST of the best. From the moment we reached out, she was professional, creative, and genuinely cared about making everything perfect. The setup was absolutely stunning — better than I even imagined. Every detail was flawless.",
  name: "Eli",
  platform: "Etsy",
};

const reviews = [
  {
    name: "Ana Paula",
    date: "Mar 2026",
    platform: "Etsy",
    text: "Nancy was amazing!! She communicated so well and had it all done in time, even on a time constraint. We got so many compliments on the backdrop. Truly the best balloon arch I've ever seen!",
  },
  {
    name: "Vanessa R. Sandoval",
    date: "Jan 2026",
    platform: "Facebook",
    text: "Everything about our baby shower setup was absolutely beautiful. The balloon arch, backdrop, and floral details were elegant and perfectly done. Our guests couldn't stop complimenting the décor.",
  },
  {
    name: "Lori Anne Monge",
    date: "Jan 2026",
    platform: "Facebook",
    text: "I cannot thank Jalynn enough for making my vision come to life! I even made last-minute additions and she embraced it and delivered like a rockstar. They truly go above and beyond.",
  },
  {
    name: "Mayte",
    date: "Apr 2026",
    platform: "Etsy",
    text: "Absolutely amazing work! The balloon garland was beyond beautiful and truly brought everything together. You can tell how much care and attention to detail went into it.",
  },
  {
    name: "Tori Danielle",
    date: "2025",
    platform: "Google",
    text: "10/10. Pop Bestie Co. is amazing and will be our go-to for any future events. The quality and professionalism are unmatched.",
  },
  {
    name: "Stephanie",
    date: "Dec 2025",
    platform: "Etsy",
    text: "So cute! She made it quickly, I gave her creative freedom and it turned out beyond what I expected. Highly recommend — book them now!",
  },
];

function StarRow() {
  return (
    <div className="flex gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--accent)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col gap-4 p-6 w-[340px]"
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border)",
      }}
    >
      <StarRow />
      <p
        className="text-text-muted leading-relaxed flex-1"
        style={{ fontSize: "0.875rem" }}
      >
        &ldquo;{review.text}&rdquo;
      </p>
      <div
        className="flex items-center justify-between pt-4"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div>
          <p className="font-serif text-text-primary" style={{ fontSize: "1.05rem" }}>
            {review.name}
          </p>
          <p
            className="text-[10px] tracking-[0.15em] uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            {review.date}
          </p>
        </div>
        <span
          className="text-[10px] font-medium tracking-[0.15em] uppercase px-2.5 py-1"
          style={{
            color: "var(--accent)",
            background: "rgba(233,30,140,0.07)",
            border: "1px solid rgba(233,30,140,0.15)",
          }}
        >
          {review.platform}
        </span>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
        paddingTop: "6rem",
        paddingBottom: "7rem",
      }}
    >
      {/* ── Header ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p
              className="reveal text-[11px] font-medium tracking-[0.28em] uppercase mb-5"
              style={{ color: "var(--accent)" }}
            >
              Client Love
            </p>
            <h2
              className="reveal font-serif text-text-primary leading-[0.9]"
              style={{ fontSize: "clamp(3rem, 5vw, 4.75rem)" }}
            >
              Kind words from
              <br />
              <span className="italic text-text-muted">real celebrations.</span>
            </h2>
          </div>
          <div className="reveal flex flex-col items-start md:items-end gap-2">
            <div className="flex gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p
              className="font-serif text-text-muted"
              style={{ fontSize: "1rem" }}
            >
              100% five-star reviews
            </p>
          </div>
        </div>
      </div>

      {/* ── Featured pull-quote ──────────────────────────── */}
      <div
        className="reveal max-w-7xl mx-auto px-6 lg:px-10 mb-16 pb-16"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-4xl">
          {/* Large decorative quote mark */}
          <p
            className="font-serif text-accent leading-none mb-4 select-none"
            style={{ fontSize: "6rem", lineHeight: 0.7, opacity: 0.18 }}
          >
            &ldquo;
          </p>
          <blockquote
            className="font-serif text-text-primary leading-[1.15]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            {featured.text}
          </blockquote>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-8 h-px" style={{ background: "var(--accent)" }} />
            <p className="text-[11px] tracking-[0.2em] uppercase text-text-muted">
              {featured.name} &nbsp;·&nbsp; {featured.platform}
            </p>
          </div>
        </div>
      </div>

      {/* ── Review card marquee ──────────────────────────── */}
      <div className="reviews-track overflow-hidden">
        <div className="animate-marquee-slow flex gap-3 w-max">
          {[...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={review.name + i} review={review} />
          ))}
        </div>
      </div>

    </section>
  );
}
