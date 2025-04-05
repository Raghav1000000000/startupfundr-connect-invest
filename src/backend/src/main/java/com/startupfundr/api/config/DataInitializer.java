
package com.startupfundr.api.config;

import com.startupfundr.api.model.Startup;
import com.startupfundr.api.model.SuccessStory;
import com.startupfundr.api.repository.StartupRepository;
import com.startupfundr.api.repository.SuccessStoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Arrays;

@Component
public class DataInitializer implements CommandLineRunner {

    private final StartupRepository startupRepository;
    private final SuccessStoryRepository successStoryRepository;

    @Autowired
    public DataInitializer(StartupRepository startupRepository, SuccessStoryRepository successStoryRepository) {
        this.startupRepository = startupRepository;
        this.successStoryRepository = successStoryRepository;
    }

    @Override
    public void run(String... args) {
        // Only initialize if data doesn't exist
        if (startupRepository.count() == 0) {
            initializeStartups();
        }
        
        if (successStoryRepository.count() == 0) {
            initializeSuccessStories();
        }
    }

    private void initializeStartups() {
        Startup ecotech = new Startup(
            null,
            "EcoTech Solutions",
            "https://images.unsplash.com/photo-1560179707-f14e90ef3603",
            "Revolutionary battery technology for sustainable energy",
            "EcoTech Solutions developed an innovative battery technology that improves energy storage efficiency by 40%.",
            "CleanTech",
            "San Francisco, CA",
            2020,
            "Emily Chen",
            3000000.0,
            2500000.0,
            87,
            12.5,
            "https://ecotechsolutions.com/pitchdeck.pdf",
            "https://ecotechsolutions.com",
            15,
            true
        );
        
        Startup medisync = new Startup(
            null,
            "MediSync",
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
            "Streamlining healthcare communication",
            "MediSync created a platform that streamlines communication between healthcare providers for better patient outcomes.",
            "HealthTech",
            "Boston, MA",
            2021,
            "Dr. James Wilson",
            2500000.0,
            1800000.0,
            64,
            10.0,
            "https://medisync.health/pitchdeck.pdf",
            "https://medisync.health",
            12,
            true
        );
        
        Startup edulearn = new Startup(
            null,
            "EduLearn",
            "https://images.unsplash.com/photo-1594312915251-48db9280c8f1",
            "AI-powered personalized education",
            "EduLearn developed an AI-powered platform that personalizes education for K-12 students.",
            "EdTech",
            "Austin, TX",
            2019,
            "Michael Torres",
            4000000.0,
            3200000.0,
            112,
            15.0,
            "https://edulearn.io/pitchdeck.pdf",
            "https://edulearn.io",
            20,
            true
        );
        
        startupRepository.saveAll(Arrays.asList(ecotech, medisync, edulearn));
    }
    
    private void initializeSuccessStories() {
        SuccessStory ecoTechStory = new SuccessStory(
            null,
            "1", // This would be a real startup ID in production
            "EcoTech Solutions: $2.5M Raised for Sustainable Energy Storage",
            "EcoTech Solutions developed an innovative battery technology that improves energy storage efficiency by 40%.",
            "EcoTech Solutions began with a mission to revolutionize energy storage for renewable sources. " +
            "Founded by Emily Chen, a former Tesla engineer, the company developed a new type of battery that " +
            "uses sustainable materials and improves energy storage efficiency by 40% compared to traditional " +
            "lithium-ion batteries.\n\n" +
            "Through StartupFundr, they were able to connect with investors who shared their vision for a " +
            "sustainable future. In just 45 days, they raised $2.5M from 87 investors, allowing them to " +
            "scale production and secure partnerships with major solar panel manufacturers.",
            "CleanTech",
            "https://images.unsplash.com/photo-1606857521015-7f9fcf423740",
            2500000.0,
            87,
            45,
            2020,
            LocalDateTime.now().minusMonths(2),
            true
        );
        
        SuccessStory mediSyncStory = new SuccessStory(
            null,
            "2", // This would be a real startup ID in production
            "MediSync: $1.8M to Revolutionize Patient Care Coordination",
            "MediSync created a platform that streamlines communication between healthcare providers for better patient outcomes.",
            "Dr. James Wilson witnessed firsthand the communication challenges in healthcare that led to delays " +
            "in patient care. He founded MediSync to create a secure platform that allows different healthcare " +
            "providers to share patient information seamlessly.\n\n" +
            "Their StartupFundr campaign attracted attention from both individual investors and healthcare " +
            "professionals who understood the problem they were solving. Within 60 days, they raised $1.8M " +
            "from 64 investors, which enabled them to expand their team and accelerate adoption across hospitals " +
            "nationwide.",
            "HealthTech",
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
            1800000.0,
            64,
            60,
            2021,
            LocalDateTime.now().minusMonths(1),
            true
        );
        
        SuccessStory eduLearnStory = new SuccessStory(
            null,
            "3", // This would be a real startup ID in production
            "EduLearn: $3.2M for AI-Powered Learning Platform",
            "EduLearn developed an AI-powered platform that personalizes education for K-12 students.",
            "EduLearn was founded by Michael Torres, a former teacher who saw how one-size-fits-all education " +
            "was failing many students. He assembled a team of educators and AI specialists to create a platform " +
            "that adapts to each student's learning style and pace.\n\n" +
            "Their StartupFundr campaign generated enormous interest, particularly from investors with backgrounds " +
            "in education. They raised $3.2M in just 30 days from 112 investors, which has allowed them to refine " +
            "their AI algorithms and expand to international markets.",
            "EdTech",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
            3200000.0,
            112,
            30,
            2019,
            LocalDateTime.now().minusWeeks(2),
            true
        );
        
        successStoryRepository.saveAll(Arrays.asList(ecoTechStory, mediSyncStory, eduLearnStory));
    }
}
