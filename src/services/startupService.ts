
import { api } from "./api";
import { Startup } from "@/types";
import { startups } from "@/data/startups";

export const startupService = {
  getAll: async (): Promise<Startup[]> => {
    try {
      const response = await api.get<Startup[]>("/startups");
      return response.data;
    } catch (error) {
      console.error("Error fetching all startups:", error);
      // Fallback to local data in case of API failure
      return startups;
    }
  },
  
  getFeatured: async (): Promise<Startup[]> => {
    try {
      const response = await api.get<Startup[]>("/startups/featured");
      if (Array.isArray(response.data)) {
        return response.data;
      } else {
        console.warn("Featured startups response is not an array:", response.data);
        // Fallback to filtering local data
        return startups.filter(startup => startup.featured);
      }
    } catch (error) {
      console.error("Error fetching featured startups:", error);
      // Fallback to filtering local data
      return startups.filter(startup => startup.featured);
    }
  },
  
  getById: async (id: string): Promise<Startup | null> => {
    try {
      const response = await api.get<Startup>(`/startups/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching startup with ID ${id}:`, error);
      // Fallback to local data
      const startup = startups.find(s => s.id === id);
      return startup || null;
    }
  },
  
  getByIndustry: async (industry: string): Promise<Startup[]> => {
    try {
      const response = await api.get<Startup[]>(`/startups/industry/${industry}`);
      if (Array.isArray(response.data)) {
        return response.data;
      } else {
        console.warn("Industry startups response is not an array:", response.data);
        // Fallback to filtering local data
        return startups.filter(startup => startup.industry === industry);
      }
    } catch (error) {
      console.error(`Error fetching startups in industry ${industry}:`, error);
      // Fallback to filtering local data
      return startups.filter(startup => startup.industry === industry);
    }
  },
  
  create: async (data: Partial<Startup>): Promise<Startup> => {
    const response = await api.post<Startup>("/startups", data);
    return response.data;
  },
  
  update: async (id: string, data: Partial<Startup>): Promise<Startup> => {
    const response = await api.put<Startup>(`/startups/${id}`, data);
    return response.data;
  },
  
  delete: async (id: string): Promise<void> => {
    await api.delete(`/startups/${id}`);
  },
};
