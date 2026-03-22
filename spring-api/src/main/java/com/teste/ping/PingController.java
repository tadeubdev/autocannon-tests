package com.teste.ping;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClient;

import java.util.Map;

@RestController
public class PingController {
    private final UserRepository userRepository;
    private final RestClient restClient;

    public PingController(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.restClient = RestClient.create("http://localhost:3001");
    }

    @GetMapping("/ping")
    public String ping() {
        return "pong";
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return userRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/feed")
    public Map<?, ?> getFeed() {
        return restClient.get()
                .uri("/external")
                .retrieve()
                .body(Map.class);
    }
}
