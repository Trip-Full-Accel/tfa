package com.tfa.TripFullAccel.controller;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class MainController {
	
    @GetMapping("/api/hello")
    public String Hello(){
    	System.out.println("hello");
        return "현재 서버시간" + new Date() + "입니다.";
    }
}
