package com.alumni.service;

import com.alumni.dto.LoginDTO;
import com.alumni.dto.StudentDTO;
import com.alumni.response.LoginMessage;

public interface StudentService {

	String createStudent(StudentDTO studentDto);
	
	LoginMessage loginStudent(LoginDTO loginDTO);
	
}
