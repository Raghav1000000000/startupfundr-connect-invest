
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Wallet, BarChart3, TrendingUp, Bell, ChevronRight } from "lucide-react";

// Mock user data
const userData = {
  id: "u1",
  name: "Alex Johnson",
  email: "alex@example.com",
  walletBalance: 5000,
  investments: [
    {
      id: "inv1",
      startupId: "1",
      amount: 1000,
      date: new Date("2023-10-15"),
      equity: 0.5
    },
    {
      id: "inv2",
      startupId: "2",
      amount: 1500,
      date: new Date("2023-11-22"),
      equity: 0.75
    }
  ]
};

// Mock notifications
const notifications = [
  {
    id: "n1",
    title: "EcoHarvest posted an update",
    description: "New product milestone reached!",
    time: "2 hours ago",
    read: false
  },
  {
    id: "n2",
    title: "Your investment in Quantum Health",
    description: "Investment successfully processed",
    time: "1 day ago",
    read: true
  },
  {
    id: "n3",
    title: "New startup matches your interests",
    description: "Check out TravelBuddy",
    time: "3 days ago",
    read: true
  }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {userData.name}</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => navigate("/profile")}>My Profile</Button>
            <Button variant="outline" onClick={() => navigate("/portfolio")}>Investment Portfolio</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Wallet className="mr-2 h-5 w-5 text-fundr-600" />
                Wallet Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">${userData.walletBalance.toLocaleString()}</div>
              <p className="text-sm text-muted-foreground mt-1">Available for investments</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Add Funds</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-fundr-600" />
                Total Invested
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                ${userData.investments.reduce((sum, inv) => sum + inv.amount, 0).toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground mt-1">Across {userData.investments.length} startups</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={() => navigate("/portfolio")}>
                View Portfolio
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-fundr-600" />
                Growth Potential
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12.4%</div>
              <p className="text-sm text-muted-foreground mt-1">Estimated annual return</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={() => navigate("/startups")}>
                Explore More Startups
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="investments">Recent Investments</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Account Overview</CardTitle>
                <CardDescription>Quick summary of your StartupFundr activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Portfolio Diversity</span>
                      <span>Good</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      Your investments are spread across different industries
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Recommended Actions</h3>
                    <ul className="space-y-2">
                      <li className="text-sm flex items-center">
                        <span className="bg-fundr-100 text-fundr-800 p-1 rounded-full mr-2">
                          <ChevronRight className="h-4 w-4" />
                        </span>
                        Complete your investor profile for better recommendations
                      </li>
                      <li className="text-sm flex items-center">
                        <span className="bg-fundr-100 text-fundr-800 p-1 rounded-full mr-2">
                          <ChevronRight className="h-4 w-4" />
                        </span>
                        Set up automatic deposits to grow your investment fund
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="investments">
            <Card>
              <CardHeader>
                <CardTitle>Recent Investments</CardTitle>
                <CardDescription>Your latest startup investments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userData.investments.map((investment) => (
                    <div key={investment.id} className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-fundr-100 flex items-center justify-center mr-3">
                          <Avatar>
                            <AvatarFallback>
                              {investment.startupId === "1" ? "EH" : "QH"}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div>
                          <p className="font-medium">
                            {investment.startupId === "1" ? "EcoHarvest" : "Quantum Health"}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {investment.date.toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${investment.amount.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">{investment.equity}% equity</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => navigate("/portfolio")} variant="outline" className="w-full">
                  View All Investments
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Stay updated with your investments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start gap-3 border-b pb-4">
                      <div className={`p-2 rounded-full ${notification.read ? 'bg-gray-100' : 'bg-fundr-100'}`}>
                        <Bell className={`h-4 w-4 ${notification.read ? 'text-gray-500' : 'text-fundr-600'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className={`font-medium ${notification.read ? '' : 'text-fundr-800'}`}>
                            {notification.title}
                          </p>
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                      </div>
                      {!notification.read && <Badge variant="outline" className="bg-fundr-50">New</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Mark All as Read</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
