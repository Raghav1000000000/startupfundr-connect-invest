
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowUpRight, Briefcase, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Sample data for portfolio distribution
  const portfolioData = [
    { name: "Tech", value: 45 },
    { name: "Healthcare", value: 20 },
    { name: "Finance", value: 15 },
    { name: "Consumer", value: 10 },
    { name: "Other", value: 10 },
  ];
  
  // Sample data for monthly investments
  const investmentData = [
    { month: "Jan", amount: 5000 },
    { month: "Feb", amount: 7500 },
    { month: "Mar", amount: 3000 },
    { month: "Apr", amount: 12000 },
    { month: "May", amount: 8000 },
    { month: "Jun", amount: 15000 },
  ];
  
  // Sample data for recent investments
  const recentInvestments = [
    {
      id: 1,
      name: "TechNova AI",
      amount: "$5,000",
      date: "Oct 12, 2023",
      status: "Completed",
    },
    {
      id: 2,
      name: "GreenEnergy Solutions",
      amount: "$10,000",
      date: "Sep 28, 2023",
      status: "Completed",
    },
    {
      id: 3,
      name: "MediSync Health",
      amount: "$7,500",
      date: "Sep 15, 2023",
      status: "Completed",
    },
    {
      id: 4,
      name: "UrbanMobility",
      amount: "$3,000",
      date: "Aug 30, 2023",
      status: "Completed",
    },
  ];

  // Colors for the pie chart
  const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Investor Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, John! Here's an overview of your investments.</p>
            </div>
            <Button className="mt-4 sm:mt-0" asChild>
              <Link to="/startups">Browse Startups</Link>
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-fundr-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-fundr-600" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Invested</p>
                  <h3 className="text-2xl font-bold">$125,000</h3>
                  <p className="text-sm text-green-500 mt-1">+12% from last month</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-fundr-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-fundr-600" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Portfolio Value</p>
                  <h3 className="text-2xl font-bold">$187,500</h3>
                  <p className="text-sm text-green-500 mt-1">+8% from last month</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-fundr-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-fundr-600" />
                  </div>
                  <span className="h-5 w-5 text-primary"></span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Investments</p>
                  <h3 className="text-2xl font-bold">15</h3>
                  <p className="text-sm text-muted-foreground mt-1">Across 10 startups</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-fundr-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-fundr-600" />
                  </div>
                  <span className="h-5 w-5 text-primary"></span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Co-investors</p>
                  <h3 className="text-2xl font-bold">28</h3>
                  <p className="text-sm text-muted-foreground mt-1">In your network</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Portfolio Distribution */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Portfolio Distribution</CardTitle>
                <CardDescription>Breakdown by industry</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={portfolioData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={3}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {portfolioData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Investments */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Investment Trend</CardTitle>
                <CardDescription>Monthly investments in the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={investmentData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`$${value}`, 'Amount']}
                        labelStyle={{ color: '#111' }}
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #ddd', 
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Bar 
                        dataKey="amount" 
                        fill="#4f46e5" 
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Investments and Opportunities */}
          <div className="grid grid-cols-1 gap-8">
            <Tabs defaultValue="investments">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="investments">Recent Investments</TabsTrigger>
                  <TabsTrigger value="opportunities">New Opportunities</TabsTrigger>
                </TabsList>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/portfolio">View All</Link>
                </Button>
              </div>
              <TabsContent value="investments">
                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-4 font-medium">Startup</th>
                            <th className="text-left p-4 font-medium">Amount</th>
                            <th className="text-left p-4 font-medium">Date</th>
                            <th className="text-left p-4 font-medium">Status</th>
                            <th className="text-right p-4 font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentInvestments.map((investment) => (
                            <tr key={investment.id} className="border-b last:border-0 hover:bg-gray-50">
                              <td className="p-4">
                                <div className="font-medium">{investment.name}</div>
                              </td>
                              <td className="p-4">{investment.amount}</td>
                              <td className="p-4">{investment.date}</td>
                              <td className="p-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  {investment.status}
                                </span>
                              </td>
                              <td className="p-4 text-right">
                                <Button variant="ghost" size="sm" asChild>
                                  <Link to={`/startups/${investment.id}`}>View</Link>
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="opportunities">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center py-8">
                      <h3 className="text-lg font-medium mb-2">Discover New Investment Opportunities</h3>
                      <p className="text-muted-foreground mb-6">
                        We've curated some promising startups based on your investment history.
                      </p>
                      <Button asChild>
                        <Link to="/startups">Browse Startups</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
