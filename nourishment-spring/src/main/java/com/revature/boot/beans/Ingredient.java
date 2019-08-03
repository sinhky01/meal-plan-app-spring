package com.revature.boot.beans;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="ingredient")
public class Ingredient {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int i_id;
	
	@Column(name="ingredient")
	private String ingredient;
	
	@OneToMany(mappedBy = "")
	private List<MealComposition> usedBy;
	
	@OneToMany(mappedBy = "")
	private List<UserPreferences> userPrefs;
	
}
