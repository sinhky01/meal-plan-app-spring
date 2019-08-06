package com.revature.boot.beans;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="appuser")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int u_id;
	
	@Column(name="fname")
	private String fname;
	
	@Column(name="lname")
	private String lname;
	
	@Column(name="uname")
	private String username;
	
	@Column(name="pass")
	private String password;
	
	@OneToMany(mappedBy = "prefid")
	private List<UserPreferences> userPref;
	
	@OneToMany(mappedBy = "histid")
	private List<UserHistory> userHist;
	
	@OneToMany(mappedBy = "calid")
	private List<Calendar> user_data;
}
