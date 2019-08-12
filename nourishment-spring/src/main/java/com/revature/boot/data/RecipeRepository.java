package com.revature.boot.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.boot.beans.Recipe;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Integer>{
	
	public Recipe findByRecipeId(int recipeId);
	
	public List<Recipe> findAll();
}
