package com.revature.boot.controller;

import java.util.Date;

import javax.validation.Valid;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	public Calendar findByPk(@PathVariable int userId, @PathVariable Date datetime) {
		// creating calendarpk to be used in calendar object from get parameters
		CalendarPk pk = new CalendarPk(datetime, userId);
		return service.findByCompoundId(pk);
	}
}
