
import { Startup } from "@/types";
import { User } from "lucide-react";

interface StartupFoundersProps {
  startup: Startup;
}

export default function StartupFounders({ startup }: StartupFoundersProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Founders</h2>
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
          <User className="h-6 w-6 text-gray-500" />
        </div>
        <div>
          <p className="font-medium">{startup.founderName}</p>
          <p className="text-sm text-muted-foreground">Founder & CEO</p>
        </div>
      </div>
    </div>
  );
}
