import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import ContactSubmission from '@/models/ContactSubmission';
import { sendEmail } from '@/lib/mailer';
import { validateRequired, isValidEmail } from '@/lib/validate';
import { rateLimit } from '@/lib/rateLimit';

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const rateLimitResponse = rateLimit(ip);
    if (rateLimitResponse) return rateLimitResponse;

    await dbConnect();
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    const validationError = validateRequired({ name, email, subject, message });
    if (validationError) {
      return NextResponse.json({ success: false, error: validationError }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, error: 'Invalid email format' }, { status: 400 });
    }

    const submission = await ContactSubmission.create({ name, email, phone, subject, message });

    // Send notification email
    const emailHtml = `
      <h3>New Contact Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;
    await sendEmail({
      to: process.env.EMAIL_USER!,
      subject: `New Contact Submission: ${subject}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, data: submission }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message || 'Server Error' }, { status: 500 });
  }
}
