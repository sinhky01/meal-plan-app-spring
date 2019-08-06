package com.revature.boot.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.boot.beans.Recipe;
import com.revature.boot.beans.RecipeCharacteristic;
import com.revature.boot.beans.composites.RecipeCharacteristicPk;

@Repository
public interface RecipeCharacteristicRepository extends JpaRepository<RecipeCharacteristic, RecipeCharacteristicPk> {

	public List<RecipeCharacteristic> findByR_id();
	
	public List<RecipeCharacteristic> findByCharacteristic(String characteristic);
	
	@Query("select r from Recipe r join r.characteristics rc where rc.characteristic = :characteristic")
	public List<Recipe> recipesByCharacteristic(String characteristic);
	
	@Query("select rc from RecipeCharacteristics rc where rc.r_id = :id")
	public List<String> characteristicsOfRecipe(int id); 
}
