
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Calendar, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  showConsultationButton?: boolean;
  showProjectButton?: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Aru's AI assistant. I can answer questions about data science, machine learning, my experience, and the services I offer. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleConsultationClick = () => {
    setIsOpen(false);
    setTimeout(() => {
      window.location.href = 'https://book.stripe.com/28og05dXm9e7dTafYZ?locale=en-GB&__embed_source=buy_btn_1RJidbDRlpu0XokvgWLL4odr';
    }, 300);
  };

  const handleProjectClick = () => {
    setIsOpen(false);
    navigate('/submit-project');
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input.trim();
    setInput('');
    setIsLoading(true);

    try {
      console.log('Sending message to chatbot API:', currentInput);
      
      // Use the supabase client to invoke the function instead of direct fetch
      const response = await fetch(`https://egwiqdzwctjprchzwrqo.supabase.co/functions/v1/chatbot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnd2lxZHp3Y3RqcHJjaHp3cnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxMjMzMjUsImV4cCI6MjA2MzY5OTMyNX0.DUBh38-3AL6WxgLXQHhnHwckcJdV_QNo0Sd_-Oah8H0`,
        },
        body: JSON.stringify({ message: currentInput })
      });

      console.log('Response status:', response.status);

      // Always try to parse the response as JSON, even if there's an error
      let data;
      try {
        data = await response.json();
        console.log('API Response data:', data);
      } catch (parseError) {
        console.error('Failed to parse response as JSON:', parseError);
        const textResponse = await response.text();
        console.log('Raw response:', textResponse);
        throw new Error('Invalid response format from server');
      }

      // Check if we have a valid response with content
      if (data && (data.response || data.message)) {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.response || data.message || 'I received your message.',
          isUser: false,
          timestamp: new Date(),
          showConsultationButton: data.showConsultationButton,
          showProjectButton: data.showProjectButton
        };

        setMessages(prev => [...prev, aiMessage]);
      } else {
        // Handle unexpected response structure
        throw new Error('Unexpected response format');
      }

    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message to chat
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment, or feel free to contact me directly at aru.bhardwaj@insightrix.eu",
        isUser: false,
        timestamp: new Date(),
        showConsultationButton: true
      };
      
      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: "Connection Issue",
        description: "The message couldn't be sent. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-theme-gold hover:bg-yellow-600 text-white shadow-lg"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)]">
          <Card className="shadow-2xl border-2 border-theme-gold/20">
            <CardHeader className="bg-theme-gold text-white p-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bot className="h-5 w-5" />
                Ask Aru's AI Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-80 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="space-y-2">
                      <div
                        className={`flex gap-2 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex gap-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                            message.isUser 
                              ? 'bg-theme-olive text-white' 
                              : 'bg-theme-gold text-white'
                          }`}>
                            {message.isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                          </div>
                          <div className={`rounded-lg p-3 ${
                            message.isUser 
                              ? 'bg-theme-olive text-white' 
                              : 'bg-gray-100 text-gray-900'
                          }`}>
                            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                            <p className="text-xs opacity-70 mt-1">
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      {!message.isUser && (message.showConsultationButton || message.showProjectButton) && (
                        <div className="flex flex-wrap gap-2 justify-start ml-10">
                          {message.showConsultationButton && (
                            <Button
                              onClick={handleConsultationClick}
                              className="bg-theme-gold hover:bg-yellow-600 text-white text-xs px-3 py-1 h-auto"
                              size="sm"
                            >
                              <Calendar className="h-3 w-3 mr-1" />
                              Book Consultation (€90)
                            </Button>
                          )}
                          {message.showProjectButton && (
                            <Button
                              onClick={handleProjectClick}
                              className="bg-theme-olive hover:bg-theme-olive/90 text-white text-xs px-3 py-1 h-auto"
                              size="sm"
                            >
                              <FileText className="h-3 w-3 mr-1" />
                              Submit Project
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-2 justify-start">
                      <div className="flex gap-2 max-w-[80%]">
                        <div className="h-8 w-8 rounded-full bg-theme-gold text-white flex items-center justify-center shrink-0">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div className="bg-gray-100 rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>
              
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about data science, ML, or my experience..."
                    className="min-h-[40px] max-h-[120px] resize-none"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isLoading}
                    className="bg-theme-gold hover:bg-yellow-600 text-white"
                    size="icon"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;
