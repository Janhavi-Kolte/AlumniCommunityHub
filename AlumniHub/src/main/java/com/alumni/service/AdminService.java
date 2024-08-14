package com.alumni.service;

import java.util.List;
import java.util.Optional;

import com.alumni.entity.Admin;
import com.alumni.entity.Alumni;

public interface AdminService {

	//for admin login
	public boolean adminLogin(String emailId, String password);
	public void saveAdmin(Admin admin);
	
	//admin methods
	public List<Alumni> findAllUser();
	public Optional<Alumni> findUserById(Long collegeId);
	public Alumni verifyAlumni(Long collegeId);
	public Alumni updateUser(Long collegeId, Alumni updateUser);
	public void deleteUser(Long collegeId);
	
}
