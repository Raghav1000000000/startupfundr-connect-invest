
package com.startupfundr.api.controller;

import com.startupfundr.api.dto.UserDTO;
import com.startupfundr.api.service.AuthService;
import com.startupfundr.api.dto.AuthResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Handles authentication: login and signup.
 */
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    // User login
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(authService.login(userDTO));
    }

    // User signup
    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> signup(@RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(authService.signup(userDTO));
    }
    
    // Validate token
    @GetMapping("/validate")
    public ResponseEntity<Boolean> validateToken(@RequestHeader("Authorization") String authHeader) {
        // Extract token from header
        String token = authHeader.substring(7); // Remove "Bearer " prefix
        boolean isValid = authService.validateToken(token);
        return ResponseEntity.ok(isValid);
    }
}
