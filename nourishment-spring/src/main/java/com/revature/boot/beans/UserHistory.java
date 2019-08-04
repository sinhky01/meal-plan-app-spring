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
	private int u_id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("r_id")
	@JoinColumn(name = "r_id")
	private int r_id;
	
	public UserHistory () {
		
	}

	public UserHistory(UserHistoryPk userHistoryPk, int marker, int u_id, int r_id) {
		super();
		this.userHistoryPk = userHistoryPk;
		this.marker = marker;
		this.u_id = u_id;
		this.r_id = r_id;
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
	
	
}
