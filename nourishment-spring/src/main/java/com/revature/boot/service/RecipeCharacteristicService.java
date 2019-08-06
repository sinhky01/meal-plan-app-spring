package com.revature.boot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.boot.beans.RecipeCharacteristic;
import com.revature.boot.data.RecipeCharacteristicRepository;

@Service
public class RecipeCharacteristicService {
	
	@Autowired
	private RecipeCharacteristicRepository repo;
	
	public RecipeCharacteristic save(RecipeCharacteristic rc) {
		return repo.save(rc);
	}
	
	public List<RecipeCharacteristic> findByR_id(int id){
		return repo.findByR_id();
	}
	
	public List<RecipeCharacteristic> findByCharacteristic(String characteristic){
		return repo.findByCharacteristic(characteristic);
	}
}
