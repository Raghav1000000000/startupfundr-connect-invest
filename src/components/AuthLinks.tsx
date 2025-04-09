
import { Link } from "react-router-dom";

interface AuthLinksProps {
  className?: string;
}

export default function AuthLinks({ className = "" }: AuthLinksProps) {
  return (
    <div className={`flex flex-wrap gap-2 text-sm ${className}`}>
      <Link to="/login" className="text-fundr-600 hover:underline">
        Sign in
      </Link>
      <span className="text-gray-400">|</span>
      <Link to="/signup" className="text-fundr-600 hover:underline">
        Create account
      </Link>
      <span className="text-gray-400">|</span>
      <Link to="/forgot-password" className="text-fundr-600 hover:underline">
        Forgot password?
      </Link>
    </div>
  );
}
