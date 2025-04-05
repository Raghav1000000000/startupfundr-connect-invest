
package com.startupfundr.api.service;

import com.startupfundr.api.dto.SuccessStoryDTO;
import com.startupfundr.api.model.SuccessStory;
import com.startupfundr.api.repository.SuccessStoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SuccessStoryService {
    private final SuccessStoryRepository successStoryRepository;

    @Autowired
    public SuccessStoryService(SuccessStoryRepository successStoryRepository) {
        this.successStoryRepository = successStoryRepository;
    }

    public List<SuccessStory> getAllSuccessStories() {
        return successStoryRepository.findAll();
    }

    public List<SuccessStoryDTO> getAllSuccessStoriesDTO() {
        return successStoryRepository.findAll()
            .stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }

    public List<SuccessStoryDTO> getRecentSuccessStories() {
        return successStoryRepository.findTop3ByOrderByPublishedAtDesc()
            .stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }

    public List<SuccessStoryDTO> getFeaturedSuccessStories() {
        return successStoryRepository.findByFeaturedTrue()
            .stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }

    public Optional<SuccessStory> getSuccessStoryById(String id) {
        return successStoryRepository.findById(id);
    }

    public SuccessStory saveSuccessStory(SuccessStory successStory) {
        return successStoryRepository.save(successStory);
    }

    public void deleteSuccessStory(String id) {
        successStoryRepository.deleteById(id);
    }

    private SuccessStoryDTO convertToDTO(SuccessStory successStory) {
        return new SuccessStoryDTO(
            successStory.getId(),
            successStory.getTitle(),
            successStory.getSummary(),
            successStory.getImageUrl(),
            successStory.getIndustry(),
            successStory.getFoundedYear(),
            successStory.getRaisedAmount(),
            successStory.getInvestors(),
            successStory.getCampaignDays()
        );
    }
}
