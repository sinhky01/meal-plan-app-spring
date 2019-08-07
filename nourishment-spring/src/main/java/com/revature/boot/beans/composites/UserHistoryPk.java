package com.revature.boot.beans.composites;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class UserHistoryPk implements Serializable{
	
	@Column(name="u_id")
	private int userId;
	
	@Column(name = "r_id")
	private int recipeId;
	

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getRecipeId() {
		return recipeId;
	}

	public void setRecipeId(int recipeId) {
		this.recipeId = recipeId;
	}

	public UserHistoryPk() {
		
	}

	public UserHistoryPk(int userId, int recipeId) {
		super();
		this.userId = userId;
		this.recipeId = recipeId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + recipeId;
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
		UserHistoryPk other = (UserHistoryPk) obj;
		if (recipeId != other.recipeId)
			return false;
		if (userId != other.userId)
			return false;
		return true;
	}
	
	

	
	
	
	
}
