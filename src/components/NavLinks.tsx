
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="flex gap-2 md:gap-6">
      <Link to="/" className="text-sm md:text-base font-medium hover:text-fundr-600 transition-colors">
        Home
      </Link>
      <Link to="/startups" className="text-sm md:text-base font-medium hover:text-fundr-600 transition-colors">
        Startups
      </Link>
      <Link to="/dashboard" className="text-sm md:text-base font-medium hover:text-fundr-600 transition-colors">
        Dashboard
      </Link>
      <Link to="/about" className="text-sm md:text-base font-medium hover:text-fundr-600 transition-colors">
        About
      </Link>
      <Link to="/faq" className="text-sm md:text-base font-medium hover:text-fundr-600 transition-colors">
        FAQ
      </Link>
      <Link to="/contact" className="text-sm md:text-base font-medium hover:text-fundr-600 transition-colors">
        Contact
      </Link>
    </div>
  );
};

export default NavLinks;
