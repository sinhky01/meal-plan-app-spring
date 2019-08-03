package com.revature.boot.beans;

import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name="calendar")
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
	
}
