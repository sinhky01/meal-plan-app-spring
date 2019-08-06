package com.revature.boot.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.boot.beans.Recipe;
import com.revature.boot.beans.UserHistory;
import com.revature.boot.beans.composites.UserHistoryPk;

@Repository
public interface UserHistoryRepository extends JpaRepository<UserHistory, UserHistoryPk>{
	
	public List<UserHistory> findByU_id(int u_id);
	
	public List<UserHistory> findByR_id(int r_id);
	
	
	@Query(value = "SELECT r_id, rname, recipe FROM recipe INNER JOIN recipe_characteristic WHERE marker=1", nativeQuery = true)
	public List<Recipe> findByFavorited(int u_id);
	
	
}
