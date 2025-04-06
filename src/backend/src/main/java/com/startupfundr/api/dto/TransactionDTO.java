package com.startupfundr.api.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class TransactionDTO {
    private String id;
    private String userId;
    private Double amount;
    private String type;
    private String status;
    private LocalDateTime date;
    private String reference;
}
