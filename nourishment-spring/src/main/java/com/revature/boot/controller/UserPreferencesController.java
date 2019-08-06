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

import com.revature.boot.beans.UserPreferences;
import com.revature.boot.beans.composites.UserPrefPk;
import com.revature.boot.service.UserPreferencesService;

@RestController
@RequestMapping(value = "/api/v1/preferences/")
public class UserPreferencesController {
	
	private static final Logger log = Logger.getLogger(RecipeCharacteristicController.class);
	
	@Autowired
	private UserPreferencesService service;
	
	@GetMapping("/history/{id}")
	public ResponseEntity<List<UserPreferences>> findByUserId(@PathVariable int id){
		return new ResponseEntity<List<UserPreferences>>(service.findByUserId(id),HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}/{ingr}")
	public ResponseEntity<Void> deletePref(@PathVariable int id, @PathVariable int ingr){
		UserPrefPk pk = new UserPrefPk(id,ingr);
		service.delete(service.findByPk(pk));
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		
	}
	
	@PostMapping("/save/{id}/{ingredient}/{marker}")
	public ResponseEntity<UserPreferences> savePref(@PathVariable int id,@PathVariable int ingredient, @PathVariable int marker){
		UserPreferences up = new UserPreferences(new UserPrefPk(id,ingredient),id,ingredient,marker);
		return new ResponseEntity<UserPreferences>(service.save(up),HttpStatus.CREATED);
	}
}
