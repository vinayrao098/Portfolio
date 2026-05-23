import { NextResponse } from "next/server";
import { personalInfo } from "@/lib/data";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 1. Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // 2. Fetch API key from environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured on the server." },
        { status: 500 }
      );
    }

    const recipientEmail = personalInfo.email || "vinayrao098@gmail.com";

    // 3. Make REST API request to Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Form <onboarding@resend.dev>",
        to: recipientEmail,
        reply_to: email,
        subject: `💼 New Portfolio Message from ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>New Portfolio Message</title>
            </head>
            <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f6f9fc; padding: 40px 20px; margin: 0;">
              <div style="max-width: 580px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #eef2f6;">
                
                <!-- Header -->
                <div style="background: linear-gradient(135deg, #00f0ff 0%, #7c3aed 100%); padding: 32px 40px; text-align: center;">
                  <h1 style="color: #ffffff; font-size: 24px; font-weight: 800; margin: 0; letter-spacing: -0.5px;">New Message Received!</h1>
                  <p style="color: rgba(255, 255, 255, 0.85); font-size: 14px; margin: 8px 0 0 0; font-weight: 500;">Sent via your portfolio contact form</p>
                </div>

                <!-- Content -->
                <div style="padding: 40px;">
                  
                  <!-- Sender Details -->
                  <div style="margin-bottom: 30px;">
                    <h3 style="color: #7c3aed; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 10px 0;">Sender Details</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 6px 0; font-size: 14px; color: #64748b; width: 80px; font-weight: 600;">Name:</td>
                        <td style="padding: 6px 0; font-size: 14px; color: #0f172a; font-weight: 700;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; font-size: 14px; color: #64748b; width: 80px; font-weight: 600;">Email:</td>
                        <td style="padding: 6px 0; font-size: 14px; color: #00f0ff; font-weight: 700;">
                          <a href="mailto:${email}" style="color: #7c3aed; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 30px 0;" />

                  <!-- Message body -->
                  <div>
                    <h3 style="color: #7c3aed; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px 0;">Message Content</h3>
                    <div style="background-color: #f8fafc; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0; min-height: 100px;">
                      <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>
                  </div>

                  <!-- Quick Action Button -->
                  <div style="margin-top: 35px; text-align: center;">
                    <a href="mailto:${email}?subject=Re: Your message to Vinay Kumar" style="display: inline-block; background: linear-gradient(135deg, #00f0ff 0%, #7c3aed 100%); color: #ffffff; font-weight: 700; font-size: 14px; text-decoration: none; padding: 14px 28px; border-radius: 10px; box-shadow: 0 4px 10px rgba(124, 58, 237, 0.25);">
                      Reply to Sender
                    </a>
                  </div>

                </div>

                <!-- Footer -->
                <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #f1f5f9;">
                  <p style="color: #94a3b8; font-size: 12px; margin: 0;">&copy; ${new Date().getFullYear()} Vinay Kumar Portfolio. All rights reserved.</p>
                </div>

              </div>
            </body>
          </html>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API Error details:", data);
      return NextResponse.json(
        { error: data.message || "Resend failed to deliver the email." },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Error in serverless API route:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error." },
      { status: 500 }
    );
  }
}
