
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Card, CardContent, CardDescription, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, Users, Calendar, Globe, Briefcase } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useStartups } from "@/hooks/useStartups";
import { useInvestments } from "@/hooks/useInvestments";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function StartupDetail() {
  const { id } = useParams<{ id: string }>();
  const { getStartupById } = useStartups();
  const { getStartupInvestments, invest } = useInvestments();
  const { isAuthenticated } = useAuth();
  
  const { data: startup, isLoading: startupLoading } = getStartupById(id || "");
  const { data: investments } = getStartupInvestments(id || "");
  
  const [isInvestSheetOpen, setIsInvestSheetOpen] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState(1000);
  const [isInvesting, setIsInvesting] = useState(false);

  const handleSubmitInvestment = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to invest in startups",
        variant: "destructive",
      });
      return;
    }
    
    if (!id || !investmentAmount || investmentAmount <= 0) return;
    
    setIsInvesting(true);
    try {
      await invest.mutateAsync({
        startupId: id,
        amount: investmentAmount
      });
      
      setIsInvestSheetOpen(false);
      toast({
        title: "Investment Successful",
        description: `You have successfully invested $${investmentAmount.toLocaleString()} in ${startup?.name}`,
      });
    } catch (error) {
      console.error("Investment failed:", error);
      toast({
        title: "Investment Failed",
        description: "There was a problem processing your investment. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsInvesting(false);
    }
  };

  if (startupLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-full bg-gray-200 rounded mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="h-64 w-full bg-gray-200 rounded mb-6"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded mb-2"></div>
              </div>
              <div>
                <div className="h-48 w-full bg-gray-200 rounded mb-4"></div>
                <div className="h-10 w-full bg-gray-200 rounded mb-2"></div>
              </div>
            </div>
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
        <main className="flex-grow container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Startup Not Found</h1>
          <p className="mb-6">The startup you're looking for doesn't exist or has been removed.</p>
          <Link to="/startups">
            <Button>Browse All Startups</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const progress = (startup.raisedAmount / startup.askAmount) * 100;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link to="/startups" className="inline-flex items-center text-fundr-600 hover:underline mb-4">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to all startups
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Startup Details */}
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center space-x-4">
              {startup.logoUrl && (
                <div className="h-16 w-16 rounded overflow-hidden bg-gray-100">
                  <img 
                    src={startup.logoUrl} 
                    alt={`${startup.name} logo`} 
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div>
                <h1 className="text-3xl font-bold">{startup.name}</h1>
                <p className="text-muted-foreground">{startup.tagline}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-muted-foreground mb-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-xs">Founded</span>
                </div>
                <p className="font-medium">{startup.foundedYear}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-muted-foreground mb-1">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span className="text-xs">Industry</span>
                </div>
                <p className="font-medium">{startup.industry}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-muted-foreground mb-1">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="text-xs">Team Size</span>
                </div>
                <p className="font-medium">{startup.teamSize} people</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-muted-foreground mb-1">
                  <Globe className="h-4 w-4 mr-2" />
                  <span className="text-xs">Location</span>
                </div>
                <p className="font-medium">{startup.location}</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-3">About {startup.name}</h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {startup.description}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-3">Founders</h2>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                <div>
                  <p className="font-medium">{startup.founderName}</p>
                  <p className="text-sm text-muted-foreground">Founder & CEO</p>
                </div>
              </div>
            </div>
            
            {/* Potentially add more sections like Team, Traction, etc. */}
          </div>
          
          {/* Right Column: Investment Card */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Investment Opportunity</CardTitle>
                <CardDescription>
                  {startup.name} is raising ${startup.askAmount.toLocaleString()} at {startup.equity}% equity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">
                      ${startup.raisedAmount.toLocaleString()} raised
                    </span>
                    <span className="text-sm font-medium">
                      {Math.round(progress)}% of ${startup.askAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-green-600 h-2.5 rounded-full" 
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>{startup.investors} investors</span>
                    <span>
                      {startup.askAmount - startup.raisedAmount > 0 
                        ? `$${(startup.askAmount - startup.raisedAmount).toLocaleString()} left` 
                        : "Fully funded"}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Investment Highlights</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Minimum investment: $100</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Quarterly investor updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Pro-rata rights for future rounds</span>
                    </li>
                  </ul>
                </div>
                
                <Button 
                  className="w-full"
                  onClick={() => setIsInvestSheetOpen(true)}
                  disabled={startup.askAmount <= startup.raisedAmount}
                >
                  {startup.askAmount <= startup.raisedAmount
                    ? "Fully Funded"
                    : "Invest in " + startup.name}
                </Button>
                
                {startup.website && (
                  <Button variant="outline" className="w-full" asChild>
                    <a 
                      href={startup.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Investment Sheet */}
      <Sheet open={isInvestSheetOpen} onOpenChange={setIsInvestSheetOpen}>
        <SheetContent className="sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>Invest in {startup.name}</SheetTitle>
            <SheetDescription>
              Enter the amount you'd like to invest. Minimum investment is $100.
            </SheetDescription>
          </SheetHeader>
          
          <div className="py-6 space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="investment-amount">Investment Amount ($)</Label>
                <Input
                  id="investment-amount"
                  type="number"
                  min="100"
                  max={startup.askAmount - startup.raisedAmount}
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Adjust Investment</Label>
                  <span className="text-sm text-muted-foreground">
                    ${investmentAmount.toLocaleString()}
                  </span>
                </div>
                <Slider
                  value={[investmentAmount]}
                  min={100}
                  max={Math.min(50000, startup.askAmount - startup.raisedAmount)}
                  step={100}
                  onValueChange={(values) => setInvestmentAmount(values[0])}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Min: $100</span>
                  <span>Max: $50,000</span>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label>Investment Summary</Label>
                <div className="p-4 bg-gray-50 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Investment amount:</span>
                    <span className="font-medium">${investmentAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Equity received:</span>
                    <span className="font-medium">
                      {((investmentAmount / startup.askAmount) * startup.equity).toFixed(4)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Button
                className="w-full"
                onClick={handleSubmitInvestment}
                disabled={isInvesting || investmentAmount < 100}
              >
                {isInvesting ? "Processing..." : "Complete Investment"}
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsInvestSheetOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
