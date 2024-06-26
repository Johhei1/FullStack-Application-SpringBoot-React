package com.project.webapp.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "address")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "work_address")
    private String workAddress;

    @Column(name = "home_address")
    private String homeAddress;

    // Constructors
    public Address(User user, String workAddress, String homeAddress) {
        this.user = user;
        this.workAddress = workAddress;
        this.homeAddress = homeAddress;
    }

    public Address() {
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getWorkAddress() {
        return workAddress;
    }

    public void setWorkAddress(String workAddress) {
        this.workAddress = workAddress;
    }

    public String getHomeAddress() {
        return homeAddress;
    }

    public void setHomeAddress(String homeAddress) {
        this.homeAddress = homeAddress;
    }

    // toString() method
    @Override
    public String toString() {
        return "Address{" +
                "id=" + id +
                ", user=" + user +
                ", workAddress='" + workAddress + '\'' +
                ", homeAddress='" + homeAddress + '\'' +
                '}';
    }
}
