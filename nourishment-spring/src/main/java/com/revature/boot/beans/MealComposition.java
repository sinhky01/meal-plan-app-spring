package com.revature.boot.beans;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.revature.boot.beans.composites.MealCompositionPk;

@Entity
@Table(name="meal_composition")
public class MealComposition {

	@EmbeddedId
	MealCompositionPk id;
	
	
}
