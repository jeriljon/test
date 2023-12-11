package com.test.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.api.model.UserAccount;
import com.test.api.repository.UserAccountRepository;

@RestController
@RequestMapping("/login")
public class LoginController {
	
	@Autowired
    private UserAccountRepository userAccountRepository;


	@PostMapping("/{type}")
    public ResponseEntity<String> login(@PathVariable String type, @RequestBody UserAccount user) {
        // You can use the 'type' variable to handle different types of logins
        System.out.println("Login type: " + type);

        // Find the user by username
        UserAccount foundUser = userAccountRepository.findByUserName(user.getUserName());

        // Check if user exists and password matches
        if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok("Login Successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed: Invalid username or password");
        }
    }
	
	
}
