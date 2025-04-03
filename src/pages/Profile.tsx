
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, Pencil, UserCircle } from "lucide-react";

const Profile = () => {
  const [editing, setEditing] = useState(false);
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    });
    setEditing(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1470" alt="John Doe" />
                  <AvatarFallback><UserCircle className="h-12 w-12" /></AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">John Doe</h1>
                  <p className="text-muted-foreground">Investor since April 2023</p>
                </div>
              </div>
              <Button className="mt-4 md:mt-0" onClick={() => setEditing(!editing)}>
                {editing ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Finish Editing
                  </>
                ) : (
                  <>
                    <Pencil className="h-4 w-4 mr-2" />
                    Edit Profile
                  </>
                )}
              </Button>
            </div>

            <Tabs defaultValue="profile">
              <TabsList className="mb-6">
                <TabsTrigger value="profile">Profile Information</TabsTrigger>
                <TabsTrigger value="preferences">Investment Preferences</TabsTrigger>
                <TabsTrigger value="security">Security & Privacy</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSaveProfile}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input 
                            id="firstName" 
                            defaultValue="John"
                            disabled={!editing}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input 
                            id="lastName" 
                            defaultValue="Doe"
                            disabled={!editing}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email" 
                            type="email"
                            defaultValue="john.doe@example.com"
                            disabled={!editing}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone" 
                            defaultValue="+1 (555) 123-4567"
                            disabled={!editing}
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="location">Location</Label>
                          <Input 
                            id="location" 
                            defaultValue="San Francisco, CA, United States"
                            disabled={!editing}
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea 
                            id="bio" 
                            rows={4}
                            defaultValue="Tech investor with a focus on AI and sustainability startups. Previously worked at Google and founded a SaaS startup. Looking to support innovative teams solving meaningful problems."
                            disabled={!editing}
                          />
                        </div>
                        
                        {editing && (
                          <div className="md:col-span-2 flex justify-end">
                            <Button type="submit">Save Changes</Button>
                          </div>
                        )}
                      </div>
                    </form>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Professional Information</CardTitle>
                    <CardDescription>Share your professional background</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSaveProfile}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">Current Company</Label>
                          <Input 
                            id="company" 
                            defaultValue="Innovate Partners"
                            disabled={!editing}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="position">Job Title</Label>
                          <Input 
                            id="position" 
                            defaultValue="Chief Innovation Officer"
                            disabled={!editing}
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="linkedin">LinkedIn Profile</Label>
                          <Input 
                            id="linkedin" 
                            defaultValue="https://linkedin.com/in/johndoe"
                            disabled={!editing}
                          />
                        </div>
                        
                        {editing && (
                          <div className="md:col-span-2 flex justify-end">
                            <Button type="submit">Save Changes</Button>
                          </div>
                        )}
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle>Investment Preferences</CardTitle>
                    <CardDescription>Customize your investment criteria</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSaveProfile}>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-4">Industries of Interest</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {["Artificial Intelligence", "Healthcare", "Fintech", "Clean Energy", "Education", "E-commerce", "SaaS", "Blockchain", "Consumer Products"].map((industry) => (
                              <div key={industry} className="flex items-center space-x-2">
                                <input 
                                  type="checkbox" 
                                  id={industry.toLowerCase().replace(/\s+/g, '-')} 
                                  className="h-4 w-4 rounded border-gray-300 text-fundr-600 focus:ring-fundr-600"
                                  defaultChecked={["Artificial Intelligence", "Fintech", "SaaS", "Clean Energy"].includes(industry)}
                                  disabled={!editing}
                                />
                                <Label 
                                  htmlFor={industry.toLowerCase().replace(/\s+/g, '-')}
                                  className="text-sm font-normal"
                                >
                                  {industry}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-lg font-medium mb-4">Investment Range</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="minInvestment">Minimum Investment ($)</Label>
                              <Input 
                                id="minInvestment" 
                                type="number" 
                                defaultValue="1000"
                                disabled={!editing}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="maxInvestment">Maximum Investment ($)</Label>
                              <Input 
                                id="maxInvestment" 
                                type="number" 
                                defaultValue="50000"
                                disabled={!editing}
                              />
                            </div>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-lg font-medium mb-4">Startup Stage Preferences</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["Pre-seed", "Seed", "Series A", "Series B", "Growth Stage", "Pre-IPO"].map((stage) => (
                              <div key={stage} className="flex items-center space-x-2">
                                <input 
                                  type="checkbox" 
                                  id={stage.toLowerCase().replace(/\s+/g, '-')} 
                                  className="h-4 w-4 rounded border-gray-300 text-fundr-600 focus:ring-fundr-600"
                                  defaultChecked={["Pre-seed", "Seed", "Series A"].includes(stage)}
                                  disabled={!editing}
                                />
                                <Label 
                                  htmlFor={stage.toLowerCase().replace(/\s+/g, '-')}
                                  className="text-sm font-normal"
                                >
                                  {stage}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {editing && (
                          <div className="flex justify-end">
                            <Button type="submit">Save Preferences</Button>
                          </div>
                        )}
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>Manage your account security</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSaveProfile}>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-4">Change Password</h3>
                          <div className="grid grid-cols-1 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="currentPassword">Current Password</Label>
                              <Input 
                                id="currentPassword" 
                                type="password"
                                disabled={!editing}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="newPassword">New Password</Label>
                              <Input 
                                id="newPassword" 
                                type="password"
                                disabled={!editing}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="confirmPassword">Confirm New Password</Label>
                              <Input 
                                id="confirmPassword" 
                                type="password"
                                disabled={!editing}
                              />
                            </div>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Enable Two-Factor Authentication</p>
                              <p className="text-sm text-muted-foreground">
                                Add an extra layer of security to your account
                              </p>
                            </div>
                            <Switch 
                              checked={true}
                              disabled={!editing}
                            />
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-lg font-medium mb-4">Privacy Settings</h3>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Profile Visibility</p>
                                <p className="text-sm text-muted-foreground">
                                  Allow other investors to see your profile
                                </p>
                              </div>
                              <Switch 
                                checked={true}
                                disabled={!editing}
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Investment Activity</p>
                                <p className="text-sm text-muted-foreground">
                                  Show your investment activity in public feeds
                                </p>
                              </div>
                              <Switch 
                                checked={false}
                                disabled={!editing}
                              />
                            </div>
                          </div>
                        </div>
                        
                        {editing && (
                          <div className="flex justify-end">
                            <Button type="submit">Save Security Settings</Button>
                          </div>
                        )}
                      </div>
                    </form>
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

export default Profile;
