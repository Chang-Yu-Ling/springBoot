package com.example.hello.controller;

import java.util.ArrayList;
import java.util.Dictionary;
import java.util.Hashtable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.hello.service.UserInformation;

import jakarta.servlet.http.HttpServletRequest;

// reference_backend: https://www.bezkoder.com/spring-boot-jpa-crud-rest-api/
// reference_frontend: https://ithelp.ithome.com.tw/articles/10312869

@CrossOrigin(origins = "http://localhost:8000")
@RestController
@RequestMapping("/api")
public class testGlobal {
    @Autowired
    private UserInformation user;
    
    @GetMapping("/v1/compare2")
    public ResponseEntity<Dictionary<String, String>> findByProdID2(@RequestParam(required = false) String prodId, HttpServletRequest request) {
        try {
            System.out.println(request.getSession().getAttribute("UserName"));
            // System.out.println(request.getAttribute("UserName")); // null

            // String name=user.getUserName();
            // System.out.println(name);
            Dictionary<String, String> wDictionary = new Hashtable<String, String>();
            wDictionary.put("CompareResult",prodId);
            return new ResponseEntity<>(wDictionary, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
