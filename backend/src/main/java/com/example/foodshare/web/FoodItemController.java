package com.example.foodshare.web;

import com.example.foodshare.domain.FoodItem;
import com.example.foodshare.repository.FoodItemRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/food-items")
@CrossOrigin(origins = "http://localhost:3000")
public class FoodItemController {

    private final FoodItemRepository repository;

    public FoodItemController(FoodItemRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<FoodItem> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public FoodItem create(@RequestBody FoodItem item) {
        return repository.save(item);
    }
}
