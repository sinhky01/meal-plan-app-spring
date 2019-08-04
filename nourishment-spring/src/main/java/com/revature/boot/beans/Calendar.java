package com.revature.boot.beans;

import java.sql.Date;

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
	@JoinColumn(name = "u_id")
	private int userId;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "r_id")
	private int recipeId;
	
	@Column(name = "datetime")
	private Date date;
	
	public Calendar() {
		
	}
	
	public Calendar(CalendarPk id, int mealNum, int userId, int recipeId) {
		super();
		this.id = id;
		this.mealNum = mealNum;
		this.userId = userId;
		this.recipeId = recipeId;
	}
	
	public Calendar(int mealNum, int userId, int recipeId) {
		super();
		this.mealNum = mealNum;
		this.userId = userId;
		this.recipeId = recipeId;
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

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getRecipeId() {
		return recipeId;
	}

	public void setRecipeId(int recipeId) {
		this.recipeId = recipeId;
	}


	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

}
