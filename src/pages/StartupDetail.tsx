
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Startup, Post } from "@/types";
import { startups } from "@/data/startups";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Users, Calendar, DollarSign, Banknote, PieChart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

// Mock posts data
const mockPosts: Post[] = [
  {
    id: "1",
    startupId: "1",
    title: "We just hit our first milestone!",
    content: "We're excited to announce that we've just completed our first major product milestone. This represents a significant step forward in our development roadmap and brings us closer to our launch date.",
    date: new Date("2023-11-15"),
    likes: 45,
    comments: 12
  },
  {
    id: "2",
    startupId: "1",
    title: "New partnership announced",
    content: "We're thrilled to share that we've partnered with a major distributor in the industry. This collaboration will significantly expand our reach and provide valuable resources for scaling our operations.",
    date: new Date("2023-10-22"),
    likes: 32,
    comments: 8
  }
];

const StartupDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [startup, setStartup] = useState<Startup | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, this would be a fetch request to your Supabase backend
    const foundStartup = startups.find(s => s.id === id);
    
    if (foundStartup) {
      setStartup(foundStartup);
      // Get posts for this startup
      setPosts(mockPosts.filter(post => post.startupId === id));
    }
    
    setLoading(false);
  }, [id]);

  const calculateProgress = (raised: number, asked: number) => {
    return Math.min(Math.round((raised / asked) * 100), 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading startup details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!startup) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Startup Not Found</h1>
          <p className="mb-6">The startup you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/startups")}>Back to Startups</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Startup info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src={startup.logoUrl} 
                  alt={`${startup.name} logo`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{startup.name}</h1>
                <p className="text-muted-foreground">{startup.tagline}</p>
              </div>
            </div>

            <Tabs defaultValue="overview">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="updates">Updates</TabsTrigger>
                <TabsTrigger value="investors">Investors</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>About {startup.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6">{startup.description}</p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{startup.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{startup.teamSize || "N/A"} team members</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Founded {startup.foundedYear}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">${startup.askAmount.toLocaleString()} asked</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PieChart className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{startup.equity}% equity offered</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Banknote className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{startup.industry}</span>
                      </div>
                    </div>

                    {startup.website && (
                      <Button variant="outline" className="w-full sm:w-auto" onClick={() => window.open(startup.website, "_blank")}>
                        Visit Website
                      </Button>
                    )}
                    
                    {startup.pitchDeck && (
                      <Button variant="outline" className="w-full sm:w-auto ml-0 sm:ml-2 mt-2 sm:mt-0">
                        View Pitch Deck
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="updates">
                <Card>
                  <CardHeader>
                    <CardTitle>Latest Updates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {posts.length > 0 ? (
                      <div className="space-y-6">
                        {posts.map((post) => (
                          <div key={post.id} className="border rounded-lg p-4">
                            <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
                            <p className="text-muted-foreground text-sm mb-3">
                              {post.date.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                            <p className="mb-3">{post.content}</p>
                            <div className="flex gap-4 text-sm text-muted-foreground">
                              <span>{post.likes} likes</span>
                              <span>{post.comments} comments</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>No updates from this startup yet.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="investors">
                <Card>
                  <CardHeader>
                    <CardTitle>Investors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">This startup has {startup.investors} investors so far.</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {/* This would be populated from backend data in a real app */}
                      {Array.from({ length: Math.min(startup.investors, 8) }).map((_, index) => (
                        <Avatar key={index}>
                          <AvatarFallback>
                            {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
                            {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      {startup.investors > 8 && (
                        <Avatar>
                          <AvatarFallback>+{startup.investors - 8}</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                    <Button variant="outline" className="w-full" disabled>
                      View All Investors
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right column - Investment card */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Invest in {startup.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Funding Progress</span>
                    <span>{calculateProgress(startup.raisedAmount, startup.askAmount)}%</span>
                  </div>
                  <Progress value={calculateProgress(startup.raisedAmount, startup.askAmount)} className="h-2.5 mb-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${startup.raisedAmount.toLocaleString()} raised</span>
                    <span>Goal: ${startup.askAmount.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="border rounded p-3 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Investors</p>
                    <p className="font-semibold">{startup.investors}</p>
                  </div>
                  <div className="border rounded p-3 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Equity</p>
                    <p className="font-semibold">{startup.equity}%</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Founder</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{startup.founderName.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span>{startup.founderName}</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <Button className="w-full mb-3">Invest Now</Button>
                <Button variant="outline" className="w-full">Add to Watchlist</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StartupDetail;
