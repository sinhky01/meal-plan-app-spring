package com.revature.boot.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.boot.beans.RecipeCharacteristic;
import com.revature.boot.beans.composites.RecipeCharacteristicPk;

@Repository
public interface RecipeCharacteristicRepository extends JpaRepository<RecipeCharacteristic, RecipeCharacteristicPk> {

	public List<RecipeCharacteristic> findByR_id();
	
	public List<RecipeCharacteristic> findByCharacteristic(String characteristic);
}
