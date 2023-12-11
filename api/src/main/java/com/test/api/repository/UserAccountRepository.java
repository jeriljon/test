package com.test.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.api.model.UserAccount;

public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {
	
	UserAccount findByUserName(String userName);


}