package com.revature.boot.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.boot.beans.UserHistory;
import com.revature.boot.beans.composites.UserHistoryPk;

@Repository
public interface UserHistoryRepository extends JpaRepository<UserHistory, UserHistoryPk>{
	
	public List<UserHistory> findByU_id(int u_id);
	
	public List<UserHistory> findByR_id(int r_id);
}
