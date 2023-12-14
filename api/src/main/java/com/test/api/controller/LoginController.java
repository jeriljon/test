package com.test.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.api.model.ApiResponse;
import com.test.api.model.UserAccount;
import com.test.api.repository.UserAccountRepository;

@RestController
@RequestMapping("/login")
public class LoginController {
	
	@Autowired
    private UserAccountRepository userAccountRepository;
	
	@GetMapping("/welcome")
    public String getBook() {
        return "Welcome to Login API";
    }
    
	@PostMapping("/{type}")
    public ResponseEntity<ApiResponse> login(@PathVariable String type, @RequestBody UserAccount user) {
        // You can use the 'type' variable to handle different types of logins
        System.out.println("Login type: " + type);

        // Find the user by username
        UserAccount foundUser = userAccountRepository.findByUserName(user.getUserName());

        // Check if user exists and password matches
        if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok(new ApiResponse("Login Successful"));
        } else {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(new ApiResponse("Login failed: Invalid username or password"));
            }
    }
	
	 @PostMapping("/register")
	    public ResponseEntity<ApiResponse> register(@RequestBody UserAccount newUser) {
	        // Check if username is already taken
	        if (userAccountRepository.findByUserName(newUser.getUserName()) != null) {
	        	return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new ApiResponse("Registration failed: Username is already taken"));
	        }

	        // Save the new user
	        userAccountRepository.save(newUser);
	        return ResponseEntity.ok(new ApiResponse("Login Successful"));
	    }
	
	
}
