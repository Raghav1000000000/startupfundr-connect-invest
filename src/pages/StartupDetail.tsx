
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { useStartups } from "@/hooks/useStartups";
import { useInvestments } from "@/hooks/useInvestments";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StartupHeader from "@/components/startup/StartupHeader";
import StartupMetrics from "@/components/startup/StartupMetrics";
import StartupDescription from "@/components/startup/StartupDescription";
import StartupFounders from "@/components/startup/StartupFounders";
import InvestmentCard from "@/components/startup/InvestmentCard";
import InvestmentSheet from "@/components/startup/InvestmentSheet";
import StartupLoadingSkeleton from "@/components/startup/StartupLoadingSkeleton";
import StartupNotFound from "@/components/startup/StartupNotFound";

export default function StartupDetail() {
  const { id } = useParams<{ id: string }>();
  const { getStartupById } = useStartups();
  const { getStartupInvestments, invest } = useInvestments();
  const { isAuthenticated } = useAuth();
  
  const { data: startup, isLoading: startupLoading } = getStartupById(id || "");
  const { data: investments } = getStartupInvestments(id || "");
  
  const [isInvestSheetOpen, setIsInvestSheetOpen] = useState(false);
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
    
    if (!id || !startup) return;
    
    setIsInvesting(true);
    try {
      await invest.mutateAsync({
        startupId: id,
        amount: 1000 // Using default amount since we moved state to child component
      });
      
      setIsInvestSheetOpen(false);
      toast({
        title: "Investment Successful",
        description: `You have successfully invested in ${startup.name}`,
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {startupLoading ? (
          <StartupLoadingSkeleton />
        ) : !startup ? (
          <StartupNotFound />
        ) : (
          <>
            <StartupHeader startup={startup} />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {/* Left Column: Startup Details */}
              <div className="md:col-span-2 space-y-8">
                <StartupMetrics startup={startup} />
                <StartupDescription startup={startup} />
                <StartupFounders startup={startup} />
              </div>
              
              {/* Right Column: Investment Card */}
              <div>
                <InvestmentCard 
                  startup={startup} 
                  onInvestClick={() => setIsInvestSheetOpen(true)}
                />
              </div>
            </div>
            
            {/* Investment Sheet */}
            <InvestmentSheet
              startup={startup}
              isOpen={isInvestSheetOpen}
              onOpenChange={setIsInvestSheetOpen}
              isInvesting={isInvesting}
              onSubmit={handleSubmitInvestment}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
