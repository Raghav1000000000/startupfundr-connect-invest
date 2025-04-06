package com.startupfundr.api.dto;

import lombok.Data;

/**
 * DTO for sending or receiving user data.
 */
@Data
public class UserDTO {
    private String id;
    private String name;
    private String email;
    private String phone;
    private String profilePicUrl;
    private String password;
}
