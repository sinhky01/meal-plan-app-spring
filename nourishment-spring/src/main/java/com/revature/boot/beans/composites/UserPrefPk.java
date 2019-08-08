package com.revature.boot.beans.composites;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class UserPrefPk implements Serializable{
	
	@Column(name="u_id")
	private int userId;
	
	@Column(name="i_id")
	private int ingredientId;
	

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getIngredientId() {
		return ingredientId;
	}

	public void setIngredientId(int ingredientId) {
		this.ingredientId = ingredientId;
	}

	
	public UserPrefPk() {
		
	}

	public UserPrefPk(int userId, int ingredientId) {
		super();
		this.userId = userId;
		this.ingredientId = ingredientId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ingredientId;
		result = prime * result + userId;
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
		UserPrefPk other = (UserPrefPk) obj;
		if (ingredientId != other.ingredientId)
			return false;
		if (userId != other.userId)
			return false;
		return true;
	}
	
	
}
