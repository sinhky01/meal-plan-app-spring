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

import com.revature.boot.service.MealCompositionService;
import com.revature.boot.service.CharacteristicService;

@RestController
@RequestMapping(value = "/api/v1/characteristic/")
public class CharacteristicController {
	
	private static final Logger log = Logger.getLogger(CharacteristicController.class);
	
	@Autowired
	private CharacteristicService service;
	
	
	
}
