package com.revature.boot.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.jboss.logging.Logger;

import com.revature.boot.service.UserService;

@RestController
public class UserController {

    private static final Logger log = Logger.getLogger(UserController.class);
     @Autowired
     private UserService service;




}


