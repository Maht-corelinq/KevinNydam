import { NextResponse } from 'next/server';
import { valuationSchema } from '@/lib/validations';
import { captureLead } from '@/lib/db';
import { sendLeadNotification } from '@/lib/resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = valuationSchema.parse(body);

    const lead = {
      ...data,
      leadType: 'valuation' as const,
      leadSource: body.leadSource || 'valuation_band',
      utmSource: body.utmSource,
      utmMedium: body.utmMedium,
      utmCampaign: body.utmCampaign,
      utmContent: body.utmContent,
      utmTerm: body.utmTerm,
    };

    try {
      await captureLead(lead);
    } catch (dbError) {
      console.error('Lead capture failed:', dbError);
    }

    try {
      await sendLeadNotification(lead);
    } catch (emailError) {
      console.error('Email send failed:', emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Valuation API error:', error);
    return NextResponse.json(
      { error: 'Invalid submission' },
      { status: 400 }
    );
  }
}
