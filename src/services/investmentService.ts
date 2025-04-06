
import api from "./api";
import { Investment } from "@/types";

interface InvestmentRequest {
  startupId: string;
  amount: number;
  equity?: number;
}

export const investmentService = {
  async getUserInvestments(): Promise<Investment[]> {
    const response = await api.get("/investments/user");
    return response.data;
  },

  async getStartupInvestments(startupId: string): Promise<Investment[]> {
    const response = await api.get(`/investments/startup/${startupId}`);
    return response.data;
  },

  async invest(data: InvestmentRequest): Promise<Investment> {
    const response = await api.post("/investments", data);
    return response.data;
  }
};
