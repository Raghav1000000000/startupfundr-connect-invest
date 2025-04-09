
import { Users, Calendar, Globe, Briefcase } from "lucide-react";
import { Startup } from "@/types";

interface StartupMetricsProps {
  startup: Startup;
}

export default function StartupMetrics({ startup }: StartupMetricsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center text-muted-foreground mb-1">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-xs">Founded</span>
        </div>
        <p className="font-medium">{startup.foundedYear}</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center text-muted-foreground mb-1">
          <Briefcase className="h-4 w-4 mr-2" />
          <span className="text-xs">Industry</span>
        </div>
        <p className="font-medium">{startup.industry}</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center text-muted-foreground mb-1">
          <Users className="h-4 w-4 mr-2" />
          <span className="text-xs">Team Size</span>
        </div>
        <p className="font-medium">{startup.teamSize} people</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center text-muted-foreground mb-1">
          <Globe className="h-4 w-4 mr-2" />
          <span className="text-xs">Location</span>
        </div>
        <p className="font-medium">{startup.location}</p>
      </div>
    </div>
  );
}
