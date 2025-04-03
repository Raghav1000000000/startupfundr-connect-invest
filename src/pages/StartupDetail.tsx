
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { 
  ArrowUpRight, 
  Calendar, 
  ChevronLeft, 
  Flag, 
  Globe, 
  MapPin, 
  Share, 
  ShieldCheck, 
  Star, 
  UserRound, 
  Users, 
} from "lucide-react";

// Sample startup data for the startup detail page
const startupDetailsData = {
  id: 1,
  name: "TechNova AI",
  tagline: "Next-generation AI assistant for healthcare professionals",
  logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1587",
  coverImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2076",
  description: "TechNova AI is developing a revolutionary AI assistant that helps healthcare professionals make faster and more accurate diagnoses. Our platform integrates with existing hospital systems to provide real-time clinical decision support, reducing medical errors and improving patient outcomes.",
  industry: "Artificial Intelligence",
  stage: "Seed",
  raised: "$750,000",
  goal: "$1,500,000",
  progress: 50,
  location: "San Francisco, CA",
  founded: "2022",
  investors: 85,
  trending: true,
  closing: "14 days",
  website: "https://technova-ai.example.com",
  team: [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1587",
      bio: "Former AI research lead at Stanford Medicine with 10+ years of experience in healthcare technology."
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1587",
      bio: "Ex-Google AI engineer with expertise in machine learning and natural language processing."
    },
    {
      name: "Dr. David Park",
      role: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=1470",
      bio: "Board-certified physician with 15 years of clinical experience in emergency medicine."
    }
  ],
  highlights: [
    "Proprietary AI model trained on 50 million+ anonymized patient records",
    "97% accuracy in preliminary clinical trials",
    "Partnerships with 3 leading teaching hospitals",
    "Reduces diagnosis time by an average of 60%",
    "HIPAA-compliant and FDA clearance in progress"
  ],
  problem: "Medical errors are the third leading cause of death in the United States, resulting in over 250,000 deaths annually. Many of these errors occur due to information overload, cognitive biases, and the complexity of modern medicine.",
  solution: "TechNova AI provides healthcare professionals with an AI-powered assistant that analyzes patient data in real-time, suggests potential diagnoses, recommends tests, and provides evidence-based treatment options. The platform integrates seamlessly with existing electronic health record systems to provide contextual insights without disrupting clinical workflows.",
  traction: "Since our beta launch 6 months ago, we've deployed our system in 3 leading teaching hospitals, processed over 15,000 patient cases, and improved diagnostic accuracy by 28% in preliminary studies. We've received positive feedback from 94% of participating physicians, who report saving an average of 45 minutes per shift.",
  marketSize: "The global healthcare AI market is projected to reach $45.2 billion by 2026, growing at a CAGR of 44.9%. Our initial target market of clinical decision support systems is valued at $3.8 billion with rapid growth expected as AI adoption increases in healthcare.",
  businessModel: "We employ a SaaS model with tiered subscription pricing based on hospital size and usage volume. Annual licenses start at $50,000 for small clinics and range up to $500,000 for large hospital systems. We also offer implementation, training, and customization services as additional revenue streams.",
  competitors: [
    {
      name: "MediMind",
      strengths: "Strong market presence, established hospital relationships",
      weaknesses: "Older technology stack, limited AI capabilities"
    },
    {
      name: "DiagnosisAI",
      strengths: "Well-funded, aggressive marketing",
      weaknesses: "Narrow focus on radiology, poor integration with EHR systems"
    },
    {
      name: "HealthTech Solutions",
      strengths: "Broad product offering, large sales team",
      weaknesses: "Jack of all trades, master of none approach, outdated UI"
    }
  ],
  financials: {
    revenue: "$120,000 in pilot contracts",
    expenses: "$680,000 annual burn rate",
    projections: "Projecting $2.5M in ARR by end of next year, break-even in Q4 2024"
  },
  useOfFunds: [
    { category: "Product Development", percentage: 40 },
    { category: "Clinical Validation", percentage: 25 },
    { category: "Sales & Marketing", percentage: 20 },
    { category: "Operations", percentage: 10 },
    { category: "Legal & Regulatory", percentage: 5 }
  ],
  minimumInvestment: "$1,000",
  investorPerks: [
    { tier: "Angel ($1,000+)", perks: ["Quarterly investor updates", "Early access to product demos"] },
    { tier: "Seed ($10,000+)", perks: ["All Angel perks", "Annual virtual meeting with founders", "Recognition on investor page"] },
    { tier: "Growth ($50,000+)", perks: ["All Seed perks", "Advisory board consideration", "Custom hospital implementation tour"] }
  ],
  faqs: [
    {
      question: "How does your AI technology work?",
      answer: "Our AI system uses a combination of natural language processing, machine learning, and knowledge graph technology to analyze patient data, medical literature, and clinical guidelines. It identifies patterns and correlations that might be missed by human physicians, especially during high-stress or time-constrained situations."
    },
    {
      question: "What regulatory approvals do you have?",
      answer: "Our platform is currently operating under FDA guidance for Clinical Decision Support Software. We're in the process of obtaining FDA clearance as a Class II medical device with expected approval in Q2 2023. We are HIPAA-compliant and have completed SOC 2 Type I certification."
    },
    {
      question: "How do you address potential bias in your AI models?",
      answer: "We take AI ethics and bias extremely seriously. Our training data is carefully curated to represent diverse patient populations, and we employ fairness-aware machine learning techniques. We regularly audit our system for bias and have an independent ethics board that reviews our algorithms."
    },
    {
      question: "What is your exit strategy?",
      answer: "While we're focused on building a sustainable business, potential exit opportunities include acquisition by major healthcare IT companies, medical device manufacturers, or even pharmaceutical companies looking to enhance their digital health offerings. We expect to be an attractive acquisition target within 5-7 years."
    }
  ],
  documents: [
    { name: "Pitch Deck", type: "pdf", size: "4.2 MB" },
    { name: "Financial Projections", type: "xlsx", size: "1.8 MB" },
    { name: "Product Roadmap", type: "pdf", size: "2.5 MB" },
    { name: "Clinical Validation Study", type: "pdf", size: "6.7 MB" }
  ],
  updates: [
    {
      date: "October 5, 2023",
      title: "Partnership with University Medical Center",
      content: "We're excited to announce our newest partnership with University Medical Center, one of the top teaching hospitals in the country. This partnership will allow us to deploy our AI assistant across their emergency department and internal medicine units, reaching over 200 physicians and impacting care for approximately 50,000 patients annually."
    },
    {
      date: "September 15, 2023",
      title: "New Clinical Validation Results",
      content: "Our latest clinical validation study has been completed, showing a 97% diagnostic accuracy rate across 2,500 test cases. This represents a 28% improvement over standard physician performance without AI assistance. The study has been submitted for peer review to the Journal of Medical Informatics."
    }
  ]
};

const StartupDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [startup, setStartup] = useState<typeof startupDetailsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [investmentAmount, setInvestmentAmount] = useState("1000");
  const [isInvestDialogOpen, setIsInvestDialogOpen] = useState(false);

  useEffect(() => {
    // In a real app, this would fetch data from an API
    // For now, just simulating an API call with setTimeout
    const fetchStartupDetails = () => {
      setLoading(true);
      setTimeout(() => {
        setStartup(startupDetailsData);
        setLoading(false);
      }, 500);
    };

    fetchStartupDetails();
  }, [id]);

  const handleInvestment = () => {
    toast({
      title: "Investment initiated",
      description: `You have committed $${investmentAmount} to TechNova AI. Follow the next steps in your email to complete the investment.`,
    });
    setIsInvestDialogOpen(false);
  };

  const handleShare = () => {
    // In a real app, this would use the Web Share API or a sharing library
    toast({
      title: "Share link copied",
      description: "The link to this startup has been copied to your clipboard.",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
            <p className="mt-4 text-lg">Loading startup details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!startup) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Startup Not Found</h2>
            <p className="mb-6">We couldn't find the startup you're looking for.</p>
            <Button asChild>
              <Link to="/startups">Browse Startups</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section with cover image */}
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
          <img 
            src={startup.coverImage}
            alt={`${startup.name} cover`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="container mx-auto">
              <div className="flex items-center mb-4">
                <Link to="/startups" className="flex items-center gap-1 text-white/80 hover:text-white transition-colors">
                  <ChevronLeft className="h-4 w-4" />
                  <span>Back to Startups</span>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 md:h-20 md:w-20 bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={startup.logo}
                    alt={startup.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{startup.name}</h1>
                  <p className="text-lg md:text-xl text-white/90 max-w-2xl">{startup.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content - left column on desktop */}
            <div className="lg:col-span-2 space-y-8">
              {/* Tabs for different sections */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="team">Team</TabsTrigger>
                  <TabsTrigger value="financials">Financials</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                  <TabsTrigger value="updates">Updates</TabsTrigger>
                </TabsList>
                
                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Company Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">About {startup.name}</h3>
                        <p className="text-muted-foreground">{startup.description}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-muted-foreground" />
                          <span>{startup.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-muted-foreground" />
                          <span>Founded {startup.founded}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="h-5 w-5 text-muted-foreground" />
                          <a 
                            href={startup.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-fundr-600 hover:underline"
                          >
                            Website
                          </a>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {startup.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="mt-1 text-fundr-600">
                                <ShieldCheck className="h-4 w-4" />
                              </div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>The Problem & Solution</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Problem</h3>
                        <p className="text-muted-foreground">{startup.problem}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Solution</h3>
                        <p className="text-muted-foreground">{startup.solution}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Traction</h3>
                        <p className="text-muted-foreground">{startup.traction}</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Market & Competition</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Market Size</h3>
                        <p className="text-muted-foreground">{startup.marketSize}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Business Model</h3>
                        <p className="text-muted-foreground">{startup.businessModel}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Competitive Landscape</h3>
                        <div className="space-y-4">
                          {startup.competitors.map((competitor, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-medium mb-2">{competitor.name}</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="text-green-600 font-medium">Strengths:</span> {competitor.strengths}
                                </div>
                                <div>
                                  <span className="text-red-600 font-medium">Weaknesses:</span> {competitor.weaknesses}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Team Tab */}
                <TabsContent value="team" className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Leadership Team</CardTitle>
                      <CardDescription>Meet the people behind {startup.name}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {startup.team.map((member, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                            <div className="h-64 overflow-hidden">
                              <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="font-bold text-lg">{member.name}</h3>
                              <p className="text-fundr-600 mb-2">{member.role}</p>
                              <p className="text-muted-foreground text-sm">{member.bio}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Financials Tab */}
                <TabsContent value="financials" className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Financial Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-muted-foreground mb-1">Current Revenue</div>
                          <div className="font-bold text-lg">{startup.financials.revenue}</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-muted-foreground mb-1">Annual Burn Rate</div>
                          <div className="font-bold text-lg">{startup.financials.expenses}</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-muted-foreground mb-1">Projections</div>
                          <div className="font-bold text-lg">Break-even in Q4 2024</div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Financial Projections</h3>
                        <p className="text-muted-foreground">{startup.financials.projections}</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Use of Funds</CardTitle>
                      <CardDescription>How the funds raised will be allocated</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {startup.useOfFunds.map((item, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-1">
                              <span>{item.category}</span>
                              <span>{item.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div 
                                className="bg-fundr-600 h-2.5 rounded-full" 
                                style={{ width: `${item.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Investor Perks</CardTitle>
                      <CardDescription>Benefits based on investment amount</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {startup.investorPerks.map((perk, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-4">
                            <h3 className="font-bold mb-2">{perk.tier}</h3>
                            <ul className="space-y-1">
                              {perk.perks.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <Star className="h-4 w-4 text-fundr-600 mt-1 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* FAQ Tab */}
                <TabsContent value="faq" className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {startup.faqs.map((faq, index) => (
                          <div key={index} className="space-y-2">
                            <h3 className="font-bold text-lg">{faq.question}</h3>
                            <p className="text-muted-foreground">{faq.answer}</p>
                            {index < startup.faqs.length - 1 && <Separator className="mt-4" />}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Due Diligence Documents</CardTitle>
                      <CardDescription>Available to committed investors</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {startup.documents.map((doc, index) => (
                          <div key={index} className="flex items-center justify-between border-b py-3 last:border-0">
                            <div className="flex items-center gap-3">
                              <div className="bg-gray-100 p-2 rounded-md">
                                {doc.type === 'pdf' && <svg className="h-6 w-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" /><path d="M3 8a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" /></svg>}
                                {doc.type === 'xlsx' && <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 1a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1zm8-6a1 1 0 100 2 1 1 0 000-2zm-8 6a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" /></svg>}
                              </div>
                              <div>
                                <div className="font-medium">{doc.name}</div>
                                <div className="text-xs text-muted-foreground">{doc.size} • {doc.type.toUpperCase()}</div>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Request Access
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Updates Tab */}
                <TabsContent value="updates" className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Company Updates</CardTitle>
                      <CardDescription>Latest news and announcements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        {startup.updates.map((update, index) => (
                          <div key={index} className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{update.date}</Badge>
                              {index === 0 && <Badge className="bg-fundr-600">Latest</Badge>}
                            </div>
                            <h3 className="font-bold text-xl">{update.title}</h3>
                            <p className="text-muted-foreground">{update.content}</p>
                            {index < startup.updates.length - 1 && <Separator className="mt-4" />}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar - right column on desktop */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Raised: {startup.raised}</span>
                      <span>Goal: {startup.goal}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-fundr-600 h-2.5 rounded-full" 
                        style={{ width: `${startup.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{startup.progress}% Complete</span>
                      <span>{startup.closing} left</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <Dialog open={isInvestDialogOpen} onOpenChange={setIsInvestDialogOpen}>
                      <DialogTrigger asChild>
                        <Button className="w-full">Invest Now</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Invest in {startup.name}</DialogTitle>
                          <DialogDescription>
                            Fill in the details below to proceed with your investment.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="investment-amount">Investment Amount ($)</Label>
                            <Input 
                              id="investment-amount" 
                              type="number" 
                              min="1000"
                              value={investmentAmount}
                              onChange={(e) => setInvestmentAmount(e.target.value)}
                            />
                            <p className="text-xs text-muted-foreground">Minimum investment: ${startup.minimumInvestment}</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-sm font-medium mb-2">Your Investment Summary</div>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span>Investment Amount</span>
                                <span>${investmentAmount}</span>
                              </div>
                              <div className="flex justify-between text-fundr-600 font-medium">
                                <span>Equity Value</span>
                                <span>TBD</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button 
                            variant="outline" 
                            onClick={() => setIsInvestDialogOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button onClick={handleInvestment}>
                            Proceed
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    
                    <Button variant="outline" onClick={handleShare}>
                      <Share className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex justify-between text-sm font-medium mb-4">
                      <span>Startup Details</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Industry</span>
                        <span>{startup.industry}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Stage</span>
                        <span>{startup.stage}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Founded</span>
                        <span>{startup.founded}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Location</span>
                        <span>{startup.location}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Minimum Investment</span>
                        <span>${startup.minimumInvestment}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gray-100 rounded-full p-2">
                      <Users className="h-5 w-5 text-fundr-600" />
                    </div>
                    <div>
                      <div className="font-medium">{startup.investors} Investors</div>
                      <div className="text-xs text-muted-foreground">Have joined this round</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                      <div key={index} className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                        {index < 5 ? (
                          <img 
                            src={`https://i.pravatar.cc/32?img=${index + 10}`} 
                            alt="Investor" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          index === 7 && (
                            <div className="w-full h-full flex items-center justify-center text-xs font-medium text-gray-600">
                              +{startup.investors - 7}
                            </div>
                          )
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-medium">Flag this startup</div>
                    <Button variant="ghost" size="icon">
                      <Flag className="h-5 w-5 text-muted-foreground" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    If you see any issues or have concerns about this listing, please report it to our team for review.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-4">Similar Startups</h3>
                  <div className="space-y-4">
                    {[
                      {
                        id: 2,
                        name: "MediSync Health",
                        industry: "Healthcare",
                        logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1470"
                      },
                      {
                        id: 3,
                        name: "DataMind AI",
                        industry: "Artificial Intelligence",
                        logo: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&q=80&w=1471"
                      }
                    ].map((similar, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-md overflow-hidden bg-gray-100">
                          <img
                            src={similar.logo}
                            alt={similar.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{similar.name}</div>
                          <div className="text-xs text-muted-foreground">{similar.industry}</div>
                        </div>
                        <Button variant="ghost" size="icon" asChild className="ml-auto">
                          <Link to={`/startups/${similar.id}`}>
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StartupDetail;
