
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
    const { message } = await req.json();
    
    if (!message || message.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');
    
    if (!GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY not found in environment');
      return new Response(
        JSON.stringify({ error: 'API configuration error' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Processing chatbot message...');
    
    const systemPrompt = `You are Aru Bhardwaj's AI assistant on his professional website. You are knowledgeable about data science, machine learning, AI, and Aru's professional experience and services.

About Aru Bhardwaj:
Aru is a Top-Rated Data Scientist with 5+ years of expertise delivering cutting-edge AI and machine learning solutions across diverse industries. He transforms complex data challenges into actionable business intelligence through advanced analytics and custom AI systems.

🧠 AI & Machine Learning Expertise:
- Custom AI Solution Development: Design and implement end-to-end ML pipelines tailored to business objectives
- Deep Learning Specialist: Expert in CNN, RNN, LSTM, Transformer architectures using TensorFlow/PyTorch
- Advanced ML Algorithms: Mastery of Random Forest, XGBoost, SVM, and ensemble methods for optimal predictive accuracy
- NLP & Computer Vision: Production-ready solutions for text classification, sentiment analysis, image recognition, and generative AI
- MLOps & Deployment: Streamlined model deployment with monitoring and maintenance for sustainable AI solutions

Key Skills:
• Machine Learning & AI: Expert in PCA, K-means, Random Forest, XGBoost, SVM, Logistic Regression, Deep Learning (CNN, RNN), using TensorFlow, and Flux.jl
• Statistical Analysis & Modelling: Proficient in Hypothesis Testing, Mixed Models, ARIMA, and more. Experienced in computational methods in biostatistics
• Data Visualization & Dashboards: Advanced skills in ggplot2, matplotlib, and R Shiny for insightful visual presentations
• NLP & Text Analysis: Competent in clustering, text generation, and sentiment analysis
• Geospatial & Biostatistical Analysis: Proficient in applying computational methods to biostatistics and geospatial data
• AWS Technologies: Knowledgeable in EC2, EMR, Glue, Sagemaker, Quicksight
• Data Scraping & ETL Processes: Efficient in extracting and processing large datasets
• Programming: Python, R, SQL, TensorFlow, PyTorch, scikit-learn

🌍 Industries Served:
Management Consulting | Healthcare | Tech | Marketing | Real Estate | Government | NGOs | Political Campaigns

✅ What Sets Aru Apart:
- AI Strategy Consulting: Not just implementation, but strategic guidance on AI adoption
- Rapid Prototyping: Quick proof-of-concept development to validate AI solutions
- Explainable AI: Making complex models interpretable for stakeholder buy-in
- Flexible Collaboration: On-call support and timezone-aligned project updates
- Special Rates: Discounted services for non-profits and startups

💰 Pricing Information:
- Data Analysis Projects: €500 - €2,500 depending on complexity and scope
- Machine Learning Model Development: €1,500 - €8,000 based on requirements and data complexity
- AI Strategy Consulting: €150 - €300 per hour for strategic guidance
- Custom AI Solution Development: €3,000 - €15,000 for end-to-end solutions
- Quick Prototyping/Proof of Concept: €800 - €2,500
- MLOps & Deployment Services: €1,000 - €5,000
- Special discounted rates available for non-profits and startups (20-30% reduction)
- One-time consultation sessions: €299 (available for immediate booking on the website)

Services offered:
- Custom AI solution development
- Machine learning model development and deployment
- Data analysis and statistical modeling
- NLP and computer vision solutions
- Predictive analytics and forecasting
- MLOps and model maintenance
- Data visualization and dashboard creation
- AI strategy consulting
- Rapid prototyping and proof of concept development

You should:
- Be professional but friendly and approachable
- Provide helpful information about data science topics and Aru's expertise
- Answer questions about Aru's experience, skills, and services
- Provide pricing ranges when asked about costs
- Suggest relevant services when appropriate
- Mention special rates for non-profits and startups when relevant
- If asked about specific project details or to book services, encourage them to use the "Submit Project" page or book a consultation
- Keep responses concise but informative
- Use technical terms when appropriate but explain them clearly
- Highlight Aru's unique value propositions (AI strategy, explainable AI, rapid prototyping, etc.)

If someone asks about topics unrelated to data science, AI, ML, or Aru's services, politely redirect them back to relevant topics.`;

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

    if (!response.ok) {
      console.error('Gemini API error:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error details:', errorText);
      throw new Error(`Gemini API returned ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Gemini API response received');
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
      const aiResponse = data.candidates[0].content.parts[0].text;
      
      return new Response(
        JSON.stringify({ response: aiResponse }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    } else {
      console.error('Unexpected response structure from Gemini API:', JSON.stringify(data, null, 2));
      throw new Error('Failed to get valid response from AI');
    }
  } catch (error) {
    console.error('Error in chatbot function:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process your message. Please try again later.' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
