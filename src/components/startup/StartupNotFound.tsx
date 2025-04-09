
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function StartupNotFound() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Startup Not Found</h1>
      <p className="mb-6">The startup you're looking for doesn't exist or has been removed.</p>
      <Link to="/startups">
        <Button>Browse All Startups</Button>
      </Link>
    </div>
  );
}
