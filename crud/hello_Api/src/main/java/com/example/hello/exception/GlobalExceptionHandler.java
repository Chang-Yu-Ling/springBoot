package com.example.hello.exception;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.ServletWebRequest;
// import org.springframework.web.reactive.result.method.annotation.ResponseEntityExceptionHandler;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice

public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    
    // @Override
    @ExceptionHandler(handleNoHandlerFoundException.class)

    protected ResponseEntity<Object> handleNoHandlerFoundException(
        NoHandlerFoundException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {

 String path = ((ServletWebRequest) request).getRequest().getRequestURI();
//return new ResponseEntity<>(new ErrorResponse(status, ex.getLocalizedMessage(), path, ex.getMessage()), status);
return new ResponseEntity<>(new ErrorResponse(status, "123", path, ex.getMessage()), status);

    }
}
