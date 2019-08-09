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
	private User user;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("i_id")
	@JoinColumn(name = "i_id")
	private Ingredient ingredient;

	public UserPreferences() {
		
	}
	
	public UserPreferences(UserPrefPk userPrefPk, int marker) {
		super();
		this.userPrefPk = userPrefPk;
		this.marker = marker;
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
	
}
