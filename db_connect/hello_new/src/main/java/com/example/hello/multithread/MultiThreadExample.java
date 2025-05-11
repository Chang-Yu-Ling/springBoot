package com.example.hello.multithread;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class MultiThreadExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(5);
        for (int i = 0; i < 10; i++) {
            executor.submit(() -> {
                System.out.println("Task executed by: " + Thread.currentThread().getName());
            });
        }
        executor.shutdown();
    }
}
