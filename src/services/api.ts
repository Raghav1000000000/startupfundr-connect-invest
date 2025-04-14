
import axios from "axios";

// Determine the base URL based on the environment
const getBaseUrl = () => {
  // Check if running in Lovable preview
  const isLovablePreview = window.location.hostname.includes('lovable.app');
  
  // Use a mock API URL when in preview mode
  if (isLovablePreview) {
    return "/api"; // This will be served by the mock API or relative path
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
    console.error("API Error:", error);
    
    // Handle 401 Unauthorized errors by logging out the user
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
