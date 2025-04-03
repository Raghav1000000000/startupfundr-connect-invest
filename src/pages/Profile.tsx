
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Mock user profile data
const userProfile = {
  id: "u1",
  name: "Alex Johnson",
  email: "alex@example.com",
  bio: "Tech enthusiast and angel investor with a focus on sustainability and healthcare innovations.",
  location: "San Francisco, CA",
  occupation: "Product Manager at Tech Co.",
  joinedDate: "January 2023",
  profileImageUrl: "",
  interests: ["HealthTech", "CleanTech", "FinTech", "AI", "SaaS"],
  investmentPreferences: {
    minAmount: 500,
    maxAmount: 5000,
    industries: ["HealthTech", "CleanTech"],
    stage: ["Seed", "Series A"],
    notificationFrequency: "weekly"
  }
};

const Profile = () => {
  const [profile, setProfile] = useState(userProfile);
  const [editing, setEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
    bio: profile.bio,
    location: profile.location,
    occupation: profile.occupation
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    setProfile(prev => ({ ...prev, ...formData }));
    setEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleCancelEdit = () => {
    setFormData({
      name: profile.name,
      email: profile.email,
      bio: profile.bio,
      location: profile.location,
      occupation: profile.occupation
    });
    setEditing(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Profile sidebar */}
          <div>
            <Card className="mb-6">
              <CardContent className="pt-6 flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarFallback className="text-xl">{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{profile.name}</h2>
                <p className="text-sm text-muted-foreground mb-2">{profile.email}</p>
                <p className="text-sm text-center mb-4">{profile.occupation}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {profile.interests.map(interest => (
                    <Badge key={interest} variant="outline">{interest}</Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setEditing(true)}
                  disabled={editing}
                >
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Account Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Member Since</p>
                  <p className="text-sm text-muted-foreground">{profile.joinedDate}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">{profile.location}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Email Verification</p>
                  <Badge variant="outline" className="bg-green-50 text-green-700">Verified</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right column - Main content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
              <TabsList className="mb-4">
                <TabsTrigger value="profile">Profile Details</TabsTrigger>
                <TabsTrigger value="preferences">Investment Preferences</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      {editing 
                        ? "Edit your personal information below" 
                        : "View and manage your personal information"
                      }
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {editing ? (
                      // Edit form
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input 
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input 
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <Input 
                              id="location"
                              name="location"
                              value={formData.location}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="occupation">Occupation</Label>
                            <Input 
                              id="occupation"
                              name="occupation"
                              value={formData.occupation}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea 
                            id="bio" 
                            name="bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                            rows={4}
                          />
                        </div>
                      </div>
                    ) : (
                      // View mode
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium">Bio</h3>
                          <p className="text-sm text-muted-foreground mt-1">{profile.bio}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h3 className="font-medium">Location</h3>
                            <p className="text-sm text-muted-foreground mt-1">{profile.location}</p>
                          </div>
                          <div>
                            <h3 className="font-medium">Occupation</h3>
                            <p className="text-sm text-muted-foreground mt-1">{profile.occupation}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                  {editing && (
                    <CardFooter className="flex justify-end gap-2">
                      <Button variant="outline" onClick={handleCancelEdit}>Cancel</Button>
                      <Button onClick={handleSaveProfile}>Save Changes</Button>
                    </CardFooter>
                  )}
                </Card>
              </TabsContent>

              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle>Investment Preferences</CardTitle>
                    <CardDescription>
                      Customize your investment criteria and interests
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Investment Amount Range</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="minAmount">Minimum ($)</Label>
                          <Input 
                            id="minAmount" 
                            type="number" 
                            value={profile.investmentPreferences.minAmount} 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="maxAmount">Maximum ($)</Label>
                          <Input 
                            id="maxAmount" 
                            type="number" 
                            value={profile.investmentPreferences.maxAmount} 
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2">Preferred Industries</h3>
                      <div className="flex flex-wrap gap-2">
                        {["HealthTech", "CleanTech", "FinTech", "AI", "SaaS", "EdTech"].map(industry => (
                          <Badge 
                            key={industry} 
                            variant={profile.investmentPreferences.industries.includes(industry) ? "default" : "outline"}
                            className="cursor-pointer"
                          >
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2">Startup Stage</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Pre-seed", "Seed", "Series A", "Series B", "Growth"].map(stage => (
                          <Badge 
                            key={stage} 
                            variant={profile.investmentPreferences.stage.includes(stage) ? "default" : "outline"}
                            className="cursor-pointer"
                          >
                            {stage}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Notification Preferences</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-notifications" className="font-medium">
                            Email Notifications
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Receive updates about your investments
                          </p>
                        </div>
                        <Switch id="email-notifications" defaultChecked={true} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="new-opportunities" className="font-medium">
                            New Investment Opportunities
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified about startups matching your interests
                          </p>
                        </div>
                        <Switch id="new-opportunities" defaultChecked={true} />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="ml-auto">Save Preferences</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>
                      Manage your account security and password
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Change Password</h3>
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <Button>Update Password</Button>
                    </div>

                    <div className="border-t pt-6 space-y-4">
                      <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Enable 2FA</p>
                          <p className="text-sm text-muted-foreground">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Switch id="2fa" />
                      </div>
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

export default Profile;
