
import { Startup } from "@/types";

interface StartupDescriptionProps {
  startup: Startup;
}

export default function StartupDescription({ startup }: StartupDescriptionProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-3">About {startup.name}</h2>
      <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
        {startup.description}
      </p>
    </div>
  );
}
