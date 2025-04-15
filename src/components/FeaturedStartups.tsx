
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useStartups } from "@/hooks/useStartups";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function FeaturedStartups() {
  const { getFeaturedStartups } = useStartups();
  const { data: startups, isLoading, error } = getFeaturedStartups;
  const [isVisible, setIsVisible] = useState(false);

  // Intersection observer to trigger animations when element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('featured-startups');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Ensure startups is always an array before mapping over it
  const safeStartups = Array.isArray(startups) ? startups : [];

  if (error) {
    return (
      <div className="py-12 text-center" id="featured-startups">
        <h2 className="text-2xl font-bold mb-8">Featured Startups</h2>
        <div className="text-red-500">Failed to load startups. Please try again later.</div>
      </div>
    );
  }

  return (
    <section id="featured-startups" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-fundr-100 dark:bg-fundr-900/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-success-100 dark:bg-success-900/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Featured Startups</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Discover innovative startups with high growth potential. These featured opportunities have been carefully selected for their unique value propositions and strong founding teams.
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="h-full flex flex-col border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all duration-300">
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
            {safeStartups.slice(0, 6).map((startup, index) => (
              <Card 
                key={startup.id} 
                className={`h-full flex flex-col border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg dark:hover:shadow-gray-800/30 transition-all duration-300 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${150 * index}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-2">
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 mr-3">
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
                  <CardDescription className="dark:text-gray-300">{startup.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">{startup.description}</p>
                  
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                    <span>Asking: ${startup.askAmount?.toLocaleString()}</span>
                    <span>Equity: {startup.equity}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
                    <div 
                      className="bg-green-600 dark:bg-green-500 h-2.5 rounded-full" 
                      style={{ width: `${Math.min((startup.raisedAmount || 0) / (startup.askAmount || 1) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600 dark:text-gray-300">${startup.raisedAmount?.toLocaleString()} raised</span>
                    <span className="text-gray-600 dark:text-gray-300">{startup.investors} investors</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to={`/startups/${startup.id}`} className="w-full">
                    <Button variant="default" className="w-full group">
                      View Opportunity
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
        <div className={`text-center mt-12 transition-all duration-700 delay-500 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <Link to="/startups">
            <Button variant="outline" size="lg" className="dark:border-gray-700 dark:text-white dark:hover:bg-gray-800">
              View All Startups
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
