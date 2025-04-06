
package com.startupfundr.api.exception;

import java.time.LocalDateTime;

import lombok.Data;

/**
 * Standardized error response object for API errors.
 */
@Data
public class ErrorResponse {
    private int status;
    private String message;
    private String details;
    private LocalDateTime timestamp;
    
    public ErrorResponse(int status, String message, String details) {
        this.status = status;
        this.message = message;
        this.details = details;
        this.timestamp = LocalDateTime.now();
    }
}
