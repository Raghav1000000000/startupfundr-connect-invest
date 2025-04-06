package com.startupfundr.api.service;

import com.startupfundr.api.dto.PostDTO;
import com.startupfundr.api.model.Post;
import com.startupfundr.api.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    // Create post
    public PostDTO createPost(PostDTO postDTO) {
        Post post = new Post();
        post.setTitle(postDTO.getTitle());
        post.setContent(postDTO.getContent());
        post.setStartupId(postDTO.getStartupId());
        post.setCreatedAt(LocalDateTime.now());

        Post savedPost = postRepository.save(post);

        postDTO.setId(savedPost.getId());
        postDTO.setCreatedAt(savedPost.getCreatedAt());
        return postDTO;
    }

    // Get posts by startup
    public List<PostDTO> getPostsByStartup(String startupId) {
        List<Post> posts = postRepository.findByStartupId(startupId);
        return posts.stream().map(post -> {
            PostDTO dto = new PostDTO();
            dto.setId(post.getId());
            dto.setTitle(post.getTitle());
            dto.setContent(post.getContent());
            dto.setStartupId(post.getStartupId());
            dto.setCreatedAt(post.getCreatedAt());
            return dto;
        }).collect(Collectors.toList());
    }
}
