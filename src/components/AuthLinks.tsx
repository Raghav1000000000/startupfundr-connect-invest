
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface AuthLinksProps {
  className?: string;
  onNavigate?: () => void;
}

export default function AuthLinks({ className = "", onNavigate }: AuthLinksProps) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    if (onNavigate) {
      onNavigate();
    }
    navigate(path);
  };
  
  return (
    <div className={`flex flex-wrap gap-2 text-sm ${className}`}>
      {!isAuthenticated && (
        <>
          <Link to="/login" className="text-fundr-600 hover:underline" onClick={() => onNavigate && onNavigate()}>
            Sign in
          </Link>
          <span className="text-gray-400">|</span>
          <Link to="/signup" className="text-fundr-600 hover:underline" onClick={() => onNavigate && onNavigate()}>
            Create account
          </Link>
          <span className="text-gray-400">|</span>
          <Link to="/forgot-password" className="text-fundr-600 hover:underline" onClick={() => onNavigate && onNavigate()}>
            Forgot password?
          </Link>
        </>
      )}
    </div>
  );
}
