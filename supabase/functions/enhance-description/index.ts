
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
    console.log('Enhance description function called');
    
    const { description } = await req.json();
    console.log('Received description:', description?.substring(0, 100) + '...');
    
    if (!description || description.length < 10) {
      console.log('Description validation failed:', { description, length: description?.length });
      return new Response(
        JSON.stringify({ error: 'Description must be at least 10 characters long' }),
        { 
          status: 400, 
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
          error: 'AI service is temporarily unavailable. Please try again later or submit your project description as-is.' 
        }),
        { 
          status: 503, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Making request to Gemini API...');
    
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are an expert writing assistant helping users rephrase project descriptions for professional use. The rewritten version should be clear, detailed, and suitable for submitting to freelancers or service providers. Maintain all essential details, remove redundancy, and enhance clarity without altering the original intent.

Please rewrite this project description (keep it concise but professional):

${description}`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 800,
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
          error: 'AI enhancement service is temporarily unavailable. Please try again later or submit your project description as-is.' 
        }),
        {
          status: 503,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const data = await response.json();
    console.log('Gemini API response received successfully');
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
      const enhancedDescription = data.candidates[0].content.parts[0].text;
      console.log('Enhanced description generated successfully');
      
      return new Response(
        JSON.stringify({ enhancedDescription }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    } else {
      console.error('Unexpected response structure from Gemini API:', JSON.stringify(data, null, 2));
      return new Response(
        JSON.stringify({ 
          error: 'AI enhancement completed but response was malformed. Please try again.' 
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }
  } catch (error) {
    console.error('Error in enhance-description function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message.includes('fetch') 
          ? 'Network error occurred. Please check your connection and try again.' 
          : 'An unexpected error occurred. Please try again later.'
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
