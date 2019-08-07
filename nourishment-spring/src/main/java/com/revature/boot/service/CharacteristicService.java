package com.revature.boot.service;

import java.util.List;
import java.util.Set;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.boot.beans.Recipe;
import com.revature.boot.beans.Characteristic;
import com.revature.boot.controller.CharacteristicController;
import com.revature.boot.data.CharacteristicRepository;

@Service
public class CharacteristicService {
	
	private static final Logger log = Logger.getLogger(CharacteristicController.class);
	
	@Autowired
	private CharacteristicRepository repo;
	
	public Characteristic save(Characteristic rc) {
		return repo.save(rc);
	}
	
	public List<Characteristic> findByRecipesAssociated(Set<Recipe> recipes){
		return repo.findByRecipesAssociated(recipes);
	}
	
	public List<Characteristic> findByCharacteristic(String characteristic){
		return repo.findByCharacteristic(characteristic);
	}
	
	
	public List<Recipe> recipesByCharacteristic(String characteristic){
		return repo.recipesByCharacteristic(characteristic);
	}
	/*
	public List<String> characteristicsOfRecipe(int id){
		return repo.characteristicsOfRecipe(id);
	}
	*/
}
