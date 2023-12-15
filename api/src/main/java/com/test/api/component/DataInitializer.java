package com.test.api.component;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;

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
        user1.setEmail("john@email.com");
        user1.setUserName("John");
        user1.setPassword("John123");
        OffsetDateTime createdOnDateTime = LocalDateTime.of(2023, 3, 20, 13, 0) // yyyy, MM, dd, HH, mm
        	    .atOffset(ZoneOffset.ofHours(-5)); // EST is UTC-5
        user1.setCreatedOn(createdOnDateTime);
        userRepository.save(user1);
        
        UserAccount user2 = new UserAccount();
        user2.setId(2L);
        user2.setEmail("matt@email.com");
        user2.setUserName("Matt");
        user2.setPassword("Matt123");
        OffsetDateTime createdOnDateTime2 = LocalDateTime.of(2021, 11, 14, 11, 5) // yyyy, MM, dd, HH, mm
        	    .atOffset(ZoneOffset.ofHours(-5)); // EST is UTC-5
        user2.setCreatedOn(createdOnDateTime2);
        userRepository.save(user2);
        
        UserAccount user3 = new UserAccount();
        user3.setId(3L);
        user3.setEmail("bob@email.com");
        user3.setUserName("Bob");
        user3.setPassword("Bob123");
        OffsetDateTime createdOnDateTime3 = LocalDateTime.of(2022, 1, 12, 9, 17) // yyyy, MM, dd, HH, mm
        	    .atOffset(ZoneOffset.ofHours(-5)); // EST is UTC-5
        user3.setCreatedOn(createdOnDateTime3);
        userRepository.save(user3);
        
        UserAccount user4 = new UserAccount();
        user4.setId(4L);
        user4.setEmail("susan@email.com");
        user4.setUserName("Susan");
        user4.setPassword("Susan123");
        OffsetDateTime createdOnDateTime4 = LocalDateTime.of(2020, 2, 17, 33, 19) // yyyy, MM, dd, HH, mm
        	    .atOffset(ZoneOffset.ofHours(-5)); // EST is UTC-5
        user4.setCreatedOn(createdOnDateTime4);
        userRepository.save(user4);
        
        UserAccount user5 = new UserAccount();
        user5.setId(5L);
        user5.setEmail("ravi@email.com");
        user5.setUserName("Ravi");
        user5.setPassword("Ravi123");
        OffsetDateTime createdOnDateTime5 = LocalDateTime.of(2023, 8, 21, 43, 7) // yyyy, MM, dd, HH, mm
        	    .atOffset(ZoneOffset.ofHours(-5)); // EST is UTC-5
        user5.setCreatedOn(createdOnDateTime5);
        userRepository.save(user5);
    }
}