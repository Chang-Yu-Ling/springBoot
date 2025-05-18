package com.example.hello.multithread;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import static java.lang.Thread.sleep;

public class MultiThreadExample {
    public static void main() {
        var now = new Date();
        var sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        ExecutorService executor = Executors.newFixedThreadPool(2);
        for (int i = 0; i < 10; i++) {
            executor.submit(() -> {
                try {
                    sleep(20000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                System.out.println(sdf.format(now)+"|"+"Task executed by: " + Thread.currentThread().getName());
            });
        }
        executor.shutdown();
    }
}
