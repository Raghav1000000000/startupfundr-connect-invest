
import { useState, useEffect } from "react";
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
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

type NotificationType = "update" | "alert" | "message" | "system";

interface Notification {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
  isRead: boolean;
  type: NotificationType;
  link?: string;
  actionText?: string;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "TechVision AI posted an update",
    description: "We've reached our first milestone with the AI model development.",
    timestamp: new Date("2025-04-03T14:30:00"),
    isRead: false,
    type: "update",
    link: "/startups/techvision-ai",
    actionText: "View Update"
  },
  {
    id: "2",
    title: "New investment opportunity",
    description: "GreenEnergy Solutions is now accepting investments starting at $1,000.",
    timestamp: new Date("2025-04-03T10:15:00"),
    isRead: false,
    type: "alert",
    link: "/startups/greenenergy-solutions",
    actionText: "Explore Opportunity"
  },
  {
    id: "3",
    title: "Message from HealthCare Plus founder",
    description: "Thanks for your interest in our startup. I'd like to schedule a call to discuss further.",
    timestamp: new Date("2025-04-02T16:45:00"),
    isRead: true,
    type: "message",
    link: "/messages/healthcare-plus",
    actionText: "Reply"
  },
  {
    id: "4",
    title: "Your investment was confirmed",
    description: "Your $5,000 investment in FinTech Innovations has been processed successfully.",
    timestamp: new Date("2025-04-01T09:20:00"),
    isRead: true,
    type: "system",
    link: "/portfolio",
    actionText: "View Portfolio"
  },
  {
    id: "5",
    title: "Profile verification required",
    description: "Please complete your investor verification to unlock all platform features.",
    timestamp: new Date("2025-03-31T11:05:00"),
    isRead: true,
    type: "alert",
    link: "/profile",
    actionText: "Verify Now"
  },
  {
    id: "6",
    title: "New platform feature available",
    description: "Try our new startup comparison tool to make better investment decisions.",
    timestamp: new Date("2025-03-30T15:30:00"),
    isRead: true,
    type: "system",
    link: "/tools/comparison",
    actionText: "Try Now"
  }
];

export default function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "unread">("all");
  
  const unreadCount = notifications.filter(n => !n.isRead).length;
  
  const displayedNotifications = activeTab === "all" 
    ? notifications 
    : notifications.filter(n => !n.isRead);
    
  const handleMarkAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, isRead: true } : n))
    );
    
    toast({
      description: "Notification marked as read",
    });
  };
  
  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
    
    toast({
      description: "All notifications marked as read",
    });
  };
  
  const handleDeleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    
    toast({
      description: "Notification deleted",
    });
  };
  
  const handleClearAll = () => {
    setNotifications([]);
    
    toast({
      description: "All notifications cleared",
    });
  };
  
  // Format notification time to readable format
  const formatTime = (date: Date) => {
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
  
  // Reset unread count when closing the notification panel
  useEffect(() => {
    if (!isOpen) {
      // In a real app, this would also update the server
    }
  }, [isOpen]);
  
  const getTypeIcon = (type: NotificationType) => {
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
              {displayedNotifications.length > 0 ? (
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
                            {formatTime(notification.timestamp)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {notification.description}
                        </p>
                        {notification.link && (
                          <div className="pt-1">
                            <SheetClose asChild>
                              <Button variant="link" size="sm" className="h-auto p-0" asChild>
                                <Link to={notification.link}>
                                  {notification.actionText || "View Details"}
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
                  <p className="text-muted-foreground">
                    {activeTab === "all" ? "No notifications yet" : "No unread notifications"}
                  </p>
                </div>
              )}
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="unread" className="mt-0">
            <ScrollArea className="h-[70vh]">
              {displayedNotifications.length > 0 ? (
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
                            {formatTime(notification.timestamp)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {notification.description}
                        </p>
                        {notification.link && (
                          <div className="pt-1">
                            <SheetClose asChild>
                              <Button variant="link" size="sm" className="h-auto p-0" asChild>
                                <Link to={notification.link}>
                                  {notification.actionText || "View Details"}
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
          {displayedNotifications.length > 0 && (
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
