import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    console.log('Contact form submission received:', {
      name,
      email,
      subject,
      messageLength: message?.length || 0
    });

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Send email to admin with all contact details
    const emailResponse = await resend.emails.send({
      from: "Contact Form <aru.bhardwaj@insightrix.eu>",
      to: ["aru.bhardwaj@insightrix.eu"],
      subject: `Contact Form: ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a5d23;">New Contact Form Message</h2>
          
          <div style="background: #f7f8dc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4a5d23; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border: 1px solid #d4af37; border-radius: 8px;">
            <h3 style="color: #4a5d23; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Reply directly to this email</strong> to respond to ${name} at ${email}
            </p>
          </div>
          
          <p style="color: #666; margin-top: 20px; font-size: 14px;">
            Received at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    console.log('Contact email sent successfully:', emailResponse);

    // Send confirmation email to the user
    const confirmationResponse = await resend.emails.send({
      from: "Aru Bhardwaj <aru.bhardwaj@insightrix.eu>",
      to: [email],
      subject: "Message Received - Thank You for Contacting Me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a5d23;">Thank You for Your Message!</h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for contacting me. I have received your message and will get back to you as soon as possible, typically within 24 hours.</p>
          
          <div style="background: #f7f8dc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4a5d23; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p>If you have any urgent questions, feel free to call me directly at <strong>+33 (0) 766985210</strong>.</p>
          
          <p>Best regards,<br>
          <strong style="color: #4a5d23;">Aru Bhardwaj</strong><br>
          Data Science & AI Consultant</p>
        </div>
      `,
    });

    console.log('Confirmation email sent:', confirmationResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully',
        emailId: emailResponse.data?.id,
        confirmationId: confirmationResponse.data?.id
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in send-contact-message function:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send message. Please try again later.' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});