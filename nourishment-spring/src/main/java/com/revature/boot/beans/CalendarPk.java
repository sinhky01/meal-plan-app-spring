package com.revature.boot.beans;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Embeddable
public class CalendarPk implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2914077051235336327L;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "datetime")
	private Date dateTime;
	
	@Column(name = "u_id")
	private int userId;
	
	public CalendarPk() {
		
	}
	
	public CalendarPk(Date dateTime, int userId) {
		super();
		this.dateTime = dateTime;
		this.userId = userId;
	}

	public Date getDateTime() {
		return dateTime;
	}

	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	@Override
    public boolean equals(Object o) {
		if (this == o) return true;
        if (!(o instanceof CalendarPk)) return false;
        CalendarPk that = (CalendarPk) o;
        return Objects.equals(getDateTime(), that.getDateTime()) &&
                Objects.equals(getUserId(), that.getUserId());
	}
	
	@Override
    public int hashCode() {
        return Objects.hash(getDateTime(), getUserId());
    }
}
