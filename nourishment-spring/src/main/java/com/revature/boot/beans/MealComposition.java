package com.revature.boot.beans;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.revature.boot.beans.composites.MealCompositionPk;

@Entity
@Table(name="meal_composition")
public class MealComposition {

	@EmbeddedId
	private MealCompositionPk id;
	
	@Column(name="quantity")
	private int quantity;
	
	@Column(name="units")
	private int units;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("r_id")
	@JoinColumn(name = "r_id")
	private int r_id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("i_id")
	@JoinColumn(name = "i_id")
	private int i_id;

	public MealComposition() {
		
	}
	
	public MealComposition(MealCompositionPk id, int quantity, int units, int r_id, int i_id) {
		super();
		this.id = id;
		this.quantity = quantity;
		this.units = units;
		this.r_id = r_id;
		this.i_id = i_id;
	}

	public MealCompositionPk getId() {
		return id;
	}

	public void setId(MealCompositionPk id) {
		this.id = id;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getUnits() {
		return units;
	}

	public void setUnits(int units) {
		this.units = units;
	}

	public int getR_id() {
		return r_id;
	}

	public void setR_id(int r_id) {
		this.r_id = r_id;
	}

	public int getI_id() {
		return i_id;
	}

	public void setI_id(int i_id) {
		this.i_id = i_id;
	}
	
	
	
}
