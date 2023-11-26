package com.example.hello.service;

import org.springframework.stereotype.Service;

@Service
public class UserInformation {
    private String userName="456";
    public void setUserName(String name){
        this.userName=name;
    }
    public String getUserName(){
        return userName;
    }    
}

