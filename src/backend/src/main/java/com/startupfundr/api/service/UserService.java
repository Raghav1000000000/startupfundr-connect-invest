
package com.startupfundr.api.service;

import com.startupfundr.api.dto.UserDTO;
import com.startupfundr.api.model.User;
import com.startupfundr.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    // Convert Entity to DTO
    private UserDTO convertToDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setName(user.getName());
        dto.setEmail(user.getEmail());
        dto.setPhone(user.getPhone());
        dto.setProfilePicUrl(user.getProfilePicUrl());
        dto.setWalletBalance(user.getWalletBalance());
        return dto;
    }

    // Convert DTO to Entity
    private User convertToEntity(UserDTO dto) {
        User user = new User();
        user.setId(dto.getId());
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPhone(dto.getPhone());
        user.setProfilePicUrl(dto.getProfilePicUrl());
        if (dto.getWalletBalance() != null) {
            user.setWalletBalance(dto.getWalletBalance());
        } else {
            user.setWalletBalance(0.0); // Default wallet balance
        }
        if (dto.getPassword() != null && !dto.getPassword().isEmpty()) {
            user.setPassword(passwordEncoder.encode(dto.getPassword()));
        }
        return user;
    }

    // Get all users as DTOs
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    // Get user by ID as DTO
    public UserDTO getUserById(String id) {
        Optional<User> optionalUser = userRepository.findById(id);
        return optionalUser.map(this::convertToDTO).orElse(null);
    }

    // Save or update a user
    public User saveUser(User user) {
        if (user.getWalletBalance() == null) {
            user.setWalletBalance(0.0); // Ensure wallet balance exists
        }
        return userRepository.save(user);
    }

    // Create new user from DTO
    public UserDTO createUser(UserDTO userDTO) {
        if (existsByEmail(userDTO.getEmail())) {
            throw new IllegalArgumentException("Email already exists");
        }
        
        User user = convertToEntity(userDTO);
        user.setWalletBalance(0.0); // Initialize wallet
        if (userDTO.getPassword() != null) {
            user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        }
        
        User savedUser = userRepository.save(user);
        return convertToDTO(savedUser);
    }

    // Update user by ID
    public UserDTO updateUser(String id, UserDTO userDTO) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            
            // Only update fields that are provided
            if (userDTO.getName() != null) user.setName(userDTO.getName());
            if (userDTO.getEmail() != null) user.setEmail(userDTO.getEmail());
            if (userDTO.getPhone() != null) user.setPhone(userDTO.getPhone());
            if (userDTO.getProfilePicUrl() != null) user.setProfilePicUrl(userDTO.getProfilePicUrl());
            if (userDTO.getWalletBalance() != null) user.setWalletBalance(userDTO.getWalletBalance());
            
            User updatedUser = userRepository.save(user);
            return convertToDTO(updatedUser);
        }
        return null;
    }

    // Delete user by ID
    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }

    // Get user by email
    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    // Check if user exists by email
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }
}
