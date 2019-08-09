package com.revature.boot.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.boot.beans.Ingredient;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, Integer>{

	@Query("SELECT ing FROM Ingredient ing JOIN FETCH ing.usedBy mc where mc.mealCompositionPk.recipeId = :id")
	public List<Ingredient> ingredientDetailByRecipe(int id);
	
}
