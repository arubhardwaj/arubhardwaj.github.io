
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
    console.log('Received message:', message?.substring(0, 100) + '...');
    
    if (!message || message.trim().length === 0) {
      console.log('Empty message received');
      return new Response(
        JSON.stringify({ 
          response: "Please enter a message to get started. I'm here to help with questions about data science, AI, and Aru's services.",
          showConsultationButton: true 
        }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');
    console.log('GEMINI_API_KEY check:', !!GEMINI_API_KEY);
    
    if (!GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY not found in environment');
      return new Response(
        JSON.stringify({ 
          response: "I'm currently experiencing technical difficulties. You can book a consultation directly at https://arubhardwaj.eu/#consultation or contact Aru at bonjour@arubhardwaj.eu for immediate assistance.",
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

📞 CONTACT & CONSULTATION BOOKING:
**🔥 IMMEDIATE CONSULTATION BOOKING:**
For any consultation requests, immediately direct users to book their €90 consultation session at: https://arubhardwaj.eu/#consultation

**💼 PROJECT SUBMISSIONS:**
For custom project quotes, direct users to submit their project details at: https://arubhardwaj.eu/submit-project

🎯 YOUR ROLE AS AI ASSISTANT:
You should be professional, friendly, and knowledgeable about all aspects of Aru's expertise. Provide detailed information about data science, AI, ML topics, and Aru's services. When users mention "consultation", "book", "contact", "meeting", or similar terms, provide the consultation booking link. Keep responses informative but concise.`;

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
      const errorText = await response.text();
      console.error('Gemini API error:', response.status, response.statusText, errorText);
      
      return new Response(
        JSON.stringify({ 
          response: "I'm having trouble processing your request right now. You can book a consultation directly for personalized assistance: https://arubhardwaj.eu/#consultation",
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
      
      return new Response(
        JSON.stringify({ 
          response: "I received your message but had trouble generating a response. Please try again or book a consultation for direct assistance: https://arubhardwaj.eu/#consultation",
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
    
    return new Response(
      JSON.stringify({ 
        response: error.message.includes('fetch') 
          ? "I'm having connection issues. Please try again in a moment or book a consultation: https://arubhardwaj.eu/#consultation"
          : "I'm experiencing technical difficulties. Please try again or book a consultation for direct assistance: https://arubhardwaj.eu/#consultation",
        showConsultationButton: true 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
