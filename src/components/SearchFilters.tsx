
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter } from "lucide-react";

export interface SearchFiltersProps {
  onSearch: (filters: SearchFilters) => void;
  className?: string;
}

export interface SearchFilters {
  searchQuery: string;
  industry: string;
  minInvestment: number;
  maxInvestment: number;
  stage: string[];
  location: string;
}

export default function SearchFilters({ onSearch, className }: SearchFiltersProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    searchQuery: "",
    industry: "all",
    minInvestment: 1000,
    maxInvestment: 100000,
    stage: [],
    location: "",
  });

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, searchQuery: e.target.value }));
  };

  const handleIndustryChange = (value: string) => {
    setFilters((prev) => ({ ...prev, industry: value }));
  };

  const handleLocationChange = (value: string) => {
    setFilters((prev) => ({ ...prev, location: value }));
  };

  const handleStageChange = (value: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      stage: checked
        ? [...prev.stage, value]
        : prev.stage.filter((item) => item !== value),
    }));
  };

  const handleInvestmentRangeChange = (value: number[]) => {
    setFilters((prev) => ({
      ...prev,
      minInvestment: value[0],
      maxInvestment: value[1],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Search startups by name or keyword..."
              value={filters.searchQuery}
              onChange={handleSearchChange}
              className="pl-10"
            />
          </div>
          <Button type="submit" className="whitespace-nowrap">
            Search
          </Button>
          <Button 
            type="button"
            variant="outline" 
            onClick={() => setIsFilterVisible(!isFilterVisible)}
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <Filter size={16} />
            Filters
          </Button>
        </div>

        {isFilterVisible && (
          <Accordion type="single" collapsible className="border rounded-md mb-6">
            <AccordionItem value="industry">
              <AccordionTrigger className="px-4">Industry</AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <Select value={filters.industry} onValueChange={handleIndustryChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="consumer">Consumer</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="energy">Energy</SelectItem>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                  </SelectContent>
                </Select>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="investment">
              <AccordionTrigger className="px-4">Investment Range</AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-6">
                  <Slider 
                    defaultValue={[1000, 100000]} 
                    max={500000} 
                    min={500} 
                    step={500}
                    onValueChange={handleInvestmentRangeChange}
                  />
                  <div className="flex justify-between">
                    <div className="text-sm">Min: ${filters.minInvestment.toLocaleString()}</div>
                    <div className="text-sm">Max: ${filters.maxInvestment.toLocaleString()}</div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="stage">
              <AccordionTrigger className="px-4">Startup Stage</AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="grid grid-cols-2 gap-4">
                  {["Pre-seed", "Seed", "Series A", "Series B", "Series C+", "Growth"].map((stage) => (
                    <div key={stage} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`stage-${stage}`} 
                        checked={filters.stage.includes(stage)}
                        onCheckedChange={(checked) => 
                          handleStageChange(stage, checked as boolean)
                        }
                      />
                      <Label htmlFor={`stage-${stage}`}>{stage}</Label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="location">
              <AccordionTrigger className="px-4">Location</AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <Select value={filters.location} onValueChange={handleLocationChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any Location</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="eu">Europe</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                    <SelectItem value="africa">Africa</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </form>
    </div>
  );
}
