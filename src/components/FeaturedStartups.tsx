
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useStartups } from "@/hooks/useStartups";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeaturedStartups() {
  const { getFeaturedStartups } = useStartups();
  const { data: startups, isLoading, error } = getFeaturedStartups;

  if (error) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-8">Featured Startups</h2>
        <div className="text-red-500">Failed to load startups. Please try again later.</div>
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Featured Startups</h2>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader className="pb-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent className="flex-grow">
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-2" />
                  <Skeleton className="h-4 w-4/6" />
                  
                  <div className="mt-4 flex justify-between">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-9 w-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {startups?.slice(0, 6).map((startup) => (
              <Card key={startup.id} className="h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-2">
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-100 mr-3">
                      {startup.logoUrl && (
                        <img 
                          src={startup.logoUrl} 
                          alt={`${startup.name} logo`}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                    <CardTitle className="text-lg font-bold">{startup.name}</CardTitle>
                  </div>
                  <CardDescription>{startup.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3">{startup.description}</p>
                  
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>Asking: ${startup.askAmount?.toLocaleString()}</span>
                    <span>Equity: {startup.equity}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div 
                      className="bg-green-600 h-2.5 rounded-full" 
                      style={{ width: `${Math.min((startup.raisedAmount || 0) / (startup.askAmount || 1) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>${startup.raisedAmount?.toLocaleString()} raised</span>
                    <span>{startup.investors} investors</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to={`/startups/${startup.id}`} className="w-full">
                    <Button variant="default" className="w-full">
                      View Opportunity
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
        <div className="text-center mt-10">
          <Link to="/startups">
            <Button variant="outline" size="lg">View All Startups</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
