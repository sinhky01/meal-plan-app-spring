package com.revature.boot.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.boot.beans.UserPreferences;
import com.revature.boot.beans.composites.UserPrefPk;

public interface UserPreferencesRepository extends JpaRepository<UserPreferences, UserPrefPk>{
	public List<UserPreferences> findByU_id(int u_id);
	
	public List<UserPreferences> findByI_id(int i_id);
}
