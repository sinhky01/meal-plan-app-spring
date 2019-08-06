package com.revature.boot.beans;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="ingredient")
public class Ingredient {
	
	@Id
	@Column(name="i_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int ingredientId;
	
	@Column(name="ingredient")
	private String ingredient;
	
	@OneToMany(mappedBy = "ingredient")
	private List<MealComposition> usedBy;
	
	@OneToMany(mappedBy = "ingredient")
	private List<UserPreferences> userPrefs;

	public Ingredient() {};
	
	public Ingredient(int ingredientId, String ingredient, List<MealComposition> usedBy,
			List<UserPreferences> userPrefs) {
		super();
		this.ingredientId = ingredientId;
		this.ingredient = ingredient;
		this.usedBy = usedBy;
		this.userPrefs = userPrefs;
	}

	public int getIngredientId() {
		return ingredientId;
	}

	public void setIngredientId(int ingredientId) {
		this.ingredientId = ingredientId;
	}

	public String getIngredient() {
		return ingredient;
	}

	public void setIngredient(String ingredient) {
		this.ingredient = ingredient;
	}

	public List<MealComposition> getUsedBy() {
		return usedBy;
	}

	public void setUsedBy(List<MealComposition> usedBy) {
		this.usedBy = usedBy;
	}

	public List<UserPreferences> getUserPrefs() {
		return userPrefs;
	}

	public void setUserPrefs(List<UserPreferences> userPrefs) {
		this.userPrefs = userPrefs;
	}
	
	
	
}
