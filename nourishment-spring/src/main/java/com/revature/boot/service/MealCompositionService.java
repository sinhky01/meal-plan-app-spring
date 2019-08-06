package com.revature.boot.service;

import java.util.List;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.boot.beans.MealComposition;
import com.revature.boot.data.MealCompositionRepository;

@Service
public class MealCompositionService {
	
	private static final Logger log = Logger.getLogger(MealCompositionService.class);
	
	@Autowired
	private MealCompositionRepository repo;
	
	public MealComposition save(MealComposition mc) {
		return repo.save(mc);
	}
	
	public List<MealComposition> findByRecId(int r_id){
		return repo.findByMealCompositionPkR_id(r_id);
	}
	
	public List<MealComposition> findByIngrId(int i_id){
		return repo.findByMealCompositionPkI_id(i_id);
	}
}
