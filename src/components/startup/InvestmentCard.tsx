
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Startup } from "@/types";

interface InvestmentCardProps {
  startup: Startup;
  onInvestClick: () => void;
}

export default function InvestmentCard({ startup, onInvestClick }: InvestmentCardProps) {
  const progress = (startup.raisedAmount / startup.askAmount) * 100;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Investment Opportunity</CardTitle>
        <CardDescription>
          {startup.name} is raising ${startup.askAmount.toLocaleString()} at {startup.equity}% equity
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">
              ${startup.raisedAmount.toLocaleString()} raised
            </span>
            <span className="text-sm font-medium">
              {Math.round(progress)}% of ${startup.askAmount.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-green-600 h-2.5 rounded-full" 
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>{startup.investors} investors</span>
            <span>
              {startup.askAmount - startup.raisedAmount > 0 
                ? `$${(startup.askAmount - startup.raisedAmount).toLocaleString()} left` 
                : "Fully funded"}
            </span>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-2">Investment Highlights</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Minimum investment: $100</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Quarterly investor updates</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Pro-rata rights for future rounds</span>
            </li>
          </ul>
        </div>
        
        <Button 
          className="w-full"
          onClick={onInvestClick}
          disabled={startup.askAmount <= startup.raisedAmount}
        >
          {startup.askAmount <= startup.raisedAmount
            ? "Fully Funded"
            : "Invest in " + startup.name}
        </Button>
        
        {startup.website && (
          <Button variant="outline" className="w-full" asChild>
            <a 
              href={startup.website} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
