package com.helpify.workers.workers.ServiceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.helpify.workers.workers.Model.userModel;
import com.helpify.workers.workers.Repository.UserRepository;
import com.helpify.workers.workers.Service.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public userModel saveUser(userModel doctor) {
        return userRepository.save(doctor);
    }

    @Override
    public List<userModel> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public userModel findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    
}
