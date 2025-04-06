package com.startupfundr.api.service;

import com.startupfundr.api.dto.UserDTO;
import com.startupfundr.api.model.User;
import com.startupfundr.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

 // Convert Entity to DTO
 private UserDTO convertToDTO(User user) {
    UserDTO dto = new UserDTO();
    dto.setId(user.getId());
    dto.setName(user.getName());
    dto.setEmail(user.getEmail());
    dto.setPhone(user.getPhone());
    dto.setProfilePicUrl(user.getProfilePicUrl());
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
        return userRepository.save(user);
    }

    // Update user by ID
    public UserDTO updateUser(String id, UserDTO userDTO) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setName(userDTO.getName());
            user.setEmail(userDTO.getEmail());
            user.setPhone(userDTO.getPhone());
            user.setProfilePicUrl(userDTO.getProfilePicUrl());
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
