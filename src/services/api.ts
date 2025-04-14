
import axios from "axios";
import { toast } from "@/components/ui/use-toast";

// Determine the base URL based on the environment
const getBaseUrl = () => {
  // Check if running in production
  const isProd = process.env.NODE_ENV === 'production';
  // Check if running in Lovable preview
  const isLovablePreview = window.location.hostname.includes('lovable.app');
  
  // Use a mock API URL when in preview mode
  if (isLovablePreview) {
    return "/api"; // This will be served by the mock API or relative path
  }
  
  // Use environment variable for production
  if (isProd) {
    // In real production, this would be set via environment variables
    // For now, we'll use the actual production URL
    return "https://api.startupfundr.com/api";
  }
  
  // Default to localhost for development
  return "http://localhost:8081/api";
};

// Create axios instance with base URL and default headers
const api = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
  // Adding timeout to prevent hanging requests
  timeout: 10000,
});

// Request interceptor to add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Don't flood the console in production
    if (process.env.NODE_ENV !== 'production') {
      console.error("API Error:", error);
    }
    
    // Handle connection refused errors
    if (!error.response) {
      console.error("Network error: Backend connection failed");
      
      toast({
        title: "Connection Error",
        description: "Unable to connect to the server. Please check your internet connection and try again.",
        variant: "destructive",
      });
    }
    
    // Handle 401 Unauthorized errors by logging out the user
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      
      toast({
        title: "Session Expired",
        description: "Your session has expired. Please log in again.",
        variant: "destructive",
      });
      
      window.location.href = "/login";
    }
    
    // Handle 403 Forbidden errors
    if (error.response && error.response.status === 403) {
      toast({
        title: "Access Denied",
        description: "You don't have permission to perform this action.",
        variant: "destructive",
      });
    }
    
    // Handle 404 Not Found errors
    if (error.response && error.response.status === 404) {
      toast({
        title: "Resource Not Found",
        description: "The requested resource could not be found.",
        variant: "destructive",
      });
    }
    
    // Handle 500 and other server errors
    if (error.response && error.response.status >= 500) {
      toast({
        title: "Server Error",
        description: "There was a problem with the server. Please try again later.",
        variant: "destructive",
      });
    }
    
    // Handle other status codes with appropriate messages
    if (error.response && error.response.data && error.response.data.message) {
      console.error(`Server error message: ${error.response.data.message}`);
    }
    
    return Promise.reject(error);
  }
);

export default api;
