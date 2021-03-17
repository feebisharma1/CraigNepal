package com.craignepal.demo.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@ToString
@Entity
public class UserEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;

    String name;
    String email;
    int phoneNumber;
    String categories;
    String description;
}
