package com.revature.boot.service;

import java.util.ArrayList;
import java.util.List;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.boot.beans.Ingredient;
import com.revature.boot.beans.MealComposition;
import com.revature.boot.data.MealCompositionRepository;

@Service
public class MealCompositionService {
	
	private static final Logger log = Logger.getLogger(MealCompositionService.class);
	
	@Autowired
	private MealCompositionRepository repo;
	
	public MealComposition save(MealComposition mc) {
		return repo.save(mc);
	}
	
	public List<MealComposition> findByRecId(int recipeId){
		return repo.findByMealCompositionPkRecipeId(recipeId);
	}
	
	public List<MealComposition> findByIngrId(int ingredientId){
		return repo.findByMealCompositionPkIngredientId(ingredientId);
	}
}
