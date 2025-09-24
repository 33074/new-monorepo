package com.foodshare.backend.service.impl;

import com.foodshare.backend.domain.FoodItem;
import com.foodshare.backend.repository.FoodItemRepository;
import com.foodshare.backend.service.FoodItemService;
import com.foodshare.backend.service.dto.FoodItemDTO;
import com.foodshare.backend.service.mapper.FoodItemMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodItemServiceImpl implements FoodItemService {

    private final FoodItemRepository foodItemRepository;
    private final FoodItemMapper foodItemMapper;

    @Autowired
    public FoodItemServiceImpl(FoodItemRepository foodItemRepository, FoodItemMapper foodItemMapper) {
        this.foodItemRepository = foodItemRepository;
        this.foodItemMapper = foodItemMapper;
    }

    @Override
    public List<FoodItem> findAll() {
        return foodItemRepository.findAll();
    }

    @Override
    public Optional<FoodItem> findById(Long id) {
        return foodItemRepository.findById(id);
    }

    @Override
    public FoodItem save(FoodItem foodItem) {
        return foodItemRepository.save(foodItem);
    }

    @Override
    public void delete(Long id) {
        foodItemRepository.deleteById(id);
    }

    @Override
    public FoodItemDTO save(FoodItemDTO foodItemDTO) {
        FoodItem foodItem = foodItemMapper.toEntity(foodItemDTO);
        foodItem = foodItemRepository.save(foodItem);
        return foodItemMapper.toDto(foodItem);
    }

    @Override
    public Optional<FoodItemDTO> findOne(Long id) {
        return foodItemRepository.findById(id).map(foodItemMapper::toDto);
    }

    @Override
    public Page<FoodItemDTO> findAll(Pageable pageable) {
        return foodItemRepository.findAll(pageable).map(foodItemMapper::toDto);
    }
}
