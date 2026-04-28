import Image from "next/image";

const photos = [
  { src: "/images/gallery-sesame-street.jpg", alt: "Sesame Street Birthday Setup", span: "col-span-1 row-span-2" },
  { src: "/images/gallery-blue-sage-gold.jpg", alt: "Blue, Sage & Gold Backdrop", span: "" },
  { src: "/images/gallery-wildflower.jpg", alt: "A Little Wildflower Baby Shower", span: "" },
  { src: "/images/gallery-hunny.jpg", alt: "A Little Hunny Baby Shower", span: "" },
  { src: "/images/gallery-baby-guerrero.jpg", alt: "Baby Guerrero Setup", span: "" },
  { src: "/images/gallery-mrs-esquivel.jpg", alt: "Future Mrs. Esquivel Bridal Shower", span: "col-span-1 row-span-2" },
  { src: "/images/gallery-baby-losoya.jpg", alt: "Baby Losoya Safari Setup", span: "" },
  { src: "/images/gallery-twenty-fine.jpg", alt: "Twenty Fine Birthday", span: "" },
  { src: "/images/gallery-sonic.jpg", alt: "Kobe Turns 6 — Sonic Theme", span: "" },
  { src: "/images/gallery-xoxo.jpg", alt: "XOXO Valentine Setup", span: "" },
  { src: "/images/gallery-adventure-awaits.jpg", alt: "Adventure Awaits Baby Shower", span: "col-span-2" },
  { src: "/images/gallery-baby-legg-1.jpg", alt: "Baby Legg Is Brewing", span: "" },
  { src: "/images/gallery-baby-legg-2.jpg", alt: "Baby Legg Luxe Setup", span: "" },
];

export default function Gallery() {
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[220px]">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`${photo.span} rounded-2xl overflow-hidden group`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow">
                    {photo.alt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
