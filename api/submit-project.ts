import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

/**
 * Vercel Serverless Function — /api/submit-project
 *
 * Sends a project brief from the /submit-project form to
 * aru.bhardwaj@insightrix.eu via Resend, including file attachments.
 *
 * Env var required: RESEND_API_KEY  (set in Vercel dashboard)
 */

interface Attachment {
  filename: string;
  content: string; // base64-encoded file
}

interface RequestBody {
  subject?: string;
  message?: string;
  fromName?: string;
  fromEmail?: string;
  attachments?: Attachment[];
}

// 25 MB per request safety limit (Resend's hard cap is 40 MB)
const MAX_BODY_BYTES = 25 * 1024 * 1024;

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

    // Rough size guard — Vercel will reject very large payloads anyway, but we bail early
    const contentLength = parseInt(req.headers['content-length'] || '0', 10);
    if (contentLength > MAX_BODY_BYTES) {
      return res.status(413).json({ error: 'Payload too large' });
    }

    const body: RequestBody = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { subject, message, fromName, fromEmail, attachments = [] } = body;

    if (!subject || !message || !fromEmail) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail)) {
      return res.status(400).json({ error: 'Invalid fromEmail' });
    }

    // Validate + convert attachments to Buffer for Resend
    const resendAttachments = attachments
      .filter((a) => a && a.filename && a.content)
      .slice(0, 5) // cap at 5 files
      .map((a) => ({
        filename: a.filename,
        content: Buffer.from(a.content, 'base64')
      }));

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: 'Leads · Insightrix <leads@insightrix.eu>',
      to: ['aru.bhardwaj@insightrix.eu'],
      replyTo: fromName ? `${fromName} <${fromEmail}>` : fromEmail,
      subject,
      text: message,
      attachments: resendAttachments
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(502).json({ error: error.message || 'Email delivery failed' });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('Submit-project handler error:', err);
    return res.status(500).json({ error: message });
  }
}
