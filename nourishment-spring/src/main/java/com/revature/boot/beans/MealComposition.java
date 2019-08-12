package com.revature.boot.beans;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.revature.boot.beans.composites.MealCompositionPk;

@Entity
@Table(name="meal_composition")
public class MealComposition {

	@EmbeddedId
	private MealCompositionPk mealCompositionPk;
	
	@Column(name="quantity")
	private int quantity;
	
	@Column(name="units")
	private String units;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("r_id")
	@JoinColumn(name = "r_id")
	private Recipe recipe;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("i_id")
	@JsonBackReference
	@JoinColumn(name = "i_id")
	private Ingredient ingredient;

	public MealComposition() {
		
	}
	
	public MealComposition(MealCompositionPk id, int quantity, String units) {
		super();
		this.mealCompositionPk = id;
		this.quantity = quantity;
		this.units = units;
	}

	public MealComposition(MealCompositionPk mealCompositionPk, int quantity, String units, Ingredient ingredient) {
		super();
		this.mealCompositionPk = mealCompositionPk;
		this.quantity = quantity;
		this.units = units;
		this.ingredient = ingredient;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getUnits() {
		return units;
	}

	public void setUnits(String units) {
		this.units = units;
	}

	public MealCompositionPk getMealCompositionPk() {
		return mealCompositionPk;
	}

	public void setMealCompositionPk(MealCompositionPk mealCompositionPk) {
		this.mealCompositionPk = mealCompositionPk;
	}	
}
