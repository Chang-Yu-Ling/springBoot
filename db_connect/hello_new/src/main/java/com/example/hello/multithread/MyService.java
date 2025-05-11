package com.example.hello.multithread;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class MyService {
    @Async
    public void processData() {
        // Runs in a separate thread
        System.out.println("Processing in thread: " + Thread.currentThread().getName());
    }
}
