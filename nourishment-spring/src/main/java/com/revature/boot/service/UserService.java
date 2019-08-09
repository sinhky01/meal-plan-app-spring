package com.revature.boot.service;

import org.springframework.stereotype.Service;
import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import com.revature.boot.beans.User;
import com.revature.boot.data.UserRepository;
@Service
public class UserService {

    private static final Logger log = Logger.getLogger(UserService.class);

    @Autowired
    private UserRepository repo;

    public User save(User user)
    {
        return repo.save(user);
    }

    public User getUserById(int u_id)
    {
        return repo.findById(u_id);
    }

    public void delete(User user)
    {
        repo.delete(user);
    }
    
    public User loginCheck(String username, String password) {
    	return repo.checkLogin(username, password);
    }

}