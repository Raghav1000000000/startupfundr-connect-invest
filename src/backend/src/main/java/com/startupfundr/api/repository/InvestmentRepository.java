
package com.startupfundr.api.repository;

import com.startupfundr.api.model.Investment;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface InvestmentRepository extends MongoRepository<Investment, String> {
    List<Investment> findByUserId(String userId);
    List<Investment> findByStartupId(String startupId);
}
