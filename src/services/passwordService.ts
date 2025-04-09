
import api from "./api";

interface PasswordResetRequest {
  email: string;
}

interface PasswordChangeRequest {
  token: string;
  password: string;
}

export const passwordService = {
  // Request password reset - sends an email with reset link
  async requestReset(email: string): Promise<boolean> {
    try {
      const response = await api.post("/auth/forgot-password", { email });
      return response.data.success;
    } catch (error) {
      console.error("Failed to request password reset:", error);
      throw error;
    }
  },

  // Validate password reset token
  async validateResetToken(token: string): Promise<boolean> {
    try {
      const response = await api.get(`/auth/validate-reset-token?token=${token}`);
      return response.data.valid;
    } catch (error) {
      console.error("Invalid or expired token:", error);
      return false;
    }
  },

  // Reset password with token
  async resetPassword(token: string, password: string): Promise<boolean> {
    try {
      const response = await api.post("/auth/reset-password", { token, password });
      return response.data.success;
    } catch (error) {
      console.error("Failed to reset password:", error);
      throw error;
    }
  }
};
