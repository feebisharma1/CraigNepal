package com.craignepal.demo.service;

import com.craignepal.demo.entity.UserEntity;
import com.craignepal.demo.model.FormPost;
import com.craignepal.demo.repository.CraigRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CraigService{
    @Autowired
    CraigRepository craigRepository;
    public void postCategories(FormPost formPost){

        UserEntity userEntity = new UserEntity();
        userEntity.setName(formPost.getName());
        userEntity.setCategories(formPost.getCategories());
        userEntity.setDescription(formPost.getDescription());
        userEntity.setEmail(formPost.getEmail());
        userEntity.setPhoneNumber(formPost.getPhoneNumber());

        craigRepository.save(userEntity);
    }
}
