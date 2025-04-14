
import { Startup } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMobile } from "@/hooks/use-mobile";

interface StartupDescriptionProps {
  startup: Startup;
}

export default function StartupDescription({ startup }: StartupDescriptionProps) {
  const isMobile = useMobile();
  
  return (
    <Card className={isMobile ? "mt-4" : ""}>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">About {startup.name}</CardTitle>
      </CardHeader>
      <CardContent>
        {startup.description ? (
          <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
            {startup.description}
          </p>
        ) : (
          <p className="text-muted-foreground italic">
            No detailed description available for this startup.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
