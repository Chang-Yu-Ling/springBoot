package com.example.hello.controller;

import java.util.*;

import com.example.hello.async.GFG1;
import com.example.hello.async.GFG2;
import com.example.hello.multithread.MultiThreadExample;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// reference_backend: https://www.bezkoder.com/spring-boot-jpa-crud-rest-api/
// reference_frontend: https://ithelp.ithome.com.tw/articles/10312869

@CrossOrigin(origins = "http://localhost:8000")
@RestController
@RequestMapping("/api")
public class compareResultController {


    @Autowired
    private JdbcTemplate jdbcTemplate;
    @GetMapping("/v1/compare")
    public ResponseEntity<Dictionary<String, String>> findByProdID(@RequestParam(required = false) String prodId) {
        try {
            Dictionary<String, String> wDictionary = new Hashtable<String, String>();
            wDictionary.put("CompareResult",prodId);
            return new ResponseEntity<>(wDictionary, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/v1/dbconnection")
    public ResponseEntity<Dictionary<String, String>> findDbConection(@RequestParam(required = false) String prodId) {
        try {
            Dictionary<String, String> wDictionary = new Hashtable<String, String>();
            wDictionary.put("CompareResult",prodId);

            List<Map<String, Object>> n = jdbcTemplate.queryForList("SELECT COUNT(*) FROM QA_0");
            System.out.println(n);

            return new ResponseEntity<>(wDictionary, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/v1/sync")
    public ResponseEntity<Dictionary<String, String>> findSync(@RequestParam(required = false) String prodId) {
        try {
            Dictionary<String, String> wDictionary = new Hashtable<String, String>();
            wDictionary.put("CompareResult",prodId);

            MultiThreadExample.main();

            return new ResponseEntity<>(wDictionary, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/v1/sync_1")
    public ResponseEntity<Dictionary<String, String>> findSync_1(@RequestParam(required = false) String prodId) {
        try {
            Dictionary<String, String> wDictionary = new Hashtable<String, String>();
            wDictionary.put("CompareResult",prodId);

            GFG1.main();

            return new ResponseEntity<>(wDictionary, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/v1/sync_2")
    public ResponseEntity<Dictionary<String, String>> findSync_2(@RequestParam(required = false) String prodId) {
        try {
            Dictionary<String, String> wDictionary = new Hashtable<String, String>();
            wDictionary.put("CompareResult",prodId);

            GFG2.main();

            return new ResponseEntity<>(wDictionary, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
