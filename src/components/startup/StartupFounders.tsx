
import { Startup } from "@/types";
import { User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StartupFoundersProps {
  startup: Startup;
}

export default function StartupFounders({ startup }: StartupFoundersProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Founders</CardTitle>
      </CardHeader>
      <CardContent>
        {startup.founderName ? (
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-6 w-6 text-gray-500" />
            </div>
            <div>
              <p className="font-medium">{startup.founderName}</p>
              <p className="text-sm text-muted-foreground">Founder & CEO</p>
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground">Founder information not available</p>
        )}
      </CardContent>
    </Card>
  );
}
