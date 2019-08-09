package com.revature.boot.beans;

import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.revature.boot.beans.composites.RecipeCharacteristicPk;

@Entity
@Table(name="characteristic")
public class Characteristic {
	
	@Id
	@Column(name="characteristic")
	private String characteristic;
	
	@ManyToMany(mappedBy = "characteristics")
	private Set<Recipe> recipesAssociated;

	public Characteristic() {
		
	}
	
	public Characteristic(String characteristic) {
		super();
		this.characteristic = characteristic;
	}

	

	public String getCharacteristic() {
		return characteristic;
	}

	public void setCharacteristic(String characteristic) {
		this.characteristic = characteristic;
	}
	
	
	
}
