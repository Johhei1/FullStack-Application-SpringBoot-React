package com.project.webapp;

import com.project.webapp.entity.User;
import com.project.webapp.service.AddressService;
import com.project.webapp.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class WebappApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebappApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(UserService userService, AddressService addressService){

		return runner -> {
			//createUser(userService, addressService);
		};
	}

	private void createUser(UserService userService, AddressService addressService) {

//		String dateString = "2024-06-04";
//		java.sql.Date date = java.sql.Date.valueOf(dateString);
//		User newUser = new User("Ioannis","Kostidis",'M',date);
//		userService.saveUser(newUser);
	}

}
