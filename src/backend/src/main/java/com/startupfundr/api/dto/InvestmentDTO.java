package com.startupfundr.api.dto;

import lombok.Data;

import java.time.LocalDateTime;

/**
 * DTO for investment requests or responses.
 */
@Data
public class InvestmentDTO {
    private String id;
    private String userId;
    private String startupId;
    private Double amount;
    private Double equity;
    private LocalDateTime date;
}
