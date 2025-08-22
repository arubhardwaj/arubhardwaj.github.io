
import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Add CSS to hide ElevenLabs branding
    const style = document.createElement('style');
    style.textContent = `
      elevenlabs-convai .elevenlabs-branding,
      elevenlabs-convai [class*="branding"],
      elevenlabs-convai [class*="powered"],
      elevenlabs-convai .footer,
      elevenlabs-convai [data-testid*="branding"],
      elevenlabs-convai [data-testid*="footer"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* ElevenLabs Conversational AI Widget */}
      <div 
        dangerouslySetInnerHTML={{
          __html: '<elevenlabs-convai agent-id="agent_6301k3741j8qftc8zjcqn0m7f0y8"></elevenlabs-convai>'
        }}
      />
    </>
  );
};

export default Chatbot;
