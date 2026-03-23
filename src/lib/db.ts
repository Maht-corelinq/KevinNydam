const CORELINQ_API_URL = process.env.CORELINQ_API_URL;
const KEVIN_NYDAM_ORG_ID = process.env.KEVIN_NYDAM_ORG_ID;

export async function captureLead(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  leadType: string;
  leadSource: string;
  interest?: string;
  priceRange?: string;
  timeline?: string;
  address?: string;
  message?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}) {
  if (!CORELINQ_API_URL || !KEVIN_NYDAM_ORG_ID) {
    throw new Error('Missing CORELINQ_API_URL or KEVIN_NYDAM_ORG_ID env vars');
  }

  const res = await fetch(
    `${CORELINQ_API_URL}/api/public/leads/capture`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        org_id: KEVIN_NYDAM_ORG_ID,
        email: data.email,
        first_name: data.firstName,
        last_name: data.lastName,
        phone: data.phone,
        source: 'web_form',
        metadata: {
          lead_type: data.leadType,
          lead_source: data.leadSource,
          interest: data.interest || null,
          price_range: data.priceRange || null,
          timeline: data.timeline || null,
          address: data.address || null,
          message: data.message || null,
          utm_source: data.utmSource || null,
          utm_medium: data.utmMedium || null,
          utm_campaign: data.utmCampaign || null,
          utm_content: data.utmContent || null,
          utm_term: data.utmTerm || null,
        },
      }),
    }
  );

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Lead capture failed (${res.status}): ${body}`);
  }

  return res.json();
}
