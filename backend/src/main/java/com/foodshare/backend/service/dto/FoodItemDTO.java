package com.foodshare.backend.service.dto;

import com.foodshare.backend.domain.DonationStatus;
import com.foodshare.backend.domain.FoodCategory;
import lombok.Data;

import java.time.Instant;

@Data
public class FoodItemDTO {
    private Long id;
    private String name;
    private String description;
    private Integer portions;
    private String imageUrl;
    private Instant expiresAt;
    private DonationStatus status;
    private FoodCategory category;
    private Long donationId;
    private Long claimId;
}
