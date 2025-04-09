
import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { passwordService } from "@/services/passwordService";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    
    try {
      // Call password reset service
      await passwordService.requestReset(values.email);
      
      toast({
        title: "Reset Link Sent",
        description: "If an account exists with this email, you'll receive a password reset link",
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Password reset request failed:", error);
      toast({
        title: "Request Failed",
        description: "There was a problem processing your request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Reset Password</h1>
            <p className="text-muted-foreground mt-2">We'll email you a link to reset your password</p>
          </div>
          
          {!isSubmitted ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="yourname@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending Reset Link..." : "Send Reset Link"}
                </Button>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-muted-foreground">
                    Remember your password?{" "}
                    <Link to="/login" className="text-fundr-600 hover:underline">
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </Form>
          ) : (
            <div className="text-center">
              <div className="mb-6 p-4 bg-green-50 rounded-md text-green-700">
                <p>Check your email for a password reset link.</p>
                <p className="mt-2 text-sm">The link will expire in 30 minutes.</p>
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
