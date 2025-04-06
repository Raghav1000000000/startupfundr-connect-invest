package com.startupfundr.api.controller;

import com.startupfundr.api.dto.PostDTO;
import com.startupfundr.api.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller to manage startup posts.
 */
@RestController
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostService postService;

    // Create a new post
    @PostMapping
    public PostDTO createPost(@RequestBody PostDTO postDTO) {
        return postService.createPost(postDTO);
    }

    // Get all posts by a startup
    @GetMapping("/startup/{startupId}")
    public List<PostDTO> getPostsByStartup(@PathVariable String startupId) {
        return postService.getPostsByStartup(startupId);
    }
}
