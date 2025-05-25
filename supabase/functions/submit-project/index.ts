
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
    const projectData = await req.json();
    
    console.log('Project submission received:', {
      email: projectData.contactEmail,
      budget: projectData.budget,
      timeline: projectData.timeline
    });

    // Send notification email to you
    const adminEmailResponse = await resend.emails.send({
      from: "Project Submissions <onboarding@resend.dev>",
      to: ["aru.bhardwaj@insighrix.eu"], // Your email
      subject: `New Project Submission - ${projectData.budget} ${projectData.currency}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a5d23;">New Project Submission</h2>
          
          <div style="background: #f7f8dc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4a5d23; margin-top: 0;">Project Details</h3>
            <p><strong>Contact Email:</strong> ${projectData.contactEmail}</p>
            <p><strong>Budget:</strong> ${projectData.budget} ${projectData.currency}</p>
            <p><strong>Timeline:</strong> ${projectData.timeline}</p>
            <p><strong>Start Date:</strong> ${projectData.startDate || 'Not specified'}</p>
            <p><strong>Due Date:</strong> ${projectData.dueDate || 'Not specified'}</p>
            <p><strong>Urgent:</strong> ${projectData.urgentProject ? 'Yes' : 'No'}</p>
            <p><strong>Start Immediately:</strong> ${projectData.startImmediately ? 'Yes' : 'No'}</p>
          </div>
          
          <div style="background: white; padding: 20px; border: 1px solid #d4af37; border-radius: 8px;">
            <h3 style="color: #4a5d23; margin-top: 0;">Project Description</h3>
            <p style="white-space: pre-wrap;">${projectData.projectDescription}</p>
          </div>
          
          <p style="color: #666; margin-top: 20px; font-size: 14px;">
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    // Send confirmation email to client
    const clientEmailResponse = await resend.emails.send({
      from: "Aru Bhardwaj <onboarding@resend.dev>",
      to: [projectData.contactEmail],
      subject: "Project Submission Received - We'll Get Back to You Soon!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a5d23;">Thank You for Your Project Submission!</h2>
          
          <p>Dear ${projectData.contactEmail.split('@')[0]},</p>
          
          <p>Thank you for submitting your data science and AI project. I have received your request and will review it carefully.</p>
          
          <div style="background: #f7f8dc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4a5d23; margin-top: 0;">What Happens Next?</h3>
            <ul style="color: #4a5d23;">
              <li>I will review your project requirements within 1 working day</li>
              <li>You'll receive a detailed proposal with timeline and approach</li>
              <li>We can schedule a call to discuss your project in detail</li>
              <li>If urgent, I'll prioritize your request</li>
            </ul>
          </div>
          
          <div style="background: white; padding: 20px; border: 1px solid #d4af37; border-radius: 8px;">
            <h3 style="color: #4a5d23; margin-top: 0;">Your Submission Summary</h3>
            <p><strong>Budget:</strong> ${projectData.budget} ${projectData.currency}</p>
            <p><strong>Timeline:</strong> ${projectData.timeline}</p>
            <p><strong>Priority:</strong> ${projectData.urgentProject ? 'Urgent' : 'Standard'}</p>
          </div>
          
          <p>If you have any immediate questions, feel free to reply to this email or contact me directly at <a href="mailto:aru.bhardwaj@insighrix.eu" style="color: #d4af37;">aru.bhardwaj@insighrix.eu</a></p>
          
          <p>Best regards,<br>
          <strong style="color: #4a5d23;">Aru Bhardwaj</strong><br>
          Data Science & AI Consultant</p>
          
          <p style="color: #666; margin-top: 20px; font-size: 14px;">
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    console.log('Admin email sent:', adminEmailResponse);
    console.log('Client email sent:', clientEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Project submitted successfully and emails sent',
        adminEmailId: adminEmailResponse.data?.id,
        clientEmailId: clientEmailResponse.data?.id
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in submit-project function:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to submit project. Please try again later.' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
