package com.revature.boot.beans.composites;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class MealCompositionPk implements Serializable{
	
	@Column(name="r_id")
	private int recipeId;
	
	@Column(name="i_id")
	private int ingredientId;

	public int getRecipeId() {
		return recipeId;
	}

	public void setRecipeId(int recipeId) {
		this.recipeId = recipeId;
	}

	public int getIngredientId() {
		return ingredientId;
	}

	public void setIngredientId(int ingredientId) {
		this.ingredientId = ingredientId;
	}

	public MealCompositionPk() {
		
	}
	
	public MealCompositionPk(int recipeId, int ingredientId) {
		super();
		this.recipeId = recipeId;
		this.ingredientId = ingredientId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ingredientId;
		result = prime * result + recipeId;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		MealCompositionPk other = (MealCompositionPk) obj;
		if (ingredientId != other.ingredientId)
			return false;
		if (recipeId != other.recipeId)
			return false;
		return true;
	}
	
	
	
}
