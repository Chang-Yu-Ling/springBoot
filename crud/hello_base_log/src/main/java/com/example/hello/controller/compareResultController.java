package com.example.hello.controller;

import java.util.ArrayList;
import java.util.Dictionary;
import java.util.Hashtable;

// import org.apache.logging.log4j.Logger;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

		//private static final Logger logger = (Logger) LoggerFactory.getLogger(compareResultController.class);
        Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping("/v1/compare")
    public ResponseEntity<Dictionary<String, String>> findByProdID(@RequestParam(required = false) String prodId) {
        try {
            Dictionary<String, String> wDictionary = new Hashtable<String, String>();
            wDictionary.put("CompareResult",prodId);


            // logger.trace("trace");
            // logger.debug("debug");
            // logger.info("info");
            // logger.warn("warn");
            // logger.error("error");

            logger.info("info");

            if(prodId==""){
                logger.error("prodId==null");
            }

            return new ResponseEntity<>(wDictionary, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
