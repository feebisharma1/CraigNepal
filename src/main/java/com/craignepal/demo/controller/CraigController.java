package com.craignepal.demo.controller;

import com.craignepal.demo.model.FormPost;
import com.craignepal.demo.service.CraigService;
import lombok.extern.java.Log;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/craig-nepal")
@Slf4j
public class CraigController{
    @Autowired
    CraigService craigService;
//    @Autowired
//    CraigService craigService;

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

    @GetMapping("/lists")
    public List<String> getCards(){
        List<String> arrCards = new ArrayList<>();
        return arrCards;
    }


    @PostMapping("/post-categories")
    public void postCategories(@RequestBody FormPost formPost){
        log.info("test endpint");
        log.info("datas"+formPost.toString());
        craigService.postCategories(formPost);

    }

}
