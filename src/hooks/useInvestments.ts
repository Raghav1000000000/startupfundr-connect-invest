
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { investmentService } from "@/services/investmentService";
import { toast } from "@/components/ui/use-toast";

interface InvestmentRequest {
  startupId: string;
  amount: number;
  equity?: number;
}

export function useInvestments() {
  const queryClient = useQueryClient();
  
  const getUserInvestments = useQuery({
    queryKey: ["investments", "user"],
    queryFn: investmentService.getUserInvestments,
    // Ensure we always return an array
    select: (data) => Array.isArray(data) ? data : [],
  });
  
  const getStartupInvestments = (startupId: string) => {
    return useQuery({
      queryKey: ["investments", "startup", startupId],
      queryFn: () => investmentService.getStartupInvestments(startupId),
      enabled: !!startupId,
      // Ensure we always return an array
      select: (data) => Array.isArray(data) ? data : [],
    });
  };
  
  const invest = useMutation({
    mutationFn: (data: InvestmentRequest) => investmentService.invest(data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["investments"] });
      queryClient.invalidateQueries({ 
        queryKey: ["investments", "startup", variables.startupId] 
      });
      queryClient.invalidateQueries({ queryKey: ["investments", "user"] });
      
      toast({ 
        title: "Investment Successful", 
        description: `You invested $${variables.amount.toLocaleString()} successfully!` 
      });
    },
    onError: (error) => {
      console.error("Investment error:", error);
      toast({
        title: "Investment Failed",
        description: "There was an error processing your investment. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  return {
    getUserInvestments,
    getStartupInvestments,
    invest,
  };
}
