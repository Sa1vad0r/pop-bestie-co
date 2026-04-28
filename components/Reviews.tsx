const reviews = [
  {
    name: "Ana Paula",
    date: "Mar 1, 2026",
    platform: "Etsy",
    text: "Nancy was amazing!! She communicated so well and had it all done in time, even on a time constraint. We got so many compliments on the backdrop from our guests. Truly the best balloon arch I've ever seen! I am so grateful for her!",
    strengths: ["Punctuality", "Communication", "Pricing", "Item description"],
    stars: 5,
  },
  {
    name: "Eli",
    date: "Feb 20, 2026",
    platform: "Etsy",
    text: "Nancy is hands down the BEST of the best when it comes to balloons. From the moment we reached out, she was professional, creative, and genuinely cared about making everything perfect. The setup was absolutely stunning, better than I even imagined. Every detail was flawless, and you can tell she takes so much pride in her work.",
    strengths: ["Punctuality", "Communication", "Pricing", "Item description"],
    stars: 5,
  },
  {
    name: "Mayte",
    date: "Apr 18, 2026",
    platform: "Etsy",
    text: "Absolutely amazing work! The balloon garland was beyond beautiful and truly brought everything together. You can tell how much care and attention to detail went into it. Highly recommend!",
    strengths: ["Punctuality", "Communication", "Pricing", "Item description"],
    stars: 5,
  },
  {
    name: "Vanessa R Sandoval",
    date: "Jan 17",
    platform: "Facebook",
    text: "Everything about our baby shower setup was absolutely beautiful! The balloon arch, backdrop, and floral details were elegant and perfectly done. The attention to detail and professionalism truly exceeded our expectations, and our guests couldn't stop complimenting the décor. I highly recommend this company to anyone looking to create a memorable and stunning event!",
    strengths: [],
    stars: 5,
  },
  {
    name: "Lori Anne Monge",
    date: "Jan 18",
    platform: "Facebook",
    text: "I cannot thank Jalynn enough for making my vision come to life! My dad's retirement party was made complete with the arrangement she made for our photo area. I even made last minute additions to my order and she embraced it and delivered like a rockstar! They truly go above and beyond.",
    strengths: [],
    stars: 5,
  },
  {
    name: "Stephanie",
    date: "Dec 24, 2025",
    platform: "Etsy",
    text: "So cute! She made it quickly, and I gave her creative freedom and it turned out so cute! Highly recommend!",
    strengths: [],
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
      <div className="max-w-6xl mx-auto px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name + r.date}
              className="bg-brand-soft rounded-2xl p-7 flex flex-col gap-4 border border-brand-blush"
            >
              <span
                className="text-5xl text-brand-pink/20 leading-none select-none"
                style={{ fontFamily: "Georgia, serif" }}
              >
                &ldquo;
              </span>
              <Stars count={r.stars} />
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{r.text}</p>
              {r.strengths.length > 0 && (
                <p className="text-xs text-gray-400">
                  Strengths: {r.strengths.join(" · ")}
                </p>
              )}
              <div className="pt-3 border-t border-brand-blush flex items-center justify-between">
                <div>
                  <p className="font-semibold text-brand-deep text-sm">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.date}</p>
                </div>
                <span className="text-xs font-medium text-brand-pink/60 border border-brand-pink/20 rounded-full px-2.5 py-0.5">
                  {r.platform}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tori Danielle highlight */}
        <div className="mt-10 text-center">
          <div className="inline-block bg-brand-soft border border-brand-blush rounded-2xl px-8 py-5">
            <Stars count={5} />
            <p className="text-gray-700 text-base mt-2 font-medium">
              &ldquo;10/10 ✨ Pop Bestie Co. is amazing and will be our go-to for any future events!&rdquo;
            </p>
            <p className="text-sm text-brand-pink mt-2">— Tori Danielle</p>
          </div>
        </div>
      </div>
    </section>
  );
}
