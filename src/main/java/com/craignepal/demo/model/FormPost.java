package com.craignepal.demo.model;

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
public class FormPost{
    int id;
    String name;
    String email;
    int phoneNumber;
    String categories;
    String description;
}
