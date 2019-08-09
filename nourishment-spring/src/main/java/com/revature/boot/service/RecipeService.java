package com.revature.boot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.boot.beans.Recipe;
import com.revature.boot.data.RecipeRepository;

@Service
public class RecipeService {

	@Autowired
	private RecipeRepository repo;
	
	public Recipe findByRecipeId(int recipeId) {
		return repo.findByRecipeId(recipeId);
	}
}
