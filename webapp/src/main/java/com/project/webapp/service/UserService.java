package com.project.webapp.service;

import com.project.webapp.entity.Address;
import com.project.webapp.entity.AddressDTO;
import com.project.webapp.entity.User;
import com.project.webapp.entity.UserDTO;
import com.project.webapp.exception.ResourceNotFoundException;
import com.project.webapp.repo.AddressRepository;
import com.project.webapp.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    private UserRepository userRepository;
    private AddressRepository addressRepository;


    @Autowired
    public UserService(UserRepository userRepository, AddressRepository addressRepository) {
        this.userRepository = userRepository;
        this.addressRepository = addressRepository;
    }

    public List<UserDTO> getAllUserDTOs() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private UserDTO convertToDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setName(user.getName());
        userDTO.setSurname(user.getSurname());
        userDTO.setGender(user.getGender());
        userDTO.setBirthdate(user.getBirthdate());
        if (user.getAddress() != null) {
            userDTO.setAddress(new AddressDTO(user.getAddress().getWorkAddress(), user.getAddress().getHomeAddress()));
        }
        return userDTO;
    }

    public Optional<User> getUserById(int id) {
        return userRepository.findById(id);
    }

    @Transactional
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Transactional
    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

    @Transactional
    public UserDTO saveUserWithAddress(int userId, AddressDTO addressDTO) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        Address address = new Address(user, addressDTO.getWork(), addressDTO.getHome());
        addressRepository.save(address);
        user.setAddress(address);
        userRepository.save(user);

        AddressDTO savedAddressDTO = new AddressDTO(address.getWorkAddress(), address.getHomeAddress());
        return new UserDTO(user.getId(), user.getName(), user.getSurname(), user.getGender(), user.getBirthdate(), savedAddressDTO);
    }
}
