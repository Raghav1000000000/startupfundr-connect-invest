
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { startups } from "@/data/startups";
import { Link } from "react-router-dom";

export default function FeaturedStartups() {
  const featuredStartups = startups.filter(startup => startup.featured);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Startups</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover innovative startups that are changing the world. Invest in their vision and be part of their journey to success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredStartups.map((startup) => (
            <Card key={startup.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <img 
                        src={startup.logoUrl} 
                        alt={startup.name} 
                        className="w-8 h-8" 
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{startup.name}</CardTitle>
                      <Badge variant="outline" className="mt-1 text-xs font-normal">
                        {startup.industry}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <CardDescription className="text-base mb-4 min-h-[60px]">
                  {startup.tagline}
                </CardDescription>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">${startup.raisedAmount.toLocaleString()}</span>
                      <span className="text-gray-600">${startup.askAmount.toLocaleString()}</span>
                    </div>
                    <Progress value={(startup.raisedAmount / startup.askAmount) * 100} className="h-2" />
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-fundr-600 font-medium">
                        {Math.round((startup.raisedAmount / startup.askAmount) * 100)}% Funded
                      </span>
                      <span>{startup.investors} Investors</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-gray-500">Equity</p>
                      <p className="font-medium">{startup.equity}%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Location</p>
                      <p className="font-medium">{startup.location}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Founded</p>
                      <p className="font-medium">{startup.foundedYear}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Link to={`/startup/${startup.id}`} className="w-full">
                  <Button className="w-full bg-fundr-600 hover:bg-fundr-700">
                    View Opportunity
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/startups">
            <Button variant="outline" size="lg">
              View All Startups
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
