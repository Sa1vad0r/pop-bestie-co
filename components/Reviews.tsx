const reviews = [
  {
    name: "Jessica M.",
    event: "Birthday Party",
    text: "Pop Bestie completely transformed our venue! The balloon garland was absolutely stunning and everything was set up perfectly. Our guests couldn't stop taking photos. 10/10 would book again!",
    stars: 5,
  },
  {
    name: "Brianna T.",
    event: "Baby Shower",
    text: "Nancy and Jalynn went above and beyond to bring my vision to life. The backdrop was even more beautiful in person. I was in tears — in the best way possible. Thank you so much!",
    stars: 5,
  },
  {
    name: "Kayla R.",
    event: "Bridal Shower",
    text: "From start to finish, the experience was flawless. They were so communicative, professional, and the setup was *chef's kiss*. My bride was obsessed. Highly recommend the Luxe Experience!",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-brand-pink" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-brand-pink text-xs font-semibold tracking-[0.3em] uppercase mb-3">
          Client Love
        </p>
        <h2
          className="text-center text-5xl text-brand-deep mb-4"
          style={{ fontFamily: "var(--font-dancing-script)" }}
        >
          Kind Words from Our Clients
        </h2>
        <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
          Real reviews from real celebrations — we love making memories with you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-brand-soft rounded-2xl p-8 flex flex-col gap-4 border border-brand-blush"
            >
              {/* Quote mark */}
              <span
                className="text-5xl text-brand-pink/20 leading-none select-none"
                style={{ fontFamily: "Georgia, serif" }}
              >
                &ldquo;
              </span>
              <Stars count={r.stars} />
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{r.text}</p>
              <div className="pt-2 border-t border-brand-blush">
                <p className="font-semibold text-brand-deep text-sm">{r.name}</p>
                <p className="text-xs text-brand-pink">{r.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
