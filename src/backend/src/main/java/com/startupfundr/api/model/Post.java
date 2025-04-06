package com.startupfundr.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

/**
 * Represents a post or update made by a startup.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "posts")
public class Post {
    @Id
    private String id;
    private String startupId;           // Reference to Startup
    private String title;               // Post title
    private String content;             // Body/content of the post
    private String imageUrl;            // Optional image URL
    private LocalDateTime createdAt;         // When it was posted
    private Integer likes;              // Number of likes
    private Integer comments;           // Number of comments
    private LocalDateTime updatedAt;
    
}
