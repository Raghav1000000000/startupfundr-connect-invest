
import { useQuery } from "@tanstack/react-query";
import { SuccessStory } from "@/types";

interface ApiSuccessStory {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  industry: string;
  foundedYear: number;
  raisedAmount: number;
  investors: number;
  campaignDays: number;
}

const fetchSuccessStories = async (): Promise<SuccessStory[]> => {
  try {
    // In development, use local API
    const response = await fetch("http://localhost:8080/api/success-stories");
    if (!response.ok) {
      throw new Error("Failed to fetch success stories");
    }
    const data: ApiSuccessStory[] = await response.json();
    
    // Transform API data to match our frontend type
    return data.map(story => ({
      id: story.id,
      title: story.title,
      summary: story.summary,
      imageUrl: story.imageUrl, 
      industry: story.industry,
      foundedYear: story.foundedYear,
      raisedAmount: story.raisedAmount,
      investors: story.investors,
      campaignLength: story.campaignDays
    }));
  } catch (error) {
    console.error("Error fetching success stories:", error);
    return []; // Return empty array to prevent UI breaking
  }
};

export function useSuccessStories() {
  return useQuery({
    queryKey: ["successStories"],
    queryFn: fetchSuccessStories,
    // Ensure we always return an array
    select: (data) => Array.isArray(data) ? data : [],
  });
}

export function useFeaturedSuccessStories() {
  return useQuery({
    queryKey: ["featuredSuccessStories"],
    queryFn: async () => {
      try {
        const response = await fetch("http://localhost:8080/api/success-stories/featured");
        if (!response.ok) {
          throw new Error("Failed to fetch featured success stories");
        }
        const data: ApiSuccessStory[] = await response.json();
        
        // Transform API data to match our frontend type
        return data.map(story => ({
          id: story.id,
          title: story.title,
          summary: story.summary, 
          imageUrl: story.imageUrl,
          industry: story.industry,
          foundedYear: story.foundedYear,
          raisedAmount: story.raisedAmount,
          investors: story.investors,
          campaignLength: story.campaignDays
        }));
      } catch (error) {
        console.error("Error fetching featured success stories:", error);
        return []; // Return empty array to prevent UI breaking
      }
    },
    // Ensure we always return an array
    select: (data) => Array.isArray(data) ? data : [],
  });
}
