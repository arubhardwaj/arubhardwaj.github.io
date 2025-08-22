
import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Chatbot = () => {
  return (
    <>
      {/* Floating Voice Call Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => {
            const widget = document.querySelector('elevenlabs-convai') as any;
            if (widget) {
              widget.style.display = 'block';
              widget.startConversation();
            }
          }}
          className="h-14 w-14 rounded-full bg-theme-olive hover:bg-theme-olive/90 text-white shadow-lg"
          size="icon"
        >
          <Phone className="h-6 w-6" />
        </Button>
      </div>

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
