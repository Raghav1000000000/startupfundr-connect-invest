
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eye, EyeOff } from "lucide-react";

const formSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export default function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    
    // In a real app, this would validate the token and update the password in the database
    setTimeout(() => {
      toast({
        title: "Password Updated",
        description: "Your password has been successfully updated.",
      });
      
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Redirect to login page after a short delay
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }, 1500);
  }

  // If no token is provided, show error message
  if (!token && !isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-12">
          <div className="w-full max-w-md px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Invalid Link</h1>
              <p className="text-muted-foreground mt-2">
                This password reset link is invalid or has expired.
              </p>
            </div>
            <div className="text-center mt-6">
              <Button asChild variant="outline">
                <Link to="/forgot-password">Request New Reset Link</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Create New Password</h1>
            <p className="text-muted-foreground mt-2">
              Enter your new password below
            </p>
          </div>
          
          {!isSubmitted ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="********" 
                            {...field} 
                          />
                          <Button 
                            type="button"
                            variant="ghost" 
                            size="icon" 
                            className="absolute right-0 top-0" 
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            <span className="sr-only">
                              {showPassword ? "Hide password" : "Show password"}
                            </span>
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type={showConfirmPassword ? "text" : "password"} 
                            placeholder="********" 
                            {...field} 
                          />
                          <Button 
                            type="button"
                            variant="ghost" 
                            size="icon" 
                            className="absolute right-0 top-0" 
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            <span className="sr-only">
                              {showConfirmPassword ? "Hide password" : "Show password"}
                            </span>
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Updating Password..." : "Reset Password"}
                </Button>
              </form>
            </Form>
          ) : (
            <div className="text-center">
              <div className="mb-6 p-4 bg-green-50 rounded-md text-green-700">
                <p>Your password has been successfully updated.</p>
                <p className="mt-2 text-sm">Redirecting to login page...</p>
              </div>
              <Button asChild variant="outline" className="mt-4">
                <Link to="/login">Return to Login</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
