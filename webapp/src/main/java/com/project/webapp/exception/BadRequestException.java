package com.project.webapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "The parameters or something else is wrong")
public class BadRequestException extends RuntimeException {

    public BadRequestException(String message){
        super(message);
    }
}
