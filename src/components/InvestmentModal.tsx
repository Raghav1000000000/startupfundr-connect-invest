
import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { Startup } from "@/types";
import { useInvestments } from "@/hooks/useInvestments";

interface InvestmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  startup: Startup;
  onInvestmentComplete: (amount: number) => void;
}

export default function InvestmentModal({
  open,
  onOpenChange,
  startup,
  onInvestmentComplete,
}: InvestmentModalProps) {
  const [activeTab, setActiveTab] = useState("amount");
  const [investmentAmount, setInvestmentAmount] = useState<number>(1000);
  const [agreementChecked, setAgreementChecked] = useState(false);
  
  const { invest } = useInvestments();
  const isSubmitting = invest.isPending;
  
  const equity = ((investmentAmount / startup.askAmount) * startup.equity).toFixed(3);
  
  const moveToReview = () => {
    if (investmentAmount < 100) {
      toast({
        title: "Invalid Amount",
        description: "Minimum investment amount is $100",
        variant: "destructive",
      });
      return;
    }
    
    setActiveTab("review");
  };
  
  const moveToAgreement = () => {
    setActiveTab("agreement");
  };
  
  const handleInvest = async () => {
    if (!agreementChecked) {
      toast({
        title: "Agreement Required",
        description: "You must accept the investment agreement to proceed",
        variant: "destructive",
      });
      return;
    }
    
    try {
      await invest.mutateAsync({
        startupId: startup.id,
        amount: investmentAmount,
        equity: Number(equity)
      });
      
      onInvestmentComplete(investmentAmount);
      onOpenChange(false);
      
      // Reset state for next time
      setActiveTab("amount");
      setInvestmentAmount(1000);
      setAgreementChecked(false);
    } catch (error) {
      console.error("Investment failed:", error);
      // Error is already handled in the investmentService
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Invest in {startup.name}</DialogTitle>
          <DialogDescription>
            Complete the steps below to make your investment
          </DialogDescription>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="amount">Amount</TabsTrigger>
            <TabsTrigger value="review">Review</TabsTrigger>
            <TabsTrigger value="agreement">Agreement</TabsTrigger>
          </TabsList>
          
          <TabsContent value="amount" className="pt-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="investment-amount">Investment Amount</Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    id="investment-amount"
                    type="number"
                    min={100}
                    max={startup.askAmount - startup.raisedAmount}
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="pl-8"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {startup.name} is raising ${startup.askAmount.toLocaleString()} in exchange for {startup.equity}% equity
                </p>
              </div>
              
              <div className="bg-muted/40 p-4 rounded-md">
                <h4 className="font-medium mb-2">You will receive:</h4>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">{equity}%</span> equity in {startup.name}
                </p>
              </div>
              
              <Button onClick={moveToReview} className="w-full">
                Continue to Review
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="review" className="pt-4">
            <div className="space-y-4">
              <div className="border rounded-md divide-y">
                <div className="p-3 flex justify-between">
                  <span className="text-sm text-muted-foreground">Startup</span>
                  <span className="font-medium">{startup.name}</span>
                </div>
                <div className="p-3 flex justify-between">
                  <span className="text-sm text-muted-foreground">Investment Amount</span>
                  <span className="font-medium">${investmentAmount.toLocaleString()}</span>
                </div>
                <div className="p-3 flex justify-between">
                  <span className="text-sm text-muted-foreground">Equity Received</span>
                  <span className="font-medium">{equity}%</span>
                </div>
                <div className="p-3 flex justify-between">
                  <span className="text-sm text-muted-foreground">Payment Method</span>
                  <span className="font-medium">Wallet Balance</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <Button onClick={moveToAgreement} className="w-full">
                  Continue to Agreement
                </Button>
                <Button variant="outline" onClick={() => setActiveTab("amount")} className="w-full">
                  Back
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="agreement" className="pt-4">
            <div className="space-y-4">
              <div className="border rounded-md p-4 h-48 overflow-y-auto text-sm">
                <h4 className="font-medium mb-2">Investment Agreement</h4>
                <p className="mb-2">
                  This Investment Agreement ("Agreement") is made between you (the "Investor") and {startup.name} (the "Company").
                </p>
                <p className="mb-2">
                  1. The Investor agrees to invest ${investmentAmount.toLocaleString()} in the Company in exchange for {equity}% equity.
                </p>
                <p className="mb-2">
                  2. The Company agrees to use the investment funds for business operations and growth as outlined in their pitch deck.
                </p>
                <p className="mb-2">
                  3. The Investor acknowledges the high-risk nature of startup investments and that returns are not guaranteed.
                </p>
                <p className="mb-2">
                  4. The Company agrees to provide quarterly updates on business performance to all investors.
                </p>
                <p className="mb-2">
                  5. This investment is subject to all applicable securities laws and regulations.
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="agreement" 
                  checked={agreementChecked}
                  onCheckedChange={(checked) => setAgreementChecked(checked as boolean)}
                />
                <Label htmlFor="agreement" className="text-sm">
                  I have read and agree to the investment agreement
                </Label>
              </div>
              
              <div className="flex flex-col gap-2">
                <Button 
                  onClick={handleInvest} 
                  className="w-full"
                  disabled={isSubmitting || !agreementChecked}
                >
                  {isSubmitting ? "Processing..." : "Complete Investment"}
                </Button>
                <Button variant="outline" onClick={() => setActiveTab("review")} className="w-full">
                  Back
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <DialogFooter className="mt-6">
          <p className="text-xs text-muted-foreground w-full text-center">
            Need help? Contact our support team at support@startupfundr.com
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
