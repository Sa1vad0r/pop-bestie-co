"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
  { src: "/images/gallery-baby-k-sage-gold.jpg", alt: "Baby K Sage & Gold Baby Shower" },
  { src: "/images/gallery-baby-thoma-sage-blue.jpg", alt: "Baby Thoma Sage, Blue & Gold Shower" },
  { src: "/images/gallery-kpop-demon-hunters.jpg", alt: "K-Pop Demon Hunters Themed Party" },
  { src: "/images/gallery-tea-and-testimonies.jpg", alt: "Tea and Testimonies Event" },
  { src: "/images/gallery-milkshake-stone-oak.jpg", alt: "MilkShake Factory Stone Oak Grand Opening" },
  { src: "/images/gallery-aries-rodeo.jpg", alt: "Aries's Rodeo Birthday" },
  { src: "/images/gallery-locally-grown.jpg", alt: "Locally Grown Baby Shower" },
  { src: "/images/gallery-back-to-school.jpg", alt: "Back to School 2026" },
  { src: "/images/gallery-milkshake-navy-silver.jpg", alt: "MilkShake Factory Navy & Silver Setup" },
  { src: "/images/gallery-patriotic-garland.jpg", alt: "Patriotic Red, White & Blue Garland" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

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
            {/* <p
              className="font-serif text-text-muted"
              style={{ fontSize: "clamp(3.5rem, 6vw, 5.5rem)", lineHeight: 1 }}
            >
              300+
            </p>
            <p className="text-[10px] tracking-[0.25em] uppercase text-text-muted">
              Setups &amp; counting
            </p> */}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setSelected(i)}
              className="block w-full overflow-hidden rounded-2xl group cursor-zoom-in"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1050}
                height={1400}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </button>
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
          </a>
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute top-5 right-5 text-white text-3xl leading-none hover:opacity-70"
            aria-label="Close"
          >
            &times;
          </button>
          <Image
            src={photos[selected].src}
            alt={photos[selected].alt}
            width={1050}
            height={1400}
            className="max-h-[88vh] max-w-[92vw] w-auto h-auto object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
