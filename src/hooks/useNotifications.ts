
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { notificationService } from "@/services/notificationService";
import { useAuth } from "@/contexts/AuthContext";
import { Notification } from "@/types";

export function useNotifications() {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  
  const getUserNotifications = useQuery({
    queryKey: ["notifications", user?.id],
    queryFn: () => user ? notificationService.getUserNotifications(user.id) : Promise.resolve([]),
    enabled: !!user,
  });
  
  const markAsRead = useMutation({
    mutationFn: (id: string) => notificationService.markAsRead(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
  
  const createNotification = useMutation({
    mutationFn: (notification: Partial<Notification>) => notificationService.createNotification(notification),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
  
  return {
    getUserNotifications,
    markAsRead,
    createNotification,
    unreadCount: getUserNotifications.data?.filter(n => !n.isRead).length || 0,
  };
}
