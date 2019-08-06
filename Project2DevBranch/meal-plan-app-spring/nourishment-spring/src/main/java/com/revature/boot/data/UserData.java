package com.revature.boot.data;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

import com.revature.boot.beans.User;

@Repository
public class UserData{

    @Autowired
    private SessionFactory sf;

    @Transactional
    public User save(User user) {
        sf.getCurrentSession().save(user);
        return user;
    }

    @Transactional
    public void delete(User user)
    {
        sf.getCurrentSession().delete(user);
    }

    @Transactional
    public User getUserById(int id)
    {
        return (User) sf.getCurrentSession().get(User.class, id);
    }

}
