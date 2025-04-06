package com.startupfundr.api.service;

import com.startupfundr.api.model.User;
import com.startupfundr.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WalletService {

    private final UserRepository userRepository;

    @Autowired
    public WalletService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Add funds to user's wallet
    public User addFunds(String userId, double amount) {
        User user = userRepository.findById(userId).orElseThrow();
        user.setWalletBalance(user.getWalletBalance() + amount);
        return userRepository.save(user);
    }

    // Deduct funds for investment
    public User deductFunds(String userId, double amount) {
        User user = userRepository.findById(userId).orElseThrow();
        if (user.getWalletBalance() < amount) {
            throw new IllegalArgumentException("Insufficient balance");
        }
        user.setWalletBalance(user.getWalletBalance() - amount);
        return userRepository.save(user);
    }

    // Get wallet balance
    public double getBalance(String userId) {
        User user = userRepository.findById(userId).orElseThrow();
        return user.getWalletBalance();
    }
}
