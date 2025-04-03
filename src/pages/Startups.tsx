
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { 
  Checkbox, 
} from "@/components/ui/checkbox";
import { ChevronDown, Search, Filter, Users, Calendar, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// Sample startups data
const startupsData = [
  {
    id: 1,
    name: "TechNova AI",
    tagline: "Next-generation AI assistant for healthcare professionals",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1587",
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
  },
  {
    id: 2,
    name: "GreenEnergy Solutions",
    tagline: "Sustainable energy storage for residential and commercial use",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1470",
    industry: "Clean Energy",
    stage: "Series A",
    raised: "$3,200,000",
    goal: "$5,000,000",
    progress: 64,
    location: "Boston, MA",
    founded: "2020",
    investors: 210,
    trending: true,
    closing: "30 days",
  },
  {
    id: 3,
    name: "MediSync Health",
    tagline: "Remote patient monitoring platform for chronic conditions",
    logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1470",
    industry: "Healthcare",
    stage: "Seed",
    raised: "$425,000",
    goal: "$1,000,000",
    progress: 42.5,
    location: "Austin, TX",
    founded: "2022",
    investors: 62,
    trending: false,
    closing: "45 days",
  },
  {
    id: 4,
    name: "UrbanMobility",
    tagline: "Smart urban transportation solutions for modern cities",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1470",
    industry: "Transportation",
    stage: "Pre-seed",
    raised: "$180,000",
    goal: "$500,000",
    progress: 36,
    location: "Chicago, IL",
    founded: "2023",
    investors: 28,
    trending: false,
    closing: "60 days",
  },
  {
    id: 5,
    name: "FintechFlow",
    tagline: "Open banking platform for small businesses and entrepreneurs",
    logo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1470",
    industry: "Fintech",
    stage: "Series A",
    raised: "$4,500,000",
    goal: "$6,000,000",
    progress: 75,
    location: "New York, NY",
    founded: "2019",
    investors: 320,
    trending: true,
    closing: "7 days",
  },
  {
    id: 6,
    name: "EduLearn Platform",
    tagline: "AI-driven adaptive learning platform for K-12 students",
    logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1422",
    industry: "Education",
    stage: "Seed",
    raised: "$850,000",
    goal: "$2,000,000",
    progress: 42.5,
    location: "Seattle, WA",
    founded: "2021",
    investors: 95,
    trending: false,
    closing: "21 days",
  },
  {
    id: 7,
    name: "CyberShield",
    tagline: "Enterprise-grade security for small and medium businesses",
    logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1470",
    industry: "Cybersecurity",
    stage: "Series A",
    raised: "$2,800,000",
    goal: "$4,000,000",
    progress: 70,
    location: "Washington, DC",
    founded: "2020",
    investors: 175,
    trending: false,
    closing: "15 days",
  },
  {
    id: 8,
    name: "FoodTech Innovations",
    tagline: "Plant-based protein alternatives for sustainable food production",
    logo: "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&q=80&w=1374",
    industry: "Food Technology",
    stage: "Seed",
    raised: "$1,200,000",
    goal: "$2,500,000",
    progress: 48,
    location: "Portland, OR",
    founded: "2021",
    investors: 110,
    trending: true,
    closing: "28 days",
  },
];

// Industry options for filtering
const industries = [
  "Artificial Intelligence",
  "Clean Energy",
  "Healthcare",
  "Transportation",
  "Fintech",
  "Education",
  "Cybersecurity",
  "Food Technology",
  "E-commerce",
  "SaaS",
];

// Stage options for filtering
const stages = [
  "Pre-seed",
  "Seed",
  "Series A",
  "Series B",
  "Series C",
];

const Startups = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [fundingRange, setFundingRange] = useState([0, 100]);
  const [filtersVisible, setFiltersVisible] = useState(false);

  // Filter startups based on search term and filters
  const filteredStartups = startupsData.filter((startup) => {
    // Search term filter
    const matchesSearch = searchTerm === "" || 
      startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.industry.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Industry filter
    const matchesIndustry = selectedIndustries.length === 0 || 
      selectedIndustries.includes(startup.industry);
    
    // Stage filter
    const matchesStage = selectedStages.length === 0 || 
      selectedStages.includes(startup.stage);
    
    // Funding progress filter (min and max percentage)
    const matchesFunding = startup.progress >= fundingRange[0] && 
      startup.progress <= fundingRange[1];
    
    return matchesSearch && matchesIndustry && matchesStage && matchesFunding;
  });
  
  // Toggle industry selection
  const toggleIndustry = (industry: string) => {
    if (selectedIndustries.includes(industry)) {
      setSelectedIndustries(selectedIndustries.filter(i => i !== industry));
    } else {
      setSelectedIndustries([...selectedIndustries, industry]);
    }
  };
  
  // Toggle stage selection
  const toggleStage = (stage: string) => {
    if (selectedStages.includes(stage)) {
      setSelectedStages(selectedStages.filter(s => s !== stage));
    } else {
      setSelectedStages([...selectedStages, stage]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          {/* Hero section */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Startups</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Discover innovative startups across various industries and invest in the ideas shaping tomorrow.
              Browse our curated list of vetted startups raising capital.
            </p>
          </section>

          {/* Search and filters */}
          <section className="mb-8">
            <div className="flex flex-col md:flex-row items-stretch gap-4 mb-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search startups by name, industry or keywords..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button 
                variant="outline" 
                className="md:w-auto flex items-center gap-2"
                onClick={() => setFiltersVisible(!filtersVisible)}
              >
                <Filter className="h-4 w-4" />
                Filters
                <ChevronDown className={`h-4 w-4 transition-transform ${filtersVisible ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            <Collapsible open={filtersVisible} onOpenChange={setFiltersVisible}>
              <CollapsibleContent>
                <div className="bg-gray-50 p-6 rounded-lg border mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Industry filter */}
                    <div>
                      <h3 className="font-medium mb-3">Industries</h3>
                      <div className="space-y-2">
                        {industries.map((industry) => (
                          <div key={industry} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`industry-${industry}`} 
                              checked={selectedIndustries.includes(industry)}
                              onCheckedChange={() => toggleIndustry(industry)}
                            />
                            <label 
                              htmlFor={`industry-${industry}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {industry}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stage filter */}
                    <div>
                      <h3 className="font-medium mb-3">Funding Stage</h3>
                      <div className="space-y-2">
                        {stages.map((stage) => (
                          <div key={stage} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`stage-${stage}`} 
                              checked={selectedStages.includes(stage)}
                              onCheckedChange={() => toggleStage(stage)}
                            />
                            <label 
                              htmlFor={`stage-${stage}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {stage}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Funding progress filter */}
                    <div>
                      <h3 className="font-medium mb-3">Funding Progress</h3>
                      <div className="px-2">
                        <Slider
                          value={fundingRange}
                          min={0}
                          max={100}
                          step={5}
                          onValueChange={setFundingRange}
                          className="mb-6"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{fundingRange[0]}% funded</span>
                          <span>{fundingRange[1]}% funded</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <Button
                      variant="outline"
                      className="mr-2"
                      onClick={() => {
                        setSelectedIndustries([]);
                        setSelectedStages([]);
                        setFundingRange([0, 100]);
                        setSearchTerm("");
                      }}
                    >
                      Reset Filters
                    </Button>
                    <Button onClick={() => setFiltersVisible(false)}>
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Filter summary */}
            {(selectedIndustries.length > 0 || selectedStages.length > 0 || searchTerm) && (
              <div className="flex flex-wrap gap-2 mb-4">
                {searchTerm && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    Search: {searchTerm}
                    <button 
                      onClick={() => setSearchTerm("")}
                      className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
                    >
                      ✕
                    </button>
                  </Badge>
                )}
                {selectedIndustries.map((industry) => (
                  <Badge key={industry} variant="outline" className="flex items-center gap-1">
                    {industry}
                    <button 
                      onClick={() => toggleIndustry(industry)}
                      className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
                    >
                      ✕
                    </button>
                  </Badge>
                ))}
                {selectedStages.map((stage) => (
                  <Badge key={stage} variant="outline" className="flex items-center gap-1">
                    {stage}
                    <button 
                      onClick={() => toggleStage(stage)}
                      className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
                    >
                      ✕
                    </button>
                  </Badge>
                ))}
                {(fundingRange[0] > 0 || fundingRange[1] < 100) && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    Funding: {fundingRange[0]}% - {fundingRange[1]}%
                    <button 
                      onClick={() => setFundingRange([0, 100])}
                      className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
                    >
                      ✕
                    </button>
                  </Badge>
                )}
              </div>
            )}
          </section>

          {/* Startup listings */}
          <section>
            <Tabs defaultValue="all">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="all">All Startups</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                  <TabsTrigger value="closing-soon">Closing Soon</TabsTrigger>
                  <TabsTrigger value="recently-added">Recently Added</TabsTrigger>
                </TabsList>
                <div className="text-sm text-muted-foreground">
                  Showing {filteredStartups.length} of {startupsData.length} startups
                </div>
              </div>

              <TabsContent value="all" className="mt-0">
                {filteredStartups.length === 0 ? (
                  <div className="text-center py-16 bg-gray-50 rounded-lg border">
                    <h3 className="text-lg font-medium mb-2">No startups found</h3>
                    <p className="text-muted-foreground mb-6">
                      No startups match your current filters. Try adjusting your search criteria.
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setSelectedIndustries([]);
                        setSelectedStages([]);
                        setFundingRange([0, 100]);
                        setSearchTerm("");
                      }}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredStartups.map((startup) => (
                      <Card key={startup.id} className="overflow-hidden">
                        <div className="relative overflow-hidden h-48">
                          <img 
                            src={startup.logo} 
                            alt={startup.name} 
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-200"
                          />
                          {startup.trending && (
                            <div className="absolute top-3 right-3">
                              <Badge className="bg-fundr-600 hover:bg-fundr-700 flex items-center gap-1">
                                <ArrowUpRight className="h-3 w-3" />
                                Trending
                              </Badge>
                            </div>
                          )}
                        </div>
                        <CardContent className="p-6">
                          <div className="mb-4">
                            <h3 className="text-lg font-bold mb-1 line-clamp-1">
                              {startup.name}
                            </h3>
                            <p className="text-muted-foreground text-sm line-clamp-2 h-10">
                              {startup.tagline}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="secondary">{startup.industry}</Badge>
                            <Badge variant="outline">{startup.stage}</Badge>
                          </div>
                          <div className="mb-4">
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
                              <span>Closing in {startup.closing}</span>
                            </div>
                          </div>
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{startup.investors} investors</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>Founded {startup.founded}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                          <Button className="w-full" asChild>
                            <Link to={`/startups/${startup.id}`}>View Details</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="trending" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredStartups
                    .filter(startup => startup.trending)
                    .map((startup) => (
                      <Card key={startup.id} className="overflow-hidden">
                        {/* Same card content as above */}
                        <div className="relative overflow-hidden h-48">
                          <img 
                            src={startup.logo} 
                            alt={startup.name} 
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-200"
                          />
                          <div className="absolute top-3 right-3">
                            <Badge className="bg-fundr-600 hover:bg-fundr-700 flex items-center gap-1">
                              <ArrowUpRight className="h-3 w-3" />
                              Trending
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          {/* Same content structure as above */}
                          <div className="mb-4">
                            <h3 className="text-lg font-bold mb-1 line-clamp-1">
                              {startup.name}
                            </h3>
                            <p className="text-muted-foreground text-sm line-clamp-2 h-10">
                              {startup.tagline}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="secondary">{startup.industry}</Badge>
                            <Badge variant="outline">{startup.stage}</Badge>
                          </div>
                          <div className="mb-4">
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
                              <span>Closing in {startup.closing}</span>
                            </div>
                          </div>
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{startup.investors} investors</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>Founded {startup.founded}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                          <Button className="w-full" asChild>
                            <Link to={`/startups/${startup.id}`}>View Details</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="closing-soon" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredStartups
                    .filter(startup => parseInt(startup.closing.split(' ')[0]) <= 14)
                    .sort((a, b) => parseInt(a.closing.split(' ')[0]) - parseInt(b.closing.split(' ')[0]))
                    .map((startup) => (
                      <Card key={startup.id} className="overflow-hidden">
                        {/* Same card structure as above */}
                        <div className="relative overflow-hidden h-48">
                          <img 
                            src={startup.logo} 
                            alt={startup.name} 
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-200"
                          />
                          <div className="absolute top-3 right-3">
                            <Badge className="bg-red-600 hover:bg-red-700">
                              Closing in {startup.closing}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          {/* Same content structure as above */}
                          <div className="mb-4">
                            <h3 className="text-lg font-bold mb-1 line-clamp-1">
                              {startup.name}
                            </h3>
                            <p className="text-muted-foreground text-sm line-clamp-2 h-10">
                              {startup.tagline}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="secondary">{startup.industry}</Badge>
                            <Badge variant="outline">{startup.stage}</Badge>
                          </div>
                          <div className="mb-4">
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
                              <span>Closing soon!</span>
                            </div>
                          </div>
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{startup.investors} investors</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>Founded {startup.founded}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                          <Button className="w-full" asChild>
                            <Link to={`/startups/${startup.id}`}>View Details</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="recently-added" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredStartups
                    .filter(startup => startup.founded === "2023")
                    .map((startup) => (
                      <Card key={startup.id} className="overflow-hidden">
                        {/* Same card structure as above */}
                        <div className="relative overflow-hidden h-48">
                          <img 
                            src={startup.logo} 
                            alt={startup.name} 
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-200"
                          />
                          <div className="absolute top-3 right-3">
                            <Badge className="bg-green-600 hover:bg-green-700">
                              New
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          {/* Same content structure as above */}
                          <div className="mb-4">
                            <h3 className="text-lg font-bold mb-1 line-clamp-1">
                              {startup.name}
                            </h3>
                            <p className="text-muted-foreground text-sm line-clamp-2 h-10">
                              {startup.tagline}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="secondary">{startup.industry}</Badge>
                            <Badge variant="outline">{startup.stage}</Badge>
                          </div>
                          <div className="mb-4">
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
                              <span>Closing in {startup.closing}</span>
                            </div>
                          </div>
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{startup.investors} investors</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>Founded {startup.founded}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                          <Button className="w-full" asChild>
                            <Link to={`/startups/${startup.id}`}>View Details</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Startups;
