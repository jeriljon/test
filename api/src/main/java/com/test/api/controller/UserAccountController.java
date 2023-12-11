package com.test.api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.api.model.UserAccount;
import com.test.api.service.UserAccountService;

@RestController
@RequestMapping("test")
public class UserAccountController {
	

	private final UserAccountService userAccountService;

    public UserAccountController(UserAccountService userAccountService) {
        this.userAccountService = userAccountService;
    }

	@GetMapping("/welcome")
    public String getBook() {
        return "Welcome to Test API";
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<UserAccount> getUserById(@PathVariable Long id) {
        return userAccountService.getUserById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}
