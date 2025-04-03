
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// FAQ categories and questions
const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I create an account on StartupFundr?",
        answer: "Creating an account is easy! Simply click on the 'Sign Up' button in the top right corner of the homepage, fill in your details, and verify your email address. Once verified, you can complete your investor profile to start exploring investment opportunities."
      },
      {
        question: "Is there a minimum investment amount?",
        answer: "Yes, the minimum investment amount varies by startup but typically starts at $100. This low entry point is designed to make startup investing accessible to a wider range of investors."
      },
      {
        question: "What documents do I need to register?",
        answer: "To register as an investor, you'll need to provide a valid government-issued ID (like a driver's license or passport), proof of address, and banking information for transferring funds. Some investment opportunities may require additional accreditation documentation."
      }
    ]
  },
  {
    category: "Investing Process",
    questions: [
      {
        question: "How do I invest in a startup?",
        answer: "To invest in a startup, browse our listings and select one that interests you. Review their business model, team, and financial projections. When ready, click the 'Invest Now' button on the startup's page, enter your investment amount, and follow the prompts to complete the transaction."
      },
      {
        question: "How does StartupFundr vet startups?",
        answer: "We conduct a thorough vetting process for all startups on our platform. This includes background checks on founders, review of business plans and financial projections, verification of legal compliance, and assessment of market potential. Only about 5% of startups that apply are accepted to our platform."
      },
      {
        question: "When do I receive equity in the startup?",
        answer: "After your investment is processed and the startup's funding round closes successfully, you'll receive documentation confirming your equity stake. This typically happens within 2-4 weeks after the closing date of the funding round."
      },
      {
        question: "Can I cancel my investment?",
        answer: "You can cancel your investment commitment up to 48 hours before the closing of the funding round. After that, your investment becomes binding. To cancel, go to your dashboard, locate the pending investment, and click the 'Cancel' button."
      }
    ]
  },
  {
    category: "Returns & Exits",
    questions: [
      {
        question: "How and when do I get returns on my investment?",
        answer: "Returns on startup investments typically come from 'exit events' such as the startup being acquired by another company, going public through an IPO, or occasionally through dividend distributions. The timeline for returns varies widely but often ranges from 5-10 years."
      },
      {
        question: "What happens if a startup fails?",
        answer: "If a startup fails, you may lose your investment. Startup investing carries significant risks, including the possibility of total loss. We recommend diversifying across multiple startups and only investing amounts you can afford to lose."
      },
      {
        question: "Can I sell my shares before an exit event?",
        answer: "Generally, startup shares are illiquid, meaning they cannot be easily sold until an exit event. However, we're working on a secondary marketplace feature that will allow investors to sell their shares to other investors on our platform in certain situations."
      }
    ]
  },
  {
    category: "Account & Security",
    questions: [
      {
        question: "How is my personal and financial information protected?",
        answer: "We use bank-level encryption and security measures to protect your personal and financial information. All data is encrypted both in transit and at rest, and we conduct regular security audits. Additionally, we never store complete payment information on our servers."
      },
      {
        question: "Can I change my investment preferences?",
        answer: "Yes, you can update your investment preferences at any time through your profile settings. This includes changing your preferred industries, investment amount range, and notification settings."
      },
      {
        question: "How do I reset my password?",
        answer: "To reset your password, click on the 'Login' button, then select 'Forgot Password.' Enter the email address associated with your account, and we'll send you a secure link to reset your password."
      }
    ]
  },
  {
    category: "Legal & Regulatory",
    questions: [
      {
        question: "Is StartupFundr regulated?",
        answer: "Yes, StartupFundr operates in compliance with Regulation Crowdfunding (Reg CF) under the JOBS Act, which is overseen by the Securities and Exchange Commission (SEC) and FINRA. We're committed to maintaining full regulatory compliance to protect both investors and startups."
      },
      {
        question: "Do I need to be an accredited investor?",
        answer: "No, you don't need to be an accredited investor to use StartupFundr. Under Regulation Crowdfunding, anyone over 18 years old can invest in startups through our platform, though there are limits on how much non-accredited investors can invest annually based on their income and net worth."
      },
      {
        question: "What are the tax implications of startup investments?",
        answer: "Startup investments may have various tax implications depending on your jurisdiction, including potential capital gains taxes on profitable exits. We recommend consulting with a tax professional for advice tailored to your specific situation. StartupFundr provides year-end tax documents to help with your filing."
      }
    ]
  }
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState(faqData);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredFAQs(faqData);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    
    const filtered = faqData.map(category => ({
      category: category.category,
      questions: category.questions.filter(
        q => q.question.toLowerCase().includes(searchTermLower) || 
             q.answer.toLowerCase().includes(searchTermLower)
      )
    })).filter(category => category.questions.length > 0);
    
    setFilteredFAQs(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-fundr-50 py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Find answers to common questions about StartupFundr and the startup investment process.
            </p>
            
            <div className="max-w-lg mx-auto">
              <div className="flex gap-2">
                <Input 
                  placeholder="Search questions..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="bg-white"
                />
                <Button onClick={handleSearch}>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-lg mb-4">No results found for "{searchTerm}"</p>
                <Button variant="outline" onClick={() => {
                  setSearchTerm("");
                  setFilteredFAQs(faqData);
                }}>
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredFAQs.map((category, index) => (
                  <div key={index}>
                    <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem 
                          key={faqIndex} 
                          value={`item-${index}-${faqIndex}`}
                          className="border rounded-lg p-1"
                        >
                          <AccordionTrigger className="text-left px-4 hover:no-underline text-lg font-medium">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4 text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-12 bg-fundr-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Can't find the answer you're looking for? Please reach out to our customer support team.
            </p>
            <Button onClick={() => window.location.href = "/contact"}>
              Contact Support
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
