
import React from 'react';

const Chatbot = () => {
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
