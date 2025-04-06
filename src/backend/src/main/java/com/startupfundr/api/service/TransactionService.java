package com.startupfundr.api.service;

import com.startupfundr.api.model.Transaction;
import com.startupfundr.api.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;

    @Autowired
    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public List<Transaction> getUserTransactions(String userId) {
        return transactionRepository.findByUserId(userId);
    }

    public Transaction createTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }
}
