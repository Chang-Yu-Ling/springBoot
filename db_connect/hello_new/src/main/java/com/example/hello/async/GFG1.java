package com.example.hello.async;

//Java program to demonstrate the use of the CompletableFuture
import java.text.SimpleDateFormat;
import java.util.concurrent.CompletableFuture;
import java.util.Date;
// reference : https://www.geeksforgeeks.org/asynchronous-programming-in-java/
public class GFG1 {

    public static void main() {
        var now = new Date();
        var sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        System.out.println(sdf.format(now)+"|");
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return sdf.format(now)+"Hello, CompletableFuture!";
        });
        future.thenAccept(result -> System.out.println(sdf.format(now)+"The Result: " + result));
        try {
            Thread.sleep(300);
            System.out.println(sdf.format(now)+"@");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
