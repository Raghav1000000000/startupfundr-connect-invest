
package com.startupfundr.api.service;

import com.startupfundr.api.model.User;
import com.startupfundr.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.Optional;

@Service
public class PasswordResetService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    
    // Simulating a token storage - in production, this should be in a database
    private final Map<String, ResetTokenInfo> resetTokens = new HashMap<>();
    
    // Token expiration time in minutes
    @Value("${reset.token.expiration:30}")
    private int tokenExpirationMinutes;
    
    // Generate and store a password reset token for the given email
    public boolean generateResetToken(String email) {
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            // We return true even if user doesn't exist to prevent user enumeration attacks
            return true;
        }
        
        try {
            // Generate token
            String token = UUID.randomUUID().toString();
            LocalDateTime expiryTime = LocalDateTime.now().plusMinutes(tokenExpirationMinutes);
            
            // Store token with user info and expiry time
            resetTokens.put(token, new ResetTokenInfo(email, expiryTime));
            
            // In a real application, we would send an email here with the reset link
            // EmailService.sendResetEmail(email, token);
            
            // For development, log the token
            System.out.println("Reset token for " + email + ": " + token);
            
            return true;
        } catch (Exception e) {
            System.err.println("Failed to generate reset token: " + e.getMessage());
            return false;
        }
    }
    
    // Validate if a token is valid and not expired
    public boolean validateResetToken(String token) {
        ResetTokenInfo tokenInfo = resetTokens.get(token);
        if (tokenInfo == null) {
            return false;
        }
        
        // Check if token is expired
        return !tokenInfo.expiryTime.isBefore(LocalDateTime.now());
    }
    
    // Reset password using a valid token
    public boolean resetPassword(String token, String newPassword) {
        ResetTokenInfo tokenInfo = resetTokens.get(token);
        if (tokenInfo == null || tokenInfo.expiryTime.isBefore(LocalDateTime.now())) {
            return false;
        }
        
        try {
            // Find user by email
            Optional<User> userOpt = userRepository.findByEmail(tokenInfo.email);
            if (userOpt.isEmpty()) {
                return false;
            }
            
            // Update password
            User user = userOpt.get();
            user.setPassword(passwordEncoder.encode(newPassword));
            userRepository.save(user);
            
            // Remove used token
            resetTokens.remove(token);
            
            return true;
        } catch (Exception e) {
            System.err.println("Failed to reset password: " + e.getMessage());
            return false;
        }
    }
    
    // Helper class to store token information
    private static class ResetTokenInfo {
        private final String email;
        private final LocalDateTime expiryTime;
        
        public ResetTokenInfo(String email, LocalDateTime expiryTime) {
            this.email = email;
            this.expiryTime = expiryTime;
        }
    }
}
