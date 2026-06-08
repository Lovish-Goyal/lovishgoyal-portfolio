import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", 
      auth: {
        user: process.env.SMTP_USER || "programmerlovish@gmail.com",
        pass: process.env.SMTP_PASS || "hcvg liak vnnf jwox",
      },
    });

    const mailOptions = {
      from: `"Portfolio Form - ${name}" <programmerlovish@gmail.com>`,
      to: process.env.CONTACT_RECEIVER_EMAIL || "goyallovish1727@gmail.com",
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; color: #333;">
          <h2 style="color: #06b6d4; border-bottom: 2px solid #eaeaea; padding-bottom: 10px;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 15px; border-left: 4px solid #06b6d4;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Nodemailer error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to dispatch email.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
