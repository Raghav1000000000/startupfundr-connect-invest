
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
import { useAuth } from "@/contexts/AuthContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-100 py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-fundr-600 text-white font-bold text-xl rounded w-10 h-10 flex items-center justify-center">
            SF
          </div>
          <span className="font-bold text-xl hidden sm:block">StartupFundr</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLinks />
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Button onClick={logout} variant="ghost">Logout</Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button>Join Now</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 space-y-4">
            <div className="space-y-3">
              <NavLinks isMobile />
            </div>
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full">Dashboard</Button>
                  </Link>
                  <Button onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }} variant="ghost" className="w-full">Logout</Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full">Sign In</Button>
                  </Link>
                  <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full">Join Now</Button>
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
