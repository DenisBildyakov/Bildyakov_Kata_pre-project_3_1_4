package com.example.pp_3_1_4.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class AdminController {

    @GetMapping(value = "/admin")
    public String openStartPage() {
        return "/admin";
    }
}
