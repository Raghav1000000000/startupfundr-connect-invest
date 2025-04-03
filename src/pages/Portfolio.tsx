
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { startups } from "@/data/startups";
import { Startup } from "@/types";

// Mock portfolio data
const portfolioData = [
  {
    startupId: "1", // EcoHarvest
    amount: 2500,
    equity: 0.5,
    date: new Date("2023-09-15"),
    currentValue: 2750
  },
  {
    startupId: "2", // Quantum Health
    amount: 3200,
    equity: 0.8,
    date: new Date("2023-10-22"),
    currentValue: 3400
  },
  {
    startupId: "3", // CyberShield
    amount: 1800,
    equity: 0.3,
    date: new Date("2023-11-05"),
    currentValue: 1850
  }
];

// Mock transaction history
const transactionHistory = [
  { id: "t1", type: "Investment", startupId: "1", amount: 2500, date: new Date("2023-09-15") },
  { id: "t2", type: "Deposit", startupId: null, amount: 5000, date: new Date("2023-09-01") },
  { id: "t3", type: "Investment", startupId: "2", amount: 3200, date: new Date("2023-10-22") },
  { id: "t4", type: "Deposit", startupId: null, amount: 2000, date: new Date("2023-10-10") },
  { id: "t5", type: "Investment", startupId: "3", amount: 1800, date: new Date("2023-11-05") }
];

// Colors for the pie chart
const COLORS = ['#8B5CF6', '#EC4899', '#F97316', '#10B981', '#3B82F6'];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  // Calculate portfolio metrics
  const totalInvested = portfolioData.reduce((sum, item) => sum + item.amount, 0);
  const currentValue = portfolioData.reduce((sum, item) => sum + item.currentValue, 0);
  const percentageChange = ((currentValue - totalInvested) / totalInvested) * 100;
  
  // Prepare data for pie chart
  const pieChartData = portfolioData.map(item => {
    const startup = startups.find(s => s.id === item.startupId) as Startup;
    return {
      name: startup.name,
      value: item.amount,
      industry: startup.industry
    };
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Investment Portfolio</h1>
            <p className="text-muted-foreground">Track and manage your startup investments</p>
          </div>
          <Button className="mt-4 md:mt-0" onClick={() => navigate("/startups")}>
            Explore More Startups
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Invested</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">${totalInvested.toLocaleString()}</div>
              <p className="text-sm text-muted-foreground mt-1">
                Across {portfolioData.length} startups
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Current Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">${currentValue.toLocaleString()}</div>
              <div className="flex items-center mt-1">
                <span className={`text-sm ${percentageChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {percentageChange.toFixed(2)}% {percentageChange >= 0 ? '↑' : '↓'}
                </span>
                <span className="text-sm text-muted-foreground ml-2">Since investment</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Portfolio Diversity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                {Array.from(new Set(portfolioData.map(item => {
                  const startup = startups.find(s => s.id === item.startupId);
                  return startup?.industry;
                }))).map((industry, index) => (
                  <Badge key={index} variant="outline" className="bg-fundr-50 text-fundr-900">
                    {industry}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Portfolio Overview</TabsTrigger>
            <TabsTrigger value="investments">Your Investments</TabsTrigger>
            <TabsTrigger value="transactions">Transaction History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Allocation</CardTitle>
                  <CardDescription>Breakdown of your investments by startup</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [`$${value}`, 'Investment Amount']}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Investment Performance</CardTitle>
                  <CardDescription>Current value vs. initial investment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {portfolioData.map((item, index) => {
                      const startup = startups.find(s => s.id === item.startupId) as Startup;
                      const performancePercentage = ((item.currentValue - item.amount) / item.amount) * 100;
                      
                      return (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mr-2">
                                <img 
                                  src={startup.logoUrl} 
                                  alt={`${startup.name} logo`} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <span className="font-medium">{startup.name}</span>
                            </div>
                            <div className="text-right">
                              <span className={`text-sm font-medium ${performancePercentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {performancePercentage.toFixed(2)}% {performancePercentage >= 0 ? '↑' : '↓'}
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mb-1">
                            <span>Initial: ${item.amount.toLocaleString()}</span>
                            <span>Current: ${item.currentValue.toLocaleString()}</span>
                          </div>
                          <Progress 
                            value={Math.min(100, (item.currentValue / item.amount) * 100)} 
                            className="h-2" 
                          />
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="investments">
            <Card>
              <CardHeader>
                <CardTitle>Your Startup Investments</CardTitle>
                <CardDescription>Detailed view of each investment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {portfolioData.map((item, index) => {
                    const startup = startups.find(s => s.id === item.startupId) as Startup;
                    
                    return (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mr-3">
                              <img 
                                src={startup.logoUrl} 
                                alt={`${startup.name} logo`} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold">{startup.name}</h3>
                              <p className="text-sm text-muted-foreground">{startup.industry}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-fundr-50 text-fundr-800">
                            {item.equity}% Equity
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Investment Date</p>
                            <p className="font-medium">{item.date.toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Investment Amount</p>
                            <p className="font-medium">${item.amount.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Current Value</p>
                            <p className="font-medium">${item.currentValue.toLocaleString()}</p>
                          </div>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => navigate(`/startups/${startup.id}`)}
                        >
                          View Startup
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="transactions">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>Record of your deposits and investments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactionHistory.sort((a, b) => b.date.getTime() - a.date.getTime()).map((transaction, index) => {
                    const startup = transaction.startupId 
                      ? startups.find(s => s.id === transaction.startupId) 
                      : null;
                    
                    return (
                      <div key={index} className="flex justify-between items-center py-3 border-b">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                            transaction.type === "Investment" ? "bg-fundr-100" : "bg-green-100"
                          }`}>
                            <span className={`text-lg ${
                              transaction.type === "Investment" ? "text-fundr-600" : "text-green-600"
                            }`}>
                              {transaction.type === "Investment" ? "I" : "D"}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium">
                              {transaction.type === "Investment" 
                                ? `Investment in ${startup?.name}` 
                                : "Wallet Deposit"
                              }
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {transaction.date.toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            {transaction.type === "Investment" ? "-" : "+"}${transaction.amount.toLocaleString()}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {transaction.type === "Investment" ? "Invested" : "Added to wallet"}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
