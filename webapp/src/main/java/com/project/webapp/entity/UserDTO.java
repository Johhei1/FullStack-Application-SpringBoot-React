package com.project.webapp.entity;

import java.time.LocalDate;
import java.util.Date;

public class UserDTO {
    private int id;
    private String name;
    private String surname;
    private char gender;
    private LocalDate birthdate;
    private AddressDTO address;

    public UserDTO() {
    }

    public UserDTO(int id, String name, String surname, char gender, LocalDate birthdate, AddressDTO address) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.birthdate = birthdate;
        this.address = address;
    }

    // Getters and Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public LocalDate getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(LocalDate birthdate) {
        this.birthdate = birthdate;
    }

    public AddressDTO getAddress() {
        return address;
    }

    public void setAddress(AddressDTO address) {
        this.address = address;
    }
}
