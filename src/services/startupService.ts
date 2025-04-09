
import api from "./api";
import { Startup } from "@/types";

export const startupService = {
  async getAll(): Promise<Startup[]> {
    try {
      const response = await api.get("/startups");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch startups:", error);
      throw error;
    }
  },

  async getFeatured(): Promise<Startup[]> {
    try {
      const response = await api.get("/startups/featured");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch featured startups:", error);
      throw error;
    }
  },

  async getById(id: string): Promise<Startup> {
    try {
      const response = await api.get(`/startups/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch startup with ID ${id}:`, error);
      throw error;
    }
  },

  async getByIndustry(industry: string): Promise<Startup[]> {
    try {
      const response = await api.get(`/startups/industry/${industry}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch startups in industry ${industry}:`, error);
      throw error;
    }
  },

  async create(startup: Partial<Startup>): Promise<Startup> {
    try {
      const response = await api.post("/startups", startup);
      return response.data;
    } catch (error) {
      console.error("Failed to create startup:", error);
      throw error;
    }
  },

  async update(id: string, startup: Partial<Startup>): Promise<Startup> {
    try {
      const response = await api.put(`/startups/${id}`, startup);
      return response.data;
    } catch (error) {
      console.error(`Failed to update startup with ID ${id}:`, error);
      throw error;
    }
  },

  async delete(id: string): Promise<void> {
    try {
      await api.delete(`/startups/${id}`);
    } catch (error) {
      console.error(`Failed to delete startup with ID ${id}:`, error);
      throw error;
    }
  }
};
