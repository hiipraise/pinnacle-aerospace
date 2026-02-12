import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, service, message } = body;

    // Validate fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    // -------------------------------------------------------
    // EMAIL SENDING INTEGRATION
    // Option A: Using Resend (recommended)
    // Install: npm install resend
    // Set env: RESEND_API_KEY, CONTACT_EMAIL
    //
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'Pinnacle Aerospace <noreply@pinnacleaerospace.aero>',
    //   to: [process.env.CONTACT_EMAIL || 'operations@pinnacleaerospace.aero'],
    //   replyTo: email,
    //   subject: `Service Inquiry from ${name} — ${company || 'Individual'}`,
    //   html: `
    //     <div>
    //       <h2>New Service Inquiry</h2>
    //       <p><strong>Name:</strong> ${name}</p>
    //       <p><strong>Company:</strong> ${company || 'N/A'}</p>
    //       <p><strong>Email:</strong> ${email}</p>
    //       <p><strong>Service:</strong> ${service || 'Not specified'}</p>
    //       <p><strong>Message:</strong></p>
    //       <p>${message}</p>
    //     </div>
    //   `,
    // })
    //
    // Option B: Using Nodemailer (SMTP)
    // Option C: Using SendGrid / Mailgun / Postmark
    // -------------------------------------------------------

    // For demo: log the form submission
    console.log("Contact Form Submission:", {
      name,
      company,
      email,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message:
        "Your inquiry has been received. Our team will respond within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred. Please try again or email us directly.",
      },
      { status: 500 },
    );
  }
}
