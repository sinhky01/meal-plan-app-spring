package com.revature.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.boot.beans.Recipe;
import com.revature.boot.service.RecipeService;

@RestController
@RequestMapping(value = "/api/v1/recipe/")
public class RecipeController {

	@Autowired
	private RecipeService service;
	
	@GetMapping("/view/{recipe}")
	public ResponseEntity<Recipe> findByRecipeId(@PathVariable int recipe) {
		HttpHeaders head = new HttpHeaders();
		head.add(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN,"http://localhost:4200");
		return new ResponseEntity<Recipe>(service.findByRecipeId(recipe), 
				head, 
				HttpStatus.OK);
	}
	
	@GetMapping("/view/all")
	public ResponseEntity<List<Recipe>> findAll() {
		HttpHeaders head = new HttpHeaders();
		head.add(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN,"http://localhost:4200");
		return new ResponseEntity<List<Recipe>>(service.findAll(),
				head,
				HttpStatus.OK);
	}
}
