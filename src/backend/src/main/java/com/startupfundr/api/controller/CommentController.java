package com.startupfundr.api.controller;

import com.startupfundr.api.dto.CommentDTO;
import com.startupfundr.api.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller to handle user comments on startup posts.
 */
@RestController
@RequestMapping("/api/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    // Add a comment to a post
    @PostMapping
    public CommentDTO addComment(@RequestBody CommentDTO commentDTO) {
        return commentService.addComment(commentDTO);
    }

    // Get all comments for a post
    @GetMapping("/post/{postId}")
    public List<CommentDTO> getCommentsForPost(@PathVariable String postId) {
        return commentService.getCommentsForPost(postId);
    }

    // Delete a comment
    @DeleteMapping("/{commentId}")
    public void deleteComment(@PathVariable String commentId) {
        commentService.deleteComment(commentId);
    }
}
