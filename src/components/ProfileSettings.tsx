
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const personalInfoSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  bio: z.string().max(500, {
    message: "Bio must not exceed 500 characters.",
  }).optional(),
  location: z.string().optional(),
});

const securitySchema = z.object({
  currentPassword: z.string().min(1, {
    message: "Current password is required.",
  }),
  newPassword: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirmPassword: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
});

const notificationSchema = z.object({
  emailNotifications: z.boolean(),
  marketingEmails: z.boolean(),
  newInvestmentOpportunities: z.boolean(),
  startupUpdates: z.boolean(),
  transactionAlerts: z.boolean(),
});

export default function ProfileSettings() {
  const [isUpdating, setIsUpdating] = useState(false);

  const personalForm = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      bio: "Experienced investor with a passion for technology startups.",
      location: "San Francisco, CA",
    },
  });

  const securityForm = useForm<z.infer<typeof securitySchema>>({
    resolver: zodResolver(securitySchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const notificationForm = useForm<z.infer<typeof notificationSchema>>({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      emailNotifications: true,
      marketingEmails: false,
      newInvestmentOpportunities: true,
      startupUpdates: true,
      transactionAlerts: true,
    },
  });

  function onPersonalSubmit(values: z.infer<typeof personalInfoSchema>) {
    setIsUpdating(true);
    
    // Mock API call
    setTimeout(() => {
      toast({
        title: "Profile Updated",
        description: "Your personal information has been updated.",
      });
      setIsUpdating(false);
    }, 1000);
  }

  function onSecuritySubmit(values: z.infer<typeof securitySchema>) {
    setIsUpdating(true);
    
    // Mock API call
    setTimeout(() => {
      toast({
        title: "Password Updated",
        description: "Your password has been changed successfully.",
      });
      securityForm.reset({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setIsUpdating(false);
    }, 1000);
  }

  function onNotificationSubmit(values: z.infer<typeof notificationSchema>) {
    setIsUpdating(true);
    
    // Mock API call
    setTimeout(() => {
      toast({
        title: "Preferences Updated",
        description: "Your notification preferences have been updated.",
      });
      setIsUpdating(false);
    }, 1000);
  }

  return (
    <Tabs defaultValue="personal" className="max-w-4xl mx-auto">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="personal">Personal Info</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      
      <TabsContent value="personal">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Update your personal details and public profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...personalForm}>
              <form onSubmit={personalForm.handleSubmit(onPersonalSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={personalForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={personalForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={personalForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={personalForm.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a location" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="San Francisco, CA">San Francisco, CA</SelectItem>
                            <SelectItem value="New York, NY">New York, NY</SelectItem>
                            <SelectItem value="Austin, TX">Austin, TX</SelectItem>
                            <SelectItem value="Seattle, WA">Seattle, WA</SelectItem>
                            <SelectItem value="Chicago, IL">Chicago, IL</SelectItem>
                            <SelectItem value="Remote">Remote</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={personalForm.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about yourself" 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        This will be displayed on your public profile.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" disabled={isUpdating}>
                  {isUpdating ? "Saving..." : "Save Changes"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="security">
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>
              Manage your password and account security
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...securityForm}>
              <form onSubmit={securityForm.handleSubmit(onSecuritySubmit)} className="space-y-6">
                <FormField
                  control={securityForm.control}
                  name="currentPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Enter current password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={securityForm.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Enter new password" {...field} />
                      </FormControl>
                      <FormDescription>
                        Password must be at least 8 characters and include a mix of letters, numbers, and symbols.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={securityForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm New Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Confirm new password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" disabled={isUpdating}>
                  {isUpdating ? "Updating..." : "Update Password"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>
              Manage how and when we notify you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...notificationForm}>
              <form onSubmit={notificationForm.handleSubmit(onNotificationSubmit)} className="space-y-6">
                <FormField
                  control={notificationForm.control}
                  name="emailNotifications"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Email Notifications</FormLabel>
                        <FormDescription>
                          Receive notifications via email
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={notificationForm.control}
                  name="marketingEmails"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Marketing Emails</FormLabel>
                        <FormDescription>
                          Receive marketing and promotional emails
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={notificationForm.control}
                  name="newInvestmentOpportunities"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">New Investment Opportunities</FormLabel>
                        <FormDescription>
                          Get notified about new startups to invest in
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={notificationForm.control}
                  name="startupUpdates"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Startup Updates</FormLabel>
                        <FormDescription>
                          Receive updates from startups you've invested in
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={notificationForm.control}
                  name="transactionAlerts"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Transaction Alerts</FormLabel>
                        <FormDescription>
                          Get notified about investment transactions
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <Button type="submit" disabled={isUpdating}>
                  {isUpdating ? "Saving..." : "Save Preferences"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
