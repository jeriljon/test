package com.test.api.model;

import java.time.OffsetDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "USER_ACCOUNT")
public class UserAccount {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
	private String email;
    private String userName;
    private String password;
    private OffsetDateTime createdOn;

    public UserAccount(long id, String email, String userName, String password, OffsetDateTime createdOn) {
        this.id = id;
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.createdOn = createdOn;
    }

    public UserAccount() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
    
    public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

	public OffsetDateTime getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(OffsetDateTime createdOn) {
		this.createdOn = createdOn;
	}
    
    
}