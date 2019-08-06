package com.revature.boot.beans;

import javax.persistence.*;

@Entity
@Table(name = "userPrefs")
public class UserPreferences {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int pref_id;
}
