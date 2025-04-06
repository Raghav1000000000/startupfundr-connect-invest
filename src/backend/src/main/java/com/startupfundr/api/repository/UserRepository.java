package com.startupfundr.api.repository;

import com.startupfundr.api.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    // ✅ Find user by email (useful for login or checking duplicates)
    Optional<User> findByEmail(String email);

    // ✅ Check if a user exists by email (good for validation)
    boolean existsByEmail(String email);

    // ✅ Find all users with a specific name
    List<User> findByName(String name);

    // ✅ Find users whose name contains a substring (case-insensitive)
    List<User> findByNameContainingIgnoreCase(String name);

    // ✅ Find users who have a non-zero wallet balance
    List<User> findByWalletBalanceGreaterThan(Double amount);

    // ✅ Find all users sorted by wallet balance (descending)
    List<User> findAllByOrderByWalletBalanceDesc();

    // ✅ Find users who invested in a specific startup (based on startupId inside Investment list)
    List<User> findByInvestments_StartupId(String startupId);

}
