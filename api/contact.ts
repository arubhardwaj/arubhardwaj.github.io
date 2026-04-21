import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

/**
 * Vercel Serverless Function — /api/contact
 *
 * Sends the homepage consultation-section contact form message to
 * aru.bhardwaj@insightrix.eu via Resend, from leads@insightrix.eu.
 *
 * Env var required: RESEND_API_KEY  (set in Vercel dashboard)
 */

interface RequestBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return res.status(500).json({ error: 'Email service is not configured' });
    }

    const body: RequestBody = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    // Minimal length guards
    if (name.length > 200 || subject.length > 200 || message.length > 10000) {
      return res.status(400).json({ error: 'Input too long' });
    }

    const emailContent = `NEW CONTACT MESSAGE — arubhardwaj.eu

━━━━━━━━━━━━━━━━━━━━━━━━
FROM
━━━━━━━━━━━━━━━━━━━━━━━━
Name:     ${name}
Email:    ${email}
Subject:  ${subject}

━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━
${message}

━━━━━━━━━━━━━━━━━━━━━━━━
METADATA
━━━━━━━━━━━━━━━━━━━━━━━━
Submitted:  ${new Date().toISOString()}
Source:     Homepage consultation section contact form
`;

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: 'Contact · Insightrix <leads@insightrix.eu>',
      to: ['aru.bhardwaj@insightrix.eu'],
      replyTo: `${name} <${email}>`,
      subject: `[Contact] ${subject}`,
      text: emailContent
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(502).json({ error: error.message || 'Email delivery failed' });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('Contact handler error:', err);
    return res.status(500).json({ error: message });
  }
}
