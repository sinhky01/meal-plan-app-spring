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
	
	public List<UserHistory> findByUserHistoryPkUserId(int userId);
	
	public List<UserHistory> findByUserHistoryPkRecipeId(int recipeId);
	
	/*
	@Query("select r from Recipe r JOIN r.history uh WHERE uh.marker=1 AND uh.u_id= :u_id")
	//@Query(value = "SELECT r_id, rname, recipe FROM recipe INNER JOIN recipe_characteristic WHERE marker=1", nativeQuery = true)
	public List<Recipe> findByFavorited(int u_id);
	
	*/
	
}
