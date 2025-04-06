package com.startupfundr.api.controller;

import com.startupfundr.api.dto.UserDTO;
import com.startupfundr.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for managing user profile, fetch, and updates.
 */
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    // Get user profile by ID
    @GetMapping("/{id}")
    public UserDTO getUserProfile(@PathVariable String id) {
        return userService.getUserById(id);
    }

    // Get all users
    @GetMapping
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    // Update user profile
    @PutMapping("/{id}")
    public UserDTO updateUser(@PathVariable String id, @RequestBody UserDTO userDTO) {
        return userService.updateUser(id, userDTO);
    }
}
