
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function StartupNotFound() {
  return (
    <div className="text-center py-16 px-4">
      <div className="mb-6 flex justify-center">
        <AlertTriangle className="h-16 w-16 text-amber-500" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Startup Not Found</h1>
      <p className="mb-6 text-muted-foreground max-w-md mx-auto">
        The startup you're looking for doesn't exist or has been removed. 
        This could be due to an incorrect URL or the startup may have been deleted.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/startups">
          <Button>Browse All Startups</Button>
        </Link>
        <Link to="/">
          <Button variant="outline">Go to Home</Button>
        </Link>
      </div>
    </div>
  );
}
