
import { Check } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

const ConsultationSection = () => {
  const stripeButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Stripe script
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    document.body.appendChild(script);

    // Add Stripe button once script is loaded
    script.onload = () => {
      if (stripeButtonRef.current) {
        const stripeButton = document.createElement('stripe-buy-button');
        stripeButton.setAttribute('buy-button-id', 'buy_btn_1RJidbDRlpu0XokvgWLL4odr');
        stripeButton.setAttribute('publishable-key', 'pk_live_51QTvRbDRlpu0Xokvl70HGWoEOV7yoyJ1ye6INHArLHaeDpSEKk0vGLIycqiN4VMuA0HueyzxLlsPVD1GukvLAcPI00hxC37Dmk');
        stripeButtonRef.current.appendChild(stripeButton);
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 bg-hero-lime" id="consultation">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-theme-olive">Book a </span>
            <span className="text-theme-gold">Consultation</span>
          </h2>
          <p className="text-lg text-gray-700">
            Get expert advice on your data science and AI challenges with a personalized consultation.
          </p>
        </div>
        
        <Card className="bg-white text-gray-800 max-w-5xl mx-auto">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-center mb-6">
                  <h4 className="text-xl font-semibold text-theme-olive">Consultation Package:</h4>
                  <p className="font-medium mt-2">1 Hour: Consultation - Data Science, Machine Learning and AI</p>
                </div>
                
                <div className="flex justify-center my-6">
                  <div className="w-32 h-32 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center">
                    <img src="/lovable-uploads/fdeddb7d-ba2f-47aa-a96e-5019d4da87ed.png" alt="Consultant" className="w-full h-auto" />
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <p className="text-2xl font-bold text-theme-olive mb-2">€90</p>
                  <Button className="w-full bg-theme-gold hover:bg-theme-gold/90 text-white py-3 h-auto text-base">
                    Book
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">Supported payment methods:</p>
                  <div className="flex justify-center gap-2 mt-1">
                    <div className="w-8 h-5 bg-blue-600 rounded"></div>
                    <div className="w-8 h-5 bg-orange-600 rounded"></div>
                    <div className="w-8 h-5 bg-blue-800 rounded"></div>
                    <div className="w-8 h-5 bg-gray-800 rounded"></div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-theme-olive">What Happens Next</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span><strong>Confirmation Email:</strong> You'll receive a payment confirmation immediately after checkout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span><strong>Personal Contact:</strong> I'll email you within 24 hours to discuss your specific requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span><strong>Calendar Invite:</strong> You'll receive a scheduling link to book a time that works for you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span><strong>Weekend Availability:</strong> Consultations are available on Saturdays for your convenience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span><strong>Preparation Materials:</strong> You'll receive guidance on how to prepare for our meeting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span><strong>Refund Policy:</strong> Refund requests can be made within 24 hours if the call hasn't been scheduled</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                  <p className="text-sm text-gray-700">
                    <strong>Important:</strong> After your payment is processed, you'll receive a confirmation email. I'll then contact you within 24 hours to arrange our consultation at a time that works best for you.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center p-6 pt-0 hidden">
            <div ref={stripeButtonRef}></div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default ConsultationSection;
