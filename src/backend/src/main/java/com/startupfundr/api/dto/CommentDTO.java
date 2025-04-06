package com.startupfundr.api.dto;

import com.startupfundr.api.model.Comment; // ✅ REQUIRED!
import lombok.Data;

import java.time.LocalDateTime;

/**
 * DTO for posting and displaying comments.
 */
@Data
public class CommentDTO {
    private String id;
    private String postId;
    private String userId;
    private String text;
    private LocalDateTime createdAt;

    // ✅ Constructor to convert from Comment model to DTO
    public CommentDTO(Comment comment) {
        this.id = comment.getId();
        this.postId = comment.getPostId();
        this.userId = comment.getUserId();
        this.text = comment.getContent();
        this.createdAt = comment.getDate();
    }
}
