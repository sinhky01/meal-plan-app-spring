package com.revature.boot.beans;

import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name="calendar")
public class Calendar {
	
	@Id
	private Date datetime;
	
	@Column(name="mealnum")
	private int mealnum;
	
	
	
}
