
import api from "./api";
import { Startup } from "@/types";
import { toast } from "@/components/ui/use-toast";

// Fallback data for when API is not accessible (like in preview mode)
const mockStartups: Startup[] = [
  {
    id: "1",
    name: "EcoTech Solutions",
    logoUrl: "https://via.placeholder.com/100",
    tagline: "Sustainable technology for a greener future",
    description: "EcoTech Solutions is developing innovative technologies to address environmental challenges. Our flagship product converts plastic waste into renewable energy, helping reduce landfill waste while providing clean power solutions.\n\nWith our patented conversion process, we can process up to 2 tons of plastic waste daily, generating enough electricity to power 500 homes. We're working with municipal governments and waste management companies to implement our solution at scale.",
    industry: "CleanTech",
    location: "San Francisco, CA",
    foundedYear: 2019,
    founderName: "Emma Chen",
    askAmount: 1500000,
    raisedAmount: 750000,
    investors: 28,
    equity: 10,
    pitchDeck: "https://example.com/ecotech-pitch.pdf",
    website: "https://example-ecotech.com",
    teamSize: 12,
    featured: true
  },
  {
    id: "2",
    name: "HealthAI",
    logoUrl: "https://via.placeholder.com/100",
    tagline: "AI-driven healthcare solutions",
    description: "HealthAI is revolutionizing medical diagnostics through artificial intelligence. Our platform analyzes medical images with greater accuracy than traditional methods, helping doctors identify conditions earlier and improve patient outcomes.\n\nOur machine learning algorithms have been trained on millions of anonymized medical images and can detect patterns that might be missed by the human eye. In clinical trials, our system has shown a 94% accuracy rate in early detection of certain conditions, compared to 76% with conventional methods.",
    industry: "HealthTech",
    location: "Boston, MA",
    foundedYear: 2020,
    founderName: "Marcus Johnson",
    askAmount: 2000000,
    raisedAmount: 1200000,
    investors: 35,
    equity: 15,
    website: "https://example-healthai.com",
    teamSize: 18,
    featured: true
  },
  {
    id: "3",
    name: "Urban Farming",
    logoUrl: "https://via.placeholder.com/100",
    tagline: "Growing food where people live",
    description: "Urban Farming is building vertical farms in cities to provide fresh produce with minimal transportation and water usage. Our hydroponic systems grow vegetables using 95% less water than traditional farming and eliminate the need for pesticides.\n\nWe currently operate three vertical farms in major urban centers, supplying local restaurants and grocery stores with ultra-fresh produce harvested the same day it's delivered. Our proprietary lighting and nutrient delivery systems optimize plant growth while minimizing energy consumption.",
    industry: "AgTech",
    location: "Chicago, IL",
    foundedYear: 2018,
    founderName: "Sophia Rodriguez",
    askAmount: 1200000,
    raisedAmount: 800000,
    investors: 22,
    equity: 12,
    website: "https://example-urbanfarming.com",
    teamSize: 15,
    featured: false
  }
];

export const startupService = {
  async getAll(): Promise<Startup[]> {
    try {
      const response = await api.get("/startups");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch startups:", error);
      // Return mock data in case of failure
      console.log("Using fallback startup data");
      toast({
        title: "Connection Issue",
        description: "Couldn't connect to the server. Showing sample data instead.",
        variant: "destructive",
      });
      return mockStartups;
    }
  },

  async getFeatured(): Promise<Startup[]> {
    try {
      const response = await api.get("/startups/featured");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch featured startups:", error);
      // Return featured mock data in case of failure
      console.log("Using fallback featured startup data");
      toast({
        title: "Connection Issue",
        description: "Couldn't load featured startups from the server.",
        variant: "destructive",
      });
      return mockStartups.filter(startup => startup.featured);
    }
  },

  async getById(id: string): Promise<Startup> {
    try {
      const response = await api.get(`/startups/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch startup with ID ${id}:`, error);
      // Return a mock startup if the ID matches, otherwise throw error
      const mockStartup = mockStartups.find(s => s.id === id);
      if (mockStartup) {
        console.log(`Using fallback data for startup ${id}`);
        toast({
          title: "Connection Issue",
          description: "Showing cached startup data. Some features may be limited.",
          variant: "destructive",
        });
        return mockStartup;
      }
      throw error;
    }
  },

  async getByIndustry(industry: string): Promise<Startup[]> {
    try {
      const response = await api.get(`/startups/industry/${industry}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch startups in industry ${industry}:`, error);
      // Filter mock data by industry
      console.log(`Using fallback data for ${industry} industry`);
      toast({
        title: "Connection Issue",
        description: `Showing sample data for ${industry} industry.`,
        variant: "destructive",
      });
      return mockStartups.filter(s => 
        s.industry.toLowerCase() === industry.toLowerCase()
      );
    }
  },

  async create(startup: Partial<Startup>): Promise<Startup> {
    try {
      const response = await api.post("/startups", startup);
      return response.data;
    } catch (error) {
      console.error("Failed to create startup:", error);
      toast({
        title: "Startup Creation Failed",
        description: "There was a problem creating your startup. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  },

  async update(id: string, startup: Partial<Startup>): Promise<Startup> {
    try {
      const response = await api.put(`/startups/${id}`, startup);
      return response.data;
    } catch (error) {
      console.error(`Failed to update startup with ID ${id}:`, error);
      toast({
        title: "Update Failed",
        description: "There was a problem updating the startup information.",
        variant: "destructive",
      });
      throw error;
    }
  },

  async delete(id: string): Promise<void> {
    try {
      await api.delete(`/startups/${id}`);
    } catch (error) {
      console.error(`Failed to delete startup with ID ${id}:`, error);
      toast({
        title: "Deletion Failed",
        description: "There was a problem deleting the startup.",
        variant: "destructive",
      });
      throw error;
    }
  }
};
