package com.alumni.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.alumni.dto.LoginDTO;
import com.alumni.dto.StudentDTO;
import com.alumni.entity.Alumni;
import com.alumni.entity.Student;
import com.alumni.repository.StudentRepository;
import com.alumni.response.LoginMessage;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepo;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public String createStudent(StudentDTO studentDto) {
		// TODO Auto-generated method stub
		Student student = new Student(
				
				studentDto.getId(),
				studentDto.getCollegeId(),
				studentDto.getFirstName(),
				studentDto.getMiddleName(),
				studentDto.getLastName(),
				studentDto.getEmail(),
				this.passwordEncoder.encode(studentDto.getPassword()),
				studentDto.getMobile_no(),
				studentDto.getGender(),
				studentDto.getDob(),
				studentDto.getYearOfPassing(),
				studentDto.getDegree(),
				studentDto.getStream(),
				studentDto.getYearOfStudy(),
				studentDto.getSemester(),
				studentDto.getCollegeName(),
				studentDto.getUniversity(),
				studentDto.getCity(),
				studentDto.getCountry()
				
				);
		studentRepo.save(student);
		return student.getFirstName();
	}

	@Override
	public LoginMessage loginStudent(LoginDTO loginDTO) {
		// TODO Auto-generated method stub
		String msg = "";
		Student stu = studentRepo.findByEmail(loginDTO.getEmail());
		
		if(stu != null) {
			String password = loginDTO.getPassword();
			String encodedPassword = stu.getPassword();
			Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
			
			if(isPwdRight) {
				Optional<Student> student = studentRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (student.isPresent()) {
                    return new LoginMessage("Login Success", true);
                } else {
                    return new LoginMessage("Login Failed", false);
                }
			}
			else {
                return new LoginMessage("password Not Match", false);
            }
        }else {
            return new LoginMessage("Email not exits", false);
        }
		
		//return null;
	}

}
