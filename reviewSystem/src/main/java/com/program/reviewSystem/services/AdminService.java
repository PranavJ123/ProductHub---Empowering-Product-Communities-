package com.program.reviewSystem.services;

import com.program.reviewSystem.model.Admin;
import com.program.reviewSystem.model.AdminAuthResult;

public interface AdminService {
    public AdminAuthResult auth(Admin admin);
    public Admin getAdmin(long id);
}
