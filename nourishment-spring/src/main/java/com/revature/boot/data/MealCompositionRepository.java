package com.revature.boot.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.boot.beans.MealComposition;

@Repository
public interface MealCompositionRepository extends JpaRepository<MealComposition, Integer>{
	
	public List<MealComposition> findByR_id(int r_id);
	
	public List<MealComposition> findByI_id(int i_id);
}
