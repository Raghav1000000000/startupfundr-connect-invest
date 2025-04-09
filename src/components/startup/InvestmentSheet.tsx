
import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Startup } from "@/types";

interface InvestmentSheetProps {
  startup: Startup;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  isInvesting: boolean;
  onSubmit: () => void;
}

export default function InvestmentSheet({ 
  startup, 
  isOpen, 
  onOpenChange, 
  isInvesting, 
  onSubmit 
}: InvestmentSheetProps) {
  const [investmentAmount, setInvestmentAmount] = useState(1000);

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Invest in {startup.name}</SheetTitle>
          <SheetDescription>
            Enter the amount you'd like to invest. Minimum investment is $100.
          </SheetDescription>
        </SheetHeader>
        
        <div className="py-6 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="investment-amount">Investment Amount ($)</Label>
              <Input
                id="investment-amount"
                type="number"
                min="100"
                max={startup.askAmount - startup.raisedAmount}
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(Number(e.target.value))}
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Adjust Investment</Label>
                <span className="text-sm text-muted-foreground">
                  ${investmentAmount.toLocaleString()}
                </span>
              </div>
              <Slider
                value={[investmentAmount]}
                min={100}
                max={Math.min(50000, startup.askAmount - startup.raisedAmount)}
                step={100}
                onValueChange={(values) => setInvestmentAmount(values[0])}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Min: $100</span>
                <span>Max: $50,000</span>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <Label>Investment Summary</Label>
              <div className="p-4 bg-gray-50 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Investment amount:</span>
                  <span className="font-medium">${investmentAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Equity received:</span>
                  <span className="font-medium">
                    {((investmentAmount / startup.askAmount) * startup.equity).toFixed(4)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Button
              className="w-full"
              onClick={onSubmit}
              disabled={isInvesting || investmentAmount < 100}
            >
              {isInvesting ? "Processing..." : "Complete Investment"}
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
