package com.revature.boot.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.boot.beans.Calendar;
import com.revature.boot.beans.CalendarPk;
import com.revature.boot.service.CalendarService;

//@Api(value = "Calendar API") // to be added when Swagger is implemented

@RestController
@RequestMapping(value = "/api/v1/calendar/")
public class CalendarController {
	private static final Logger log = Logger.getLogger(CalendarController.class);
	
	@Autowired
	private CalendarService service;
	
	@PostMapping("/meal")
	public ResponseEntity<Calendar> save(@Valid @RequestBody Calendar meal){
		return new ResponseEntity<Calendar>(service.save(meal), HttpStatus.CREATED);
	}
	
	@GetMapping("/meal/{userId}/{datetime}") 
	public Calendar findByPk(@PathVariable int userId, @PathVariable String datetime) {
		// convert date 
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		Date parsedDate = null;
		try {
			parsedDate = formatter.parse(datetime);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		// creating calendarpk to be used in calendar object from get parameters
		CalendarPk pk = new CalendarPk(parsedDate, userId);
		return service.findByCompoundId(pk);
	}
	
//	@GetMapping("/getstuff")
//	public void doStuff() {
//		System.out.println("Doing stuff");
//	}
	
	@DeleteMapping("/meal/{userId}/{datetime}")
	public ResponseEntity<Void> delete(@PathVariable int userId, @PathVariable Date datetime) {
		CalendarPk pk = new CalendarPk(datetime, userId);
		service.delete(pk);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/user/{userId}")
	public ResponseEntity<List<Calendar>> mealsByUser(@PathVariable int userId) {
		return new ResponseEntity<List<Calendar>>(service.getByUserId(userId), HttpStatus.OK);
	}
	
	@GetMapping("/mealtype/{mealNum}") 
	public ResponseEntity<List<Calendar>> mealsByType(@PathVariable int mealNum) {
		return new ResponseEntity<List<Calendar>>(service.getByMealType(mealNum), HttpStatus.OK);
	}
	
	@GetMapping("/recipes/{recipeId}")
	public ResponseEntity<List<Calendar>> mealsByRecipe(@PathVariable int recipeId) {
		//return new ResponseEntity<List<Calendar>>(service.getByRecipe(recipeId), HttpStatus.OK);
		return null;
	}
	
	@GetMapping("/user/{date}")
	public ResponseEntity<List<Calendar>> mealsByDate(@PathVariable String date) {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		Date parsedDate = null;
		try {
			parsedDate = formatter.parse(date);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return new ResponseEntity<List<Calendar>>(service.getByDate(parsedDate), HttpStatus.OK);
	}
	
}
