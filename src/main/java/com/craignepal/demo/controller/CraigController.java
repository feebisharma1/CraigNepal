package com.craignepal.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/craig-nepal")
public class CraigController{
    @GetMapping("/jobs")
    public List<String> getJobs(){
        List<String> arrList = new ArrayList<>();
        arrList.add("Accountant");
        arrList.add("Beauty/Salon");
        arrList.add("Education");
        arrList.add("Medical/Health");
        arrList.add("Security");
        return arrList;
    }
}
