
export async function enhanceDescription(description: string): Promise<string> {
  // This would be replaced with your actual Gemini API key from Lovable secrets
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'your-api-key-here';
  
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are an expert writing assistant helping users rephrase project descriptions for professional use. The rewritten version should be clear, detailed, and suitable for submitting to freelancers or service providers. Maintain all essential details, remove redundancy, and enhance clarity without altering the original intent.

Please rewrite this project description:

${description}`
          }]
        }]
      }),
    });

    const data = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Failed to get response from AI');
    }
  } catch (error) {
    console.error('Error enhancing description:', error);
    throw new Error('Failed to enhance description');
  }
}

// Mock handler for frontend-only version
export async function handleEnhanceDescription(req: Request): Promise<Response> {
  try {
    const { description } = await req.json();
    const enhancedDescription = await enhanceDescription(description);
    
    return new Response(JSON.stringify({ enhancedDescription }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to enhance description' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
