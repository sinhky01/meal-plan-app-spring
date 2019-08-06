package com.revature.boot.beans.composites;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class RecipeCharacteristicPk implements Serializable{

	@Column(name="r_id")
	private int r_id;
	
	@Column(name="characteristic")
	private String chracteristic;
	
	public RecipeCharacteristicPk() {
		
	}

	
	public RecipeCharacteristicPk(int r_id, String chracteristic) {
		super();
		this.r_id = r_id;
		this.chracteristic = chracteristic;
	}


	public int getR_id() {
		return r_id;
	}

	public void setR_id(int r_id) {
		this.r_id = r_id;
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
		RecipeCharacteristicPk other = (RecipeCharacteristicPk) obj;
		if (chracteristic == null) {
			if (other.chracteristic != null)
				return false;
		} else if (!chracteristic.equals(other.chracteristic))
			return false;
		if (r_id != other.r_id)
			return false;
		return true;
	}
	
	
}
