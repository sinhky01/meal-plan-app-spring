package com.revature.boot.beans;

import javax.persistence.*;

@Entity
@Table(name = "userHist")
public class UserHistory {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
    private int hist_id;

}
