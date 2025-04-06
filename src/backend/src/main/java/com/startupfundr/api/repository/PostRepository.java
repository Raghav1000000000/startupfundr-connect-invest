package com.startupfundr.api.repository;

import com.startupfundr.api.model.Post;
// import com.startupfundr.api.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface PostRepository extends MongoRepository<Post, Long> {
    List<Post> findByStartupId(String startupId);
    List<Post> findByTitleContainingIgnoreCase(String keyword);
    List<Post> findAllByOrderByCreatedAtDesc();
}
