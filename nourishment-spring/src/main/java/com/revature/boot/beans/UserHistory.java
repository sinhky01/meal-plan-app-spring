package com.revature.boot.beans;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.revature.boot.beans.composites.UserHistoryPk;

@Entity
@Table(name="user_history")
public class UserHistory {
	
	@EmbeddedId
	private UserHistoryPk userHistoryPk;
	
	@Column(name = "marker")
	private int marker;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("u_id")
	@JoinColumn(name = "u_id")
	private User user;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("r_id")
	@JoinColumn(name = "r_id")
	private Recipe recipe;
	
	public UserHistory () {
		
	}

	public UserHistory(UserHistoryPk userHistoryPk, int marker) {
		super();
		this.userHistoryPk = userHistoryPk;
		this.marker = marker;
	}

	public UserHistoryPk getUserHistoryPk() {
		return userHistoryPk;
	}

	public void setUserHistoryPk(UserHistoryPk userHistoryPk) {
		this.userHistoryPk = userHistoryPk;
	}

	public int getMarker() {
		return marker;
	}

	public void setMarker(int marker) {
		this.marker = marker;
	}	
}
