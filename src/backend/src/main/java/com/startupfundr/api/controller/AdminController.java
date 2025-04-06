package com.startupfundr.api.controller;

import com.startupfundr.api.model.Startup;
import com.startupfundr.api.model.Transaction;
import com.startupfundr.api.model.User;
import com.startupfundr.api.repository.StartupRepository;
import com.startupfundr.api.repository.TransactionRepository;
import com.startupfundr.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private StartupRepository startupRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    // View all startups
    @GetMapping("/startups")
    public List<Startup> getAllStartups() {
        return startupRepository.findAll();
    }

    // View all users
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // View all transactions
    @GetMapping("/transactions")
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }
}
