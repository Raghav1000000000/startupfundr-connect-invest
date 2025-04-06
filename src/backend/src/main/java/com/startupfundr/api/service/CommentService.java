package com.startupfundr.api.service;

import com.startupfundr.api.dto.CommentDTO;
import com.startupfundr.api.model.Comment;
import com.startupfundr.api.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Service to manage comments on startup posts.
 */
@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    // Save a new comment
    public CommentDTO addComment(CommentDTO dto) {
        Comment comment = new Comment(dto);
        commentRepository.save(comment);
        return new CommentDTO(comment);
    }

    // Get all comments for a specific post
    public List<CommentDTO> getCommentsForPost(String postId) {
        return commentRepository.findByPostId(postId)
                .stream()
                .map(CommentDTO::new)
                .collect(Collectors.toList());
    }

    // Delete a comment by ID
    public void deleteComment(String commentId) {
        commentRepository.deleteById(commentId);
    }
}
