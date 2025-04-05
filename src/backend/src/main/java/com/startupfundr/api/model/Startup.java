
package com.startupfundr.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "startups")
public class Startup {
    @Id
    private String id;
    private String name;
    private String logoUrl;
    private String tagline;
    private String description;
    private String industry;
    private String location;
    private Integer foundedYear;
    private String founderName;
    private Double askAmount;
    private Double raisedAmount;
    private Integer investors;
    private Double equity;
    private String pitchDeck;
    private String website;
    private Integer teamSize;
    private Boolean featured;
}
