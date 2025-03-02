package com.example.hello.controller;

import java.util.ArrayList;
import java.util.Dictionary;
import java.util.Hashtable;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.hello.EntityNotFoundException;

// reference_backend: https://www.bezkoder.com/spring-boot-jpa-crud-rest-api/
// reference_frontend: https://ithelp.ithome.com.tw/articles/10312869

@CrossOrigin(origins = "http://localhost:8000")
@RestController
@RequestMapping("/api")
public class compareResultController {
    @GetMapping("/v1/compare_get")
    public ResponseEntity<Dictionary<String, String>> findByProdID(@RequestParam(required = false) String prodId)  throws EntityNotFoundException {
        // try {
            Dictionary<String, String> wDictionary = new Hashtable<String, String>();
            wDictionary.put("CompareResult",prodId);
            // return new ResponseEntity<>(wDictionary, HttpStatus.OK);
            return new ResponseEntity<>(wDictionary, HttpStatus.BAD_REQUEST);
        // } catch (Exception e) {
        //     return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        // }
    }
    @GetMapping("/v1/compare_get_header")
    public ResponseEntity<Dictionary<String, String>> findByProdID_header(@RequestParam(required = false) String prodId,
    @RequestHeader(required=true)String ca)  throws EntityNotFoundException {
        // try {
            System.out.println("Hello Java:  "+ca);
            Dictionary<String, String> wDictionary = new Hashtable<String, String>();
            wDictionary.put("CompareResult",prodId);
            // return new ResponseEntity<>(wDictionary, HttpStatus.OK);
            return new ResponseEntity<>(wDictionary, HttpStatus.BAD_REQUEST);
        // } catch (Exception e) {
        //     return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        // }
    }
    
    @RequestMapping(value = "/v1/compare_post",method = RequestMethod.POST)
    public ResponseEntity<Dictionary<String, String>> findByProdID_1(@RequestBody(required = false) Map<String,String>  map)  throws EntityNotFoundException {
        // try {
            String email= map.get("email");
            String userAccount= map.get("userAccount");
            Dictionary<String, String> wDictionary = new Hashtable<String, String>();
            wDictionary.put("CompareResult",email);
            return new ResponseEntity<>(wDictionary, HttpStatus.OK);
        // } catch (Exception e) {
        //     return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        // }
    }
    
    @RequestMapping(value = "/v1/compare_request")
    public ResponseEntity<Dictionary<String, String>> findByProdID_2(@RequestBody(required = false) Map<String,String>  map)  throws EntityNotFoundException {
        // try {
            String email= map.get("email");
            String userAccount= map.get("userAccount");
            Dictionary<String, String> wDictionary = new Hashtable<String, String>();
            wDictionary.put("CompareResult",email);
            return new ResponseEntity<>(wDictionary, HttpStatus.OK);
        // } catch (Exception e) {
        //     return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        // }
    }

    @GetMapping("/v1/biz_compare_get")
    public ResponseEntity<Dictionary<String, Object>> biz_findByProdID(@RequestParam(required = false) String prodId)  throws EntityNotFoundException {
        // try {
            Dictionary<String, Object> wDictionary = new Hashtable<String, Object>();
            wDictionary.put("CompareResult",prodId);
            wDictionary.put("isSmpPart",true);
            return new ResponseEntity<>(wDictionary, HttpStatus.OK);
        // } catch (Exception e) {
        //     return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        // }
    }
    @GetMapping("/v1/biz_compare_get_header")
    public ResponseEntity<Dictionary<String, Object>> biz_findByProdID_header(@RequestParam(required = false) String prodId,
    @RequestHeader(required=true)String ca)  throws EntityNotFoundException {
        // try {
            System.out.println("Hello Java_biz:  "+ca);
            Dictionary<String, Object> wDictionary = new Hashtable<String, Object>();
            wDictionary.put("CompareResult",prodId);
            wDictionary.put("isSmpPart",true);
            // return new ResponseEntity<>(wDictionary, HttpStatus.OK);
            return new ResponseEntity<>(wDictionary, HttpStatus.BAD_REQUEST);
        // } catch (Exception e) {
        //     return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        // }
    }
    
    @RequestMapping(value = "/v1/biz_compare_post",method = RequestMethod.POST)
    public ResponseEntity<Dictionary<String, Object>> biz_findByProdID_1(@RequestBody(required = false) Map<String,String>  map)  throws EntityNotFoundException {
        // try {
            String email= map.get("email");
            String userAccount= map.get("userAccount");
            Dictionary<String, Object> wDictionary = new Hashtable<String, Object>();
            wDictionary.put("CompareResult",email);
            wDictionary.put("isSmpPart",true);
            return new ResponseEntity<>(wDictionary, HttpStatus.OK);
        // } catch (Exception e) {
        //     return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        // }
    }
    
    @RequestMapping(value = "/v1/biz_compare_request")
    public ResponseEntity<Dictionary<String, Object>> biz_findByProdID_2(@RequestBody(required = false) Map<String,String>  map)  throws EntityNotFoundException {
        // try {
            String email= map.get("email");
            String userAccount= map.get("userAccount");
            Dictionary<String, Object> wDictionary = new Hashtable<String, Object>();
            wDictionary.put("CompareResult",email);
            wDictionary.put("isSmpPart",true);
            return new ResponseEntity<>(wDictionary, HttpStatus.OK);
        // } catch (Exception e) {
        //     return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        // }
    }

}
