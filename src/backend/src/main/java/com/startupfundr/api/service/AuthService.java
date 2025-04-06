package com.startupfundr.api.service;

import com.startupfundr.api.dto.UserDTO;
import com.startupfundr.api.model.User;
import com.startupfundr.api.repository.UserRepository;
import com.startupfundr.api.util.JwtUtil;
import com.startupfundr.api.dto.AuthResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    // Login logic: Validate user credentials and generate a JWT token
    public AuthResponse login(UserDTO userDTO) {
        Optional<User> userOpt = userRepository.findByEmail(userDTO.getEmail());

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            if (passwordEncoder.matches(userDTO.getPassword(), user.getPassword())) {
                // Return the token in a structured response
                String token = jwtUtil.generateToken(user.getEmail());
                return new AuthResponse(token);
            } else {
                // Return an error message in a structured response
                return new AuthResponse("Invalid password");
            }
        } else {
            // Return an error message in a structured response
            return new AuthResponse("User not found. Please sign up first.");
        }
    }

    // Signup logic: Create a new user and generate a JWT token
    public AuthResponse signup(UserDTO userDTO) {
        if (userRepository.existsByEmail(userDTO.getEmail())) {
            // Return an error message if the user already exists
            return new AuthResponse("User already exists with this email.");
        }

        // Create a new user, hash the password, and save it
        User user = new User();
        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPhone(userDTO.getPhone());
        user.setProfilePicUrl(userDTO.getProfilePicUrl());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword())); // hash password

        userRepository.save(user);
        
        // Return the token in a structured response
        String token = jwtUtil.generateToken(user.getEmail());
        return new AuthResponse(token);
    }
}
