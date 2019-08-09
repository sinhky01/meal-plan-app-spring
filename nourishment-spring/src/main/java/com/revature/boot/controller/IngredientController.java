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

import com.revature.boot.beans.Ingredient;
import com.revature.boot.service.IngredientService;

@RestController
@RequestMapping(value = "/api/v1/ingredients/")
public class IngredientController {
	
	@Autowired
	private IngredientService service;

	@GetMapping("/meal/{recipe}")
	public ResponseEntity<List<Ingredient>> ingredientDetailOfRecipe(@PathVariable int recipe) {
		HttpHeaders head = new HttpHeaders();
		head.add(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN,"http://localhost:4200");
		return new ResponseEntity<List<Ingredient>>(service.ingredientDetailByRecipe(recipe),
				head, 
				HttpStatus.OK);
	}
}
