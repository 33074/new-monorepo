package com.foodshare.backend.service.mapper;

import com.foodshare.backend.domain.Claim;
import com.foodshare.backend.domain.Donation;
import com.foodshare.backend.domain.FoodItem;
import com.foodshare.backend.service.dto.FoodItemDTO;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-09-23T18:03:24+0530",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.7 (Oracle Corporation)"
)
@Component
public class FoodItemMapperImpl implements FoodItemMapper {

    @Override
    public FoodItemDTO toDto(FoodItem foodItem) {
        if ( foodItem == null ) {
            return null;
        }

        FoodItemDTO foodItemDTO = new FoodItemDTO();

        foodItemDTO.setDonationId( foodItemDonationId( foodItem ) );
        foodItemDTO.setClaimId( foodItemClaimId( foodItem ) );
        foodItemDTO.setId( foodItem.getId() );
        foodItemDTO.setName( foodItem.getName() );
        foodItemDTO.setDescription( foodItem.getDescription() );

        return foodItemDTO;
    }

    @Override
    public FoodItem toEntity(FoodItemDTO foodItemDTO) {
        if ( foodItemDTO == null ) {
            return null;
        }

        FoodItem.FoodItemBuilder foodItem = FoodItem.builder();

        foodItem.donation( foodItemDTOToDonation( foodItemDTO ) );
        foodItem.claim( foodItemDTOToClaim( foodItemDTO ) );
        foodItem.id( foodItemDTO.getId() );
        foodItem.name( foodItemDTO.getName() );
        foodItem.description( foodItemDTO.getDescription() );

        return foodItem.build();
    }

    private Long foodItemDonationId(FoodItem foodItem) {
        if ( foodItem == null ) {
            return null;
        }
        Donation donation = foodItem.getDonation();
        if ( donation == null ) {
            return null;
        }
        Long id = donation.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    private Long foodItemClaimId(FoodItem foodItem) {
        if ( foodItem == null ) {
            return null;
        }
        Claim claim = foodItem.getClaim();
        if ( claim == null ) {
            return null;
        }
        Long id = claim.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    protected Donation foodItemDTOToDonation(FoodItemDTO foodItemDTO) {
        if ( foodItemDTO == null ) {
            return null;
        }

        Donation.DonationBuilder donation = Donation.builder();

        donation.id( foodItemDTO.getDonationId() );

        return donation.build();
    }

    protected Claim foodItemDTOToClaim(FoodItemDTO foodItemDTO) {
        if ( foodItemDTO == null ) {
            return null;
        }

        Claim.ClaimBuilder claim = Claim.builder();

        claim.id( foodItemDTO.getClaimId() );

        return claim.build();
    }
}
