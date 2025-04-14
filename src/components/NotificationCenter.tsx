
import { useState } from "react";
import { Bell, X, Check, Settings, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { Notification } from "@/types";
import { useNotifications } from "@/hooks/useNotifications";
import { useAuth } from "@/contexts/AuthContext";

export default function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "unread">("all");
  const { getUserNotifications, markAsRead, unreadCount } = useNotifications();
  const { user } = useAuth();
  
  const notifications = getUserNotifications.data || [];
  const isLoading = getUserNotifications.isLoading;
  
  const displayedNotifications = activeTab === "all" 
    ? notifications 
    : notifications.filter(n => !n.isRead);
    
  const handleMarkAsRead = async (id: string) => {
    try {
      await markAsRead.mutateAsync(id);
      toast({
        description: "Notification marked as read",
      });
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };
  
  const handleMarkAllAsRead = async () => {
    try {
      // In a real implementation, we would have an API endpoint to mark all as read
      // For now, we'll mark each unread notification as read
      const unreadNotifications = notifications.filter(n => !n.isRead);
      await Promise.all(unreadNotifications.map(n => markAsRead.mutateAsync(n.id)));
      
      toast({
        description: "All notifications marked as read",
      });
    } catch (error) {
      console.error("Error marking all notifications as read:", error);
      toast({
        title: "Error",
        description: "Failed to mark notifications as read",
        variant: "destructive",
      });
    }
  };
  
  const handleDeleteNotification = (id: string) => {
    // In a real implementation, this would call an API to delete the notification
    // For now, we'll just show a toast
    toast({
      description: "Notification deleted",
    });
  };
  
  const handleClearAll = () => {
    // In a real implementation, this would call an API to clear all notifications
    // For now, we'll just show a toast
    toast({
      description: "All notifications cleared",
    });
  };
  
  // Format notification time to readable format
  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffInHours = Math.abs(now.getTime() - date.getTime()) / 36e5;
    
    if (diffInHours < 24) {
      return diffInHours < 1
        ? `${Math.floor(diffInHours * 60)} minutes ago`
        : `${Math.floor(diffInHours)} hours ago`;
    }
    
    if (diffInHours < 48) {
      return "Yesterday";
    }
    
    return date.toLocaleDateString();
  };
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "update":
        return <div className="h-2 w-2 rounded-full bg-blue-600"></div>;
      case "alert":
        return <div className="h-2 w-2 rounded-full bg-amber-500"></div>;
      case "message":
        return <div className="h-2 w-2 rounded-full bg-green-500"></div>;
      case "system":
        return <div className="h-2 w-2 rounded-full bg-purple-500"></div>;
      default:
        return <div className="h-2 w-2 rounded-full bg-gray-400"></div>;
    }
  };
  
  // Don't show the notification center if user is not logged in
  if (!user) {
    return null;
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center text-white font-bold">
              {unreadCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-sm p-0">
        <SheetHeader className="px-4 py-3 border-b">
          <div className="flex items-center justify-between">
            <SheetTitle>Notifications</SheetTitle>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" className="h-7 px-2" asChild>
                <Link to="/settings/notifications">
                  <Settings className="h-4 w-4" />
                  <span className="sr-only">Settings</span>
                </Link>
              </Button>
              <SheetClose asChild>
                <Button variant="ghost" size="sm" className="h-7 px-2">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </SheetClose>
            </div>
          </div>
        </SheetHeader>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={(v) => setActiveTab(v as "all" | "unread")} className="w-full">
          <div className="px-4 py-2 border-b">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">
                Unread
                {unreadCount > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {unreadCount}
                  </Badge>
                )}
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <ScrollArea className="h-[70vh]">
              {isLoading ? (
                <div className="p-8 text-center">
                  <p className="text-muted-foreground">Loading notifications...</p>
                </div>
              ) : displayedNotifications.length > 0 ? (
                displayedNotifications.map((notification) => (
                  <div key={notification.id} className={`p-4 border-b ${!notification.isRead ? 'bg-muted/30' : ''}`}>
                    <div className="flex items-start gap-3">
                      <div className="mt-1">{getTypeIcon(notification.type)}</div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-semibold leading-none">
                            {notification.title}
                          </h4>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {formatTime(notification.date)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {notification.content}
                        </p>
                        {notification.relatedId && notification.relatedType && (
                          <div className="pt-1">
                            <SheetClose asChild>
                              <Button variant="link" size="sm" className="h-auto p-0" asChild>
                                <Link to={`/${notification.relatedType === 'startup' ? 'startups' : 'investments'}/${notification.relatedId}`}>
                                  View Details
                                  <ChevronRight className="h-3 w-3 ml-1" />
                                </Link>
                              </Button>
                            </SheetClose>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-end mt-2 gap-2">
                      {!notification.isRead && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleMarkAsRead(notification.id)}
                          className="h-7 px-2"
                        >
                          <Check className="h-3 w-3 mr-1" />
                          <span className="text-xs">Mark read</span>
                        </Button>
                      )}
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDeleteNotification(notification.id)}
                        className="h-7 px-2 text-destructive hover:text-destructive"
                      >
                        <X className="h-3 w-3 mr-1" />
                        <span className="text-xs">Delete</span>
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center">
                  <p className="text-muted-foreground">No notifications yet</p>
                </div>
              )}
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="unread" className="mt-0">
            <ScrollArea className="h-[70vh]">
              {isLoading ? (
                <div className="p-8 text-center">
                  <p className="text-muted-foreground">Loading notifications...</p>
                </div>
              ) : displayedNotifications.length > 0 ? (
                displayedNotifications.map((notification) => (
                  <div key={notification.id} className="p-4 border-b bg-muted/30">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">{getTypeIcon(notification.type)}</div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-semibold leading-none">
                            {notification.title}
                          </h4>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {formatTime(notification.date)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {notification.content}
                        </p>
                        {notification.relatedId && notification.relatedType && (
                          <div className="pt-1">
                            <SheetClose asChild>
                              <Button variant="link" size="sm" className="h-auto p-0" asChild>
                                <Link to={`/${notification.relatedType === 'startup' ? 'startups' : 'investments'}/${notification.relatedId}`}>
                                  View Details
                                  <ChevronRight className="h-3 w-3 ml-1" />
                                </Link>
                              </Button>
                            </SheetClose>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-end mt-2 gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleMarkAsRead(notification.id)}
                        className="h-7 px-2"
                      >
                        <Check className="h-3 w-3 mr-1" />
                        <span className="text-xs">Mark read</span>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDeleteNotification(notification.id)}
                        className="h-7 px-2 text-destructive hover:text-destructive"
                      >
                        <X className="h-3 w-3 mr-1" />
                        <span className="text-xs">Delete</span>
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center">
                  <p className="text-muted-foreground">No unread notifications</p>
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>
        
        <SheetFooter className="px-4 py-3 border-t flex-row justify-between">
          {!isLoading && displayedNotifications.length > 0 && (
            <>
              {unreadCount > 0 && (
                <Button variant="outline" size="sm" onClick={handleMarkAllAsRead}>
                  Mark all as read
                </Button>
              )}
              <Button variant="outline" size="sm" onClick={handleClearAll}>
                Clear all
              </Button>
            </>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
