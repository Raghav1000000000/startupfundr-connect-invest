package com.startupfundr.api.repository;

import com.startupfundr.api.model.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface CommentRepository extends MongoRepository<Comment, String> {
    
    // Get comments by post ID
    List<Comment> findByPostId(String postId);
}
