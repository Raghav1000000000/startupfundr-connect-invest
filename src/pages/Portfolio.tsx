
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import { DownloadCloud, Filter, Search, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  // Sample portfolio data
  const portfolioData = [
    {
      id: 1,
      name: "TechNova AI",
      industry: "Artificial Intelligence",
      stage: "Seed",
      invested: "$5,000",
      date: "Oct 12, 2023",
      currentValue: "$6,200",
      change: "+24%",
      trending: "up",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1587",
    },
    {
      id: 2,
      name: "GreenEnergy Solutions",
      industry: "Clean Energy",
      stage: "Series A",
      invested: "$10,000",
      date: "Sep 28, 2023",
      currentValue: "$11,500",
      change: "+15%",
      trending: "up",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1470",
    },
    {
      id: 3,
      name: "MediSync Health",
      industry: "Healthcare",
      stage: "Seed",
      invested: "$7,500",
      date: "Sep 15, 2023",
      currentValue: "$8,250",
      change: "+10%",
      trending: "up",
      logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1470",
    },
    {
      id: 4,
      name: "UrbanMobility",
      industry: "Transportation",
      stage: "Pre-seed",
      invested: "$3,000",
      date: "Aug 30, 2023",
      currentValue: "$2,700",
      change: "-10%",
      trending: "down",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1470",
    },
    {
      id: 5,
      name: "FintechFlow",
      industry: "Fintech",
      stage: "Series A",
      invested: "$15,000",
      date: "Jul 15, 2023",
      currentValue: "$18,750",
      change: "+25%",
      trending: "up",
      logo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1470",
    },
    {
      id: 6,
      name: "EduLearn Platform",
      industry: "Education",
      stage: "Seed",
      invested: "$5,000",
      date: "Jun 22, 2023",
      currentValue: "$4,750",
      change: "-5%",
      trending: "down",
      logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1422",
    },
  ];

  // Distribution by industry data
  const industryData = [
    { name: "AI", value: 25 },
    { name: "Clean Energy", value: 20 },
    { name: "Healthcare", value: 15 },
    { name: "Fintech", value: 25 },
    { name: "Education", value: 10 },
    { name: "Other", value: 5 },
  ];

  // Distribution by stage data
  const stageData = [
    { name: "Pre-seed", value: 15 },
    { name: "Seed", value: 45 },
    { name: "Series A", value: 30 },
    { name: "Series B", value: 10 },
  ];

  // Colors for the pie charts
  const INDUSTRY_COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444", "#64748b"];
  const STAGE_COLORS = ["#8b5cf6", "#4f46e5", "#3b82f6", "#06b6d4"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Investment Portfolio</h1>
              <p className="text-muted-foreground">Manage and track your startup investments</p>
            </div>
            <div className="flex gap-2 mt-4 sm:mt-0">
              <Button variant="outline" className="flex items-center gap-2">
                <DownloadCloud className="h-4 w-4" />
                Export
              </Button>
              <Button asChild>
                <Link to="/startups">Invest Now</Link>
              </Button>
            </div>
          </div>

          {/* Portfolio Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <p className="text-muted-foreground mb-1">Total Invested</p>
                  <h3 className="text-3xl font-bold">$45,500</h3>
                </div>
                <div className="text-sm grid grid-cols-2 gap-2">
                  <div className="bg-gray-100 rounded p-2 text-center">
                    <p className="text-muted-foreground mb-1">Investments</p>
                    <p className="font-medium">6</p>
                  </div>
                  <div className="bg-gray-100 rounded p-2 text-center">
                    <p className="text-muted-foreground mb-1">Avg. Investment</p>
                    <p className="font-medium">$7,583</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <p className="text-muted-foreground mb-1">Current Value</p>
                  <h3 className="text-3xl font-bold">$52,150</h3>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-medium">+14.6%</span>
                  </div>
                  <span className="text-muted-foreground text-sm">Overall Return</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-3">
                  <p className="text-muted-foreground mb-1">Portfolio Allocation</p>
                </div>
                <div className="flex items-center justify-center gap-6 text-sm">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-fundr-600 mb-1"></div>
                    <p className="font-medium">70%</p>
                    <p className="text-muted-foreground">Early Stage</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mb-1"></div>
                    <p className="font-medium">30%</p>
                    <p className="text-muted-foreground">Growth</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Distribution Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Distribution by Industry</CardTitle>
                <CardDescription>Portfolio allocation across sectors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={industryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {industryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={INDUSTRY_COLORS[index % INDUSTRY_COLORS.length]} />
                        ))}
                        <Label
                          content={({ viewBox }) => {
                            const { cx, cy } = viewBox as { cx: number; cy: number };
                            return (
                              <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
                                <tspan x={cx} y={cy} dy="-0.5em" fontSize="12" fill="#888">
                                  Total
                                </tspan>
                                <tspan x={cx} y={cy} dy="1.5em" fontSize="14" fontWeight="bold" fill="#333">
                                  6 Industries
                                </tspan>
                              </text>
                            );
                          }}
                        />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {industryData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: INDUSTRY_COLORS[index % INDUSTRY_COLORS.length] }}
                      ></div>
                      <span className="text-xs">{item.name} ({item.value}%)</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Distribution by Stage</CardTitle>
                <CardDescription>Investment across funding stages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={stageData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {stageData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={STAGE_COLORS[index % STAGE_COLORS.length]} />
                        ))}
                        <Label
                          content={({ viewBox }) => {
                            const { cx, cy } = viewBox as { cx: number; cy: number };
                            return (
                              <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
                                <tspan x={cx} y={cy} dy="-0.5em" fontSize="12" fill="#888">
                                  Focus
                                </tspan>
                                <tspan x={cx} y={cy} dy="1.5em" fontSize="14" fontWeight="bold" fill="#333">
                                  Seed Stage
                                </tspan>
                              </text>
                            );
                          }}
                        />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {stageData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: STAGE_COLORS[index % STAGE_COLORS.length] }}
                      ></div>
                      <span className="text-xs">{item.name} ({item.value}%)</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio List */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <CardTitle>Investment Portfolio</CardTitle>
                  <CardDescription>All your current startup investments</CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative w-full sm:w-auto">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search investments..."
                      className="pl-8 w-full"
                    />
                  </div>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => setFilterOpen(!filterOpen)}
                    className={filterOpen ? "bg-gray-100" : ""}
                  >
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {filterOpen && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 pt-4 border-t">
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Industries</SelectItem>
                      <SelectItem value="ai">Artificial Intelligence</SelectItem>
                      <SelectItem value="cleanenergy">Clean Energy</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="fintech">Fintech</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Stages</SelectItem>
                      <SelectItem value="preseed">Pre-seed</SelectItem>
                      <SelectItem value="seed">Seed</SelectItem>
                      <SelectItem value="seriesa">Series A</SelectItem>
                      <SelectItem value="seriesb">Series B</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="date">
                    <SelectTrigger>
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date">Date (Newest)</SelectItem>
                      <SelectItem value="amount">Amount (Highest)</SelectItem>
                      <SelectItem value="return">Return (Highest)</SelectItem>
                      <SelectItem value="name">Name (A-Z)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="active">
                <div className="px-6 border-b">
                  <TabsList className="-mb-px">
                    <TabsTrigger value="active">Active (6)</TabsTrigger>
                    <TabsTrigger value="exited">Exited (2)</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="active" className="pt-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-4 font-medium">Startup</th>
                          <th className="text-left p-4 font-medium">Industry</th>
                          <th className="text-left p-4 font-medium">Stage</th>
                          <th className="text-left p-4 font-medium">Invested</th>
                          <th className="text-left p-4 font-medium">Current Value</th>
                          <th className="text-left p-4 font-medium">Change</th>
                          <th className="text-right p-4 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {portfolioData.map((investment) => (
                          <tr key={investment.id} className="border-b last:border-0 hover:bg-gray-50">
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                                  <img 
                                    src={investment.logo} 
                                    alt={investment.name} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <div className="font-medium">{investment.name}</div>
                                  <div className="text-xs text-muted-foreground">
                                    Invested: {investment.date}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">{investment.industry}</td>
                            <td className="p-4">{investment.stage}</td>
                            <td className="p-4">{investment.invested}</td>
                            <td className="p-4">{investment.currentValue}</td>
                            <td className="p-4">
                              <div className="flex items-center gap-1">
                                {investment.trending === "up" ? (
                                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                                ) : (
                                  <ArrowDownRight className="h-4 w-4 text-red-500" />
                                )}
                                <span 
                                  className={investment.trending === "up" ? "text-green-500" : "text-red-500"}
                                >
                                  {investment.change}
                                </span>
                              </div>
                            </td>
                            <td className="p-4 text-right">
                              <Button variant="ghost" size="sm" asChild>
                                <Link to={`/startups/${investment.id}`}>View Details</Link>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                <TabsContent value="exited" className="p-6">
                  <div className="text-center py-10">
                    <h3 className="text-lg font-medium mb-2">Exited Investments</h3>
                    <p className="text-muted-foreground mb-0">
                      Your previous investments that have been exited will appear here.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
