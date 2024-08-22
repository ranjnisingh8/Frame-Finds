package com.helpify.workers.workers.Service;

import java.util.List;

import com.helpify.workers.workers.Model.userModel;

public interface UserService {
    userModel saveUser(userModel doctor);

    List<userModel> getAllUsers();

    userModel findByEmail(String email);
    
}