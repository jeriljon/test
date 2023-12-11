package com.test.api.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.api.model.UserAccount;
import com.test.api.service.UserAccountService;

@RestController
@RequestMapping("user")
public class UserAccountController {
	

	private final UserAccountService userAccountService;

    public UserAccountController(UserAccountService userAccountService) {
        this.userAccountService = userAccountService;
    }

	@GetMapping("/welcome")
    public String getBook() {
        return "Welcome to User Account API";
    }
    
	@GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        return userAccountService.getUserById(id)
                .<ResponseEntity<?>>map(ResponseEntity::ok)  // Cast to ResponseEntity<?>
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).body("User Not Found"));
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<UserAccount>> getAllUsers() {
        List<UserAccount> users = userAccountService.getAllUsers();
        return ResponseEntity.ok(users);
    }

}
