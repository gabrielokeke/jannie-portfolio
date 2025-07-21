import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define the expected request body type
interface ContactFormData {
  username: string;
  email: string;
  text: string;
}

// Define the response type
interface ApiResponse {
  success: boolean;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const { username, email, text }: ContactFormData = await req.json();

    // Validate required fields
    if (!username || !email || !text) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${username}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f59e0b; padding: 20px; text-align: center;">
            <h2 style="color: #1f2937; margin: 0;">New Contact Form Submission</h2>
          </div>
          <div style="padding: 20px; background-color: #ffffff; border: 1px solid #e5e7eb;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${username}</p>
            <p><strong>Email:</strong> ${email}</p>
            <h3 style="color: #374151;">Message:</h3>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; white-space: pre-wrap;">${text}</p>
            </div>
          </div>
          <div style="padding: 15px; text-align: center; background-color: #f3f4f6; font-size: 12px; color: #6b7280;">
            <p>This email was sent from your website contact form.</p>
          </div>
        </div>
      `,
      // Plain text version
      text: `
        New Contact Form Submission
        
        Name: ${username}
        Email: ${email}
        
        Message:
        ${text}
        
        ---
        This email was sent from your website contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json<ApiResponse>(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json<ApiResponse>(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}