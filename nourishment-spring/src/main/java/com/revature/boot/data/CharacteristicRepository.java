package com.revature.boot.data;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.boot.beans.Recipe;
import com.revature.boot.beans.Characteristic;
import com.revature.boot.beans.composites.RecipeCharacteristicPk;

@Repository
public interface CharacteristicRepository extends JpaRepository<Characteristic, String> {

	public List<Characteristic> findByRecipesAssociated(Set<Recipe> recipes);
	
	public List<Characteristic> findByCharacteristic(String characteristic);
	
	//@Query(value="SELECT ",nativeQuery = true)
	//FIX QUERIES AND SERVICE AND CONTROLLER
	/*
	 * 
	*/
	@Query("select r from Recipe r join r.characteristics rc where rc.characteristic = :characteristic")
	public List<Recipe> recipesByCharacteristic(String characteristic);
//	
//	@Query("select rc from RecipeCharacteristics rc where rc.r_id = :id")
//	public List<String> characteristicsOfRecipe(int id); 
	
}
