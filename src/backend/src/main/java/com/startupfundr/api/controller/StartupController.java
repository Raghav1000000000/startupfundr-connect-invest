
package com.startupfundr.api.controller;

import com.startupfundr.api.model.Startup;
import com.startupfundr.api.service.StartupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/startups")
public class StartupController {
    private final StartupService startupService;

    @Autowired
    public StartupController(StartupService startupService) {
        this.startupService = startupService;
    }

    @GetMapping
    public ResponseEntity<List<Startup>> getAllStartups() {
        return ResponseEntity.ok(startupService.getAllStartups());
    }

    @GetMapping("/featured")
    public ResponseEntity<List<Startup>> getFeaturedStartups() {
        return ResponseEntity.ok(startupService.getFeaturedStartups());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Startup> getStartupById(@PathVariable String id) {
        return startupService.getStartupById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/industry/{industry}")
    public ResponseEntity<List<Startup>> getStartupsByIndustry(@PathVariable String industry) {
        return ResponseEntity.ok(startupService.getStartupsByIndustry(industry));
    }

    @PostMapping
    public ResponseEntity<Startup> createStartup(@RequestBody Startup startup) {
        return ResponseEntity.status(HttpStatus.CREATED).body(startupService.saveStartup(startup));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Startup> updateStartup(@PathVariable String id, @RequestBody Startup startup) {
        return startupService.getStartupById(id)
                .map(existingStartup -> {
                    startup.setId(id);
                    return ResponseEntity.ok(startupService.saveStartup(startup));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStartup(@PathVariable String id) {
        return startupService.getStartupById(id)
                .map(startup -> {
                    startupService.deleteStartup(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
