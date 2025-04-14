
import api from "./api";
import { Notification } from "@/types";
import { toast } from "@/components/ui/use-toast";

// Mock notifications for fallback
const mockNotifications: Notification[] = [
  {
    id: "1",
    userId: "user1",
    type: "update",
    title: "TechVision AI posted an update",
    content: "We've reached our first milestone with the AI model development.",
    date: new Date().toISOString(),
    isRead: false,
    relatedId: "1",
    relatedType: "startup"
  },
  {
    id: "2",
    userId: "user1",
    type: "alert",
    title: "New investment opportunity",
    content: "GreenEnergy Solutions is now accepting investments starting at $1,000.",
    date: new Date().toISOString(),
    isRead: false,
    relatedId: "3",
    relatedType: "startup"
  },
  {
    id: "3", 
    userId: "user1",
    type: "system",
    title: "Your investment was confirmed",
    content: "Your $5,000 investment in FinTech Innovations has been processed successfully.",
    date: new Date(Date.now() - 86400000).toISOString(),
    isRead: true,
    relatedId: "2", 
    relatedType: "investment"
  }
];

export const notificationService = {
  async getUserNotifications(userId: string): Promise<Notification[]> {
    try {
      const response = await api.get(`/notifications/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch notifications:", error);
      
      // Only use mock data in development or when in preview mode
      if (process.env.NODE_ENV !== 'production' || window.location.hostname.includes('lovable.app')) {
        console.log("Using fallback notification data");
        return mockNotifications.filter(n => n.userId === userId);
      }
      
      toast({
        title: "Connection Issue",
        description: "Couldn't retrieve your notifications. Please try again later.",
        variant: "destructive",
      });
      
      return [];
    }
  },
  
  async markAsRead(id: string): Promise<void> {
    try {
      await api.put(`/notifications/read/${id}`);
    } catch (error) {
      console.error(`Failed to mark notification ${id} as read:`, error);
      
      toast({
        title: "Connection Issue",
        description: "Couldn't update notification status. Please try again later.",
        variant: "destructive",
      });
      
      throw error;
    }
  },
  
  async createNotification(notification: Partial<Notification>): Promise<Notification> {
    try {
      const response = await api.post('/notifications', notification);
      return response.data;
    } catch (error) {
      console.error("Failed to create notification:", error);
      
      toast({
        title: "Connection Issue",
        description: "Couldn't create notification. Please try again later.",
        variant: "destructive",
      });
      
      throw error;
    }
  }
};
