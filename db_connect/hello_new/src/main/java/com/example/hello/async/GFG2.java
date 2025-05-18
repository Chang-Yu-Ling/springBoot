package com.example.hello.async;

//Java program to demonstrate Asynchronous
// Programming with Future and ExecutorService
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class GFG2 {

    public static void main() {
        var now = new Date();
        var sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        System.out.println(sdf.format(now)+"|");
        ExecutorService executor = Executors.newSingleThreadExecutor();
        Future<String> future = executor.submit(() -> {
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return sdf.format(now)+"Hello, Future!";
        });
        try {
            String result = future.get();
            System.out.println(sdf.format(now)+"The Result: " + result);
        } catch (Exception e) {
            e.printStackTrace();
        }
        executor.shutdown();
    }
}
