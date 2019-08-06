package com.revature.boot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.boot.beans.UserHistory;
import com.revature.boot.beans.composites.UserHistoryPk;
import com.revature.boot.data.UserHistoryRepository;

@Service
public class UserHistoryService {

	@Autowired
	private UserHistoryRepository repo;
	
	public List<UserHistory> findByUser(int id){
		return repo.findByU_id(id);
	}
	
	public List<UserHistory> findByRec(int r_id){
		return repo.findByR_id(r_id);
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
