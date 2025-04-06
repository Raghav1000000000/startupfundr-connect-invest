
import api from "./api";
import { Startup } from "@/types";

export const startupService = {
  async getAll(): Promise<Startup[]> {
    const response = await api.get("/startups");
    return response.data;
  },

  async getFeatured(): Promise<Startup[]> {
    const response = await api.get("/startups/featured");
    return response.data;
  },

  async getById(id: string): Promise<Startup> {
    const response = await api.get(`/startups/${id}`);
    return response.data;
  },

  async getByIndustry(industry: string): Promise<Startup[]> {
    const response = await api.get(`/startups/industry/${industry}`);
    return response.data;
  },

  async create(startup: Partial<Startup>): Promise<Startup> {
    const response = await api.post("/startups", startup);
    return response.data;
  },

  async update(id: string, startup: Partial<Startup>): Promise<Startup> {
    const response = await api.put(`/startups/${id}`, startup);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/startups/${id}`);
  }
};
