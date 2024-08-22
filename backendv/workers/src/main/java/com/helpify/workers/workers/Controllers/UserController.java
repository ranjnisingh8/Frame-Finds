package com.helpify.workers.workers.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.helpify.workers.workers.Model.userModel;
import com.helpify.workers.workers.Service.UserService;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/findByMail/{email}")
    public userModel findByEmail(@PathVariable String email) {
        return userService.findByEmail(email);
    }

    @PostMapping("/login")
    public boolean isValidDoctor(@RequestBody LoginBody loginBody) {
        userModel doctor = userService.findByEmail(loginBody.getEmail());
        if (doctor != null && doctor.getPassword().equals(loginBody.getPassword())) {
            return true;
        }
        return false;
    }

    @PostMapping("/register")
    public userModel registerDoctor(@RequestBody userModelss userModel) {

        userModel doctor = new userModel();
        doctor.setFullName(userModel.getFullName());
        doctor.setGender(userModel.getGender());
        doctor.setEmail(userModel.getEmail());
        doctor.setMobileNo(userModel.getMobileNo());
        doctor.setPassword(userModel.getPassword());

        return userService.saveUser(doctor);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/all")
    public List<userModel> getAllUsers() {
        return userService.getAllUsers();
    }

    public String getMethodName(@RequestParam String param) {
        return new String();
    }

}

class userModelss {
    private String fullName;

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    private String gender;
    private String email;
    private String password;
    private String mobileNo;
}

class LoginBody {
    private String email;
    private String password;

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
