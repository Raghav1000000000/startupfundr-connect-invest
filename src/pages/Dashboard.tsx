
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInvestments } from "@/hooks/useInvestments";
import { useStartups } from "@/hooks/useStartups";
import { Skeleton } from "@/components/ui/skeleton";
import { BadgeDollarSign, TrendingUp, Building, CreditCard } from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();
  const { getUserInvestments } = useInvestments();
  const { getFeaturedStartups } = useStartups();
  const [userType, setUserType] = useState<"investor" | "startup">("investor");
  
  const { 
    data: investments, 
    isLoading: investmentsLoading 
  } = getUserInvestments;
  
  const { 
    data: recommendedStartups, 
    isLoading: startupsLoading 
  } = getFeaturedStartups;

  useEffect(() => {
    // In a real app, we would determine user type from the user object
    const storedUserType = localStorage.getItem("userType");
    if (storedUserType === "startup" || storedUserType === "investor") {
      setUserType(storedUserType);
    }
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome{user?.name ? `, ${user.name}` : ''}!
          </h1>
          <p className="text-muted-foreground">
            {userType === "investor" 
              ? "Manage your investments and discover new opportunities." 
              : "Track your fundraising progress and manage your startup profile."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Stats Cards */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {userType === "investor" ? "Total Invested" : "Total Raised"}
              </CardTitle>
              <BadgeDollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {investmentsLoading ? (
                  <Skeleton className="h-8 w-24" />
                ) : (
                  `$${investments?.reduce((sum, inv) => sum + inv.amount, 0)?.toLocaleString() || "0"}`
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                {userType === "investor" ? "+12% from last month" : "+5% from last week"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {userType === "investor" ? "Portfolio Performance" : "Fundraising Goal"}
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {userType === "investor" ? "+14.2%" : "65%"}
              </div>
              <p className="text-xs text-muted-foreground">
                {userType === "investor" ? "YTD return" : "Of $100,000 goal"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {userType === "investor" ? "Active Investments" : "Total Investors"}
              </CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {investmentsLoading ? (
                  <Skeleton className="h-8 w-12" />
                ) : (
                  investments?.length || "0"
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                {userType === "investor" ? "Across multiple startups" : "Supporting your startup"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${user?.walletBalance?.toLocaleString() || "0"}</div>
              <p className="text-xs text-muted-foreground">
                Available for investments
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            {userType === "investor" ? (
              <TabsTrigger value="investments">My Investments</TabsTrigger>
            ) : (
              <TabsTrigger value="fundraising">Fundraising</TabsTrigger>
            )}
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {userType === "investor" ? "Recommended Opportunities" : "Fundraising Progress"}
                  </CardTitle>
                  <CardDescription>
                    {userType === "investor" 
                      ? "Startups that match your investment preferences" 
                      : "Track your campaign performance over time"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {userType === "investor" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {startupsLoading ? (
                        Array(3).fill(0).map((_, i) => (
                          <Card key={i}>
                            <CardHeader>
                              <Skeleton className="h-6 w-24 mb-2" />
                              <Skeleton className="h-4 w-full" />
                            </CardHeader>
                            <CardContent>
                              <Skeleton className="h-16 w-full" />
                            </CardContent>
                            <CardFooter>
                              <Skeleton className="h-9 w-full" />
                            </CardFooter>
                          </Card>
                        ))
                      ) : (
                        recommendedStartups?.slice(0, 3).map((startup) => (
                          <Card key={startup.id}>
                            <CardHeader>
                              <CardTitle className="text-md">{startup.name}</CardTitle>
                              <CardDescription>{startup.tagline}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="text-sm text-muted-foreground mb-2">
                                <div className="flex justify-between mb-1">
                                  <span>Raised: ${startup.raisedAmount?.toLocaleString()}</span>
                                  <span>{startup.equity}% equity</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                  <div 
                                    className="bg-fundr-600 h-2 rounded-full" 
                                    style={{ 
                                      width: `${(startup.raisedAmount / startup.askAmount) * 100}%` 
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Link to={`/startups/${startup.id}`} className="w-full">
                                <Button size="sm" className="w-full">View Opportunity</Button>
                              </Link>
                            </CardFooter>
                          </Card>
                        ))
                      )}
                    </div>
                  ) : (
                    <div>
                      <div className="mb-4">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Fundraising Goal: $100,000</span>
                          <span className="font-medium">Raised: $65,000 (65%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-fundr-600 h-3 rounded-full" 
                            style={{ width: "65%" }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h4 className="font-medium mb-2">Fundraising Stats</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Investors</p>
                            <p className="font-medium">24</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Avg. Investment</p>
                            <p className="font-medium">$2,708</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Campaign Views</p>
                            <p className="font-medium">1,245</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Conversion Rate</p>
                            <p className="font-medium">1.9%</p>
                          </div>
                        </div>
                      </div>
                      
                      <Link to="/startup-application">
                        <Button>Update Campaign</Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Link to={userType === "investor" ? "/startups" : "/raise-capital"}>
                    <Button variant="outline">
                      {userType === "investor" ? "Browse All Startups" : "Fundraising Resources"}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="investments">
            <Card>
              <CardHeader>
                <CardTitle>My Investment Portfolio</CardTitle>
                <CardDescription>Track the performance of your investments</CardDescription>
              </CardHeader>
              <CardContent>
                {investmentsLoading ? (
                  Array(3).fill(0).map((_, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b">
                      <div className="flex items-center">
                        <Skeleton className="h-10 w-10 rounded-full mr-4" />
                        <div>
                          <Skeleton className="h-5 w-32 mb-1" />
                          <Skeleton className="h-4 w-24" />
                        </div>
                      </div>
                      <div className="text-right">
                        <Skeleton className="h-5 w-20 mb-1" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    </div>
                  ))
                ) : investments?.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">You haven't made any investments yet.</p>
                    <Link to="/startups">
                      <Button>Explore Startups</Button>
                    </Link>
                  </div>
                ) : (
                  investments?.map((investment) => (
                    <div key={investment.id} className="flex items-center justify-between py-3 border-b">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-gray-200 rounded-full mr-4" />
                        <div>
                          <p className="font-medium">Startup Name</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(investment.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${investment.amount.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">{investment.equity}% equity</p>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
              {investments?.length > 0 && (
                <CardFooter>
                  <Link to="/portfolio">
                    <Button variant="outline">View Detailed Portfolio</Button>
                  </Link>
                </CardFooter>
              )}
            </Card>
          </TabsContent>
          
          <TabsContent value="fundraising">
            <Card>
              <CardHeader>
                <CardTitle>Fundraising Campaign</CardTitle>
                <CardDescription>Manage your startup's fundraising efforts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Campaign Performance</h4>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Goal: $100,000</span>
                      <span className="text-sm">65% complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                      <div className="bg-fundr-600 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Recent Investors</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-gray-200 mr-3"></div>
                          <span>John D.</span>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$5,000</p>
                          <p className="text-xs text-muted-foreground">2 days ago</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-gray-200 mr-3"></div>
                          <span>Sarah M.</span>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$10,000</p>
                          <p className="text-xs text-muted-foreground">5 days ago</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-gray-200 mr-3"></div>
                          <span>Robert K.</span>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$7,500</p>
                          <p className="text-xs text-muted-foreground">1 week ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Link to="/startup-application">
                      <Button>Edit Campaign</Button>
                    </Link>
                    <Button variant="outline">Contact Investors</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="transactions">
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your recent deposits, withdrawals, and investments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <p className="font-medium">Deposit</p>
                      <p className="text-sm text-muted-foreground">Apr 1, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">+$10,000.00</p>
                      <p className="text-xs text-muted-foreground">Credit Card ****4242</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <p className="font-medium">Investment - TechStart</p>
                      <p className="text-sm text-muted-foreground">Mar 28, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-red-600">-$5,000.00</p>
                      <p className="text-xs text-muted-foreground">Wallet Balance</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <p className="font-medium">Deposit</p>
                      <p className="text-sm text-muted-foreground">Mar 15, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">+$5,000.00</p>
                      <p className="text-xs text-muted-foreground">Bank Transfer</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <p className="font-medium">Investment - GreenEnergy</p>
                      <p className="text-sm text-muted-foreground">Mar 10, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-red-600">-$2,500.00</p>
                      <p className="text-xs text-muted-foreground">Wallet Balance</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Transactions</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}
