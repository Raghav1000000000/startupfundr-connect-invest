
package com.startupfundr.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SuccessStoryDTO {
    private String id;
    private String title;
    private String summary;
    private String imageUrl;
    private String industry;
    private Integer foundedYear;
    private Double raisedAmount;
    private Integer investors;
    private Integer campaignDays;
}
