
package com.startupfundr.api.controller;

import com.startupfundr.api.service.PasswordResetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api/auth")
public class PasswordController {

    @Autowired
    private PasswordResetService passwordResetService;

    // Request a password reset
    @PostMapping("/forgot-password")
    public ResponseEntity<Map<String, Object>> forgotPassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        boolean success = passwordResetService.generateResetToken(email);
        
        Map<String, Object> response = new HashMap<>();
        response.put("success", success);
        response.put("message", success ? 
                     "If an account exists with this email, a password reset link has been sent" : 
                     "Failed to process request");
        
        return ResponseEntity.ok(response);
    }

    // Validate password reset token
    @GetMapping("/validate-reset-token")
    public ResponseEntity<Map<String, Object>> validateToken(@RequestParam String token) {
        boolean isValid = passwordResetService.validateResetToken(token);
        
        Map<String, Object> response = new HashMap<>();
        response.put("valid", isValid);
        
        return ResponseEntity.ok(response);
    }

    // Reset password using token
    @PostMapping("/reset-password")
    public ResponseEntity<Map<String, Object>> resetPassword(@RequestBody Map<String, String> request) {
        String token = request.get("token");
        String password = request.get("password");
        
        boolean success = passwordResetService.resetPassword(token, password);
        
        Map<String, Object> response = new HashMap<>();
        response.put("success", success);
        response.put("message", success ? "Password has been reset successfully" : "Failed to reset password");
        
        return ResponseEntity.ok(response);
    }
}
