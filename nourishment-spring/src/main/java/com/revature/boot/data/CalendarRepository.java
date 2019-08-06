package com.revature.boot.data;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.boot.beans.Calendar;
import com.revature.boot.beans.CalendarPk;
import com.revature.boot.beans.Recipe;

@Repository
public interface CalendarRepository extends JpaRepository<Calendar, CalendarPk> {
	public List<Calendar> findByMealNum(int mealNum);
	public List<Calendar> findByIdUserId(int userId);
	public List<Calendar> findByRecipe(Recipe recipe);
	public List<Calendar> findByIdDateTime(Date date);
}
