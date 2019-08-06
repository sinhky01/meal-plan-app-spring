package com.revature.boot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.boot.beans.UserPreferences;
import com.revature.boot.beans.composites.UserPrefPk;
import com.revature.boot.data.UserPreferencesRepository;

@Service
public class UserPreferencesService {
	
	@Autowired
	private UserPreferencesRepository repo;
	
	public List<UserPreferences> findByUserId(int id){
		return repo.findByU_id(id);
	}
	
	public UserPreferences save(UserPreferences up) {
		return repo.save(up);
	}
	
	public void delete(UserPreferences up) {
		repo.delete(up);
	}
	
	public UserPreferences findByPk(UserPrefPk pk) {
		return repo.findById(pk).get();
	}
}
