
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { startupService } from "@/services/startupService";
import { Startup } from "@/types";
import { toast } from "@/components/ui/use-toast";

export function useStartups() {
  const queryClient = useQueryClient();
  
  const getAllStartups = useQuery({
    queryKey: ["startups"],
    queryFn: startupService.getAll,
  });
  
  const getFeaturedStartups = useQuery({
    queryKey: ["startups", "featured"],
    queryFn: startupService.getFeatured,
    // Ensure we always return an array even if the API fails
    select: (data) => Array.isArray(data) ? data : [],
  });
  
  const getStartupById = (id: string) => {
    return useQuery({
      queryKey: ["startups", id],
      queryFn: () => startupService.getById(id),
      enabled: !!id,
    });
  };
  
  const getStartupsByIndustry = (industry: string) => {
    return useQuery({
      queryKey: ["startups", "industry", industry],
      queryFn: () => startupService.getByIndustry(industry),
      enabled: !!industry,
      // Ensure we always return an array even if the API fails
      select: (data) => Array.isArray(data) ? data : [],
    });
  };
  
  const createStartup = useMutation({
    mutationFn: (data: Partial<Startup>) => startupService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["startups"] });
      toast({ title: "Success", description: "Startup created successfully" });
    },
    onError: (error) => {
      console.error("Create startup error:", error);
      toast({
        title: "Error",
        description: "Failed to create startup",
        variant: "destructive",
      });
    },
  });
  
  const updateStartup = useMutation({
    mutationFn: ({id, data}: {id: string, data: Partial<Startup>}) => 
      startupService.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["startups"] });
      queryClient.invalidateQueries({ queryKey: ["startups", variables.id] });
      toast({ title: "Success", description: "Startup updated successfully" });
    },
    onError: (error) => {
      console.error("Update startup error:", error);
      toast({
        title: "Error",
        description: "Failed to update startup",
        variant: "destructive",
      });
    },
  });
  
  const deleteStartup = useMutation({
    mutationFn: startupService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["startups"] });
      toast({ title: "Success", description: "Startup deleted successfully" });
    },
    onError: (error) => {
      console.error("Delete startup error:", error);
      toast({
        title: "Error",
        description: "Failed to delete startup",
        variant: "destructive",
      });
    },
  });
  
  return {
    getAllStartups,
    getFeaturedStartups,
    getStartupById,
    getStartupsByIndustry,
    createStartup,
    updateStartup,
    deleteStartup,
  };
}
