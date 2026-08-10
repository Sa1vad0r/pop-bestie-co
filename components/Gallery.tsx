"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
    <section id="gallery" className="py-24 bg-brand-blush">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-brand-pink text-xs font-semibold tracking-[0.3em] uppercase mb-3">
          Our Work
        </p>
        <h2
          className="text-center text-5xl text-brand-deep mb-4"
          style={{ fontFamily: "var(--font-dancing-script)" }}
        >
          Explore Our Gallery
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          A peek at the magic we bring to every event setup.
        </p>

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
