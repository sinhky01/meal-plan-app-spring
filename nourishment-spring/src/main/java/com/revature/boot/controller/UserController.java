package com.revature.boot.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.jboss.logging.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.revature.boot.service.UserService;
import com.revature.boot.beans.User;
import javax.validation.Valid;

@RestController
public class UserController {

    private static final Logger log = Logger.getLogger(UserController.class);
     @Autowired
     private UserService service;

    @PostMapping("/user")
    public ResponseEntity<User> save(@Valid @RequestBody User user){

        return new ResponseEntity<User>(service.save(user), HttpStatus.CREATED);

    }


}


