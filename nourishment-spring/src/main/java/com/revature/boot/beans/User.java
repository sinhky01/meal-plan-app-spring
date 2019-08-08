package com.revature.boot.beans;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="appuser")
public class User {
	
	@Id
	@Column(name="u_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userId;
	
	@Column(name="fname")
	private String fname;
	
	@Column(name="lname")
	private String lname;
	
	@Column(name="uname")
	private String username;
	
	@Column(name="pass")
	private String password;
  
	@OneToMany(mappedBy = "user")
	private List<UserPreferences> userPref;
	
	@OneToMany(mappedBy = "user")
	private List<UserHistory> userHist;
	
	@OneToMany(mappedBy = "user")
	private List<Calendar> user_data;

	public User() {};
	
	public User(int userId, String fname, String lname, String username, String password, List<UserPreferences> userPref,
			List<UserHistory> userHist, List<Calendar> user_data) {
		super();
		this.userId = userId;
		this.fname = fname;
		this.lname = lname;
		this.username = username;
		this.password = password;
		this.userPref = userPref;
		this.userHist = userHist;
		this.user_data = user_data;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<UserPreferences> getUserPref() {
		return userPref;
	}

	public void setUserPref(List<UserPreferences> userPref) {
		this.userPref = userPref;
	}

	public List<UserHistory> getUserHist() {
		return userHist;
	}

	public void setUserHist(List<UserHistory> userHist) {
		this.userHist = userHist;
	}

	public List<Calendar> getUser_data() {
		return user_data;
	}

	public void setUser_data(List<Calendar> user_data) {
		this.user_data = user_data;
	}
	
}
