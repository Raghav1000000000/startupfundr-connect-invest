
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    reason: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, reason: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        reason: ""
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-fundr-50 py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions or need assistance? We're here to help.
              Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact form and info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact information */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start">
                          <div className="bg-fundr-100 p-3 rounded-full mr-4">
                            <MailIcon className="h-6 w-6 text-fundr-800" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                            <p className="text-muted-foreground mb-2">For general inquiries:</p>
                            <a href="mailto:info@startupfundr.com" className="text-fundr-600 hover:underline">
                              info@startupfundr.com
                            </a>
                            <p className="text-muted-foreground mt-2 mb-1">For investor support:</p>
                            <a href="mailto:investors@startupfundr.com" className="text-fundr-600 hover:underline">
                              investors@startupfundr.com
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start">
                          <div className="bg-fundr-100 p-3 rounded-full mr-4">
                            <PhoneIcon className="h-6 w-6 text-fundr-800" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                            <p className="text-muted-foreground mb-2">Mon - Fri, 9am - 5pm PST</p>
                            <a href="tel:+18005551234" className="text-fundr-600 hover:underline">
                              +1 (800) 555-1234
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start">
                          <div className="bg-fundr-100 p-3 rounded-full mr-4">
                            <MapPinIcon className="h-6 w-6 text-fundr-800" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                            <p className="text-muted-foreground mb-2">Headquarters</p>
                            <address className="not-italic text-sm">
                              123 Innovation Way<br />
                              San Francisco, CA 94107<br />
                              United States
                            </address>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              
              {/* Contact form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll respond as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            placeholder="Your name" 
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="your.email@example.com" 
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reason">Reason for Contact</Label>
                        <Select 
                          value={formData.reason} 
                          onValueChange={handleSelectChange}
                        >
                          <SelectTrigger id="reason">
                            <SelectValue placeholder="Select a reason" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="investor">Investor Support</SelectItem>
                            <SelectItem value="startup">Startup Application</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="press">Press Inquiry</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input 
                          id="subject" 
                          name="subject" 
                          placeholder="What is your message about?" 
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          placeholder="Please provide as much detail as possible..." 
                          rows={6} 
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="text-sm text-muted-foreground">
                        By submitting this form, you agree to our 
                        <a href="/privacy" className="text-fundr-600 hover:underline mx-1">Privacy Policy</a> 
                        and consent to being contacted regarding your inquiry.
                      </div>
                      
                      <CardFooter className="px-0 pt-2">
                        <Button 
                          type="submit" 
                          className="w-full md:w-auto" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </CardFooter>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="py-12 bg-fundr-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Common Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Find quick answers to frequently asked questions.
            </p>
            <Button 
              variant="outline" 
              onClick={() => window.location.href = "/faq"}
            >
              Visit FAQ Page
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
