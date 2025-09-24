package com.foodshare.backend.web;

import com.foodshare.backend.domain.FoodItem;
import com.foodshare.backend.service.FoodItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/food-items")
public class FoodItemController {

    private final FoodItemService foodItemService;

    @Autowired
    public FoodItemController(FoodItemService foodItemService) {
        this.foodItemService = foodItemService;
    }

    // Get all food items
    @GetMapping
    public List<FoodItem> getAllFoodItems() {
        return foodItemService.findAll();
    }

    // Get a single food item by id
    @GetMapping("/{id}")
    public ResponseEntity<FoodItem> getFoodItemById(@PathVariable Long id) {
        Optional<FoodItem> foodItem = foodItemService.findById(id);
        return foodItem.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create a new food item
    @PostMapping
    public FoodItem createFoodItem(@RequestBody FoodItem foodItem) {
        return foodItemService.save(foodItem);
    }

    // Update a food item
    @PutMapping("/{id}")
    public ResponseEntity<FoodItem> updateFoodItem(@PathVariable Long id, @RequestBody FoodItem updatedFoodItem) {
        Optional<FoodItem> existing = foodItemService.findById(id);
        if (existing.isPresent()) {
            FoodItem foodItem = existing.get();
            foodItem.setName(updatedFoodItem.getName());
            foodItem.setDescription(updatedFoodItem.getDescription());
            foodItem.setQuantity(updatedFoodItem.getQuantity());
            return ResponseEntity.ok(foodItemService.save(foodItem));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a food item
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFoodItem(@PathVariable Long id) {
        foodItemService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
