"use client";

import { useRef, useState } from "react";

const packages = [
  "The Basic Set Up",
  "The Essential Set Up",
  "The Signature Set Up",
  "The Luxe Experience",
  "The Luxe Experience 2.0",
  "The Luxe Experience 3.0",
  "Not Sure / Need Help Choosing",
];

const eventTypes = ["Birthday", "Baby Shower", "Bridal Shower", "Corporate Event", "Other"];
const referralSources = ["Instagram", "Facebook", "Google", "Referral", "Other"];
const paymentMethods = [
  "Card (Stripe / Square / Website Checkout)",
  "Cash App",
  "Venmo",
  "Apple Pay",
  "Other",
];

const input =
  "w-full border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200";

const inputBorder = { border: "1px solid var(--border)" } as React.CSSProperties;
const inputFocusBorder = "focus:ring-0";

const label = "block text-[10px] font-medium tracking-[0.22em] uppercase text-text-muted mb-2";

function Divider({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-1 h-5 bg-accent opacity-60 flex-shrink-0" />
      <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-text-muted">
        {title}
      </span>
      <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
    </div>
  );
}

function Chip({
  label: text,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2 text-[11px] font-medium tracking-[0.1em] transition-all duration-200"
      style={{
        border: active ? "1px solid var(--accent)" : "1px solid var(--border)",
        background: active ? "rgba(233,30,140,0.06)" : "var(--bg-primary)",
        color: active ? "var(--accent)" : "var(--text-muted)",
      }}
    >
      {text}
    </button>
  );
}

function RadioRow({
  label: text,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200"
      style={{
        border: active ? "1px solid var(--accent)" : "1px solid var(--border)",
        background: active ? "rgba(233,30,140,0.04)" : "var(--bg-primary)",
      }}
    >
      <span
        className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
        style={{ border: active ? "4px solid var(--accent)" : "1.5px solid var(--border)" }}
      />
      <span
        className="text-sm"
        style={{ color: active ? "var(--text-primary)" : "var(--text-muted)" }}
      >
        {text}
      </span>
    </button>
  );
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedEventType, setSelectedEventType] = useState<string | null>(null);
  const [characterProp, setCharacterProp] = useState<"yes" | "no" | null>(null);
  const [referral, setReferral] = useState<string | null>(null);
  const [payment, setPayment] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    const fd = new FormData(formRef.current);
    const body = {
      name: fd.get("name") as string,
      phone: fd.get("phone") as string,
      email: fd.get("email") as string,
      eventDate: fd.get("eventDate") as string,
      eventTime: fd.get("eventTime") as string,
      eventLocation: fd.get("eventLocation") as string,
      eventType: selectedEventType ?? "",
      selectedPackage: selectedPackage ?? "",
      theme: fd.get("theme") as string,
      colorScheme: fd.get("colorScheme") as string,
      vinylText: fd.get("vinylText") as string,
      characterProp: characterProp ?? "",
      characterPropDetails: fd.get("characterPropDetails") as string,
      notes: fd.get("notes") as string,
      referral: referral ?? "",
      referralOther: fd.get("referralOther") as string,
      payment: payment ?? "",
      paymentOther: fd.get("paymentOther") as string,
    };
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us at popbestieco@gmail.com.");
    } finally {
      setLoading(false);
    }
  }

  /* ── Success state ──────────────────────────────────────── */
  if (submitted) {
    return (
      <section
        id="contact"
        style={{
          background: "var(--bg-surface)",
          borderTop: "1px solid var(--border)",
          paddingTop: "6rem",
          paddingBottom: "7rem",
        }}
      >
        <div className="max-w-xl mx-auto px-6 text-center">
          <div
            className="w-14 h-14 flex items-center justify-center mx-auto mb-8"
            style={{ border: "1.5px solid var(--accent)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2
            className="font-serif text-text-primary mb-4"
            style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: 0.95 }}
          >
            We&apos;ve got your inquiry.
          </h2>
          <p className="text-text-muted leading-relaxed" style={{ fontSize: "0.9375rem" }}>
            Thank you for reaching out to Pop Bestie Co. We&apos;ll review your details and be in
            touch within <strong className="text-text-primary">24–48 business hours</strong> to
            confirm availability and next steps.
          </p>
        </div>
      </section>
    );
  }

  /* ── Form ───────────────────────────────────────────────── */
  return (
    <section
      id="contact"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border)",
        paddingTop: "6rem",
        paddingBottom: "7rem",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-14">
          <p
            className="reveal text-[11px] font-medium tracking-[0.28em] uppercase mb-5"
            style={{ color: "var(--accent)" }}
          >
            Let&apos;s Make It Happen
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2
              className="reveal font-serif text-text-primary leading-[0.9]"
              style={{ fontSize: "clamp(3rem, 5vw, 4.75rem)" }}
            >
              Book your
              <br />
              <span className="italic text-text-muted">event setup.</span>
            </h2>
            <p
              className="reveal text-text-muted leading-relaxed lg:max-w-sm lg:text-right"
              style={{ fontSize: "0.9rem" }}
            >
              Complete the form below with as much detail as possible so we can
              curate the perfect setup for your celebration.
            </p>
          </div>
        </div>

        {/* Form card */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="reveal max-w-3xl space-y-12"
          style={{
            background: "var(--bg-primary)",
            border: "1px solid var(--border)",
            padding: "clamp(2rem, 5vw, 3.5rem)",
          }}
        >
          {/* ── Client Information ────────────────────── */}
          <div>
            <Divider title="Client Information" />
            <div className="space-y-5">
              <div>
                <label className={label}>Full Name *</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Jane Smith"
                  className={`${input} ${inputFocusBorder}`}
                  style={inputBorder}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={label}>Phone *</label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    className={`${input} ${inputFocusBorder}`}
                    style={inputBorder}
                  />
                </div>
                <div>
                  <label className={label}>Email *</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className={`${input} ${inputFocusBorder}`}
                    style={inputBorder}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Event Details ─────────────────────────── */}
          <div>
            <Divider title="Event Details" />
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={label}>Event Date *</label>
                  <input
                    required
                    name="eventDate"
                    type="date"
                    className={`${input} ${inputFocusBorder}`}
                    style={inputBorder}
                  />
                </div>
                <div>
                  <label className={label}>Event Time *</label>
                  <input
                    required
                    name="eventTime"
                    type="time"
                    className={`${input} ${inputFocusBorder}`}
                    style={inputBorder}
                  />
                </div>
              </div>
              <div>
                <label className={label}>Venue / Address *</label>
                <input
                  required
                  name="eventLocation"
                  type="text"
                  placeholder="123 Party Lane, San Antonio, TX"
                  className={`${input} ${inputFocusBorder}`}
                  style={inputBorder}
                />
              </div>
              <div>
                <label className={label}>Type of Event *</label>
                <div className="flex flex-wrap gap-2">
                  {eventTypes.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      active={selectedEventType === t}
                      onClick={() => setSelectedEventType(t)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Package Selection ─────────────────────── */}
          <div>
            <Divider title="Package Selection" />
            <label className={label}>
              Which package are you interested in?
            </label>
            <div className="space-y-2 mt-3">
              {packages.map((pkg) => (
                <RadioRow
                  key={pkg}
                  label={pkg}
                  active={selectedPackage === pkg}
                  onClick={() => setSelectedPackage(pkg)}
                />
              ))}
            </div>
          </div>

          {/* ── Design Preferences ────────────────────── */}
          <div>
            <Divider title="Design Preferences" />
            <div className="space-y-5">
              <div>
                <label className={label}>Theme / Inspiration</label>
                <input
                  name="theme"
                  type="text"
                  placeholder="e.g. Disco Cowgirl, Under the Sea, Hello Kitty…"
                  className={`${input} ${inputFocusBorder}`}
                  style={inputBorder}
                />
              </div>
              <div>
                <label className={label}>Color Scheme</label>
                <input
                  name="colorScheme"
                  type="text"
                  placeholder="e.g. Hot pink, white & gold"
                  className={`${input} ${inputFocusBorder}`}
                  style={inputBorder}
                />
              </div>
              <div>
                <label className={label}>Custom Vinyl / Sign Text</label>
                <input
                  name="vinylText"
                  type="text"
                  placeholder='"Happy 30th, Sofia!" or "Baby Sofia"'
                  className={`${input} ${inputFocusBorder}`}
                  style={inputBorder}
                />
              </div>
              <div>
                <label className={label}>Character Prop Needed?</label>
                <div className="flex gap-3">
                  {(["yes", "no"] as const).map((v) => (
                    <Chip
                      key={v}
                      label={v === "yes" ? "Yes" : "No"}
                      active={characterProp === v}
                      onClick={() => setCharacterProp(v)}
                    />
                  ))}
                </div>
                {characterProp === "yes" && (
                  <input
                    name="characterPropDetails"
                    type="text"
                    placeholder="Please specify the character"
                    className={`${input} ${inputFocusBorder} mt-3`}
                    style={inputBorder}
                  />
                )}
              </div>
            </div>
          </div>

          {/* ── Additional Details ────────────────────── */}
          <div>
            <Divider title="Additional Details" />
            <div className="space-y-5">
              <div>
                <label className={label}>Special Requests or Notes</label>
                <textarea
                  name="notes"
                  rows={4}
                  placeholder="Anything else we should know…"
                  className={`${input} ${inputFocusBorder} resize-none`}
                  style={inputBorder}
                />
              </div>
              <div>
                <label className={label}>How did you hear about us?</label>
                <div className="flex flex-wrap gap-2">
                  {referralSources.map((src) => (
                    <Chip
                      key={src}
                      label={src}
                      active={referral === src}
                      onClick={() => setReferral(src)}
                    />
                  ))}
                </div>
                {referral === "Other" && (
                  <input
                    name="referralOther"
                    type="text"
                    placeholder="Please specify"
                    className={`${input} ${inputFocusBorder} mt-3`}
                    style={inputBorder}
                  />
                )}
              </div>
            </div>
          </div>

          {/* ── Reservation & Payment ─────────────────── */}
          <div>
            <Divider title="Reservation & Payment" />
            {/* Deposit policy */}
            <div
              className="px-5 py-4 mb-6"
              style={{
                background: "rgba(233,30,140,0.04)",
                border: "1px solid rgba(233,30,140,0.12)",
                borderLeft: "2px solid var(--accent)",
              }}
            >
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-1.5">
                Deposit Policy
              </p>
              <p
                className="text-text-muted leading-relaxed"
                style={{ fontSize: "0.875rem" }}
              >
                A{" "}
                <strong className="text-text-primary">
                  50% non-refundable deposit
                </strong>{" "}
                is required to secure your package and event date. The remaining
                balance is due prior to or on the day of setup.
              </p>
            </div>
            <div>
              <label className={label}>Preferred Payment Method</label>
              <div className="space-y-2 mt-3">
                {paymentMethods.map((method) => (
                  <RadioRow
                    key={method}
                    label={method}
                    active={payment === method}
                    onClick={() => setPayment(method)}
                  />
                ))}
              </div>
              {payment === "Other" && (
                <input
                  name="paymentOther"
                  type="text"
                  placeholder="Please specify"
                  className={`${input} ${inputFocusBorder} mt-3`}
                  style={inputBorder}
                />
              )}
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm" style={{ color: "#c0392b" }}>
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 text-white text-[11px] font-semibold tracking-[0.25em] uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: loading ? "var(--text-muted)" : "var(--accent)",
            }}
          >
            {loading ? "Sending…" : "Submit My Inquiry"}
          </button>

          <p
            className="text-center text-text-muted"
            style={{ fontSize: "0.8rem" }}
          >
            We&apos;ll be in touch within 24–48 business hours to confirm
            availability.
          </p>
        </form>
      </div>
    </section>
  );
}
