package com.startupfundr.api.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class PostDTO {
    private String id;
    private String startupId;
    private String title;
    private String content;
    private LocalDateTime createdAt;
}
