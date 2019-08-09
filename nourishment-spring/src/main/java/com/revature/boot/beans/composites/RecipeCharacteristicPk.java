package com.revature.boot.beans.composites;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;

@Embeddable
public class RecipeCharacteristicPk implements Serializable{

	@Column(name="r_id")
	private int recipeId;
	
	@Column(name="characteristic")
	private String chracteristic;
	
	public RecipeCharacteristicPk() {
		
	}

	
	public RecipeCharacteristicPk(int recipeId, String chracteristic) {
		super();
		this.recipeId = recipeId;
		this.chracteristic = chracteristic;
	}


	public int getRecipeId() {
		return recipeId;
	}

	public void setRecipeId(int recipeId) {
		this.recipeId = recipeId;
	}

	public String getChracteristic() {
		return chracteristic;
	}

	public void setChracteristic(String chracteristic) {
		this.chracteristic = chracteristic;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((chracteristic == null) ? 0 : chracteristic.hashCode());
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
		RecipeCharacteristicPk other = (RecipeCharacteristicPk) obj;
		if (chracteristic == null) {
			if (other.chracteristic != null)
				return false;
		} else if (!chracteristic.equals(other.chracteristic))
			return false;
		if (recipeId != other.recipeId)
			return false;
		return true;
	}
	
	
}
