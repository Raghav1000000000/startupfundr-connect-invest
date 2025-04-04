
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Download, FileText, Globe, Lightbulb, Link2, PlayCircle, Search } from "lucide-react";
import { Link } from "react-router-dom";

const StartupResources = () => {
  // Resource categories
  const categories = [
    { id: "guides", label: "Guides & Templates" },
    { id: "funding", label: "Funding Resources" },
    { id: "legal", label: "Legal Resources" },
    { id: "marketing", label: "Marketing & Growth" },
    { id: "education", label: "Learning Resources" },
  ];

  // Resources data
  const resources = {
    guides: [
      {
        id: 1,
        title: "Pitch Deck Template",
        description: "A comprehensive template for creating a compelling investor pitch deck.",
        type: "Template",
        format: "PDF",
        icon: <FileText className="h-10 w-10 text-fundr-600" />,
      },
      {
        id: 2,
        title: "Business Plan Guide",
        description: "Step-by-step guide to writing an effective business plan for your startup.",
        type: "Guide",
        format: "PDF",
        icon: <BookOpen className="h-10 w-10 text-fundr-600" />,
      },
      {
        id: 3,
        title: "Financial Projections Template",
        description: "Excel template for creating 3-year financial projections for investors.",
        type: "Template",
        format: "Excel",
        icon: <FileText className="h-10 w-10 text-fundr-600" />,
      },
      {
        id: 4,
        title: "Market Research Framework",
        description: "A framework for conducting comprehensive market research for your startup.",
        type: "Framework",
        format: "PDF",
        icon: <Search className="h-10 w-10 text-fundr-600" />,
      },
    ],
    funding: [
      {
        id: 1,
        title: "Venture Capital Directory",
        description: "Comprehensive list of VC firms organized by industry focus and investment stage.",
        type: "Directory",
        format: "Web",
        icon: <Globe className="h-10 w-10 text-fundr-600" />,
      },
      {
        id: 2,
        title: "Grant Opportunities Database",
        description: "Database of grants and non-dilutive funding opportunities for startups.",
        type: "Database",
        format: "Web",
        icon: <Search className="h-10 w-10 text-fundr-600" />,
      },
      {
        id: 3,
        title: "Term Sheet Guide",
        description: "Guide to understanding and negotiating venture capital term sheets.",
        type: "Guide",
        format: "PDF",
        icon: <FileText className="h-10 w-10 text-fundr-600" />,
      },
      {
        id: 4,
        title: "Equity & Valuation Calculator",
        description: "Interactive calculator for equity splits and company valuation.",
        type: "Tool",
        format: "Web",
        icon: <Lightbulb className="h-10 w-10 text-fundr-600" />,
      },
    ],
    legal: [
      {
        id: 1,
        title: "Founder Agreement Template",
        description: "Template for establishing clear agreements between co-founders.",
        type: "Template",
        format: "Doc",
        icon: <FileText className="h-10 w-10 text-fundr-600" />,
      },
      {
        id: 2,
        title: "IP Protection Guide",
        description: "Guide to intellectual property protection for startups.",
        type: "Guide",
        format: "PDF",
        icon: <BookOpen className="h-10 w-10 text-fundr-600" />,
      },
      {
        id: 3,
        title: "Privacy Policy Generator",
        description: "Tool to create a compliant privacy policy for your website or app.",
        type: "Tool",
        format: "Web",
        icon: <Lightbulb className="h-10 w-10 text-fundr-600" />,
      },
      {
        id: 4,
        title: "Employment Contract Templates",
        description: "Standard employment and contractor agreement templates.",
        type: "Template",
        format: "Doc",
        icon: <FileText className="h-10 w-10 text-fundr-600" />,
      },
    ],
    marketing: [
      {
        id: 1,
        title: "Startup Marketing Playbook",
        description: "Comprehensive guide to marketing strategies for early-stage startups.",
        type: "Guide",
        format: "PDF",
        icon: <BookOpen className="h-10 w-10 text-fundr-600" />,
      },
      {
        id: 2,
        title: "Social Media Strategy Template",
        description: "Template for creating an effective social media strategy.",
        type: "Template",
        format: "PDF",
        icon: <FileText className="h-10 w-10 text-fundr-600" />,
      },
      {
        id: 3,
        title: "Growth Metrics Dashboard",
        description: "Excel dashboard for tracking key growth metrics for your startup.",
        type: "Template",
        format: "Excel",
        icon: <FileText className="h-10 w-10 text-fundr-600" />,
      },
      {
        id: 4,
        title: "SEO Starter Guide",
        description: "Beginner-friendly guide to search engine optimization for startups.",
        type: "Guide",
        format: "PDF",
        icon: <BookOpen className="h-10 w-10 text-fundr-600" />,
      },
    ],
    education: [
      {
        id: 1,
        title: "Startup Fundraising Masterclass",
        description: "Video course on raising capital for your startup from angel investors to Series A.",
        type: "Course",
        format: "Video",
        icon: <PlayCircle className="h-10 w-10 text-fundr-600" />,
      },
      {
        id: 2,
        title: "Founder's Library",
        description: "Curated collection of books, articles, and podcasts for startup founders.",
        type: "Collection",
        format: "Web",
        icon: <BookOpen className="h-10 w-10 text-fundr-600" />,
      },
      {
        id: 3,
        title: "Startup Accounting Basics",
        description: "Guide to understanding financial statements and accounting for startups.",
        type: "Guide",
        format: "PDF",
        icon: <FileText className="h-10 w-10 text-fundr-600" />,
      },
      {
        id: 4,
        title: "Product Development Framework",
        description: "Framework for building and launching products using lean methodology.",
        type: "Framework",
        format: "PDF",
        icon: <Lightbulb className="h-10 w-10 text-fundr-600" />,
      },
    ],
  };

  // Featured resources
  const featuredResources = [
    {
      id: 1,
      title: "Ultimate Startup Fundraising Guide",
      description: "Comprehensive guide covering all aspects of raising capital for your startup, from preparation to closing the deal.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1470",
      category: "Funding",
    },
    {
      id: 2,
      title: "Startup Legal Essentials Bundle",
      description: "Complete package of legal templates and guides to protect your startup from day one.",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1512",
      category: "Legal",
    },
    {
      id: 3,
      title: "Growth Hacking Toolkit",
      description: "Collection of proven growth strategies and tools for startups with limited budgets.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1415",
      category: "Marketing",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          {/* Hero section */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Startup Resources</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Access our curated collection of tools, templates, and guides to help you build, grow, and fund your startup.
              From legal documents to pitch deck templates, we've got you covered.
            </p>
          </section>

          {/* Featured resources */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredResources.map((resource) => (
                <Card key={resource.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge>{resource.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button className="w-full">
                      Access Resource <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Resource categories */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Resource Library</h2>
            <Tabs defaultValue="guides">
              <TabsList className="mb-8 w-full flex justify-start overflow-x-auto">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(resources).map(([category, items]) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((resource) => (
                      <Card key={resource.id} className="h-full">
                        <CardHeader className="flex flex-row items-start space-y-0 gap-4">
                          {resource.icon}
                          <div>
                            <CardTitle className="text-xl">{resource.title}</CardTitle>
                            <div className="flex gap-2 mt-1">
                              <Badge variant="outline">{resource.type}</Badge>
                              <Badge variant="secondary">{resource.format}</Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{resource.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            {resource.format === "PDF" || resource.format === "Excel" || resource.format === "Doc" ? (
                              <>
                                <Download className="mr-2 h-4 w-4" /> Download
                              </>
                            ) : (
                              <>
                                <Link2 className="mr-2 h-4 w-4" /> Access
                              </>
                            )}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </section>

          {/* CTA Section */}
          <section className="mt-16 bg-slate-50 p-8 rounded-lg border">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h2>
              <p className="text-muted-foreground mb-6">
                Our team of startup experts is available to provide personalized advice and feedback
                on your specific needs, from pitch deck reviews to market entry strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/how-it-works">Learn About Our Services</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StartupResources;
