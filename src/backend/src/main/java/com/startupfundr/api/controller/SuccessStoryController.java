
package com.startupfundr.api.controller;

import com.startupfundr.api.dto.SuccessStoryDTO;
import com.startupfundr.api.model.SuccessStory;
import com.startupfundr.api.service.SuccessStoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/success-stories")
public class SuccessStoryController {
    private final SuccessStoryService successStoryService;

    @Autowired
    public SuccessStoryController(SuccessStoryService successStoryService) {
        this.successStoryService = successStoryService;
    }

    @GetMapping
    public ResponseEntity<List<SuccessStoryDTO>> getAllSuccessStories() {
        return ResponseEntity.ok(successStoryService.getAllSuccessStoriesDTO());
    }

    @GetMapping("/recent")
    public ResponseEntity<List<SuccessStoryDTO>> getRecentSuccessStories() {
        return ResponseEntity.ok(successStoryService.getRecentSuccessStories());
    }

    @GetMapping("/featured")
    public ResponseEntity<List<SuccessStoryDTO>> getFeaturedSuccessStories() {
        return ResponseEntity.ok(successStoryService.getFeaturedSuccessStories());
    }

    @GetMapping("/{id}")
    public ResponseEntity<SuccessStory> getSuccessStoryById(@PathVariable String id) {
        return successStoryService.getSuccessStoryById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<SuccessStory> createSuccessStory(@RequestBody SuccessStory successStory) {
        successStory.setPublishedAt(LocalDateTime.now());
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(successStoryService.saveSuccessStory(successStory));
    }

    @PutMapping("/{id}")
    public ResponseEntity<SuccessStory> updateSuccessStory(@PathVariable String id, 
                                                           @RequestBody SuccessStory successStory) {
        return successStoryService.getSuccessStoryById(id)
                .map(existingStory -> {
                    successStory.setId(id);
                    return ResponseEntity.ok(successStoryService.saveSuccessStory(successStory));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSuccessStory(@PathVariable String id) {
        return successStoryService.getSuccessStoryById(id)
                .map(story -> {
                    successStoryService.deleteSuccessStory(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
