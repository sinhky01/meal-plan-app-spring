package com.revature.boot.beans.composites;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class UserPrefPk implements Serializable{
	
	@Column(name="u_id")
	private int u_id;
	
	@Column(name="i_id")
	private int i_id;
	

	public int getU_id() {
		return u_id;
	}

	public void setU_id(int u_id) {
		this.u_id = u_id;
	}

	public int getI_id() {
		return i_id;
	}

	public void setI_id(int i_id) {
		this.i_id = i_id;
	}

	
	public UserPrefPk() {
		
	}

	public UserPrefPk(int u_id, int i_id) {
		super();
		this.u_id = u_id;
		this.i_id = i_id;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + i_id;
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
		UserPrefPk other = (UserPrefPk) obj;
		if (i_id != other.i_id)
			return false;
		if (u_id != other.u_id)
			return false;
		return true;
	}
	
	
}
