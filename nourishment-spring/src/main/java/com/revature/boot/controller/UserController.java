package com.revature.boot.controller;

import java.util.List;

import javax.validation.Valid;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.boot.beans.User;
import com.revature.boot.service.UserService;

@RestController
@RequestMapping(value = "/api/v1/user/")
@CrossOrigin
public class UserController {
	private static final Logger log = Logger.getLogger(UserController.class);
    @Autowired
    private UserService service;

   @PostMapping("/user")
   public ResponseEntity<User> save(@Valid @RequestBody User user){

       return new ResponseEntity<User>(service.save(user), HttpStatus.CREATED);

   }

   @GetMapping("/{userId}")
       public ResponseEntity<User> getUser(@PathVariable int userId)
       {
           return new ResponseEntity<User>(service.getUserById(userId), HttpStatus.OK);
       }

   @DeleteMapping("/user/{userId}")
   public ResponseEntity<Void> delete(@PathVariable int userId)
   {
       service.delete(service.getUserById(userId));
       return new ResponseEntity<>(HttpStatus.NO_CONTENT);
   }
   
   @PostMapping("/login")
   public ResponseEntity<User> login2(@RequestParam("user")@Valid String username){
	   User u = service.loginCheck(username);
	   //System.out.println("hit controller method");
//	   HttpHeaders head = new HttpHeaders();
//	   head.add(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN,"http://localhost:4200");
//	   return new ResponseEntity<User>(u,head,HttpStatus.OK);
	   return new ResponseEntity<User>(u,HttpStatus.OK);
	   
   }
   
//   @PostMapping("/login")
//   public ResponseEntity<User> login(@RequestBody@Valid String username){
//	   User u = service.loginCheck(username);
//	   System.out.println("hit controller method");
//	   return new ResponseEntity<User>(u,HttpStatus.OK);
//	   
//	   
////	   if(u!=null) {
////		   return new ResponseEntity<User>(u,HttpStatus.OK);
////	   }
////	   else {
////		   return new ResponseEntity<User>(u,HttpStatus.OK);
////	   }
//   }
}
