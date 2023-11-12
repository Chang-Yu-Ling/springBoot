package com.example.hello.exception;


import lombok.Data;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonFormat;

@Getter
@Setter
public class ErrorResponse  {
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private Date timestamp;
    private int code;
    private String status;
    private Object message;
    private String path;
    private String stackTrace;


    public ErrorResponse() {
        timestamp = new Date();
    }

    public ErrorResponse(HttpStatus httpStatus, Object message) {
        this();

        this.code = httpStatus.value();
        this.status = httpStatus.name();
        this.message = message;
    }

    public ErrorResponse(HttpStatus httpStatus, Object message, String path) {
        this(httpStatus, message);
        this.path = path;
    }

    public ErrorResponse(HttpStatus httpStatus, Object message, String path, String stackTrace) {
        this(httpStatus, message, path);
        this.stackTrace = stackTrace;
    }
}
