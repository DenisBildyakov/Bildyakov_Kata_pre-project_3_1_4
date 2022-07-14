package com.example.pp_3_1_4.service;

import com.example.pp_3_1_4.model.Role;

import java.util.Collection;
import java.util.List;

public interface RoleService {
    Role findBiId(int id);

    Role findByRole(String role);

    List<Role> findAllRoles();

    void saveRole(Role role);

    void saveAll(Collection<Role> roles);
}
