
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
@Document(collection = "investments")
public class Investment {
    @Id
    private String id;
    private String userId;
    private String startupId;
    private Double amount;
    private LocalDateTime date;
    private Double equity;
}
