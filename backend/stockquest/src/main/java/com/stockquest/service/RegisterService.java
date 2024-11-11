package com.stockquest.service;

import com.stockquest.entity.Register;

public interface RegisterService {

    Register saveNewUser(Register register);

    Register login(String email, String password);

	
}