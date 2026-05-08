import { NextResponse } from 'next/server';
import { isValidEmail } from '@/lib/validate';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ success: false, error: 'Valid email is required' }, { status: 400 });
    }

    // Usually integrate with Mailchimp/SendGrid here. For now, mock success.
    return NextResponse.json({ success: true, message: 'Subscribed successfully' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
