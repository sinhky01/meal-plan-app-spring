package com.revature.boot.service;

import java.util.ArrayList;
import java.util.List;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.boot.beans.Recipe;
import com.revature.boot.beans.UserHistory;
import com.revature.boot.beans.composites.UserHistoryPk;
import com.revature.boot.controller.CharacteristicController;
import com.revature.boot.data.UserHistoryRepository;

@Service
public class UserHistoryService {
	
	private static final Logger log = Logger.getLogger(CharacteristicController.class);

	@Autowired
	private UserHistoryRepository repo;
	
	public List<UserHistory> findByUser(int id){
		return repo.findByUserHistoryPkUserId(id);
	}
	
	public List<String> findByFavorited(int id){
		List<Recipe> recList = repo.findByFavorited(id);
		List<String> nameList = new ArrayList<String>();
		for(Recipe r: recList) {
			nameList.add(r.getName());
		}
		return nameList;
	}
	
	public List<UserHistory> findByRec(int r_id){
		return repo.findByUserHistoryPkRecipeId(r_id);
	}
	
	public UserHistory findByPk(UserHistoryPk histpk) {
		return repo.findById(histpk).get();
	}
	
	public UserHistory save(UserHistory hist) {
		return repo.save(hist);
	}
	
	public void delete(UserHistory hist) {
		repo.delete(hist);
	}
}
