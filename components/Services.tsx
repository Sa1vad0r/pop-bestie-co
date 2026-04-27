const packages = [
  {
    name: "Basic Set Up",
    tagline: "Perfect for intimate celebrations and simple, stylish setups.",
    description:
      "Features a 6.6 ft wooden backdrop in your choice of color, paired with a 7 ft balloon garland styled on the left for a modern, eye-catching look. The garland can be customized with up to two colors, finished with custom vinyl lettering.",
    includes: [
      "6.6 ft wooden backdrop (color of your choice)",
      "7 ft balloon garland (up to 2 colors)",
      "Custom vinyl lettering",
    ],
    price: "$300",
    highlight: false,
  },
  {
    name: "Essential Set Up",
    tagline: "A clean, balanced design that creates a polished and elevated backdrop.",
    description:
      "Choose between a 7.2 ft or 6.6 ft wooden backdrop styled in your selected color. Features balloon garlands on both sides in up to three colors for a full yet refined look. Completed with custom vinyl lettering.",
    includes: [
      "7.2 ft or 6.6 ft wooden backdrop (color of your choice)",
      "Full balloon garland on left & half garland on right (up to 3 colors)",
      "Custom vinyl lettering",
    ],
    price: "$350",
    highlight: false,
  },
  {
    name: "Signature Set Up",
    tagline: "A refined design that blends elegance with personality.",
    description:
      "Includes a 7.2 ft or 6.6 ft wooden backdrop in your chosen color, paired with balloon garlands on both sides. Styled in up to three colors with custom vinyl lettering, plus a 3 ft character prop for a standout detail.",
    includes: [
      "7.2 ft or 6.6 ft wooden backdrop (color of your choice)",
      "Full balloon garland on left & half garland on right (up to 3 colors)",
      "Custom vinyl lettering",
      "One 3 ft character prop",
    ],
    price: "$400",
    highlight: true,
  },
  {
    name: "Luxe Experience",
    tagline: "A layered, elevated design with depth and visual impact.",
    description:
      "Features two wooden backdrops (7.2 ft and 6.6 ft) in your choice of colors. An 8 ft balloon garland on the left and a 5 ft garland on the right frame the design, styled in up to three colors with custom vinyl lettering and a character prop.",
    includes: [
      "Two wooden backdrops (7.2 ft & 6.6 ft, colors of your choice)",
      "8 ft balloon garland (left) & 5 ft garland (right) (up to 3 colors)",
      "Custom vinyl lettering",
      "One 3 ft character prop",
    ],
    price: "$550",
    highlight: false,
  },
  {
    name: "Luxe Experience 2.0",
    tagline: "A modern, statement design with movement and texture.",
    description:
      "Features a 7.2 ft backdrop paired with a 6.6 ft wooden open ruffle arch. An 8 ft balloon garland flows along the left side and through the open arch in up to three colors. Completed with custom vinyl lettering and a 3 ft character prop.",
    includes: [
      "7.2 ft wooden backdrop (color of your choice)",
      "6.6 ft wooden open ruffle arch",
      "8 ft balloon garland (left) with flow-through arch design (up to 3 colors)",
      "Custom vinyl lettering",
      "One 3 ft character prop",
    ],
    price: "$600",
    highlight: false,
  },
  {
    name: "Luxe Experience 3.0",
    tagline: "A high-impact, fully layered design for an unforgettable celebration.",
    description:
      "Showcases three wooden arches (7.2 ft, 6.6 ft, and 6.6 ft open ruffle) with customized backdrops. A 7 ft balloon garland on the left and an 8 ft flow-through arch design create a seamless statement look in up to three colors.",
    includes: [
      "Wooden arches (7.2 ft, 6.6 ft & 6.6 ft open ruffle)",
      "7.2 ft & 6.6 ft backdrops (colors of your choice)",
      "7 ft balloon garland (left) & 8 ft flow-through arch garland (up to 3 colors)",
      "Custom vinyl lettering",
      "One 3 ft character prop",
    ],
    price: "$700",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-brand-pink text-xs font-semibold tracking-[0.3em] uppercase mb-3">
          What We Offer
        </p>
        <h2
          className="text-center text-5xl text-brand-deep mb-4"
          style={{ fontFamily: "var(--font-dancing-script)" }}
        >
          Our Services
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          Every package is fully customizable — colors, lettering, and props tailored to your
          vision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-8 flex flex-col gap-4 transition-shadow hover:shadow-xl ${
                pkg.highlight
                  ? "bg-brand-pink text-white shadow-lg shadow-brand-pink/30"
                  : "bg-brand-soft border border-brand-blush"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-deep text-white text-xs font-semibold tracking-widest uppercase rounded-full">
                  Most Popular
                </span>
              )}

              <div>
                <h3
                  className={`text-2xl mb-1 ${
                    pkg.highlight ? "text-white" : "text-brand-deep"
                  }`}
                  style={{ fontFamily: "var(--font-dancing-script)" }}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-sm italic ${
                    pkg.highlight ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {pkg.tagline}
                </p>
              </div>

              <p
                className={`text-sm leading-relaxed ${
                  pkg.highlight ? "text-white/90" : "text-gray-600"
                }`}
              >
                {pkg.description}
              </p>

              <div>
                <p
                  className={`text-xs font-bold tracking-widest uppercase mb-2 ${
                    pkg.highlight ? "text-white/70" : "text-brand-pink"
                  }`}
                >
                  Package Includes:
                </p>
                <ul className="space-y-1">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className={`text-sm flex gap-2 ${
                        pkg.highlight ? "text-white/90" : "text-gray-600"
                      }`}
                    >
                      <span
                        className={`mt-1 shrink-0 w-1.5 h-1.5 rounded-full ${
                          pkg.highlight ? "bg-white" : "bg-brand-pink"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4 flex items-center justify-between">
                <div>
                  <p
                    className={`text-xs tracking-widest uppercase ${
                      pkg.highlight ? "text-white/60" : "text-gray-400"
                    }`}
                  >
                    Starting at
                  </p>
                  <p
                    className={`text-3xl font-bold ${
                      pkg.highlight ? "text-white" : "text-brand-deep"
                    }`}
                  >
                    {pkg.price}
                  </p>
                </div>
                <a
                  href="#contact"
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-colors ${
                    pkg.highlight
                      ? "bg-white text-brand-pink hover:bg-brand-blush"
                      : "bg-brand-pink text-white hover:bg-brand-deep"
                  }`}
                >
                  Book This
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
