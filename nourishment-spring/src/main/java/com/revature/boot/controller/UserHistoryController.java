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

import com.revature.boot.beans.Recipe;
import com.revature.boot.beans.UserHistory;
import com.revature.boot.beans.composites.UserHistoryPk;
import com.revature.boot.service.UserHistoryService;

@RestController
@RequestMapping(value = "/api/v1/history/")
public class UserHistoryController {

	private static final Logger log = Logger.getLogger(RecipeCharacteristicController.class);
	
	@Autowired
	private UserHistoryService service;
	
	@GetMapping("/user/{id}")
	public ResponseEntity<List<UserHistory>> getByUser(@PathVariable int id){
		return new ResponseEntity<List<UserHistory>>(service.findByUser(id),HttpStatus.OK);
	}
	
	@GetMapping("/user/{id}/favorited")
	public ResponseEntity<List<Recipe>> getFavorited(@PathVariable int id){
		return new ResponseEntity<List<Recipe>>(service.findByFavorited(id),HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}/{rec}")
	public ResponseEntity<Void> deleteRecipe(@PathVariable int id, @PathVariable int rec){
		service.delete(service.findByPk(new UserHistoryPk(id,rec)));
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@PostMapping("/save/{id}/{recipe}/{marker}")
	public ResponseEntity<UserHistory> saveHistory(@PathVariable int id, @PathVariable int recipe, @PathVariable int marker){
		return new ResponseEntity<UserHistory>(service.save(new UserHistory(new UserHistoryPk(id,recipe),marker,id,recipe)),HttpStatus.CREATED);
	}
}
