package com.craignepal.demo.repository;

import com.craignepal.demo.entity.UserEntity;
import com.craignepal.demo.model.FormPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CraigRepository extends JpaRepository<UserEntity, Integer>{
}
