
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));
const geminiApiKey = Deno.env.get('GEMINI_API_KEY');

// Function to enhance project description using Gemini AI
async function enhanceProjectDescription(description: string): Promise<string> {
  if (!geminiApiKey) {
    console.warn('Gemini API key not available, returning original description');
    return description;
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Please enhance and structure the following project description to make it more professional and clear. Focus on:
1. Technical requirements and objectives
2. Expected deliverables
3. Success criteria
4. Any specific technologies or methodologies mentioned

Original description:
${description}

Please provide an enhanced version that maintains all the original information but presents it in a more structured and professional manner.`
          }]
        }],
        generationConfig: {
          temperature: 0.3,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const enhancedDescription = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (enhancedDescription) {
      console.log('Project description enhanced successfully');
      return enhancedDescription;
    } else {
      console.warn('No enhanced description received from Gemini, using original');
      return description;
    }
  } catch (error) {
    console.error('Error enhancing description with Gemini:', error);
    return description; // Return original description on error
  }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData = await req.formData();
    
    // Parse the project data from the form
    const projectDataString = formData.get('projectData') as string;
    const projectData = JSON.parse(projectDataString);
    
    console.log('Project submission received:', {
      email: projectData.contactEmail,
      budget: projectData.budget,
      timeline: projectData.timeline,
      filesCount: Array.from(formData.entries()).filter(([key]) => key.startsWith('file_')).length
    });

    // Process uploaded files for attachments
    const attachments = [];
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('file_') && value instanceof File) {
        const fileBuffer = await value.arrayBuffer();
        const fileContent = new Uint8Array(fileBuffer);
        
        attachments.push({
          filename: value.name,
          content: Array.from(fileContent),
          contentType: value.type || 'application/octet-stream'
        });
      }
    }

    console.log('Processing attachments:', attachments.length);

    // Enhance project description using Gemini AI
    const enhancedDescription = await enhanceProjectDescription(projectData.projectDescription);
    console.log('Description enhancement completed');

    // Send notification email to you (admin)
    const adminEmailResponse = await resend.emails.send({
      from: "Project Submissions <aru.bhardwaj@insightrix.eu>",
      to: ["aru.bhardwaj@insightrix.eu"],
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
            <p><strong>Files Uploaded:</strong> ${attachments.length}</p>
          </div>
          
          <div style="background: white; padding: 20px; border: 1px solid #d4af37; border-radius: 8px;">
            <h3 style="color: #4a5d23; margin-top: 0;">Enhanced Project Description</h3>
            <p style="white-space: pre-wrap;">${enhancedDescription}</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin-top: 10px;">
            <h4 style="color: #666; margin-top: 0;">Original Description</h4>
            <p style="white-space: pre-wrap; color: #666; font-size: 14px;">${projectData.projectDescription}</p>
          </div>
          
          ${attachments.length > 0 ? `
          <div style="background: #f0f8ff; padding: 20px; border: 1px solid #d4af37; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #4a5d23; margin-top: 0;">Attached Files</h3>
            <ul style="color: #4a5d23;">
              ${attachments.map(att => `<li>${att.filename}</li>`).join('')}
            </ul>
          </div>
          ` : ''}
          
          <p style="color: #666; margin-top: 20px; font-size: 14px;">
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    console.log('Admin email sent:', adminEmailResponse);

    // Send client confirmation email (without attachments for privacy)
    const clientEmailResponse = await resend.emails.send({
      from: "Aru Bhardwaj <aru.bhardwaj@insightrix.eu>",
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
            ${attachments.length > 0 ? `<p><strong>Files Attached:</strong> ${attachments.length} document(s)</p>` : ''}
          </div>
          
          <p>If you have any immediate questions, feel free to reply to this email or contact me directly at <a href="mailto:aru.bhardwaj@insightrix.eu" style="color: #d4af37;">aru.bhardwaj@insightrix.eu</a></p>
          
          <p>Best regards,<br>
          <strong style="color: #4a5d23;">Aru Bhardwaj</strong><br>
          Data Science & AI Consultant</p>
          
          <p style="color: #666; margin-top: 20px; font-size: 14px;">
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    console.log('Client email sent:', clientEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Project submitted successfully',
        adminEmailId: adminEmailResponse.data?.id,
        clientEmailId: clientEmailResponse.data?.id,
        projectData: {
          contactEmail: projectData.contactEmail,
          budget: projectData.budget,
          currency: projectData.currency,
          timeline: projectData.timeline,
          startDate: projectData.startDate,
          dueDate: projectData.dueDate,
          urgentProject: projectData.urgentProject,
          startImmediately: projectData.startImmediately,
          filesCount: attachments.length,
          submittedAt: projectData.submittedAt || new Date().toISOString()
        }
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
