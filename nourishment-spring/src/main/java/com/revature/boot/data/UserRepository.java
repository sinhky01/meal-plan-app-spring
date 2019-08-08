package com.revature.boot.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.boot.beans.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	public User findById(int userId);
}
