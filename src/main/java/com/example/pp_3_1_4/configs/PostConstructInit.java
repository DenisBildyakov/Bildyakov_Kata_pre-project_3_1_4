package com.example.pp_3_1_4.configs;

import com.example.pp_3_1_4.model.Role;
import com.example.pp_3_1_4.model.User;
import com.example.pp_3_1_4.service.RoleService;
import com.example.pp_3_1_4.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;

@Component
public class PostConstructInit {

    private final UserService userService;
    private final RoleService roleService;

    @Autowired
    public PostConstructInit(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

//    Загружаю в базу дефолтный набор юзеров
    @PostConstruct
    public void init() {
        List<User> users = userService.findAllUsers();

        if (users.isEmpty()) {
            Role admin = new Role("ROLE_ADMIN");
            Role user = new Role("ROLE_USER");
            Collection<Role> adminRole = new HashSet<>();
            Collection<Role> userRole = new HashSet<>();
            Collection<Role> anyRole = new HashSet<>();
            adminRole.add(admin);
            userRole.add(user);
            anyRole.add(admin);
            anyRole.add(user);
            roleService.saveRole(admin);
            roleService.saveRole(user);
            userService.addUser(new User("Maha", "Smirnova", 33, "admin@mail.ru", "admin@mail.ru", adminRole));
            userService.addUser(new User("Misha", "Krokodilov", 24, "user@mail.ru", "user@mail.ru", userRole));
            userService.addUser(new User("Dima", "Borisov", 18, "dimab@mail.ru", "dimab@mail.ru", userRole));
            userService.addUser(new User("Vasya", "Pupkin", 16, "vasyap@mail.ru", "vasyap@mail.ru", userRole));
            userService.addUser(new User("Kostya", "Gradov", 52, "kostyag@mail.ru", "kostyag@mail.ru", anyRole));
        }
    }
}
