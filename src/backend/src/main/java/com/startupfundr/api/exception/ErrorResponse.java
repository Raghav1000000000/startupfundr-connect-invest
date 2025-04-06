
package com.startupfundr.api.exception;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

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
    private List<String> stackTrace;
    
    public ErrorResponse(int status, String message, String details) {
        this.status = status;
        this.message = message;
        this.details = details;
        this.timestamp = LocalDateTime.now();
        this.stackTrace = new ArrayList<>();
    }
    
    public ErrorResponse(int status, String message, String details, List<String> stackTrace) {
        this(status, message, details);
        this.stackTrace = stackTrace;
    }
    
    public void addTraceElement(String trace) {
        if (this.stackTrace == null) {
            this.stackTrace = new ArrayList<>();
        }
        this.stackTrace.add(trace);
    }
}
