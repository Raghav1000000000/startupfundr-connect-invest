package com.startupfundr.api.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class NotificationDTO {
    private String id;
    private String userId;
    private String type;
    private String title;
    private String content;
    private String relatedId;
    private String relatedType;
    private boolean read;
    private LocalDateTime date;
}
