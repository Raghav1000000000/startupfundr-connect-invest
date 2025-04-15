
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface NavLinksProps {
  isMobile?: boolean;
}

const NavLinks = ({ isMobile }: NavLinksProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };
  
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-6">
      <Link 
        to="/" 
        className={`text-sm md:text-base font-medium transition-colors ${isActive('/') && location.pathname === '/' 
          ? 'text-fundr-600 dark:text-fundr-400' 
          : 'hover:text-fundr-600 dark:text-gray-200 dark:hover:text-fundr-400'}`}
      >
        Home
      </Link>
      <Link 
        to="/startups" 
        className={`text-sm md:text-base font-medium transition-colors ${isActive('/startups') 
          ? 'text-fundr-600 dark:text-fundr-400' 
          : 'hover:text-fundr-600 dark:text-gray-200 dark:hover:text-fundr-400'}`}
      >
        Startups
      </Link>
      {isAuthenticated && (
        <Link 
          to="/dashboard" 
          className={`text-sm md:text-base font-medium transition-colors ${isActive('/dashboard') 
            ? 'text-fundr-600 dark:text-fundr-400' 
            : 'hover:text-fundr-600 dark:text-gray-200 dark:hover:text-fundr-400'}`}
        >
          Dashboard
        </Link>
      )}
      <Link 
        to="/startup-resources" 
        className={`text-sm md:text-base font-medium transition-colors ${isActive('/startup-resources') 
          ? 'text-fundr-600 dark:text-fundr-400' 
          : 'hover:text-fundr-600 dark:text-gray-200 dark:hover:text-fundr-400'}`}
      >
        Resources
      </Link>
      <Link 
        to="/about" 
        className={`text-sm md:text-base font-medium transition-colors ${isActive('/about') 
          ? 'text-fundr-600 dark:text-fundr-400' 
          : 'hover:text-fundr-600 dark:text-gray-200 dark:hover:text-fundr-400'}`}
      >
        About
      </Link>
      <Link 
        to="/faq" 
        className={`text-sm md:text-base font-medium transition-colors ${isActive('/faq') 
          ? 'text-fundr-600 dark:text-fundr-400' 
          : 'hover:text-fundr-600 dark:text-gray-200 dark:hover:text-fundr-400'}`}
      >
        FAQ
      </Link>
      <Link 
        to="/contact" 
        className={`text-sm md:text-base font-medium transition-colors ${isActive('/contact') 
          ? 'text-fundr-600 dark:text-fundr-400' 
          : 'hover:text-fundr-600 dark:text-gray-200 dark:hover:text-fundr-400'}`}
      >
        Contact
      </Link>
    </div>
  );
};

export default NavLinks;
