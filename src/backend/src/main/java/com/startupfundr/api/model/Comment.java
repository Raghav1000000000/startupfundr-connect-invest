package com.startupfundr.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.startupfundr.api.dto.CommentDTO;

import java.time.LocalDateTime;

/**
 * Represents a comment made by a user on a post.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "comments")
public class Comment {
    @Id
    private String id;
    private String userId;              // Reference to User
    private String postId;              // Reference to Post
    private String content;             // Comment text
    private LocalDateTime date;         // When it was commented
    public Comment(CommentDTO dto) {
        this.id = dto.getId();
        this.postId = dto.getPostId();
        this.userId = dto.getUserId();
        this.content = dto.getText();           // mapped from "text"
        this.date = dto.getCreatedAt();         // mapped from "createdAt"
    }
}
