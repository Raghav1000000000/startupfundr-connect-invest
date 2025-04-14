
import api from "./api";
import { Investment } from "@/types";
import { toast } from "@/components/ui/use-toast";

interface InvestmentRequest {
  startupId: string;
  amount: number;
  equity?: number;
}

// Mock data for fallback
const mockInvestments: Investment[] = [
  {
    id: "inv1",
    userId: "user1", 
    startupId: "1",
    amount: 10000,
    equity: 0.5,
    status: "completed",
    date: new Date()
  },
  {
    id: "inv2",
    userId: "user2",
    startupId: "1", 
    amount: 5000,
    equity: 0.25,
    status: "completed",
    date: new Date()
  }
];

export const investmentService = {
  async getUserInvestments(): Promise<Investment[]> {
    try {
      const response = await api.get("/investments/user");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch user investments:", error);
      
      // Only use mock data in development
      if (process.env.NODE_ENV !== 'production') {
        console.log("Using fallback investment data");
        return mockInvestments.filter(inv => inv.userId === 'user1'); // Mock logged in user
      }
      
      toast({
        title: "Connection Issue",
        description: "Couldn't retrieve your investment data.",
        variant: "destructive",
      });
      
      return [];
    }
  },

  async getStartupInvestments(startupId: string): Promise<Investment[]> {
    try {
      const response = await api.get(`/investments/startup/${startupId}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch investments for startup ${startupId}:`, error);
      
      // Only use mock data in development
      if (process.env.NODE_ENV !== 'production') {
        console.log(`Using fallback investment data for startup ${startupId}`);
        return mockInvestments.filter(inv => inv.startupId === startupId);
      }
      
      toast({
        title: "Connection Issue",
        description: "Couldn't retrieve investment data for this startup.",
        variant: "destructive",
      });
      
      return [];
    }
  },

  async invest(data: InvestmentRequest): Promise<Investment> {
    try {
      const response = await api.post("/investments", data);
      toast({ 
        title: "Investment Successful", 
        description: `You invested $${data.amount.toLocaleString()} successfully!` 
      });
      return response.data;
    } catch (error) {
      console.error("Investment failed:", error);
      let errorMessage = "There was an error processing your investment. Please try again.";
      
      // Try to extract more specific error message
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      }
      
      toast({
        title: "Investment Failed",
        description: errorMessage,
        variant: "destructive",
      });
      
      throw error;
    }
  }
};
