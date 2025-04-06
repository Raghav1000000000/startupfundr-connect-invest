
import api from "./api";
import { User } from "@/types";

interface LoginCredentials {
  email: string;
  password: string;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
  phone?: string;
  userType?: "investor" | "startup";
}

interface AuthResponse {
  token: string;
  user?: User;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await api.post("/auth/login", credentials);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    }
    return response.data;
  },

  async signup(data: SignupData): Promise<AuthResponse> {
    const response = await api.post("/auth/signup", data);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    }
    return response.data;
  },

  async getCurrentUser(): Promise<User | null> {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        return JSON.parse(storedUser);
      }
      
      const token = localStorage.getItem("token");
      if (!token) return null;
      
      // Get current user from backend if we have a token but no user data
      const response = await api.get("/users/current");
      const user = response.data;
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    } catch (error) {
      console.error("Failed to get current user:", error);
      return null;
    }
  },

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  }
};
