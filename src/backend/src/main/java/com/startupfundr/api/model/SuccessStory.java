
package com.startupfundr.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "success_stories")
public class SuccessStory {
    @Id
    private String id;
    private String startupId;
    private String title;
    private String summary;
    private String content;
    private String industry;
    private String imageUrl;
    private Double raisedAmount;
    private Integer investors;
    private Integer campaignDays;
    private Integer foundedYear;
    private LocalDateTime publishedAt;
    private Boolean featured;
}
