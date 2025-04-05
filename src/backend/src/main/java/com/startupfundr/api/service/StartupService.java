
package com.startupfundr.api.service;

import com.startupfundr.api.model.Startup;
import com.startupfundr.api.repository.StartupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class StartupService {
    private final StartupRepository startupRepository;

    @Autowired
    public StartupService(StartupRepository startupRepository) {
        this.startupRepository = startupRepository;
    }

    public List<Startup> getAllStartups() {
        return startupRepository.findAll();
    }

    public List<Startup> getFeaturedStartups() {
        return startupRepository.findByFeaturedTrue();
    }

    public Optional<Startup> getStartupById(String id) {
        return startupRepository.findById(id);
    }

    public List<Startup> getStartupsByIndustry(String industry) {
        return startupRepository.findByIndustry(industry);
    }

    public Startup saveStartup(Startup startup) {
        return startupRepository.save(startup);
    }

    public void deleteStartup(String id) {
        startupRepository.deleteById(id);
    }
}
