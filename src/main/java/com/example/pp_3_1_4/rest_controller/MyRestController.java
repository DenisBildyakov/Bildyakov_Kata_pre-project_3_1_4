package com.example.pp_3_1_4.rest_controller;

import com.example.pp_3_1_4.model.Role;
import com.example.pp_3_1_4.model.User;
import com.example.pp_3_1_4.service.RoleService;
import com.example.pp_3_1_4.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api")
public class MyRestController {

    private final UserService userService;
    private final RoleService roleService;

    @Autowired
    public MyRestController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping("/users")
    public List<User> showAllUsers() {
        return userService.findAllUsers();
    }

    @GetMapping("/roles")
    public List<Role> showAllRoles() {
        return roleService.findAllRoles();
    }

    @GetMapping("/userinfo")
    public User showUserInfo(Principal principal) {
        return userService.findByEmail(principal.getName());
    }

    @PostMapping("/users/newuser")
    public User addNewUser(@RequestBody User user) {
        userService.addUser(user);
        return user;
    }

    @PutMapping("/users/edituser")
    public User editUser(@RequestBody User user) {
        userService.editUser(user);
        return user;
    }

    @DeleteMapping("/users/delete/{id}")
    public String deleteUser(@PathVariable(value = "id") long id) {
        userService.removeUserById(id);
        return "User with id " + id + " was deleted.";
    }
}
