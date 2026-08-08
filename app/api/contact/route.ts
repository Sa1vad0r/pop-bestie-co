import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "Pop Bestie Co. <noreply@popbestieco.com>";
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || "salvadoralfaro44@gmail.com";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const {
    name,
    phone,
    email,
    eventDate,
    eventTime,
    eventLocation,
    eventType,
    selectedPackage,
    theme,
    colorScheme,
    vinylText,
    characterProp,
    characterPropDetails,
    notes,
    referral,
    referralOther,
    payment,
    paymentOther,
  } = data;

  try {
    const [businessResult, customerResult] = await Promise.all([
      resend.emails.send({
        from: FROM,
        to: BUSINESS_EMAIL,
        subject: `New Inquiry — ${name} | ${eventType || "Event"} on ${eventDate || "TBD"}`,
        html: buildBusinessEmail(data),
      }),
      resend.emails.send({
        from: FROM,
        to: email,
        subject: "We received your inquiry! 🎈",
        html: buildCustomerEmail(name),
      }),
    ]);

    if (businessResult.error) {
      console.error("Business email failed:", businessResult.error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
    if (customerResult.error) {
      console.error("Customer confirmation email failed:", customerResult.error);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

function row(label: string, value: string | undefined) {
  if (!value) return "";
  return `<tr><td style="padding:8px 12px;color:#9b7fa6;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:8px 12px;color:#2d1b35;font-size:13px">${value}</td></tr>`;
}

function buildBusinessEmail(d: Record<string, string>) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f9f3f8;font-family:Georgia,serif">
  <div style="max-width:600px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #f0d9e8">
    <div style="background:#d4a0c0;padding:28px 32px">
      <h1 style="margin:0;color:#fff;font-size:22px;letter-spacing:1px">New Event Inquiry</h1>
      <p style="margin:6px 0 0;color:#f9eef5;font-size:14px">Submitted via popbestieco.com</p>
    </div>
    <div style="padding:28px 32px">
      <h2 style="margin:0 0 16px;color:#2d1b35;font-size:16px;border-bottom:1px solid #f0d9e8;padding-bottom:10px">Client Information</h2>
      <table style="border-collapse:collapse;width:100%">
        ${row("Name", d.name)}
        ${row("Phone", d.phone)}
        ${row("Email", d.email)}
      </table>
      <h2 style="margin:24px 0 16px;color:#2d1b35;font-size:16px;border-bottom:1px solid #f0d9e8;padding-bottom:10px">Event Details</h2>
      <table style="border-collapse:collapse;width:100%">
        ${row("Date", d.eventDate)}
        ${row("Time", d.eventTime)}
        ${row("Location", d.eventLocation)}
        ${row("Event Type", d.eventType)}
      </table>
      <h2 style="margin:24px 0 16px;color:#2d1b35;font-size:16px;border-bottom:1px solid #f0d9e8;padding-bottom:10px">Package & Design</h2>
      <table style="border-collapse:collapse;width:100%">
        ${row("Package", d.selectedPackage)}
        ${row("Theme", d.theme)}
        ${row("Color Scheme", d.colorScheme)}
        ${row("Vinyl Text", d.vinylText)}
        ${row("Character Prop", d.characterProp === "yes" ? `Yes — ${d.characterPropDetails || ""}` : d.characterProp === "no" ? "No" : "")}
      </table>
      <h2 style="margin:24px 0 16px;color:#2d1b35;font-size:16px;border-bottom:1px solid #f0d9e8;padding-bottom:10px">Additional Details</h2>
      <table style="border-collapse:collapse;width:100%">
        ${row("Notes", d.notes)}
        ${row("Heard From", d.referral === "Other" ? d.referralOther : d.referral)}
        ${row("Payment Method", d.payment === "Other" ? d.paymentOther : d.payment)}
      </table>
    </div>
    <div style="background:#f9f3f8;padding:16px 32px;text-align:center">
      <p style="margin:0;color:#b08ca0;font-size:12px">Pop Bestie Co. · popbestieco.com</p>
    </div>
  </div>
</body>
</html>`;
}

function buildCustomerEmail(name: string) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f9f3f8;font-family:Georgia,serif">
  <div style="max-width:560px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #f0d9e8">
    <div style="background:#d4a0c0;padding:36px 32px;text-align:center">
      <h1 style="margin:0;color:#fff;font-size:28px;font-style:italic">Pop Bestie Co.</h1>
      <p style="margin:8px 0 0;color:#f9eef5;font-size:14px;letter-spacing:1px">✨ Balloon Garlands & Event Decor ✨</p>
    </div>
    <div style="padding:36px 32px;text-align:center">
      <div style="font-size:48px;margin-bottom:16px">🎈</div>
      <h2 style="margin:0 0 12px;color:#2d1b35;font-size:22px">Hey ${name}!</h2>
      <p style="margin:0 0 20px;color:#6b5060;font-size:15px;line-height:1.7">
        We got your inquiry and we are SO excited to hear about your event!
        Our team is currently reviewing your details and will be in touch within
        <strong>24–48 business hours</strong> to confirm availability and talk next steps.
      </p>
      <p style="margin:0 0 28px;color:#6b5060;font-size:15px;line-height:1.7">
        In the meantime, feel free to browse our Instagram for more inspo —
        we can't wait to bring your vision to life! 🌸
      </p>
      <div style="background:#f9f3f8;border-radius:12px;padding:20px;margin-bottom:28px">
        <p style="margin:0;color:#9b7fa6;font-size:13px;font-style:italic">
          "Every celebration deserves a little extra magic."
        </p>
      </div>
      <p style="margin:0;color:#b08ca0;font-size:13px">With love,</p>
      <p style="margin:4px 0 0;color:#d4a0c0;font-size:16px;font-style:italic">Nancy &amp; Jalynn</p>
      <p style="margin:2px 0 0;color:#b08ca0;font-size:13px">Pop Bestie Co.</p>
    </div>
    <div style="background:#f9f3f8;padding:16px 32px;text-align:center">
      <p style="margin:0;color:#b08ca0;font-size:12px">Questions? Reply to this email or DM us on Instagram.</p>
      <p style="margin:6px 0 0;color:#c9a8bc;font-size:11px">popbestieco.com</p>
    </div>
  </div>
</body>
</html>`;
}
