package com.startupfundr.api.controller;

// import com.startupfundr.api.dto.InvestmentDTO;
import com.startupfundr.api.model.Investment;
import com.startupfundr.api.service.InvestmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Handles user-to-startup investment logic.
 */
@RestController
@RequestMapping("/api/investments")
public class InvestmentController {

    @Autowired
    private InvestmentService investmentService;

    // User invests in a startup
    @PostMapping
    public Investment investInStartup(@RequestBody Investment investment) {
        return investmentService.saveInvestment(investment);
    }

    // Get all investments by user
    @GetMapping("/user/{userId}")
    public List<Investment> getInvestmentsByUser(@PathVariable String userId) {
        return investmentService.getInvestmentsByUserId(userId);
    }

    // Get all investments by startup
    @GetMapping("/startup/{startupId}")
    public List<Investment> getInvestmentsByStartup(@PathVariable String startupId) {
        return investmentService.getInvestmentsByStartupId(startupId);
    }

    // Get all investments
    @GetMapping
    public List<Investment> getAllInvestments() {
        return investmentService.getAllInvestments();
    }
}
