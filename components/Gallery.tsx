import Image from "next/image";

/*
  6-column grid layout (verified, no gaps):
  Photo 1  col-span-2, row-span-2  →  (r1-2, c1-2)
  Photo 2  col-span-2, row-span-1  →  (r1,   c3-4)
  Photo 3  col-span-1, row-span-1  →  (r1,   c5)
  Photo 4  col-span-1, row-span-1  →  (r1,   c6)
  Photo 5  col-span-1, row-span-1  →  (r2,   c3)
  Photo 6  col-span-2, row-span-2  →  (r2-3, c4-5)
  Photo 7  col-span-1, row-span-1  →  (r2,   c6)
  Photo 8  col-span-2, row-span-1  →  (r3,   c1-2)
  Photo 9  col-span-1, row-span-1  →  (r3,   c3)
  Photo 10 col-span-1, row-span-1  →  (r3,   c6)
  Photo 11 col-span-2, row-span-1  →  (r4,   c1-2)
  Photo 12 col-span-1, row-span-1  →  (r4,   c3)
  Photo 13 col-span-3, row-span-1  →  (r4,   c4-6)
  Row sums: r1=6 ✓  r2=6 ✓  r3=6 ✓  r4=6 ✓
*/
const photos = [
  { src: "/images/gallery-sesame-street.jpg",    alt: "Sesame Street Birthday",          col: 2, row: 2 },
  { src: "/images/gallery-blue-sage-gold.jpg",   alt: "Blue, Sage & Gold Backdrop",      col: 2, row: 1 },
  { src: "/images/gallery-wildflower.jpg",       alt: "A Little Wildflower Baby Shower", col: 1, row: 1 },
  { src: "/images/gallery-hunny.jpg",            alt: "A Little Hunny Baby Shower",      col: 1, row: 1 },
  { src: "/images/gallery-baby-guerrero.jpg",    alt: "Baby Guerrero Setup",             col: 1, row: 1 },
  { src: "/images/gallery-mrs-esquivel.jpg",     alt: "Future Mrs. Esquivel",            col: 2, row: 2 },
  { src: "/images/gallery-baby-losoya.jpg",      alt: "Baby Losoya Safari",              col: 1, row: 1 },
  { src: "/images/gallery-twenty-fine.jpg",      alt: "Twenty Fine Birthday",            col: 2, row: 1 },
  { src: "/images/gallery-sonic.jpg",            alt: "Kobe Turns 6 — Sonic Theme",     col: 1, row: 1 },
  { src: "/images/gallery-xoxo.jpg",             alt: "XOXO Valentine Setup",            col: 1, row: 1 },
  { src: "/images/gallery-adventure-awaits.jpg", alt: "Adventure Awaits Baby Shower",   col: 2, row: 1 },
  { src: "/images/gallery-baby-legg-1.jpg",      alt: "Baby Legg Is Brewing",           col: 1, row: 1 },
  { src: "/images/gallery-baby-legg-2.jpg",      alt: "Baby Legg Luxe Setup",           col: 3, row: 1 },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
        paddingTop: "6rem",
        paddingBottom: "7rem",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ──────────────────────────────────────── */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-10"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div>
            <p
              className="reveal text-[11px] font-medium tracking-[0.28em] uppercase mb-5"
              style={{ color: "var(--accent)" }}
            >
              Our Work
            </p>
            <h2
              className="reveal font-serif text-text-primary leading-[0.9]"
              style={{ fontSize: "clamp(3rem, 5vw, 4.75rem)" }}
            >
              Real setups,
              <br />
              <span className="italic text-text-muted">real celebrations.</span>
            </h2>
          </div>

          <div className="reveal flex flex-col items-start md:items-end gap-2">
            <p
              className="font-serif text-text-muted"
              style={{ fontSize: "clamp(3.5rem, 6vw, 5.5rem)", lineHeight: 1 }}
            >
              {photos.length}
            </p>
            <p className="text-[10px] tracking-[0.25em] uppercase text-text-muted">
              Setups &amp; counting
            </p>
          </div>
        </div>

        {/* ── Desktop: asymmetric mosaic ───────────────────── */}
        <div
          className="hidden md:grid gap-2"
          style={{
            gridTemplateColumns: "repeat(6, 1fr)",
            gridAutoRows: "260px",
          }}
        >
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative overflow-hidden group cursor-pointer"
              style={{
                gridColumn: `span ${photo.col}`,
                gridRow: `span ${photo.row}`,
              }}
            >
              {/* Image */}
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes={`${Math.round((photo.col / 6) * 100)}vw`}
              />

              {/* Caption overlay — CSS group-hover, no JS */}
              <div
                className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background:
                    "linear-gradient(to top, rgba(12,11,10,0.78) 0%, rgba(12,11,10,0.1) 55%, transparent 100%)",
                }}
              >
                <span
                  className="block px-5 pb-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400 text-[11px] font-medium tracking-[0.15em] uppercase text-white/90"
                >
                  {photo.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile: 2-column grid ────────────────────────── */}
        <div
          className="md:hidden grid grid-cols-2 gap-2"
          style={{ gridAutoRows: "180px" }}
        >
          {photos.map((photo) => (
            <div
              key={photo.src + "-m"}
              className="relative overflow-hidden"
              style={{ gridColumn: photo.col >= 3 ? "span 2" : "span 1" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          ))}
        </div>

        {/* ── Footer link ──────────────────────────────────── */}
        <div className="reveal flex justify-end mt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-text-muted hover:text-text-primary transition-colors duration-300 border-b pb-px"
            style={{ borderColor: "var(--border)" }}
          >
            Book your setup
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
