package com.foodshare.backend.service.mapper;

import com.foodshare.backend.domain.FoodItem;
import com.foodshare.backend.service.dto.FoodItemDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface FoodItemMapper {

    @Mapping(source = "donation.id", target = "donationId")
    @Mapping(source = "claim.id", target = "claimId")
    FoodItemDTO toDto(FoodItem foodItem);

    @Mapping(source = "donationId", target = "donation.id")
    @Mapping(source = "claimId", target = "claim.id")
    FoodItem toEntity(FoodItemDTO foodItemDTO);
}
