
package com.startupfundr.api.dto;

import lombok.Data;

@Data
public class AuthResponse {
    private String token;
    private UserDTO user;
    private String error;
    private boolean success;
    
    public AuthResponse(String tokenOrError) {
        if (tokenOrError.startsWith("User") || tokenOrError.startsWith("Invalid")) {
            this.error = tokenOrError;
            this.success = false;
        } else {
            this.token = tokenOrError;
            this.success = true;
        }
    }
}
