package com.alumni.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.alumni.entity.Admin;
import com.alumni.entity.Alumni;
import com.alumni.repository.AdminRepository;
import com.alumni.repository.AlumniRepository;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AlumniRepository alumniRepo;

	@Autowired
	private AdminRepository adminRepo;

	// admin login
	@Override
	public boolean adminLogin(String emailId, String password) {
		// TODO Auto-generated method stub
		Admin admin = adminRepo.findByEmailId(emailId);
		return admin != null && admin.getPassword().equals(password);
	}

	@Override
	public void saveAdmin(Admin admin) {
		// TODO Auto-generated method stub

		// admin.setPassword(bCryptPasswordEncoder.encode(admin.getPassword()));
		adminRepo.save(admin);
	}

	@Override
	public List<Alumni> findAllUser() {
		// TODO Auto-generated method stub
		return alumniRepo.findAll();
	}

	@Override
	public Optional<Alumni> findUserById(Long collegeId) {
		// TODO Auto-generated method stub
		return alumniRepo.findById(collegeId);
	}

	@Override
	public Alumni verifyAlumni(Long collegeId) {
		// TODO Auto-generated method stub
		Alumni user = alumniRepo.findById(collegeId).orElseThrow(() -> new RuntimeException("User not found!!"));
		user.setVerify(true);
		return alumniRepo.save(user);
	}

	@Override
	public Alumni updateUser(Long collegeId, Alumni updateUser) {
		// TODO Auto-generated method stub
		Alumni user = alumniRepo.findById(collegeId).orElseThrow(() -> new RuntimeException("User not found!!"));

		user.setFirstName(updateUser.getFirstName());
		user.setLastName(updateUser.getLastName());
		user.setEmail(updateUser.getEmail());
		user.setGender(updateUser.getGender());
		user.setDob(updateUser.getDob());
		user.setPassoutYear(updateUser.getPassoutYear());
		user.setDegree(updateUser.getDegree());
		user.setSpecialization(updateUser.getSpecialization());
		user.setHigherEducation(updateUser.getHigherEducation());
		user.setSpecializationHigher(updateUser.getSpecializationHigher());
		user.setUniversityName(updateUser.getUniversityName());
		user.setYopHigher(updateUser.getYopHigher());
		user.setPresentCompany(updateUser.getPresentCompany());
		user.setPosition(updateUser.getPosition());
		user.setWorkExperience(updateUser.getWorkExperience());
		user.setCity(updateUser.getCity());
		user.setCountry(updateUser.getCountry());

		return alumniRepo.save(user);
	}

	@Override
	public void deleteUser(Long collegeId) {
		// TODO Auto-generated method stub

		alumniRepo.deleteById(collegeId);

	}

}
