
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CircleDollarSign, Search, TrendingUp, BarChart, CheckCircle, Users, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const HowItWorksPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-fundr-600" />,
      title: "Discover Startups",
      description: "Browse through our curated list of innovative startups from various industries and regions."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-fundr-600" />,
      title: "Research & Analyze",
      description: "Review detailed profiles, business models, and growth projections to make informed decisions."
    },
    {
      icon: <CircleDollarSign className="h-12 w-12 text-fundr-600" />,
      title: "Invest Securely",
      description: "Choose your investment amount and complete the process through our secure payment system."
    },
    {
      icon: <BarChart className="h-12 w-12 text-fundr-600" />,
      title: "Track Performance",
      description: "Monitor your investments, receive updates, and watch your portfolio grow over time."
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="h-8 w-8 text-success-600" />,
      title: "Lower Minimum Investments",
      description: "Start investing with as little as $100, making startup investment accessible to everyone."
    },
    {
      icon: <Users className="h-8 w-8 text-success-600" />,
      title: "Diversified Portfolio",
      description: "Spread your investment across multiple startups to reduce risk and maximize potential returns."
    },
    {
      icon: <Clock className="h-8 w-8 text-success-600" />,
      title: "Transparent Timeline",
      description: "Clear investment timelines with regular updates on startup progress and milestones."
    },
    {
      icon: <Shield className="h-8 w-8 text-success-600" />,
      title: "Investor Protection",
      description: "Advanced security measures and legal protections to safeguard your investments."
    }
  ];

  const faqs = [
    {
      question: "What is the minimum amount I can invest?",
      answer: "The minimum investment amount varies by startup, but typically starts at $100. This low entry point allows anyone to begin investing in promising startups without requiring large amounts of capital."
    },
    {
      question: "How do I make money from my investments?",
      answer: "You can make money through equity appreciation when the startup grows in value, through dividends if the company distributes profits, or through acquisition or IPO events when the startup is bought or goes public."
    },
    {
      question: "How long until I see returns on my investment?",
      answer: "Startup investments are typically long-term investments, with potential returns taking anywhere from 5-10 years. However, some startups may provide earlier returns through dividends or earlier exit events."
    },
    {
      question: "What happens if a startup fails?",
      answer: "If a startup fails, you may lose your investment. This is why we recommend diversifying your portfolio across multiple startups to reduce risk. However, each investment is separate, so a failure in one startup won't affect your other investments."
    },
    {
      question: "How does StartupFundr select startups?",
      answer: "We have a rigorous vetting process that evaluates startups based on their business model, market potential, founding team, existing traction, and other key factors. Only about 5% of startups that apply to our platform are approved for listing."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-fundr-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">How StartupFundr Works</h1>
              <p className="text-xl text-muted-foreground mb-8">
                We've simplified the startup investment process to make it accessible, transparent, and rewarding.
              </p>
              <Button size="lg" className="bg-fundr-600 hover:bg-fundr-700" asChild>
                <Link to="/startups">Browse Startups</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Investment process section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Your Investment Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow these simple steps to start investing in the next generation of innovative companies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-fundr-50 p-4 rounded-full mb-6">
                          {step.icon}
                        </div>
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-fundr-600 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gray-200 -translate-y-1/2 z-0" style={{ width: 'calc(100% - 2rem)' }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">See How It Works</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Watch our short video to get a better understanding of how StartupFundr works and how you can start investing in promising startups.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Checkbox id="terms1" className="mt-1" />
                    <label htmlFor="terms1" className="ml-2 text-sm">
                      <span className="font-medium">Simple Process</span> - Creating an account takes less than 2 minutes
                    </label>
                  </li>
                  <li className="flex items-start">
                    <Checkbox id="terms2" className="mt-1" />
                    <label htmlFor="terms2" className="ml-2 text-sm">
                      <span className="font-medium">Transparent Fees</span> - Low 2% service fee, no hidden charges
                    </label>
                  </li>
                  <li className="flex items-start">
                    <Checkbox id="terms3" className="mt-1" />
                    <label htmlFor="terms3" className="ml-2 text-sm">
                      <span className="font-medium">Expert Support</span> - Our investment advisors are available 7 days a week
                    </label>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-2 rounded-lg shadow-md">
                <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
                  <p className="text-gray-500">Video Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Invest Through StartupFundr</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're changing how people invest in startups with these unique advantages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex">
                      <div className="mr-4 mt-1">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get answers to the most common questions about investing through StartupFundr.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Collapsible
                  key={index}
                  open={openFaq === index}
                  onOpenChange={() => setOpenFaq(openFaq === index ? null : index)}
                  className="border rounded-lg overflow-hidden"
                >
                  <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50">
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <div className="text-fundr-600">
                      {openFaq === index ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus"><path d="M5 12h14"/></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                      )}
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 bg-white border-t">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 bg-fundr-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Investing?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of investors who are already funding the next generation of innovative startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/startups">Browse Startups</Link>
              </Button>
              <Button size="lg" className="bg-white text-fundr-600 hover:bg-gray-100" asChild>
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
