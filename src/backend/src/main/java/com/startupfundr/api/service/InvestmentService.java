package com.startupfundr.api.service;

import com.startupfundr.api.model.Investment;
import com.startupfundr.api.repository.InvestmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvestmentService {

    private final InvestmentRepository investmentRepository;

    @Autowired
    public InvestmentService(InvestmentRepository investmentRepository) {
        this.investmentRepository = investmentRepository;
    }

    // Save a new investment
    public Investment saveInvestment(Investment investment) {
        return investmentRepository.save(investment);
    }

    // Get all investments
    public List<Investment> getAllInvestments() {
        return investmentRepository.findAll();
    }

    // Get all investments for a specific startup
    public List<Investment> getInvestmentsByStartupId(String startupId) {
        return investmentRepository.findByStartupId(startupId);
    }

    // Get all investments by a specific user
    public List<Investment> getInvestmentsByUserId(String userId) {
        return investmentRepository.findByUserId(userId);
    }
}
