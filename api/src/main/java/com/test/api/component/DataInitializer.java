package com.test.api.component;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.test.api.model.UserAccount;
import com.test.api.repository.UserAccountRepository;

@Component
public class DataInitializer implements CommandLineRunner {

    private final UserAccountRepository userRepository;

    public DataInitializer(UserAccountRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        UserAccount user1 = new UserAccount();
        user1.setId(1L);
        user1.setUserName("John");
        user1.setPassword("John123");
        userRepository.save(user1);
        
        UserAccount user2 = new UserAccount();
        user2.setId(2L);
        user2.setUserName("Matt");
        user2.setPassword("Matt123");
        userRepository.save(user2);
        
        UserAccount user3 = new UserAccount();
        user3.setId(3L);
        user3.setUserName("Bob");
        user3.setPassword("Bob123");
        userRepository.save(user3);
        
        UserAccount user4 = new UserAccount();
        user4.setId(4L);
        user4.setUserName("Susan");
        user4.setPassword("Susan123");
        userRepository.save(user4);
        
        UserAccount user5 = new UserAccount();
        user5.setId(5L);
        user5.setUserName("Ravi");
        user5.setPassword("Ravi123");
        userRepository.save(user5);
    }
}