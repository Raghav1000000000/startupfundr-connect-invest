
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Briefcase, 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  Calendar, 
  Edit, 
  PlusCircle,
  BarChart4
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileSettings from "@/components/ProfileSettings";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  // Mock user data - in a real app would come from authentication context
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "January 2024",
    bio: "Experienced investor with a passion for technology startups. Looking to support innovative projects with potential for high growth and social impact.",
    profileCompletion: 85,
    investorType: "Angel Investor",
    accreditationStatus: "Verified",
    portfolioStats: {
      totalInvested: 157500,
      startupsFunded: 12,
      sectors: ["FinTech", "HealthTech", "AI/ML", "CleanTech"],
      returns: 22
    },
    recentInvestments: [
      { id: "1", name: "TechVision AI", amount: 25000, date: "2025-02-15", logo: "/placeholder.svg" },
      { id: "2", name: "GreenEnergy Solutions", amount: 15000, date: "2025-01-20", logo: "/placeholder.svg" },
      { id: "3", name: "HealthCare Plus", amount: 30000, date: "2024-12-05", logo: "/placeholder.svg" }
    ],
    interests: ["Artificial Intelligence", "Sustainable Energy", "Healthcare Innovation", "Financial Technology"]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Tabs 
            defaultValue="overview" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold">My Profile</h1>
                <p className="text-muted-foreground">
                  Manage your information and settings
                </p>
              </div>
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="investments">Investments</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Overview Card */}
                <Card className="lg:col-span-1">
                  <CardHeader className="flex flex-row items-start justify-between">
                    <div>
                      <CardTitle>Profile</CardTitle>
                      <CardDescription>
                        Your personal information
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit Profile</span>
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col items-center space-y-3 pb-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src="/placeholder.svg" alt={userData.name} />
                        <AvatarFallback className="text-lg">
                          {userData.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-center">
                        <h3 className="text-xl font-medium">{userData.name}</h3>
                        <p className="text-sm text-muted-foreground">{userData.investorType}</p>
                        <Badge variant="outline" className="mt-1">
                          {userData.accreditationStatus}
                        </Badge>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Profile Completion</h4>
                      <Progress value={userData.profileCompletion} className="h-2" />
                      <p className="text-xs text-muted-foreground text-right">
                        {userData.profileCompletion}% Complete
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{userData.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{userData.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{userData.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Member since {userData.joinDate}</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">About</h4>
                      <p className="text-sm text-muted-foreground">{userData.bio}</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Investment Interests</h4>
                      <div className="flex flex-wrap gap-2">
                        {userData.interests.map((interest, index) => (
                          <Badge key={index} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                        <Button variant="outline" size="icon" className="h-6 w-6 rounded-full">
                          <PlusCircle className="h-3.5 w-3.5" />
                          <span className="sr-only">Add interest</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Investment Summary Card */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Investment Summary</CardTitle>
                    <CardDescription>Overview of your investment portfolio</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Briefcase className="h-4 w-4" />
                          <span className="text-xs font-medium">Total Invested</span>
                        </div>
                        <p className="text-2xl font-bold">${userData.portfolioStats.totalInvested.toLocaleString()}</p>
                        <span className="text-xs text-muted-foreground">Across {userData.portfolioStats.startupsFunded} startups</span>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Globe className="h-4 w-4" />
                          <span className="text-xs font-medium">Sectors</span>
                        </div>
                        <p className="text-2xl font-bold">{userData.portfolioStats.sectors.length}</p>
                        <span className="text-xs text-muted-foreground">{userData.portfolioStats.sectors.join(", ")}</span>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <BarChart4 className="h-4 w-4" />
                          <span className="text-xs font-medium">Est. Returns</span>
                        </div>
                        <p className="text-2xl font-bold">{userData.portfolioStats.returns}%</p>
                        <span className="text-xs text-muted-foreground">Projected annual return</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Recent Investments</h3>
                      <div className="space-y-4">
                        {userData.recentInvestments.map(investment => (
                          <div key={investment.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={investment.logo} alt={investment.name} />
                                <AvatarFallback>
                                  {investment.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium">{investment.name}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {new Date(investment.date).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <span className="font-medium">${investment.amount.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 flex justify-end">
                        <Button asChild variant="outline">
                          <a href="/portfolio">View All Investments</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="investments" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Investment Portfolio</CardTitle>
                  <CardDescription>
                    Detailed view of all your investments
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-center py-12 text-muted-foreground">
                    This tab would contain a detailed breakdown of your investments with filtering options, 
                    performance metrics, and more detailed analytics.
                  </p>
                  
                  <div className="flex justify-center">
                    <Button asChild>
                      <a href="/portfolio">Go to Portfolio Dashboard</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings">
              <ProfileSettings />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
