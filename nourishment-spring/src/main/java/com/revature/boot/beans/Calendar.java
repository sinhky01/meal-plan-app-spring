package com.revature.boot.beans;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "calendar")
public class Calendar {

	// using CalendarPk to represent composite primary key
	@EmbeddedId
	private CalendarPk id;

	@Column(name = "mealNum")
	private int mealNum; // this is a number representation of which meal of the day it is

	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("u_id")
	@JoinColumn(name = "u_id")
	private User user;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "r_id")
	private Recipe recipe;
	
	public Calendar() {
		
	}
	
	
	public Calendar(CalendarPk id, int mealNum) {
		super();
		this.id = id;
		this.mealNum = mealNum;
	}

	public Calendar(int mealNum, int userId, int recipeId, Date date) {
		super();
		this.mealNum = mealNum;
		
	}


	public CalendarPk getId() {
		return id;
	}

	public void setId(CalendarPk id) {
		this.id = id;
	}

	public int getMealNum() {
		return mealNum;
	}

	public void setMealNum(int mealNum) {
		this.mealNum = mealNum;
	}
}
