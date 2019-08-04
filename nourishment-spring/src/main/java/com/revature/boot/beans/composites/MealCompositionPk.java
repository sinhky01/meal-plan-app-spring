package com.revature.boot.beans.composites;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class MealCompositionPk implements Serializable{
	
	@Column(name="r_id")
	private int r_id;
	
	@Column(name="i_id")
	private int i_id;

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

	public MealCompositionPk() {
		
	}
	
	public MealCompositionPk(int r_id, int i_id) {
		super();
		this.r_id = r_id;
		this.i_id = i_id;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + i_id;
		result = prime * result + r_id;
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
		if (i_id != other.i_id)
			return false;
		if (r_id != other.r_id)
			return false;
		return true;
	}
	
	
	
}
