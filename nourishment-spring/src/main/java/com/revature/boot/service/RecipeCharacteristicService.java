package com.revature.boot.service;

import java.util.List;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.boot.beans.Recipe;
import com.revature.boot.beans.RecipeCharacteristic;
import com.revature.boot.controller.RecipeCharacteristicController;
import com.revature.boot.data.RecipeCharacteristicRepository;

@Service
public class RecipeCharacteristicService {
	
	private static final Logger log = Logger.getLogger(RecipeCharacteristicController.class);
	
	@Autowired
	private RecipeCharacteristicRepository repo;
	
	public RecipeCharacteristic save(RecipeCharacteristic rc) {
		return repo.save(rc);
	}
	
	public List<RecipeCharacteristic> findByR_id(int id){
		return repo.findByR_id();
	}
	
	public List<RecipeCharacteristic> findByCharacteristic(String characteristic){
		return repo.findByCharacteristic(characteristic);
	}
	
	public List<Recipe> recipesByCharacteristic(String characteristic){
		return repo.recipesByCharacteristic(characteristic);
	}
	
	public List<String> characteristicsOfRecipe(int id){
		return repo.characteristicsOfRecipe(id);
	}
}
