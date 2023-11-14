package com.example.hello.error;

public class ResourceNotFoundException  extends RuntimeException {
    public ResourceNotFoundException(String msg) {
        super(msg);
      }
}