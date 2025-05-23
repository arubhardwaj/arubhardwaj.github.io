
import { Check } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ConsultationSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-theme-blue to-theme-purple text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4">Book a Consultation</h2>
          <p className="text-lg text-gray-100">
            Get expert advice on your data science and AI challenges with a personalized consultation.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white text-gray-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Consultation Package:
              </h3>
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold">1 Hour: Consultation - Data Science, Machine Learning and AI</h4>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">What Happens Next</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span><strong>Confirmation Email:</strong> You'll receive a payment confirmation immediately after checkout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span><strong>Personal Contact:</strong> I'll email you within 24 hours to discuss your specific requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span><strong>Calendar Invite:</strong> You'll receive a scheduling link to book a time that works for you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span><strong>Weekend Availability:</strong> Consultations are available on Saturdays for your convenience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span><strong>Preparation Materials:</strong> You'll receive guidance on how to prepare for our meeting to maximize value</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span><strong>Refund Policy:</strong> Refund requests can be made within 24 hours if the call hasn't been scheduled</span>
                  </li>
                </ul>
              </div>
              
              <div className="border-t pt-6 text-center text-gray-600">
                <p className="mb-4">
                  <strong>Important:</strong> After your payment is processed, you'll receive a confirmation email. 
                  I'll then contact you within 24 hours to arrange our consultation at a time that works best for you.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center p-6 pt-0">
              <Button className="bg-theme-blue hover:bg-theme-blue/90 text-white px-8 py-6 text-lg">
                Book Consultation Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
