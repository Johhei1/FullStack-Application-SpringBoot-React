package com.project.webapp.entity;

public class AddressDTO {

    private String work;
    private String home;

    public AddressDTO() {
    }

    public AddressDTO(String home, String work) {
        this.work = work;
        this.home = home;
    }

    public String getWork() {
        return work;
    }

    public void setWork(String work) {
        this.work = work;
    }

    public String getHome() {
        return home;
    }

    public void setHome(String home) {
        this.home = home;
    }

}
