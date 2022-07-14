package com.example.pp_3_1_4.repository;


import com.example.pp_3_1_4.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface RoleRepository extends JpaRepository<Role, Integer> {

    Role findByRole(String role);
    Collection<Role> findAllByUsersId(long id);
}
