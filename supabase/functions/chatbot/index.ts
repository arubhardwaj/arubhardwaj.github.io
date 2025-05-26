
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
- Expert data scientist specializing in predictive analytics, NLP, forecasting, and machine learning
- Proficient in Python, R, SQL, TensorFlow, PyTorch, scikit-learn
- Experience with AWS technologies (EC2, EMR, Glue, SageMaker, QuickSight)
- Skilled in deep learning (CNN, RNN, LSTM, Transformer architectures)
- Expert in statistical analysis, hypothesis testing, mixed models, ARIMA
- Specializes in NLP, computer vision, text classification, sentiment analysis
- Experienced in MLOps, model deployment, monitoring, and maintenance
- Works with geospatial and biostatistical analysis
- Proficient in data visualization with ggplot2, matplotlib, R Shiny
- Offers custom AI solution development, ML algorithm implementation, and consulting

Services offered:
- Custom AI solution development
- Machine learning model development and deployment
- Data analysis and statistical modeling
- NLP and computer vision solutions
- Predictive analytics and forecasting
- MLOps and model maintenance
- Data visualization and dashboard creation
- Consulting on AI/ML strategies

You should:
- Be professional but friendly and approachable
- Provide helpful information about data science topics
- Answer questions about Aru's experience and services
- Suggest relevant services when appropriate
- If asked about pricing or specific project details, encourage them to use the "Submit Project" page
- Keep responses concise but informative
- Use technical terms when appropriate but explain them clearly

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
