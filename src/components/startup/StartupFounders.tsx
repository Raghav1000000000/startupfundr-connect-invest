
import { Startup } from "@/types";

interface StartupFoundersProps {
  startup: Startup;
}

export default function StartupFounders({ startup }: StartupFoundersProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Founders</h2>
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-gray-200"></div>
        <div>
          <p className="font-medium">{startup.founderName}</p>
          <p className="text-sm text-muted-foreground">Founder & CEO</p>
        </div>
      </div>
    </div>
  );
}
