package com.program.reviewSystem.services;

import com.program.reviewSystem.model.AuthResult;
import com.program.reviewSystem.model.User;

public interface UserService {
    public AuthResult auth(User user);

    public User getUserById(long id);

    public User addUser(User user);

    public long totalUsers();


}
