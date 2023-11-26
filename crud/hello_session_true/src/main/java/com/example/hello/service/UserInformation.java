package com.example.hello.service;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
// reference : https://stackoverflow.com/questions/29413290/how-exactly-works-the-spring-session-scope-of-a-bean-what-is-the-default-scope
// reference: https://stackoverflow.com/questions/76652537/session-storage-in-java

// @Service
@Component
@Scope(value = "session", proxyMode = ScopedProxyMode.TARGET_CLASS) 

public class UserInformation {
    private String userName="456";
    public void setUserName(String name){
        this.userName=name;
    }
    public String getUserName(){
        return userName;
    }    
}

