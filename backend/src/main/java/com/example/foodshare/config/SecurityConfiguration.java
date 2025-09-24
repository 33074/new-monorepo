package com.example.foodshare.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())  // disable CSRF
            .authorizeHttpRequests(auth -> auth.anyRequest().permitAll()) // allow all requests
            .httpBasic(httpBasic -> httpBasic.disable()); // disable basic auth login prompt
        return http.build();
    }
}
