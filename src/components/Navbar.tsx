
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X, ChevronDown, User, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";
import NavLinks from "@/components/NavLinks";
import NotificationCenter from "@/components/NotificationCenter";
import { toast } from "@/components/ui/use-toast";
import * as React from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // In a real application, this would come from authentication context
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const isMobile = useMobile();

  const handleLogout = () => {
    // In a real app, this would call your authentication service
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
    // Would normally redirect to home or login page
    setIsAuthenticated(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4 sm:px-8">
        <Link to="/" className="flex items-center space-x-2 mr-4">
          <span className="font-bold text-xl sm:text-2xl text-fundr-600">StartupFundr</span>
        </Link>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
            
            {isMobileMenuOpen && (
              <div className="fixed inset-0 top-16 z-50 bg-background p-6 flex flex-col space-y-4 animate-in slide-in-from-top-5">
                <Link to="/" className="px-4 py-2 font-medium hover:text-fundr-600" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/startups" className="px-4 py-2 font-medium hover:text-fundr-600" onClick={() => setIsMobileMenuOpen(false)}>
                  Startups
                </Link>
                <Link to="/dashboard" className="px-4 py-2 font-medium hover:text-fundr-600" onClick={() => setIsMobileMenuOpen(false)}>
                  Dashboard
                </Link>
                <Link to="/startup-resources" className="px-4 py-2 font-medium hover:text-fundr-600" onClick={() => setIsMobileMenuOpen(false)}>
                  Resources
                </Link>
                <Link to="/about" className="px-4 py-2 font-medium hover:text-fundr-600" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
                <Link to="/faq" className="px-4 py-2 font-medium hover:text-fundr-600" onClick={() => setIsMobileMenuOpen(false)}>
                  FAQ
                </Link>
                <Link to="/contact" className="px-4 py-2 font-medium hover:text-fundr-600" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
                
                <div className="mt-4 pt-4 border-t">
                  {isAuthenticated ? (
                    <>
                      <Link to="/profile" className="px-4 py-2 font-medium hover:text-fundr-600 flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Link>
                      <Link to="/portfolio" className="px-4 py-2 font-medium hover:text-fundr-600" onClick={() => setIsMobileMenuOpen(false)}>
                        Portfolio
                      </Link>
                      <button 
                        className="px-4 py-2 font-medium hover:text-fundr-600 flex items-center w-full text-left"
                        onClick={() => {
                          handleLogout();
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <Button asChild>
                        <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                          Sign In
                        </Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                          Sign Up
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <NavigationMenu className="hidden md:flex mx-6">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Invest</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] grid-cols-2">
                      <li className="col-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/startups"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-fundr-100 to-fundr-200 p-6 no-underline outline-none focus:shadow-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Discover Startups
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Browse and invest in innovative startups across various industries.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem
                        title="Portfolio"
                        to="/portfolio"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Track your investments and monitor performance
                      </ListItem>
                      <ListItem
                        title="How It Works"
                        to="/how-it-works"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Learn about our investment process
                      </ListItem>
                      <ListItem
                        title="Investment Guide"
                        to="/investment-guide"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Resources for making informed decisions
                      </ListItem>
                      <ListItem
                        title="Success Stories"
                        to="/success-stories"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        See startups that successfully raised funding
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Raise</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] grid-cols-2">
                      <li className="col-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/raise-capital"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-success-100 to-success-200 p-6 no-underline outline-none focus:shadow-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Raise Capital
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Connect with investors and get the funding your startup needs to grow.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem
                        title="Apply Now"
                        to="/startup-application"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Submit your startup for consideration
                      </ListItem>
                      <ListItem
                        title="Startup Resources"
                        to="/startup-resources"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Helpful tools and guides for founders
                      </ListItem>
                      <ListItem
                        title="Pitch Tips"
                        to="/startup-resources#pitch-tips"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        How to create a compelling startup pitch
                      </ListItem>
                      <ListItem
                        title="Investor Network"
                        to="/investor-network"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Learn about our investor community
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] grid-cols-2">
                      <ListItem
                        title="About Us"
                        to="/about"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Our mission and vision
                      </ListItem>
                      <ListItem
                        title="Team"
                        to="/team"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Meet our leadership team
                      </ListItem>
                      <ListItem
                        title="FAQ"
                        to="/faq"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Frequently asked questions
                      </ListItem>
                      <ListItem
                        title="Contact"
                        to="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Get in touch with us
                      </ListItem>
                      <ListItem
                        title="Careers"
                        to="/careers"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Join our growing team
                      </ListItem>
                      <ListItem
                        title="Legal"
                        to="/legal"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Terms, privacy, and policies
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="hidden md:flex">
              <NavLinks />
            </div>
            
            <div className="flex items-center ml-auto space-x-2">
              {isAuthenticated ? (
                <>
                  <NotificationCenter />
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg" alt="User" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link to="/profile" className="cursor-pointer">
                          <User className="mr-2 h-4 w-4" />
                          Profile
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/dashboard" className="cursor-pointer">
                          Dashboard
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/portfolio" className="cursor-pointer">
                          My Portfolio
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/profile" className="cursor-pointer">
                          <Settings className="mr-2 h-4 w-4" />
                          Settings
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <>
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/login">Sign In</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;

interface ListItemProps extends React.ComponentPropsWithoutRef<typeof Link> {
  title: string;
  to: string;
  onClick: () => void;
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  ListItemProps
>(({ className, title, children, to, onClick, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          onClick={onClick}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
