
package com.startupfundr.api.repository;

import com.startupfundr.api.model.Startup;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface StartupRepository extends MongoRepository<Startup, String> {
    List<Startup> findByFeaturedTrue();
    List<Startup> findByIndustry(String industry);
}
