package com.revature.boot.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.boot.beans.Calendar;
import com.revature.boot.beans.CalendarPk;
import com.revature.boot.data.CalendarRepository;

@Service
public class CalendarService {

	private static final Logger log = Logger.getLogger(CalendarService.class);

	@Autowired
	private CalendarRepository repo;

	public Calendar save(Calendar mealDate) {
		return repo.save(mealDate);
	}

	public Calendar findByCompoundId(CalendarPk id) {
		Optional<Calendar> optional = repo.findById(id);
		Calendar returnedCalendar = optional.isPresent() ? optional.get() : null;
		if (returnedCalendar == null) {
			log.warn("Not found!");
			System.out.println("Not found!");
		}
		return returnedCalendar;
	}
	
	public void delete(CalendarPk id) {
		repo.deleteById(id);
	}

	public List<Calendar> getByUserId(int userId) {
		return repo.findByUserId(userId);
	}
	public List<Calendar> getByMealType(int mealNum) {
		return repo.findByMealNum(mealNum);
	}
	public List<Calendar> getByRecipe(int recipeId) {
		return repo.findByRecipeId(recipeId);
	}
	public List<Calendar> getByDate(Date date) {
		return repo.findByDate(date);
	}
	
}
