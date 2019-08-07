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
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.boot.beans.MealComposition;
import com.revature.boot.service.MealCompositionService;

@RestController
@RequestMapping(value = "/api/v1/mealcomposition/")
public class MealCompositionController {
	
	private static final Logger log = Logger.getLogger(MealCompositionController.class);
	
	@Autowired
	private MealCompositionService service;
	
	@GetMapping("/meal/{recipe}")
	public ResponseEntity<List<MealComposition>> compositionOfMeal(@PathVariable int recipe){
		HttpHeaders head = new HttpHeaders();
		head.add(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN,"http://localhost:4200");
		return new ResponseEntity<List<MealComposition>>(service.findByRecId(recipe),
				head, 
				HttpStatus.OK);
	}
	
	@PostMapping("/meal/save")
	public ResponseEntity<MealComposition> saveComposition(@Valid MealComposition mc){
		return new ResponseEntity<MealComposition>(service.save(mc),HttpStatus.CREATED);
	}
}
