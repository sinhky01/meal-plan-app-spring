package com.revature.boot.beans;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.revature.boot.beans.composites.UserPrefPk;

@Entity
@Table(name="user_preference")
public class UserPreferences {

	
	@EmbeddedId
	private UserPrefPk userPrefPk;
	
	@Column(name="marker")
	private int marker;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("u_id")
	@JoinColumn(name = "u_id")
	private int u_id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("i_id")
	@JoinColumn(name = "i_id")
	private int i_id;

	public UserPreferences() {
		
	}
	
	public UserPreferences(UserPrefPk userPrefPk, int marker, int u_id, int i_id) {
		super();
		this.userPrefPk = userPrefPk;
		this.marker = marker;
		this.u_id = u_id;
		this.i_id = i_id;
	}

	public UserPrefPk getUserPrefPk() {
		return userPrefPk;
	}

	public void setUserPrefPk(UserPrefPk userPrefPk) {
		this.userPrefPk = userPrefPk;
	}

	public int getMarker() {
		return marker;
	}

	public void setMarker(int marker) {
		this.marker = marker;
	}

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
	
	
}
