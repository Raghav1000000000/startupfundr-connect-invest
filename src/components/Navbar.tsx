
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Button variant="outline" className="font-medium">
            Log In
          </Button>
          <Button className="bg-fundr-600 hover:bg-fundr-700 font-medium">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button variant="outline" className="w-full font-medium">
                Log In
              </Button>
              <Button className="w-full bg-fundr-600 hover:bg-fundr-700 font-medium">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
