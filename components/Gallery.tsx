const placeholders = [
  { span: "col-span-2 row-span-2", label: "Birthday Setup" },
  { span: "", label: "Baby Shower" },
  { span: "", label: "Bridal Shower" },
  { span: "", label: "Balloon Garland" },
  { span: "col-span-2", label: "Luxe Experience Setup" },
  { span: "", label: "Character Prop" },
  { span: "", label: "Corporate Event" },
  { span: "", label: "Custom Backdrop" },
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

        {/* Responsive grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {placeholders.map((item, i) => (
            <div
              key={i}
              className={`${item.span} rounded-2xl overflow-hidden bg-brand-pink/10 border-2 border-brand-pink/20 flex items-center justify-center group cursor-pointer hover:border-brand-pink transition-colors`}
            >
              <div className="text-center p-4">
                <div className="w-10 h-10 rounded-full bg-brand-pink/20 flex items-center justify-center mx-auto mb-2">
                  <svg
                    className="w-5 h-5 text-brand-pink/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-brand-pink/70 text-xs font-medium">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-gray-400 text-sm">
          📸 Photos coming soon — follow us on Instagram for a sneak peek!
        </p>
      </div>
    </section>
  );
}
