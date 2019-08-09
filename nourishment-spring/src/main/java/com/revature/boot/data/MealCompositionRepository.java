package com.revature.boot.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.boot.beans.MealComposition;
import com.revature.boot.beans.composites.MealCompositionPk;

@Repository
public interface MealCompositionRepository extends JpaRepository<MealComposition, MealCompositionPk>{
	
	public List<MealComposition> findByMealCompositionPkRecipeId(int recipeId);
	
	public List<MealComposition> findByMealCompositionPkIngredientId(int ingredientId);
}
