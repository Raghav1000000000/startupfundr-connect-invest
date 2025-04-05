
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { ArrowRight, Plus, TrendingUp, Users, DollarSign, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/components/ui/use-toast";

const Dashboard = () => {
  // In a real app, this would come from authentication context
  const [userType, setUserType] = useState<"investor" | "startup">("investor");
  const [isLoading, setIsLoading] = useState(true);
  
  // Mock data for demonstration
  const portfolioData = [
    { name: "TechVision AI", value: 4000, color: "#3182ce" },
    { name: "GreenEnergy Solutions", value: 3000, color: "#48bb78" },
    { name: "HealthCare Plus", value: 2000, color: "#e53e3e" },
    { name: "FinTech Innovations", value: 2780, color: "#805ad5" },
  ];
  
  const investmentData = [
    { name: "Jan", amount: 4000 },
    { name: "Feb", amount: 3000 },
    { name: "Mar", amount: 5000 },
    { name: "Apr", amount: 4500 },
    { name: "May", amount: 6000 },
    { name: "Jun", amount: 5500 },
  ];
  
  const startupPerformanceData = [
    { name: "Q1", revenue: 4000, users: 2400 },
    { name: "Q2", revenue: 5000, users: 2800 },
    { name: "Q3", revenue: 8000, users: 3600 },
    { name: "Q4", revenue: 10000, users: 4200 },
  ];
  
  const recentInvestments = [
    { id: "1", startupName: "TechVision AI", amount: 5000, date: "2025-03-28", status: "completed" },
    { id: "2", startupName: "GreenEnergy Solutions", amount: 3000, date: "2025-03-15", status: "completed" },
    { id: "3", startupName: "HealthCare Plus", amount: 2500, date: "2025-04-02", status: "pending" },
  ];
  
  const recentNotifications = [
    { id: "1", title: "TechVision AI posted an update", time: "2 hours ago", isRead: false },
    { id: "2", title: "New investment opportunity available", time: "5 hours ago", isRead: true },
    { id: "3", title: "Your investment in GreenEnergy was confirmed", time: "1 day ago", isRead: true },
    { id: "4", title: "HealthCare Plus reached their funding goal", time: "3 days ago", isRead: true },
  ];
  
  const startupMetrics = {
    totalFunding: 120000,
    investors: 48,
    runwayMonths: 18,
    growthRate: 27
  };
  
  const upcomingTasks = [
    { id: "1", title: "Update business plan", dueDate: "2025-04-10", status: "pending" },
    { id: "2", title: "Investor pitch presentation", dueDate: "2025-04-15", status: "in-progress" },
    { id: "3", title: "Review Q2 financials", dueDate: "2025-04-20", status: "pending" },
  ];

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Allow users to switch between investor and startup view for demo purposes
  // In a real app, this would be determined by user role
  const toggleUserType = () => {
    const newType = userType === "investor" ? "startup" : "investor";
    setUserType(newType);
    toast({
      title: "View Changed",
      description: `Switched to ${newType} dashboard view`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back! Here's an overview of your {userType === "investor" ? "investment portfolio" : "startup metrics"}.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={toggleUserType}>
                Switch to {userType === "investor" ? "Startup" : "Investor"} View
              </Button>
              <Button asChild>
                <Link to={userType === "investor" ? "/startups" : "/raise-capital"}>
                  {userType === "investor" ? "Explore Startups" : "Manage Fundraising"}
                </Link>
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="investments">
                {userType === "investor" ? "Investments" : "Funding"}
              </TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              {/* Top cards with key metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {userType === "investor" ? (
                  <>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">
                          Total Invested
                        </CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$15,500</div>
                        <p className="text-xs text-muted-foreground">
                          +12.3% from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">
                          Startups Funded
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">7</div>
                        <p className="text-xs text-muted-foreground">
                          +2 new this quarter
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">
                          ROI
                        </CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">18.2%</div>
                        <p className="text-xs text-muted-foreground">
                          +5.1% from previous year
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">
                          Available Balance
                        </CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$24,500</div>
                        <p className="text-xs text-muted-foreground">
                          Ready to invest
                        </p>
                      </CardContent>
                    </Card>
                  </>
                ) : (
                  <>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">
                          Total Funding
                        </CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">${startupMetrics.totalFunding.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">
                          80% of goal reached
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">
                          Investors
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{startupMetrics.investors}</div>
                        <p className="text-xs text-muted-foreground">
                          +5 new this month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">
                          Growth Rate
                        </CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{startupMetrics.growthRate}%</div>
                        <p className="text-xs text-muted-foreground">
                          +3.4% from previous quarter
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">
                          Runway
                        </CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{startupMetrics.runwayMonths} months</div>
                        <p className="text-xs text-muted-foreground">
                          Based on current burn rate
                        </p>
                      </CardContent>
                    </Card>
                  </>
                )}
              </div>
              
              {/* Charts section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>
                      {userType === "investor" ? "Portfolio Distribution" : "Funding Distribution"}
                    </CardTitle>
                    <CardDescription>
                      {userType === "investor" 
                        ? "Investment allocation across startups" 
                        : "Funding sources breakdown"
                      }
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={portfolioData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {portfolioData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>
                      {userType === "investor" ? "Investment History" : "Growth Metrics"}
                    </CardTitle>
                    <CardDescription>
                      {userType === "investor" 
                        ? "Your investment activity over time" 
                        : "Revenue and user growth by quarter"
                      }
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={userType === "investor" ? investmentData : startupPerformanceData}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          {userType === "investor" ? (
                            <Bar dataKey="amount" fill="#3182ce" />
                          ) : (
                            <>
                              <Bar dataKey="revenue" fill="#3182ce" />
                              <Bar dataKey="users" fill="#48bb78" />
                            </>
                          )}
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Recent activity and notifications */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>
                      {userType === "investor" 
                        ? "Your latest investments and activities" 
                        : "Recent fundraising activities"
                      }
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentInvestments.map(investment => (
                        <div key={investment.id} className="flex items-center justify-between border-b pb-4">
                          <div className="flex flex-col">
                            <span className="font-medium">{investment.startupName}</span>
                            <span className="text-sm text-muted-foreground">
                              {new Date(investment.date).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="font-medium">${investment.amount}</span>
                            <Badge variant={investment.status === "completed" ? "outline" : "secondary"}>
                              {investment.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={userType === "investor" ? "/portfolio" : "/raise-capital"}>
                        View All <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>
                      Your latest updates and alerts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentNotifications.map(notification => (
                        <div key={notification.id} className="flex items-center justify-between border-b pb-4">
                          <div className="flex flex-col">
                            <div className="flex items-center">
                              <span className="font-medium">{notification.title}</span>
                              {!notification.isRead && (
                                <span className="ml-2 h-2 w-2 rounded-full bg-blue-600"></span>
                              )}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {notification.time}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Notifications <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="investments" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {userType === "investor" ? "Your Investment Portfolio" : "Funding Progress"}
                  </CardTitle>
                  <CardDescription>
                    {userType === "investor"
                      ? "Track and manage your investments"
                      : "Track your fundraising progress"
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* This would be replaced with a full table or list component */}
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">
                      Detailed investment information would be displayed here
                    </p>
                    <Button asChild>
                      <Link to={userType === "investor" ? "/portfolio" : "/raise-capital"}>
                        Go to {userType === "investor" ? "Portfolio" : "Fundraising"} Page
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics Dashboard</CardTitle>
                  <CardDescription>
                    Detailed metrics and performance analytics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">
                      Comprehensive analytics and reporting would be displayed here
                    </p>
                    <Button>
                      Generate Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tasks" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Tasks & To-Dos</CardTitle>
                    <CardDescription>
                      Manage your pending tasks
                    </CardDescription>
                  </div>
                  <Button size="sm" variant="outline">
                    <Plus className="h-4 w-4 mr-1" /> Add Task
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingTasks.map(task => (
                      <div key={task.id} className="flex items-center justify-between border-b pb-4">
                        <div className="flex flex-col">
                          <span className="font-medium">{task.title}</span>
                          <span className="text-sm text-muted-foreground">
                            Due: {new Date(task.dueDate).toLocaleDateString()}
                          </span>
                        </div>
                        <Badge variant={task.status === "in-progress" ? "default" : "outline"}>
                          {task.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
