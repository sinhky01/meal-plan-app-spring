package com.revature.boot.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.revature.boot.beans.Ingredient;
import com.revature.boot.beans.Recipe;
import com.revature.boot.beans.UserPreferences;
import com.revature.boot.beans.composites.UserPrefPk;

public interface UserPreferencesRepository extends JpaRepository<UserPreferences, UserPrefPk>{
	public List<UserPreferences> findByUserPrefPkUserId(int userId);
	
	public List<UserPreferences> findByUserPrefPkIngredientId(int ingredientId);
	
	/*
	@Query("select i from ingredient i join i.userpreferences up where up.marker = 1 and up.u_id = :id")
	public List<Ingredient> findByPreferred(int id);
	*/
	
	@Query("select i from Ingredient i join i.userPrefs up where up.marker = 1 and up.userPrefPk.userId = :id")
	public List<Ingredient> findByFavorited(int id);
}
