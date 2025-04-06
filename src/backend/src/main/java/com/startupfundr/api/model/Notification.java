package com.startupfundr.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

/**
 * Represents a notification sent to a user about an event.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "notifications")
public class Notification {
    @Id
    private String id;
    private String userId;              // Target user
    private String type;                // "investment", "update", "milestone", etc.
    private String title;               // Short title
    private String content;             // Detailed content
    private LocalDateTime date;         // Notification timestamp
    private Boolean read;               // Read status
    private String relatedId;           // ID of related entity
    private String relatedType;         // Type of related entity (post, startup, etc.)
}
