package com.test.api.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.test.api.model.UserAccount;
import com.test.api.repository.UserAccountRepository;

@Service
public class UserAccountService {

    private final UserAccountRepository userAccountRepository;

    public UserAccountService(UserAccountRepository userAccountRepository) {
        this.userAccountRepository = userAccountRepository;
    }

    public Optional<UserAccount> getUserById(Long id) {
        return userAccountRepository.findById(id);
    }
}