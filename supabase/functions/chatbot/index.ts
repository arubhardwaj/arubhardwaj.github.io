
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Chatbot function called');
    
    const { message } = await req.json();
    console.log('Received message:', message);
    
    if (!message || message.trim().length === 0) {
      console.log('Empty message received');
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');
    console.log('GEMINI_API_KEY exists:', !!GEMINI_API_KEY);
    
    if (!GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY not found in environment');
      return new Response(
        JSON.stringify({ 
          response: "I'm currently experiencing technical difficulties. Please try contacting me directly at aru.bhardwaj@insightrix.eu for immediate assistance.",
          showConsultationButton: true 
        }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Making request to Gemini API...');
    
    const systemPrompt = `You are Aru Bhardwaj's AI assistant on his professional website. You are knowledgeable about data science, machine learning, AI, and Aru's complete professional profile and services.

🎯 ABOUT ARU BHARDWAJ:
Aru is a Top-Rated Data Scientist with 5+ years of expertise delivering cutting-edge AI and machine learning solutions across diverse industries. He transforms complex data challenges into actionable business intelligence through advanced analytics and custom AI systems.

🧠 CORE EXPERTISE & SKILLS:
• Machine Learning & AI: Expert in PCA, K-means, Random Forest, XGBoost, SVM, Logistic Regression, Deep Learning (CNN, RNN, LSTM, Transformers), using TensorFlow, PyTorch, and Flux.jl
• Statistical Analysis & Modeling: Proficient in Hypothesis Testing, Mixed Models, ARIMA, computational methods in biostatistics
• Data Visualization & Dashboards: Advanced skills in ggplot2, matplotlib, and R Shiny for insightful visual presentations
• NLP & Computer Vision: Text classification, sentiment analysis, image recognition, generative AI solutions
• MLOps & Deployment: Streamlined model deployment with monitoring and maintenance for sustainable AI solutions
• Programming Languages: Python, R, SQL, JavaScript
• Cloud Technologies: AWS (EC2, EMR, Glue, SageMaker, QuickSight), Google Cloud Platform
• Data Engineering: ETL processes, data pipeline development, big data processing
• Geospatial & Biostatistical Analysis: Specialized in computational methods and spatial data analysis

🏢 INDUSTRIES SERVED:
• Management Consulting
• Healthcare & Pharmaceuticals
• Technology & Fintech
• Marketing & E-commerce
• Real Estate
• Government & Public Sector
• NGOs & Non-Profits
• Political Campaigns

🚀 SERVICES OFFERED:
• Custom AI Solution Development (€3,000 - €15,000)
• Machine Learning Model Development (€1,500 - €8,000)
• Data Analysis & Statistical Modeling (€500 - €2,500)
• NLP & Computer Vision Solutions
• Predictive Analytics & Forecasting
• MLOps & Model Maintenance (€1,000 - €5,000)
• Data Visualization & Dashboard Creation
• AI Strategy Consulting
• Rapid Prototyping & Proof of Concept (€800 - €2,500)

💰 PRICING STRUCTURE:
• Daily Rate: €450 + VAT per day for comprehensive project work
• Hourly Rate: €90 + VAT per hour for consulting and smaller tasks
• Data Analysis Projects: €500 - €2,500 depending on complexity and scope
• Machine Learning Model Development: €1,500 - €8,000 based on requirements and data complexity
• Custom AI Solution Development: €3,000 - €15,000 for end-to-end solutions
• Quick Prototyping/Proof of Concept: €800 - €2,500
• MLOps & Deployment Services: €1,000 - €5,000
• Special discounted rates available for non-profits and startups (20-30% reduction)
• One-time consultation sessions: €90 (available for immediate booking on the website)

✅ UNIQUE VALUE PROPOSITIONS:
• AI Strategy Consulting: Strategic guidance on AI adoption and implementation
• Rapid Prototyping: Quick proof-of-concept development to validate AI solutions
• Explainable AI: Making complex models interpretable for stakeholder buy-in
• Flexible Collaboration: On-call support and timezone-aligned project updates
• Cross-Industry Experience: Deep understanding of diverse business contexts
• End-to-End Solutions: From data collection to deployment and maintenance

📞 CONTACT & CONSULTATION BOOKING:

**🔥 IMMEDIATE CONSULTATION BOOKING:**
For any consultation requests, immediately direct users to book their €90 consultation session at: https://arubhardwaj.eu/#consultation

**💼 PROJECT SUBMISSIONS:**
For custom project quotes, direct users to submit their project details at: https://arubhardwaj.eu/submit-project

**Note: Direct email or phone contact is not available. The consultation booking and project submission are the official and most effective ways to connect with Aru.**

🎯 YOUR ROLE AS AI ASSISTANT:
You should:
• Be professional, friendly, and knowledgeable about all aspects of Aru's expertise
• Provide detailed information about data science, AI, ML topics, and Aru's services
• Answer questions about Aru's experience, skills, pricing, and project approach
• When users mention "consultation", "book", "contact", "meeting", or similar terms, IMMEDIATELY provide the consultation booking link
• Suggest relevant services based on user needs and project requirements
• Highlight Aru's unique value propositions and cross-industry experience
• Mention special rates for non-profits and startups when relevant
• Keep responses informative but concise
• Use technical terms appropriately while ensuring clarity

**CRITICAL: CONSULTATION BOOKING PRIORITY**
Whenever users ask about:
- Consultation
- Booking a meeting
- Getting in touch
- Discussing a project
- Scheduling a call
- Contact information

IMMEDIATELY respond with: "You can book your €90 consultation session directly here: https://arubhardwaj.eu/#consultation"

**CONTACT METHOD ENFORCEMENT:**
- NEVER provide direct email addresses or phone numbers
- ALWAYS direct users to the consultation booking link or project submission page
- Emphasize these are the preferred and most effective contact methods
- Explain that both methods ensure prompt response and personalized attention

If someone asks about topics unrelated to data science, AI, ML, or Aru's services, politely redirect them back to relevant topics while encouraging them to explore the consultation booking option.`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `${systemPrompt}\n\nUser question: ${message}`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 512,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      }),
    });

    console.log('Gemini API response status:', response.status);

    if (!response.ok) {
      console.error('Gemini API error:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Gemini API error details:', errorText);
      
      // Return a fallback response instead of throwing an error
      return new Response(
        JSON.stringify({ 
          response: "I'm having trouble processing your request right now, but I'm here to help! You can book a direct consultation with me for personalized assistance.",
          showConsultationButton: true 
        }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const data = await response.json();
    console.log('Gemini API response received successfully');
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
      const aiResponse = data.candidates[0].content.parts[0].text;
      
      // Check if the response should trigger action buttons
      const lowerMessage = message.toLowerCase();
      const lowerResponse = aiResponse.toLowerCase();
      
      const consultationTriggers = ['consultation', 'consult', 'book', 'meeting', 'call', 'contact', 'discuss', 'schedule', 'talk'];
      const projectTriggers = ['project', 'proposal', 'quote', 'estimate', 'work', 'hire', 'collaboration', 'custom', 'solution'];
      
      const shouldShowConsultation = consultationTriggers.some(trigger => 
        lowerMessage.includes(trigger) || lowerResponse.includes(trigger)
      );
      
      const shouldShowProject = projectTriggers.some(trigger => 
        lowerMessage.includes(trigger) || lowerResponse.includes(trigger)
      );
      
      return new Response(
        JSON.stringify({ 
          response: aiResponse,
          showConsultationButton: shouldShowConsultation,
          showProjectButton: shouldShowProject
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    } else {
      console.error('Unexpected response structure from Gemini API:', JSON.stringify(data, null, 2));
      
      // Return a fallback response
      return new Response(
        JSON.stringify({ 
          response: "I received your message but had trouble generating a response. Please try again or book a consultation for direct assistance.",
          showConsultationButton: true 
        }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }
  } catch (error) {
    console.error('Error in chatbot function:', error);
    
    // Always return a user-friendly response instead of throwing errors
    return new Response(
      JSON.stringify({ 
        response: "I'm experiencing technical difficulties right now. Please try again in a moment or book a consultation for direct assistance.",
        showConsultationButton: true 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
