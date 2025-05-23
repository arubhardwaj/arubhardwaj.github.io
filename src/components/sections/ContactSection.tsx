import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
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

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="heading-md mb-6 text-theme-olive">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-theme-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <a href="mailto:aru.bhardwaj@insighrix.eu" className="text-theme-green hover:underline">
                    aru.bhardwaj@insighrix.eu
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-theme-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <a href="tel:+33766985210" className="text-theme-green hover:underline">
                    +33 (0) 766985210
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-theme-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Location</h4>
                  <p>Paris, France (Remote)</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/arub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-[#0077b5] hover:bg-[#0077b5]/90 flex items-center justify-center text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.malt.fr/profile/arubhardwaj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-theme-olive hover:bg-theme-olive/90 flex items-center justify-center text-white transition-colors"
                >
                  <span className="font-bold text-lg">M</span>
                </a>
                <a 
                  href="https://upwork.com/fl/arub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-[#6FDA44] hover:bg-[#6FDA44]/90 flex items-center justify-center text-white transition-colors"
                >
                  <span className="font-bold text-lg">U</span>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="heading-md mb-6 text-theme-olive">Send Me a Message</h3>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject"
                      name="subject"
                      placeholder="What is your inquiry about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Please provide details about your project or inquiry"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
