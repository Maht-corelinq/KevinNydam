import { Resend } from 'resend';

const KEVIN_EMAIL = 'kevin.nydam@compass.com';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

function getFromEmail() {
  return process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
}

interface LeadNotification {
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
}

export async function sendLeadNotification(data: LeadNotification) {
  const resend = getResend();
  const fromEmail = getFromEmail();
  const typeLabel = data.leadType === 'consultation' ? 'Consultation Request'
    : data.leadType === 'valuation' ? 'Home Valuation Request'
    : 'Contact Form Submission';

  // Email to Kevin
  await resend.emails.send({
    from: fromEmail,
    to: KEVIN_EMAIL,
    subject: `New Lead: ${typeLabel} from ${data.firstName} ${data.lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #15283E; padding: 24px; text-align: center;">
          <h1 style="color: #C9A96E; font-size: 22px; margin: 0;">New ${typeLabel}</h1>
        </div>
        <div style="padding: 24px; background: #FAF8F5;">
          <h2 style="color: #15283E; font-size: 18px; margin-top: 0;">Lead Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Name</td><td style="padding: 8px 0; font-size: 14px; font-weight: bold;">${data.firstName} ${data.lastName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Email</td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            ${data.phone ? `<tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Phone</td><td style="padding: 8px 0; font-size: 14px;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>` : ''}
            ${data.interest ? `<tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Interest</td><td style="padding: 8px 0; font-size: 14px;">${data.interest}</td></tr>` : ''}
            ${data.priceRange ? `<tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Price Range</td><td style="padding: 8px 0; font-size: 14px;">${data.priceRange}</td></tr>` : ''}
            ${data.timeline ? `<tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Timeline</td><td style="padding: 8px 0; font-size: 14px;">${data.timeline}</td></tr>` : ''}
            ${data.address ? `<tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Property Address</td><td style="padding: 8px 0; font-size: 14px;">${data.address}</td></tr>` : ''}
            ${data.message ? `<tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Message</td><td style="padding: 8px 0; font-size: 14px;">${data.message}</td></tr>` : ''}
          </table>
          ${data.utmSource ? `
          <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #E5E5E5;">
            <p style="color: #999; font-size: 12px; margin: 0;">Campaign: ${data.utmSource}/${data.utmMedium}/${data.utmCampaign}</p>
          </div>
          ` : ''}
          <p style="color: #999; font-size: 12px; margin-top: 8px;">Source: ${data.leadSource}</p>
        </div>
      </div>
    `,
  });

  // Confirmation email to lead
  await resend.emails.send({
    from: fromEmail,
    to: data.email,
    subject: `Thanks for reaching out, ${data.firstName}!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #15283E; padding: 24px; text-align: center;">
          <h1 style="color: #C9A96E; font-size: 22px; margin: 0;">Kevin Nydam</h1>
          <p style="color: #FFFFFF80; font-size: 14px; margin: 4px 0 0;">Broker Associate | Compass</p>
        </div>
        <div style="padding: 24px; background: #FAF8F5;">
          <h2 style="color: #15283E; font-size: 18px; margin-top: 0;">Hi ${data.firstName},</h2>
          <p style="color: #3D3D3D; line-height: 1.6;">Thank you for reaching out! I received your ${data.leadType === 'valuation' ? 'home valuation request' : 'message'} and will be in touch within 24 hours.</p>
          <p style="color: #3D3D3D; line-height: 1.6;">In the meantime, feel free to reach me directly:</p>
          <ul style="color: #3D3D3D; line-height: 1.8;">
            <li>Phone: <a href="tel:+13039002018">(303) 900-2018</a></li>
            <li>Email: <a href="mailto:kevin.nydam@compass.com">kevin.nydam@compass.com</a></li>
          </ul>
          <p style="color: #3D3D3D; line-height: 1.6;">Looking forward to connecting!</p>
          <p style="color: #15283E; font-weight: bold;">Kevin Nydam</p>
        </div>
      </div>
    `,
  });
}
