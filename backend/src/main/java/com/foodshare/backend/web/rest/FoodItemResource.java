package com.foodshare.backend.web.rest;

import com.foodshare.backend.service.FoodItemService;
import com.foodshare.backend.service.dto.FoodItemDTO;
import com.foodshare.backend.service.mapper.FoodItemMapper;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/food-items-resource") // avoid conflict with FoodItemController
public class FoodItemResource {

    private final FoodItemService foodItemService;
    private final FoodItemMapper foodItemMapper;

    public FoodItemResource(FoodItemService foodItemService, FoodItemMapper foodItemMapper) {
        this.foodItemService = foodItemService;
        this.foodItemMapper = foodItemMapper;
    }

    @PostMapping
    public FoodItemDTO createFoodItem(@RequestBody FoodItemDTO foodItemDTO) {
        return foodItemService.save(foodItemDTO);
    }

    @GetMapping
    public List<FoodItemDTO> getAllFoodItems() {
        return foodItemService.findAll().stream()
                .map(foodItemMapper::toDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public FoodItemDTO getFoodItem(@PathVariable Long id) {
        return foodItemService.findOne(id)
                .orElseThrow(() -> new RuntimeException("FoodItem not found with id " + id));
    }

    @DeleteMapping("/{id}")
    public void deleteFoodItem(@PathVariable Long id) {
        foodItemService.delete(id);
    }
}
