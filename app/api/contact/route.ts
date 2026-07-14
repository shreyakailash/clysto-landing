import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message, category, targetEmail } = await request.json();

    if (!name || !email || !message || !targetEmail) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.log("[Clysto Contact Form — dev mode]", { name, email, message, category, targetEmail });
      return NextResponse.json({ success: true });
    }

    const html = `
      <div style="font-family: Georgia, serif; max-width: 600px; color: #3c3831; line-height: 1.7;">
        <h2 style="font-family: sans-serif; font-weight: 300; letter-spacing: 2px; text-transform: lowercase; color: #3c3831; border-bottom: 1px solid rgba(60,56,49,0.15); padding-bottom: 12px; margin-bottom: 24px;">
          ${category} inquiry
        </h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background: #f9f8f3; padding: 16px; border-left: 2px solid #00917d;">${message}</p>
        <p style="font-family: sans-serif; font-size: 12px; color: rgba(60,56,49,0.45); margin-top: 32px; letter-spacing: 1px; text-transform: uppercase;">
          Sent via clysto.net contact form
        </p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Clysto Contact <onboarding@resend.dev>",
        to: targetEmail,
        reply_to: email,
        subject: `${category} inquiry from ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
