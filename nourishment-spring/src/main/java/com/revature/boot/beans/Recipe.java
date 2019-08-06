package com.revature.boot.beans;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.JoinColumn;

@Entity
@Table(name="RECIPE")
public class Recipe {

	
	@Id
	@Column(name="R_ID")
	private int r_id;
	
	@Column(name="RNAME")
	private String name;
	
	@Column(name="RECIPE")
	private String directions;
	
	@ManyToMany
	@JoinTable(name="RECIPE_CHARACTERISTIC", joinColumns = {
			@JoinColumn(name="R_ID")
	}, inverseJoinColumns = {
			@JoinColumn(name="CHARACTERISTIC")
	})
	private Set<Characteristic> characteristics;
	
	@OneToMany(mappedBy="recipe")
	private Set<UserHistory> recentUsers;
	
	@OneToMany(mappedBy="recipe")
	private Set<Calendar> scheduledEntry;

	public Recipe() {}
	
	public Recipe(int r_id, String name, String directions, Set<Characteristic> characteristics,
			Set<UserHistory> recentUsers, Set<Calendar> scheduledEntry) {
		super();
		this.r_id = r_id;
		this.name = name;
		this.directions = directions;
		this.characteristics = characteristics;
		this.recentUsers = recentUsers;
		this.scheduledEntry = scheduledEntry;
	}

	public int getR_id() {
		return r_id;
	}

	public void setR_id(int r_id) {
		this.r_id = r_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDirections() {
		return directions;
	}

	public void setDirections(String directions) {
		this.directions = directions;
	}

	public Set<Characteristic> getCharacteristics() {
		return characteristics;
	}

	public void setCharacteristics(Set<Characteristic> characteristics) {
		this.characteristics = characteristics;
	}

	public Set<UserHistory> getRecentUsers() {
		return recentUsers;
	}

	public void setRecentUsers(Set<UserHistory> recentUsers) {
		this.recentUsers = recentUsers;
	}

	public Set<Calendar> getScheduledEntry() {
		return scheduledEntry;
	}

	public void setScheduledEntry(Set<Calendar> scheduledEntry) {
		this.scheduledEntry = scheduledEntry;
	}
	
	
	
	
}
