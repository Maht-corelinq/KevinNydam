import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';
import { captureLead } from '@/lib/db';
import { sendLeadNotification } from '@/lib/resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const lead = {
      ...data,
      leadType: 'contact' as const,
      leadSource: body.leadSource || 'contact_form',
      utmSource: body.utmSource,
      utmMedium: body.utmMedium,
      utmCampaign: body.utmCampaign,
      utmContent: body.utmContent,
      utmTerm: body.utmTerm,
    };

    // Capture lead via CoreLinq API (non-blocking if API isn't configured yet)
    try {
      await captureLead(lead);
    } catch (dbError) {
      console.error('Lead capture failed:', dbError);
    }

    // Send emails
    try {
      await sendLeadNotification(lead);
    } catch (emailError) {
      console.error('Email send failed:', emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Invalid submission' },
      { status: 400 }
    );
  }
}
