import Image from "next/image";

const badges = ["Est. 2024", "San Antonio, TX", "Woman-Owned & Operated"];

const stats = [
  { value: "2024", label: "Founded" },
  { value: "100%", label: "5-Star Reviews" },
  { value: "2", label: "Founders, Nurses Turned Artists" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-soft">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-brand-pink text-xs font-semibold tracking-[0.3em] uppercase mb-3">
          The Faces Behind the Magic
        </p>
        <h2
          className="text-center text-5xl text-brand-deep mb-16"
          style={{ fontFamily: "var(--font-dancing-script)" }}
        >
          About Us
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Real photo */}
          <div className="shrink-0 relative mx-auto md:mx-0">
            <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-brand-pink/20 shadow-xl">
              <Image
                src="/images/about-nancy-jalynn.jpg"
                alt="Nancy and Jalynn — Pop Bestie Co."
                width={2000}
                height={2500}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-max px-4 py-2 rounded-full bg-white shadow-md border border-brand-blush text-xs font-semibold text-brand-deep tracking-wide">
              Nancy &amp; Jalynn, Founders
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full bg-white border border-brand-blush text-brand-deep text-[11px] font-semibold tracking-wide uppercase"
                >
                  {badge}
                </span>
              ))}
            </div>

            <p className="text-2xl font-semibold text-brand-deep mb-4">
              Hi! 🩷 Meet Nancy &amp; Jalynn.
            </p>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We&apos;re two nurses by day, event-loving perfectionists by
                passion &mdash; the founders (and the hands on every backdrop)
                behind Pop Bestie.
              </p>
              <p>
                We believe every celebration deserves a genuine &quot;wow&quot;
                moment. We&apos;ve always been the hosts, the planners, the ones
                who go above and beyond for the people we love &mdash; so
                starting a business built around that felt like second nature.
              </p>
              <p>
                That same care shows up in everything we take on, from backyard
                birthdays to corporate celebrations across San Antonio. Thank
                you for being here.
              </p>
            </div>

            {/* Small-business stat strip */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-brand-blush">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-bold text-brand-deep leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-gray-500 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="text-2xl text-brand-pink mt-8"
              style={{ fontFamily: "var(--font-dancing-script)" }}
            >
              With love, Jalynn &amp; Nancy 🎀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
