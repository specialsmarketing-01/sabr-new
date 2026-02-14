import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function isValidEmail(email: string): boolean {
  // Basic RFC 5322-compliant email regex
  const emailRegex =
    // eslint-disable-next-line no-control-regex
    /^(?:[a-zA-Z0-9_'^&/+-])+(?:\.(?:[a-zA-Z0-9_'^&/+-])+)*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;
  return emailRegex.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);

    if (!body || typeof body !== 'object') {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const { name, email, phone, message } = body as {
      name?: unknown;
      email?: unknown;
      phone?: unknown;
      message?: unknown;
    };

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const phoneStr = typeof phone === 'string' && phone.trim() ? phone.trim() : null;

    if (!isValidEmail(email.trim())) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const to = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
    const from = process.env.SMTP_FROM;

    if (!to || !from) {
      console.error('Contact email configuration is missing (CONTACT_EMAIL/SMTP_USER or SMTP_FROM).');
      return NextResponse.json({ success: false }, { status: 500 });
    }

    const timestamp = new Date().toISOString();

    const text = [
      `New contact form message`,
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      ...(phoneStr ? [`Phone: ${phoneStr}`, ''] : []),
      'Message:',
      message,
      '',
      `Timestamp: ${timestamp}`,
    ].join('\n');

    await transporter.sendMail({
      to,
      from,
      replyTo: email.trim(),
      subject: `New Contact Form Message – ${name}`,
      text,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error handling contact form submission', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

