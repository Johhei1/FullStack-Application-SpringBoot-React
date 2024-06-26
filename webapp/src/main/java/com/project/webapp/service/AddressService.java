package com.project.webapp.service;

import com.project.webapp.entity.Address;
import com.project.webapp.entity.AddressDTO;
import com.project.webapp.entity.User;
import com.project.webapp.exception.ResourceNotFoundException;
import com.project.webapp.repo.AddressRepository;
import com.project.webapp.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Service
public class AddressService {
    private AddressRepository addressRepository;
    private UserRepository userRepository;

    @Autowired
    public AddressService(AddressRepository addressRepository, UserRepository userRepository) {
        this.addressRepository = addressRepository;
        this.userRepository = userRepository;
    }

    public Optional<AddressDTO> getAddressByUserId(int userId) {
        return addressRepository.findByUserId(userId)
                .map(address -> new AddressDTO(address.getWorkAddress(), address.getHomeAddress()));
    }

//    @Transactional
//    public Address saveAddress(int userId, String home, String work) {
//        User user = userRepository.findById(userId)
//                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
//
//        Address address = new Address();
//        if (home!= null) {
//            address.setHomeAddress(home);
//        }
//        if (work!= null) {
//            address.setWorkAddress(work);
//        }
//
//        user.setAddress(address);
//        address.setUserId(userId);
//
//        userRepository.save(user);
//
//        return address;
//    }

}
