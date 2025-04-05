
package com.startupfundr.api.repository;

import com.startupfundr.api.model.SuccessStory;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface SuccessStoryRepository extends MongoRepository<SuccessStory, String> {
    List<SuccessStory> findByFeaturedTrue();
    List<SuccessStory> findByIndustry(String industry);
    List<SuccessStory> findTop3ByOrderByPublishedAtDesc();
}
