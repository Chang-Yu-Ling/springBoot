package com.example.hello.controller;

import java.util.ArrayList;
import java.util.Dictionary;
import java.util.Hashtable;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.hello.EntityNotFoundException;

// reference_backend: https://www.bezkoder.com/spring-boot-jpa-crud-rest-api/
// reference_frontend: https://ithelp.ithome.com.tw/articles/10312869

@CrossOrigin(origins = "http://localhost:8000")
@RestController
@RequestMapping("/api")
public class compareResultController {
    @GetMapping("/v1/compare")
    public ResponseEntity<Dictionary<String, String>> findByProdID(@RequestParam(required = false) String prodId)  throws EntityNotFoundException {
        // try {
            Dictionary<String, String> wDictionary = new Hashtable<String, String>();
            wDictionary.put("CompareResult",prodId);
            return new ResponseEntity<>(wDictionary, HttpStatus.OK);
        // } catch (Exception e) {
        //     return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        // }
    }

}
