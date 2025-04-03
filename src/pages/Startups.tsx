
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Startup } from "@/types";
import { startups } from "@/data/startups";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const Startups = () => {
  const [allStartups, setAllStartups] = useState<Startup[]>([]);
  const [filteredStartups, setFilteredStartups] = useState<Startup[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, this would be a fetch request to your Supabase backend
    setAllStartups(startups);
    setFilteredStartups(startups);
  }, []);

  const industries = ["All", ...Array.from(new Set(startups.map(startup => startup.industry)))];

  const handleIndustryFilter = (industry: string) => {
    setSelectedIndustry(industry);
    if (industry === "All") {
      setFilteredStartups(allStartups);
    } else {
      setFilteredStartups(allStartups.filter(startup => startup.industry === industry));
    }
  };

  const calculateProgress = (raised: number, asked: number) => {
    return Math.min(Math.round((raised / asked) * 100), 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Discover Startups</h1>
            <p className="text-muted-foreground">Find and invest in promising startups across various industries</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <Badge 
                  key={industry}
                  variant={selectedIndustry === industry ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => handleIndustryFilter(industry)}
                >
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStartups.map((startup) => (
            <Card key={startup.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                      src={startup.logoUrl} 
                      alt={`${startup.name} logo`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{startup.name}</CardTitle>
                    <CardDescription className="text-xs">{startup.location} • Est. {startup.foundedYear}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <Badge variant="outline" className="mb-2">{startup.industry}</Badge>
                <p className="text-sm mb-3">{startup.tagline}</p>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">{startup.description}</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Funding Progress</span>
                    <span className="font-medium">${startup.raisedAmount.toLocaleString()} / ${startup.askAmount.toLocaleString()}</span>
                  </div>
                  <Progress value={calculateProgress(startup.raisedAmount, startup.askAmount)} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{startup.investors} investors</span>
                    <span>{startup.equity}% equity</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={() => navigate(`/startups/${startup.id}`)}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Startups;
