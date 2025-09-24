package com.foodshare.backend.service;

import com.foodshare.backend.domain.FoodItem;
import com.foodshare.backend.service.dto.FoodItemDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface FoodItemService {

    List<FoodItem> findAll();

    Optional<FoodItem> findById(Long id);

    FoodItem save(FoodItem foodItem);

    void delete(Long id);

    FoodItemDTO save(FoodItemDTO foodItemDTO);

    Optional<FoodItemDTO> findOne(Long id);

    Page<FoodItemDTO> findAll(Pageable pageable);
}
