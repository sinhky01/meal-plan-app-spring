package com.revature.boot.data;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.boot.beans.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	public User findById(int userId);
	
	@Query("select u from User u where u.username = :username and u.password = :password")
	public User checkLogin(String username, String password);
}