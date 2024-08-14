package com.alumni.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alumni.entity.Admin;
import com.alumni.entity.Alumni;
import com.alumni.exception.ResourceNotFoundException;
import com.alumni.service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private AdminService adminService;

	//admin login
	@PostMapping("/login")
	public ResponseEntity<String> adminLogin(@RequestBody Admin admin) {

		System.out.println("Inside admin login!!");

		if (adminService.adminLogin(admin.getEmailId(), admin.getPassword())) {
			return ResponseEntity.ok("Login successful");
		} else {
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Wrong credentials");
		}
	}

	// get all users
	@GetMapping("/users")
	public ResponseEntity<List<Alumni>> getAllUser() {

		System.out.println("Inside getMapping");
		return ResponseEntity.ok(adminService.findAllUser());
	}

	// get user by id
	@GetMapping("/users/{collegeId}")
	public ResponseEntity<Alumni> getUserbyId(@PathVariable Long collegeId) {

		/*
		 * Optional<User> user = adminService.findUserById(collegeId); // User user =
		 * adminService.findUserById(collegeId)n+ if (user == null) { throw new
		 * RuntimeException("User Not Found!!" + collegeId);
		 * 
		 * } return user;
		 */
		return adminService.findUserById(collegeId).map(ResponseEntity::ok)
				.orElseThrow(() -> new ResourceNotFoundException("User Not Found: " + collegeId));
	}
	
	//verify the user
	@PutMapping("/users/{collegeId}/verify")
	public ResponseEntity<Alumni> verifyUser(@PathVariable Long collegeId){
		return ResponseEntity.ok(adminService.verifyAlumni(collegeId));
	}
	
	//update user
	@PutMapping("/users/{collegeId}")
    public ResponseEntity<Alumni> updateUser(@PathVariable Long collegeId, @RequestBody Alumni updateUser) {
        return ResponseEntity.ok(adminService.updateUser(collegeId, updateUser));
    }

	@DeleteMapping("/users/{collegeId}")
    public ResponseEntity<Alumni> deleteUser(@PathVariable Long collegeId) {
        adminService.deleteUser(collegeId);
        return ResponseEntity.noContent().build();
    }
	
}

