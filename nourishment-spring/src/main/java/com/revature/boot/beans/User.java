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

	public User() {}

	public User(String first, String last, String uname, String pword)
	{
		super();
		this.fname = first;
		this.lname = last;
		this.username = uname;
		this.password = pword;
	}
	
	public User(int id, String first, String last, String usename, String pword)
	{
		super();
		this.u_id = id;
		this.fname = first;
		this.lname = last;
		this.username = usename;
		this.password = pword;
	}

	public int getId()
	{
		return this.u_id;
	}

	public void setId(int id)
	{
		this.u_id = id;
	}

	public String getFname()
	{
		return this.fname;
	}

	public void setFname(String first)
	{
		this.fname = first;
	}

	public String getLname()
	{
		return this.lname;
	}

	public void setLname(String last)
	{
		this.lname = last;
	}

	public String getUname()
	{
		return this.username;
	}

	public void setUname(String uname)
	{
		this.username = uname;
	}

	public String getPass()
	{
		return this.password;
	}

	public void setPass(String pass)
	{
		this.password = pass;
	}

	public List<UserPreferences> getuserPrefs()
	{
		return this.userPref;
	}

	public void setUserPrefs(List<UserPreferences> usePref)
	{
		this.userPref = usePref;
	}

	public List<UserHistory> getUserHist()
	{
		return this.userHist;
	}

	public void setUserHist(List<UserHistory> useHist)
	{
		this.userHist = useHist;
	}

	public List<Calendar> getUserCal()
	{
		return this.user_data;
	}

	public void setUserCal(List<Calendar> useCal)
	{
		this.user_data = useCal;
	}

	@Override
	public String toString()
	{
		return "User [ID = " + u_id + ", Username = " + username + ", First Name = " + fname + ", Last Name = " + lname + "]";
	}
}
