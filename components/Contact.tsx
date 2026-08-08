"use client";

import { useState } from "react";

const packages = [
  "The Essential Set Up",
  "The Signature Set Up",
  "The Corporate Balloon Arch",
  "The Luxe Experience",
  "The Luxe Experience 2.0",
  "The Luxe Experience 3.0",
  "Balloon Towers",
  "Not Sure / Need Help Choosing",
];

const eventTypes = [
  "Birthday",
  "Baby Shower",
  "Bridal Shower",
  "Corporate Event",
  "Other",
];

const referralSources = ["Instagram", "Facebook", "Google", "Referral", "Other"];

const paymentMethods = [
  "Card (Stripe / Square / Website Checkout)",
  "Cash App",
  "Venmo",
  "Apple Pay",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 transition";

const labelClass = "block text-xs font-semibold tracking-wide text-gray-500 uppercase mb-1.5";

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px flex-1 bg-brand-blush" />
      <h3
        className="text-xl text-brand-deep shrink-0"
        style={{ fontFamily: "var(--font-dancing-script)" }}
      >
        {children}
      </h3>
      <div className="h-px flex-1 bg-brand-blush" />
    </div>
  );
}

export default function Contact() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedEventType, setSelectedEventType] = useState<string | null>(null);
  const [characterProp, setCharacterProp] = useState<"yes" | "no" | null>(null);
  const [referral, setReferral] = useState<string | null>(null);
  const [payment, setPayment] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-brand-soft">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-brand-pink/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2
            className="text-4xl text-brand-deep mb-4"
            style={{ fontFamily: "var(--font-dancing-script)" }}
          >
            We&apos;ve Got Your Inquiry!
          </h2>
          <p className="text-gray-500">
            Thank you for reaching out to Pop Bestie Co.! We&apos;ll review your inquiry and
            contact you within <strong>24–48 business hours</strong> to confirm availability and
            next steps.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-brand-soft">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-center text-brand-pink text-xs font-semibold tracking-[0.3em] uppercase mb-3">
          Let&apos;s Make It Happen
        </p>
        <h2
          className="text-center text-5xl text-brand-deep mb-4"
          style={{ fontFamily: "var(--font-dancing-script)" }}
        >
          Event Inquiry Form
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          We&apos;re excited to bring your vision to life. Please complete the form below with as
          much detail as possible so we can curate the perfect setup for your event.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-sm border border-brand-blush p-8 md:p-10 space-y-10"
        >
          {/* Client Information */}
          <div>
            <SectionHeader>Client Information</SectionHeader>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input required type="text" placeholder="Jane Smith" className={inputClass} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <input required type="tel" placeholder="(555) 000-0000" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input required type="email" placeholder="you@example.com" className={inputClass} />
                </div>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div>
            <SectionHeader>Event Details</SectionHeader>
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Event Date *</label>
                  <input required type="date" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Event Time *</label>
                  <input required type="time" className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Event Location / Venue Address *</label>
                <input required type="text" placeholder="123 Party Lane, City, State" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Type of Event *</label>
                <div className="flex flex-wrap gap-2">
                  {eventTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedEventType(type)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                        selectedEventType === type
                          ? "bg-brand-pink text-white border-brand-pink"
                          : "bg-white text-gray-600 border-gray-200 hover:border-brand-pink hover:text-brand-pink"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Package Selection */}
          <div>
            <SectionHeader>Package Selection</SectionHeader>
            <label className={labelClass}>Which package are you interested in?</label>
            <div className="space-y-2">
              {packages.map((pkg) => (
                <label
                  key={pkg}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                    selectedPackage === pkg
                      ? "border-brand-pink bg-brand-pink/5"
                      : "border-gray-100 hover:border-brand-pink/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="package"
                    value={pkg}
                    checked={selectedPackage === pkg}
                    onChange={() => setSelectedPackage(pkg)}
                    className="accent-brand-pink"
                  />
                  <span className="text-sm text-gray-700">{pkg}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Design Preferences */}
          <div>
            <SectionHeader>Design Preferences</SectionHeader>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Theme / Inspiration (optional)</label>
                <input type="text" placeholder="e.g. Disco Cowgirl, Under the Sea, Hello Kitty…" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Upload Inspiration Photo (optional)</label>
                <div className="w-full rounded-xl border-2 border-dashed border-gray-200 hover:border-brand-pink transition-colors p-6 text-center cursor-pointer">
                  <input type="file" accept="image/*" className="hidden" id="inspo-upload" />
                  <label htmlFor="inspo-upload" className="cursor-pointer">
                    <svg className="w-8 h-8 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-gray-400">Click to upload a photo</p>
                  </label>
                </div>
              </div>
              <div>
                <label className={labelClass}>Color Scheme</label>
                <input type="text" placeholder="e.g. Hot pink, white & gold" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Custom Text for Vinyl or Sign</label>
                <input type="text" placeholder='e.g. "Happy 30th, Sofia!" or "Baby Sofia"' className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Character Prop Needed?</label>
                <div className="flex gap-4">
                  {(["yes", "no"] as const).map((v) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="character-prop"
                        value={v}
                        checked={characterProp === v}
                        onChange={() => setCharacterProp(v)}
                        className="accent-brand-pink"
                      />
                      <span className="text-sm text-gray-700 capitalize">{v}</span>
                    </label>
                  ))}
                </div>
                {characterProp === "yes" && (
                  <input
                    type="text"
                    placeholder="Please specify the character"
                    className={`${inputClass} mt-3`}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div>
            <SectionHeader>Additional Details</SectionHeader>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Special Requests or Important Notes</label>
                <textarea
                  rows={4}
                  placeholder="Anything else we should know about your event…"
                  className={`${inputClass} resize-none`}
                />
              </div>
              <div>
                <label className={labelClass}>How did you hear about us?</label>
                <div className="flex flex-wrap gap-2">
                  {referralSources.map((src) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setReferral(src)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                        referral === src
                          ? "bg-brand-pink text-white border-brand-pink"
                          : "bg-white text-gray-600 border-gray-200 hover:border-brand-pink hover:text-brand-pink"
                      }`}
                    >
                      {src}
                    </button>
                  ))}
                </div>
                {referral === "Other" && (
                  <input type="text" placeholder="Please specify" className={`${inputClass} mt-3`} />
                )}
              </div>
            </div>
          </div>

          {/* Reservation & Payment */}
          <div>
            <SectionHeader>Reservation &amp; Payment</SectionHeader>
            <div className="bg-brand-blush rounded-2xl p-5 mb-6 text-sm text-gray-600 leading-relaxed">
              <p className="font-semibold text-brand-deep mb-1">Deposit Policy</p>
              <p>
                A <strong>50% non-refundable deposit</strong> is required to secure your selected
                package and event date. The remaining balance is due prior to or on the day of
                setup. Service will not begin until the full balance has been received.
              </p>
              <p className="mt-2">
                Corporate clients receive itemized invoicing and PO-based billing options — see
                our <a href="#corporate" className="text-brand-pink font-semibold underline">Corporate &amp; Private Events</a> section for details.
              </p>
            </div>
            <div>
              <label className={labelClass}>Preferred Payment Method</label>
              <div className="space-y-2">
                {paymentMethods.map((method) => (
                  <label
                    key={method}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                      payment === method
                        ? "border-brand-pink bg-brand-pink/5"
                        : "border-gray-100 hover:border-brand-pink/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={payment === method}
                      onChange={() => setPayment(method)}
                      className="accent-brand-pink"
                    />
                    <span className="text-sm text-gray-700">{method}</span>
                  </label>
                ))}
              </div>
              {payment === "Other" && (
                <input type="text" placeholder="Please specify" className={`${inputClass} mt-3`} />
              )}
            </div>
            <p className="mt-4 text-xs text-gray-400 leading-relaxed">
              Once your inquiry is reviewed and your date is confirmed, you will receive an invoice
              with a secure payment link to complete your deposit.
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-brand-pink text-white font-semibold text-sm tracking-widest uppercase hover:bg-brand-deep transition-colors shadow-lg shadow-brand-pink/30"
          >
            Submit My Inquiry
          </button>

          <p className="text-center text-xs text-gray-400">
            We&apos;ll be in touch within 24–48 business hours to confirm availability and next steps.
          </p>
        </form>
      </div>
    </section>
  );
}
