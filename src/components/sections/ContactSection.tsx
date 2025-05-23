
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Check } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

declare global {
  interface Window {
    emailjs: any;
  }
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Load EmailJS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    document.body.appendChild(script);
    
    script.onload = () => {
      window.emailjs.init("hF6O_JgDy5jUxyk-4");
    };
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    window.emailjs.send("default_service", "template_enrm7gd", {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    }, "Su2lriYsuQqokQg2iFNy0")
      .then(() => {
        toast.success('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
      })
      .catch((error: any) => {
        console.error('Error sending email:', error);
        toast.error('Failed to send message. Please try again later.');
        setIsSubmitting(false);
      });
  };

  return (
    <section className="py-20 bg-hero-lime" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4">
            <span className="text-theme-olive">Get In </span>
            <span className="text-theme-gold">Touch</span>
          </h2>
          <p className="text-lg text-gray-700">
            Ready to transform your data into actionable insights? Let's discuss how I can help your organization leverage AI and machine learning.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-white">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 border-r border-gray-200">
                  <h3 className="text-xl font-semibold mb-6 text-theme-olive">Contact Information</h3>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3 bg-yellow-50 p-3 rounded-md">
                      <Mail className="h-5 w-5 text-yellow-500" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <a href="mailto:aru.bhardwaj@insighrix.eu" className="text-theme-olive font-medium">
                          aru.bhardwaj@insighrix.eu
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-3 bg-yellow-50 p-3 rounded-md">
                      <Phone className="h-5 w-5 text-yellow-500" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <a href="tel:+33766985210" className="text-theme-olive font-medium">
                          +33 (0) 766985210
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-yellow-50 p-3 rounded-md">
                      <MapPin className="h-5 w-5 text-yellow-500" />
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="text-theme-olive font-medium">Paris, France (Remote)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold mb-3">Follow Me</h4>
                    <div className="flex gap-3">
                      <a 
                        href="https://www.linkedin.com/in/arub" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-full bg-[#0077b5] hover:bg-[#0077b5]/90 flex items-center justify-center text-white transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://www.malt.fr/profile/arubhardwaj" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-full bg-theme-olive hover:bg-theme-olive/90 flex items-center justify-center text-white transition-colors"
                      >
                        <span className="font-bold text-base">M</span>
                      </a>
                      <a 
                        href="https://upwork.com/fl/arub" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-full bg-[#6FDA44] hover:bg-[#6FDA44]/90 flex items-center justify-center text-white transition-colors"
                      >
                        <span className="font-bold text-base">U</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold mb-3">Send Me a Message</h4>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-sm">Full Name</Label>
                        <Input 
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-sm">Email Address</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="subject" className="text-sm">Subject</Label>
                        <Input 
                          id="subject"
                          name="subject"
                          placeholder="What is your inquiry about?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-sm">Message</Label>
                        <Textarea 
                          id="message"
                          name="message"
                          placeholder="Please provide details about your project or inquiry"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-theme-olive hover:bg-theme-olive/90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-theme-olive">Book a Consultation</h3>
                  
                  <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <p className="font-medium">Consultation Package:</p>
                    <p className="mt-1">1 Hour: Consultation - Data Science, Machine Learning and AI</p>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4 text-theme-olive">What Happens Next</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                        <span><strong>Confirmation Email:</strong> You'll receive a payment confirmation immediately after checkout</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                        <span><strong>Personal Contact:</strong> I'll email you within 24 hours to discuss your requirements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                        <span><strong>Calendar Invite:</strong> You'll receive a scheduling link to book a time</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                        <span><strong>Weekend Availability:</strong> Consultations are available on Saturdays</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                        <span><strong>Preparation Materials:</strong> You'll receive guidance on how to prepare</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      className="w-full bg-theme-gold hover:bg-theme-gold/90 text-white py-3 h-auto text-base"
                      onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Book a Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
