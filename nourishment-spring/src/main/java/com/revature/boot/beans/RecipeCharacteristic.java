package com.revature.boot.beans;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.revature.boot.beans.composites.RecipeCharacteristicPk;

@Entity
@Table(name="recipe_characteristic")
public class RecipeCharacteristic {
	
	@EmbeddedId
	RecipeCharacteristicPk rcpk;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("r_id")
	@JoinColumn(name = "r_id")
	private int r_id;
	
	@Column(name="characteristic")
	private String characteristic;

	public RecipeCharacteristic() {
		
	}
	
	public RecipeCharacteristic(int r_id, String characteristic) {
		super();
		this.r_id = r_id;
		this.characteristic = characteristic;
	}

	public int getR_id() {
		return r_id;
	}

	public void setR_id(int r_id) {
		this.r_id = r_id;
	}

	public String getCharacteristic() {
		return characteristic;
	}

	public void setCharacteristic(String characteristic) {
		this.characteristic = characteristic;
	}
	
	
	
}
