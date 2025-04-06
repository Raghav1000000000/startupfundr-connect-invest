package com.startupfundr.api.dto;

import lombok.Data;

/**
 * DTO for sending or receiving startup public profile data.
 */
@Data
public class StartupDTO {
    private String id;
    private String name;
    private String description;
    private String logoUrl;
    private String industry;
    private String location;
    private String website;
}
