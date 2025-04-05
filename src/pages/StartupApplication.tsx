
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import { HelpCircle, Upload, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const companyInfoSchema = z.object({
  name: z.string().min(2, "Company name must be at least 2 characters"),
  tagline: z.string().min(5, "Tagline must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  industry: z.string().min(1, "Please select an industry"),
  website: z.string().url("Please enter a valid URL").or(z.string().length(0)),
  foundedYear: z.string().regex(/^\d{4}$/, "Please enter a valid year"),
  teamSize: z.string().min(1, "Please enter team size"),
});

const founderInfoSchema = z.object({
  founderName: z.string().min(2, "Founder name must be at least 2 characters"),
  founderEmail: z.string().email("Please enter a valid email"),
  founderPhone: z.string().optional(),
  founderBio: z.string().min(20, "Bio must be at least 20 characters"),
  linkedIn: z.string().url("Please enter a valid URL").or(z.string().length(0)),
});

const fundingInfoSchema = z.object({
  targetAmount: z.string().min(1, "Please enter a target amount"),
  minInvestment: z.string().min(1, "Please enter a minimum investment"),
  equityOffering: z.string()
    .regex(/^\d+(\.\d+)?$/, "Please enter a valid percentage")
    .refine((val) => Number(val) > 0 && Number(val) <= 100, {
      message: "Equity must be between 0 and 100%",
    }),
  useOfFunds: z.string().min(20, "Please describe how funds will be used"),
  currentValuation: z.string().min(1, "Please enter current valuation"),
});

const industries = [
  "SaaS",
  "FinTech",
  "HealthTech",
  "EdTech",
  "AI/ML",
  "CleanTech",
  "E-commerce",
  "Hardware",
  "Gaming",
  "Consumer",
  "Enterprise",
  "Other",
];

export default function StartupApplication() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationComplete, setApplicationComplete] = useState(false);
  const navigate = useNavigate();
  
  const companyInfoForm = useForm<z.infer<typeof companyInfoSchema>>({
    resolver: zodResolver(companyInfoSchema),
    defaultValues: {
      name: "",
      tagline: "",
      description: "",
      industry: "",
      website: "",
      foundedYear: "",
      teamSize: "",
    },
  });
  
  const founderInfoForm = useForm<z.infer<typeof founderInfoSchema>>({
    resolver: zodResolver(founderInfoSchema),
    defaultValues: {
      founderName: "",
      founderEmail: "",
      founderPhone: "",
      founderBio: "",
      linkedIn: "",
    },
  });
  
  const fundingInfoForm = useForm<z.infer<typeof fundingInfoSchema>>({
    resolver: zodResolver(fundingInfoSchema),
    defaultValues: {
      targetAmount: "",
      minInvestment: "",
      equityOffering: "",
      useOfFunds: "",
      currentValuation: "",
    },
  });

  const onSubmitCompanyInfo = (values: z.infer<typeof companyInfoSchema>) => {
    toast({
      title: "Step 1 Complete",
      description: "Company information saved successfully.",
    });
    setStep(2);
  };

  const onSubmitFounderInfo = (values: z.infer<typeof founderInfoSchema>) => {
    toast({
      title: "Step 2 Complete",
      description: "Founder information saved successfully.",
    });
    setStep(3);
  };

  const onSubmitFundingInfo = (values: z.infer<typeof fundingInfoSchema>) => {
    setIsSubmitting(true);
    
    // In a real app, this would submit to your backend
    setTimeout(() => {
      toast({
        title: "Application Submitted",
        description: "Your startup application has been submitted for review.",
      });
      setIsSubmitting(false);
      setApplicationComplete(true);
    }, 2000);
  };

  const getProgress = () => {
    if (applicationComplete) return 100;
    return step === 1 ? 33 : step === 2 ? 66 : 99;
  };
  
  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  if (applicationComplete) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4">
          <Card className="w-full max-w-2xl">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Application Submitted!</CardTitle>
              <CardDescription>
                Your startup application has been received and is under review
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p>
                Thank you for applying to raise capital through our platform. Our team will review
                your application and get back to you within 2-3 business days.
              </p>
              <p className="text-sm text-muted-foreground">
                You'll receive updates about your application status via email.
                In the meantime, you can prepare additional materials that might help your application.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col space-y-3">
              <Button onClick={() => navigate("/dashboard")} className="w-full">
                Go to Dashboard
              </Button>
              <Button variant="outline" onClick={() => navigate("/startup-resources")} className="w-full">
                Explore Startup Resources
              </Button>
            </CardFooter>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Startup Application</h1>
            <p className="text-muted-foreground mt-2">
              Complete the form below to apply for funding through our platform
            </p>
          </div>
          
          <div className="mb-6">
            <Progress value={getProgress()} className="h-2" />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span className={step >= 1 ? "text-primary font-medium" : ""}>Company Info</span>
              <span className={step >= 2 ? "text-primary font-medium" : ""}>Founder Details</span>
              <span className={step >= 3 ? "text-primary font-medium" : ""}>Funding Request</span>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>
                {step === 1
                  ? "Company Information"
                  : step === 2
                  ? "Founder Information"
                  : "Funding Request"}
              </CardTitle>
              <CardDescription>
                {step === 1
                  ? "Tell us about your startup"
                  : step === 2
                  ? "Tell us about the founding team"
                  : "Tell us about your funding needs"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {step === 1 && (
                <Form {...companyInfoForm}>
                  <form onSubmit={companyInfoForm.handleSubmit(onSubmitCompanyInfo)} className="space-y-6">
                    <FormField
                      control={companyInfoForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your startup name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={companyInfoForm.control}
                      name="tagline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tagline</FormLabel>
                          <FormControl>
                            <Input placeholder="A brief description of what you do" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={companyInfoForm.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your startup and its mission"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={companyInfoForm.control}
                        name="industry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Industry</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select industry" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {industries.map((industry) => (
                                  <SelectItem key={industry} value={industry}>
                                    {industry}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={companyInfoForm.control}
                        name="foundedYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Founded Year</FormLabel>
                            <FormControl>
                              <Input placeholder="YYYY" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={companyInfoForm.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Website</FormLabel>
                            <FormControl>
                              <Input placeholder="https://yourcompany.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={companyInfoForm.control}
                        name="teamSize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Team Size</FormLabel>
                            <FormControl>
                              <Input placeholder="Number of team members" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="pt-4 border-t flex justify-between">
                      <div></div>
                      <Button type="submit">
                        Continue to Founder Information
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
              
              {step === 2 && (
                <Form {...founderInfoForm}>
                  <form onSubmit={founderInfoForm.handleSubmit(onSubmitFounderInfo)} className="space-y-6">
                    <FormField
                      control={founderInfoForm.control}
                      name="founderName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Founder Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Primary founder's name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={founderInfoForm.control}
                        name="founderEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="founder@company.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={founderInfoForm.control}
                        name="founderPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Contact phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={founderInfoForm.control}
                      name="founderBio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Founder Bio</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Brief biography, experience, and background"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={founderInfoForm.control}
                      name="linkedIn"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>LinkedIn Profile</FormLabel>
                          <FormControl>
                            <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="pt-4 border-t flex justify-between">
                      <Button type="button" variant="outline" onClick={handleBack}>
                        Back
                      </Button>
                      <Button type="submit">
                        Continue to Funding Request
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
              
              {step === 3 && (
                <Form {...fundingInfoForm}>
                  <form onSubmit={fundingInfoForm.handleSubmit(onSubmitFundingInfo)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={fundingInfoForm.control}
                        name="targetAmount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Target Funding Amount ($)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. 500000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={fundingInfoForm.control}
                        name="minInvestment"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Minimum Investment ($)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. 10000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={fundingInfoForm.control}
                        name="equityOffering"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex items-center space-x-2">
                              <FormLabel>Equity Offering (%)</FormLabel>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <span>
                                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                                    </span>
                                  </TooltipTrigger>
                                  <TooltipContent className="max-w-xs">
                                    <p>What percentage of your company are you offering in exchange for the investment?</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <FormControl>
                              <Input placeholder="e.g. 15" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={fundingInfoForm.control}
                        name="currentValuation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Valuation ($)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. 3000000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={fundingInfoForm.control}
                      name="useOfFunds"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Use of Funds</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe how you plan to use the investment"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div>
                      <p className="font-medium mb-2">Supporting Documents</p>
                      <div className="border-2 border-dashed rounded-lg p-8 text-center">
                        <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm font-medium">
                          Drag and drop files here or click to upload
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Upload your pitch deck, financial projections, etc. (PDF, PPT, XLSX, max 10MB)
                        </p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Select Files
                        </Button>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t flex justify-between">
                      <Button type="button" variant="outline" onClick={handleBack}>
                        Back
                      </Button>
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
