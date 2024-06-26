package com.project.webapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "The user was not found")
public class ResourceNotFoundException extends RuntimeException{

    //Constructor
    public ResourceNotFoundException(String message){
        super(message);
    }
}
