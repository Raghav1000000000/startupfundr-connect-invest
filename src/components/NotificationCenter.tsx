
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export interface Notification {
  id: string;
  title: string;
  content: string;
  date: Date;
  isRead: boolean;
  type: "transaction" | "update" | "alert";
}

interface NotificationCenterProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  onClearAll: () => void;
}

export default function NotificationCenter({
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
  onClearAll,
}: NotificationCenterProps) {
  const [open, setOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.isRead).length;
  
  const transactionNotifications = notifications.filter((n) => n.type === "transaction");
  const updateNotifications = notifications.filter((n) => n.type === "update");
  const alertNotifications = notifications.filter((n) => n.type === "alert");

  const handleNotificationClick = (id: string) => {
    onMarkAsRead(id);
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 60) {
      return `${minutes} min${minutes === 1 ? "" : "s"} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours === 1 ? "" : "s"} ago`;
    } else if (days < 7) {
      return `${days} day${days === 1 ? "" : "s"} ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[380px] p-0" align="end">
        <div className="p-4 border-b flex justify-between items-center">
          <h4 className="font-medium">Notifications</h4>
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onMarkAllAsRead}
              className="text-xs h-7"
            >
              Mark all as read
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClearAll}
              className="text-xs h-7"
            >
              Clear all
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="w-full grid grid-cols-4 h-10 rounded-none border-b">
            <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
            <TabsTrigger value="transactions" className="text-xs">Transactions</TabsTrigger>
            <TabsTrigger value="updates" className="text-xs">Updates</TabsTrigger>
            <TabsTrigger value="alerts" className="text-xs">Alerts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="m-0">
            {notifications.length === 0 ? (
              <div className="py-8 text-center text-muted-foreground">
                No notifications
              </div>
            ) : (
              <ScrollArea className="h-[300px]">
                <div className="divide-y">
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                      onClick={() => handleNotificationClick(notification.id)}
                    />
                  ))}
                </div>
              </ScrollArea>
            )}
          </TabsContent>
          
          <TabsContent value="transactions" className="m-0">
            {transactionNotifications.length === 0 ? (
              <div className="py-8 text-center text-muted-foreground">
                No transaction notifications
              </div>
            ) : (
              <ScrollArea className="h-[300px]">
                <div className="divide-y">
                  {transactionNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                      onClick={() => handleNotificationClick(notification.id)}
                    />
                  ))}
                </div>
              </ScrollArea>
            )}
          </TabsContent>
          
          <TabsContent value="updates" className="m-0">
            {updateNotifications.length === 0 ? (
              <div className="py-8 text-center text-muted-foreground">
                No update notifications
              </div>
            ) : (
              <ScrollArea className="h-[300px]">
                <div className="divide-y">
                  {updateNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                      onClick={() => handleNotificationClick(notification.id)}
                    />
                  ))}
                </div>
              </ScrollArea>
            )}
          </TabsContent>
          
          <TabsContent value="alerts" className="m-0">
            {alertNotifications.length === 0 ? (
              <div className="py-8 text-center text-muted-foreground">
                No alert notifications
              </div>
            ) : (
              <ScrollArea className="h-[300px]">
                <div className="divide-y">
                  {alertNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                      onClick={() => handleNotificationClick(notification.id)}
                    />
                  ))}
                </div>
              </ScrollArea>
            )}
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
}

interface NotificationItemProps {
  notification: Notification;
  onClick: () => void;
}

function NotificationItem({ notification, onClick }: NotificationItemProps) {
  return (
    <div
      className={cn(
        "p-4 hover:bg-muted/50 cursor-pointer transition-colors",
        !notification.isRead && "bg-muted/30"
      )}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-1">
        <h5 className={cn("font-medium text-sm", !notification.isRead && "font-semibold")}>
          {notification.title}
        </h5>
        <span className="text-xs text-muted-foreground">
          {formatDate(notification.date)}
        </span>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-2">{notification.content}</p>
      {!notification.isRead && (
        <span className="inline-block h-2 w-2 rounded-full bg-fundr-600 mt-1"></span>
      )}
    </div>
  );
}

// Helper function to format date
function formatDate(date: Date) {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 60) {
    return `${minutes} min${minutes === 1 ? "" : "s"} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (days < 7) {
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else {
    return date.toLocaleDateString();
  }
}
