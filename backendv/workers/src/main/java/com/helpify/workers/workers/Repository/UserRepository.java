package com.helpify.workers.workers.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.helpify.workers.workers.Model.userModel;


public interface UserRepository extends JpaRepository<userModel, Long> {
    userModel findByEmail(String email);
}