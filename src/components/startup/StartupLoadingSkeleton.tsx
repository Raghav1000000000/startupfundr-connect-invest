
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function StartupLoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
      <div className="h-4 w-full bg-gray-200 rounded mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="h-64 w-full bg-gray-200 rounded mb-6"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded mb-2"></div>
        </div>
        <div>
          <div className="h-48 w-full bg-gray-200 rounded mb-4"></div>
          <div className="h-10 w-full bg-gray-200 rounded mb-2"></div>
        </div>
      </div>
    </div>
  );
}
