package com.revature.boot.data;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.boot.beans.Calendar;
import com.revature.boot.beans.CalendarPk;

@Repository
public interface CalendarRepository extends JpaRepository<Calendar, CalendarPk> {
	public List<Calendar> findByMealNum(int mealNum);
	//public List<Calendar> findByUserId(int userId);
	public List<Calendar> findByRecipeId(int recipeId);
	//public List<Calendar> findByDate(Date date);
	public List<Calendar> findByPk(CalendarPk pk);
}
