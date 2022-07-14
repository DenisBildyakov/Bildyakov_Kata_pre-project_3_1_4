package com.example.pp_3_1_4.service;

import com.example.pp_3_1_4.model.User;

import java.util.List;

public interface UserService {

    void addUser(User user);

    void editUser(User user, long id);

    void editUser(User user);

    List<User> findAllUsers();

    public void removeUserById(long id);

    public User findUserById(long id);

    public void updateUser(long id, User user);

    public User findByEmail (String email);
}
