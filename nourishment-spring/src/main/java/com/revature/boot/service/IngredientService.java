package com.revature.boot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.boot.beans.Ingredient;
import com.revature.boot.data.IngredientRepository;

@Service
public class IngredientService {

	@Autowired
	private IngredientRepository repo;
	
	public List<Ingredient> ingredientDetailByRecipe(int id) {
		return repo.ingredientDetailByRecipe(id);
	}
}
