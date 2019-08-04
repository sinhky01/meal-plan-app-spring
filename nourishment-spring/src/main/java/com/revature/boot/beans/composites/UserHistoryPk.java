package com.revature.boot.beans.composites;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class UserHistoryPk implements Serializable{
	
	@Column(name="u_id")
	private int u_id;
	
	@Column(name = "r_id")
	private int r_id;
	

	public int getU_id() {
		return u_id;
	}

	public void setU_id(int u_id) {
		this.u_id = u_id;
	}

	public int getR_id() {
		return r_id;
	}

	public void setR_id(int r_id) {
		this.r_id = r_id;
	}

	public UserHistoryPk() {
		
	}

	public UserHistoryPk(int u_id, int r_id) {
		super();
		this.u_id = u_id;
		this.r_id = r_id;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + r_id;
		result = prime * result + u_id;
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
		if (r_id != other.r_id)
			return false;
		if (u_id != other.u_id)
			return false;
		return true;
	}
	
	

	
	
	
	
}
