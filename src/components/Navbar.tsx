
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/components/ui/use-toast";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: "Logout Successful",
        description: "You have been logged out successfully",
      });
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        title: "Logout Failed",
        description: "There was a problem logging you out",
        variant: "destructive",
      });
    }
    
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-4 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2" onClick={handleNavigation}>
          <div className="bg-fundr-600 text-white font-bold text-xl rounded w-10 h-10 flex items-center justify-center">
            SF
          </div>
          <span className="font-bold text-xl hidden sm:block dark:text-white">StartupFundr</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLinks />
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          {isAuthenticated ? (
            <>
              <Link to="/profile">
                <Button variant="outline" className="dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">My Profile</Button>
              </Link>
              <Button onClick={handleLogout} variant="ghost" className="dark:text-gray-200 dark:hover:bg-gray-800">Logout</Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" className="dark:text-gray-200 dark:hover:bg-gray-800">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button className="dark:bg-fundr-600 dark:hover:bg-fundr-700">Join Now</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button onClick={toggleMobileMenu} variant="ghost" size="icon" className="dark:text-gray-200">
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-4 transition-colors duration-300">
          <div className="container mx-auto px-4 space-y-4">
            <div className="space-y-3">
              <NavLinks isMobile={true} />
            </div>
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100 dark:border-gray-800">
              {isAuthenticated ? (
                <>
                  <Link to="/profile" onClick={handleNavigation}>
                    <Button variant="outline" className="w-full dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">My Profile</Button>
                  </Link>
                  <Button onClick={handleLogout} variant="ghost" className="w-full dark:text-gray-200 dark:hover:bg-gray-800">Logout</Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={handleNavigation}>
                    <Button variant="ghost" className="w-full dark:text-gray-200 dark:hover:bg-gray-800">Sign In</Button>
                  </Link>
                  <Link to="/signup" onClick={handleNavigation}>
                    <Button className="w-full dark:bg-fundr-600 dark:hover:bg-fundr-700">Join Now</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
