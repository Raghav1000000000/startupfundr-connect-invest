
import { Startup } from "@/types";

interface StartupDescriptionProps {
  startup: Startup;
}

export default function StartupDescription({ startup }: StartupDescriptionProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">About {startup.name}</h2>
      <p className="text-muted-foreground whitespace-pre-line">
        {startup.description}
      </p>
    </div>
  );
}
