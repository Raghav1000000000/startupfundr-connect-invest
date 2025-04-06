
package com.startupfundr.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

/**
 * Represents a financial transaction made by a user.
 * Can be deposit, withdrawal, or investment.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "transactions")
public class Transaction {
    @Id
    private String id;
    private String userId;              // Reference to User
    private Double amount;              // Amount of transaction
    private String type;                // "deposit", "withdrawal", "investment"
    private String status;              // "pending", "completed", "failed"
    private LocalDateTime date;         // Timestamp of transaction
    private String reference;           // External payment reference (if any)
}
