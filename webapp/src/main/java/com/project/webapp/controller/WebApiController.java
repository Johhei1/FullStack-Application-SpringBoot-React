package com.project.webapp.controller;

import com.project.webapp.entity.AddressDTO;
import com.project.webapp.entity.User;
import com.project.webapp.entity.UserDTO;
import com.project.webapp.exception.BadRequestException;
import com.project.webapp.exception.ResourceNotFoundException;
import com.project.webapp.service.AddressService;
import com.project.webapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class WebApiController {

    private UserService userService;
    private AddressService addressService;

    @Autowired
    public WebApiController(UserService userService, AddressService addressService) {
        this.userService = userService;
        this.addressService = addressService;
    }

    @GetMapping
    public List<UserDTO> getAllUsers() {
        return userService.getAllUserDTOs();
    }

    @GetMapping("/{id}")
    public UserDTO getUserById(@PathVariable int id) {
        UserDTO userDTO = userService.getAllUserDTOs().stream()
                .filter(user -> user.getId() == id)
                .findFirst()
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
        return userDTO;
    }


    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
    }

    @PostMapping("/{userId}/address")
    public UserDTO addAddress(@PathVariable int userId, @RequestBody Map<String, String> request) {
        String homeAddress = request.get("homeAddress");
        String workAddress = request.get("workAddress");
        if (homeAddress == null || workAddress == null) {
            throw new BadRequestException("Both homeAddress and workAddress are required");
        }
        AddressDTO addressDTO = new AddressDTO(workAddress, homeAddress);
        return userService.saveUserWithAddress(userId, addressDTO);
    }

    @GetMapping("/{userId}/address")
    public AddressDTO getAddressesByUserId(@PathVariable int userId) {
        return addressService.getAddressByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Address not found for user id: " + userId));
    }
}
