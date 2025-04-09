
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Startup } from "@/types";

interface StartupHeaderProps {
  startup: Startup;
}

export default function StartupHeader({ startup }: StartupHeaderProps) {
  return (
    <>
      <Link to="/startups" className="inline-flex items-center text-fundr-600 hover:underline mb-4">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to all startups
      </Link>
      
      <div className="flex items-center space-x-4">
        {startup.logoUrl && (
          <div className="h-16 w-16 rounded overflow-hidden bg-gray-100">
            <img 
              src={startup.logoUrl} 
              alt={`${startup.name} logo`} 
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div>
          <h1 className="text-3xl font-bold">{startup.name}</h1>
          <p className="text-muted-foreground">{startup.tagline}</p>
        </div>
      </div>
    </>
  );
}
