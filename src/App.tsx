
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

// Pages imports
import Index from "./pages/Index";
import Startups from "./pages/Startups";
import StartupDetail from "./pages/StartupDetail";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/HowItWorks";
import StartupResources from "./pages/StartupResources";
import RaiseCapital from "./pages/RaiseCapital";
import StartupApplication from "./pages/StartupApplication";
import SuccessStories from "./pages/SuccessStories";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Legal from "./pages/Legal";
import InvestmentGuide from "./pages/InvestmentGuide";
import CookiePolicy from "./pages/CookiePolicy";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

// Protected Route component
const ProtectedRoute = ({ element }: { element: React.ReactNode }) => {
  const token = localStorage.getItem("token");
  return token ? <>{element}</> : <Navigate to="/login" />;
};

// Configure React Query client with defaults for better UX
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
      meta: {
        // Error handling can be put in meta
        errorHandler: (error: Error) => {
          console.error("Query error:", error);
        }
      },
    },
    mutations: {
      // Use meta for mutation error handling
      meta: {
        errorHandler: (error: Error) => {
          console.error("Mutation error:", error);
        }
      },
    },
  },
});

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AuthProvider>
            <TooltipProvider>
              {/* Toast notifications - both shadcn and sonner available */}
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  {/* Main public pages */}
                  <Route path="/" element={<Index />} />
                  <Route path="/startups" element={<Startups />} />
                  <Route path="/startups/:id" element={<StartupDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  
                  {/* User authenticated pages */}
                  <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
                  <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
                  <Route path="/portfolio" element={<ProtectedRoute element={<Portfolio />} />} />
                  
                  {/* Startup section pages */}
                  <Route path="/startup-resources" element={<StartupResources />} />
                  <Route path="/raise-capital" element={<RaiseCapital />} />
                  <Route path="/startup-application" element={<ProtectedRoute element={<StartupApplication />} />} />
                  <Route path="/success-stories" element={<SuccessStories />} />
                  <Route path="/investment-guide" element={<InvestmentGuide />} />
                  
                  {/* Company section pages */}
                  <Route path="/team" element={<Team />} />
                  <Route path="/careers" element={<Careers />} />
                  
                  {/* Legal pages */}
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/legal" element={<Legal />} />
                  <Route path="/cookie-policy" element={<CookiePolicy />} />
                  
                  {/* Authentication pages */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/reset-password" element={<ResetPassword />} />
                  
                  {/* Catch-all route for 404 - MUST BE LAST */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
