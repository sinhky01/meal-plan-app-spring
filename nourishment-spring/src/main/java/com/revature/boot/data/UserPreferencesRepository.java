package com.revature.boot.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.revature.boot.beans.Ingredient;
import com.revature.boot.beans.UserPreferences;
import com.revature.boot.beans.composites.UserPrefPk;

public interface UserPreferencesRepository extends JpaRepository<UserPreferences, UserPrefPk>{
	public List<UserPreferences> findByU_id(int u_id);
	
	public List<UserPreferences> findByI_id(int i_id);
	
	@Query("select i from ingredient i join i.userpreferences up where up.marker = 1 and up.u_id = :id")
	public List<Ingredient> findByPreferred(int id);
}
