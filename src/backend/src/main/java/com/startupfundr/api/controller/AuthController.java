package com.startupfundr.api.controller;

import com.startupfundr.api.dto.UserDTO;
import com.startupfundr.api.service.AuthService;
import com.startupfundr.api.dto.AuthResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Handles authentication: login and signup.
 */
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    // User login
    @PostMapping("/login")
    public AuthResponse login(@RequestBody UserDTO userDTO) {
        return authService.login(userDTO);
    }

    // User signup
    @PostMapping("/signup")
    public AuthResponse signup(@RequestBody UserDTO userDTO) {
        return authService.signup(userDTO);
    }
}
