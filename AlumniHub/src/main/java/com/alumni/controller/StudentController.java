package com.alumni.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alumni.dto.LoginDTO;
import com.alumni.dto.StudentDTO;
import com.alumni.response.LoginMessage;
import com.alumni.service.StudentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/student")
public class StudentController {

	@Autowired
	private StudentService stuService;

	@PostMapping
	public String saveStudent(@RequestBody StudentDTO stuDTO) {
		String student = stuService.createStudent(stuDTO);
		return student;
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginAlumni(@RequestBody LoginDTO loginDTO)
	{
		LoginMessage loginMessage = stuService.loginStudent(loginDTO);
		return ResponseEntity.ok(loginMessage);
	}

}
