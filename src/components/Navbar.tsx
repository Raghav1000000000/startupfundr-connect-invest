
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Bell, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NotificationCenter from "./NotificationCenter";
import { Notification } from "./NotificationCenter";
import { toast } from "@/components/ui/use-toast";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<string | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    const userTypeFromStorage = localStorage.getItem("userType");
    setIsAuthenticated(authStatus);
    setUserType(userTypeFromStorage);
    
    // If authenticated, load sample notifications
    if (authStatus) {
      setNotifications([
        {
          id: "1",
          title: "Investment Successful",
          content: "Your investment of $5,000 in TechNova AI has been processed successfully.",
          date: new Date(Date.now() - 20 * 60 * 1000), // 20 minutes ago
          isRead: false,
          type: "transaction",
        },
        {
          id: "2",
          title: "Quarterly Update",
          content: "GreenEnergy Solutions has posted their Q3 financial report. Check it out!",
          date: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
          isRead: true,
          type: "update",
        },
        {
          id: "3",
          title: "New Investment Opportunity",
          content: "A new startup in the healthcare sector is now open for funding.",
          date: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
          isRead: false,
          type: "alert",
        },
      ]);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userType");
    setIsAuthenticated(false);
    setUserType(null);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  const handleMarkAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true } 
          : notification
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-fundr-700">Startup</span>
            <span className="text-2xl font-bold text-success-600">Fundr</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-fundr-600 transition-colors font-medium">
            Home
          </Link>
          <Link to="/startups" className="text-gray-700 hover:text-fundr-600 transition-colors font-medium">
            Explore Startups
          </Link>
          <Link to="/startup-resources" className="text-gray-700 hover:text-fundr-600 transition-colors font-medium">
            Resources
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-fundr-600 transition-colors font-medium">
            How It Works
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-fundr-600 transition-colors font-medium">
            About Us
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <NotificationCenter 
                notifications={notifications} 
                onMarkAsRead={handleMarkAsRead}
                onMarkAllAsRead={handleMarkAllAsRead}
                onClearAll={handleClearAll}
              />
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  {userType === "investor" && (
                    <DropdownMenuItem asChild>
                      <Link to="/portfolio">Portfolio</Link>
                    </DropdownMenuItem>
                  )}
                  {userType === "startup" && (
                    <DropdownMenuItem asChild>
                      <Link to="/startup-dashboard">My Startup</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button variant="outline" className="font-medium" asChild>
                <Link to="/login">Log In</Link>
              </Button>
              <Button className="bg-fundr-600 hover:bg-fundr-700 font-medium" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {isAuthenticated && (
            <NotificationCenter 
              notifications={notifications} 
              onMarkAsRead={handleMarkAsRead}
              onMarkAllAsRead={handleMarkAllAsRead}
              onClearAll={handleClearAll}
            />
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-b">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-fundr-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/startups"
              className="text-gray-700 hover:text-fundr-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore Startups
            </Link>
            <Link
              to="/startup-resources"
              className="text-gray-700 hover:text-fundr-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              to="/how-it-works"
              className="text-gray-700 hover:text-fundr-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-fundr-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            {isAuthenticated ? (
              <>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Account</p>
                </div>
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-fundr-600 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-fundr-600 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                {userType === "investor" && (
                  <Link
                    to="/portfolio"
                    className="text-gray-700 hover:text-fundr-600 transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Portfolio
                  </Link>
                )}
                {userType === "startup" && (
                  <Link
                    to="/startup-dashboard"
                    className="text-gray-700 hover:text-fundr-600 transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Startup
                  </Link>
                )}
                <Button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  variant="ghost" 
                  className="justify-start px-2 font-medium py-2 h-auto"
                >
                  Log Out
                </Button>
              </>
            ) : (
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="outline" className="w-full font-medium" asChild>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    Log In
                  </Link>
                </Button>
                <Button className="w-full bg-fundr-600 hover:bg-fundr-700 font-medium" asChild>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
