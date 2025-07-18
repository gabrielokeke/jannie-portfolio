import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface MailOptions {
  from: string;
  to: string | undefined;
  subject: string;
  text: string;
}

export async function POST(req: NextRequest): Promise<Response> {
  const { name, email, message }: ContactFormData = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions: MailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
