import Image from "next/image";

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

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Real photo */}
          <div className="shrink-0">
            <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-brand-pink/20 shadow-xl">
              <Image
                src="/images/about-nancy-jalynn.jpg"
                alt="Nancy and Jalynn — Pop Bestie Co."
                width={2000}
                height={2500}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p className="text-2xl font-semibold text-brand-deep">
              Hi! 🩷 Meet Nancy &amp; Jalynn.
            </p>
            <p>
              We&apos;re the faces behind Pop Bestie! Two nurses by day, event-loving
              perfectionists by passion.
            </p>
            <p>
              We live for all things pink, sparkly, and extra, and we believe every event
              deserves that &quot;wow&quot; moment. We&apos;ve always been the hosts, the
              planners, the ones going above and beyond&hellip; so starting Pop Bestie just
              made sense.
            </p>
            <p>Thanks for being here!</p>
            <p
              className="text-3xl text-brand-pink"
              style={{ fontFamily: "var(--font-dancing-script)" }}
            >
              Let&apos;s make some magic 🎀✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
