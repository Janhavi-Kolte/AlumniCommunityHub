package com.alumni.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.alumni.dto.AlumniDTO;
import com.alumni.entity.Alumni;


public class AlumniMapper {
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public static AlumniDTO mapToAlumniDto(Alumni a)
	{
		return new AlumniDTO(
				a.getId(),
				a.getCollegeId(),
				a.getFirstName(),
				a.getLastName(),
				a.getEmail(),
				a.getPassword(),
				a.getGender(),
				a.getDob(),
				a.getPassoutYear(),
				a.getDegree(),
				a.getSpecialization(),
				a.getHigherEducation(),
				a.getSpecializationHigher(),
				a.getUniversityName(),
				a.getYopHigher(),
				a.getPresentCompany(),
				a.getPosition(),
				a.getWorkExperience(),
				a.getCity(),
				a.getCountry()
				);
	}
	
	public static Alumni mapToAlumni(AlumniDTO alumniDto)
	{
		return new Alumni(
				alumniDto.getId(),
				alumniDto.getCollegeId(),
				alumniDto.getFirstName(),
				alumniDto.getLastName(),
				alumniDto.getEmail(),
				alumniDto.getPassword(),
				alumniDto.getGender(),
				alumniDto.getDob(),
				alumniDto.getPassoutYear(),
				alumniDto.getDegree(),
				alumniDto.getSpecialization(),
				alumniDto.getHigherEducation(),
				alumniDto.getSpecializationHigher(),
				alumniDto.getUniversityName(),
				alumniDto.getYopHigher(),
				alumniDto.getPresentCompany(),
				alumniDto.getPosition(),
				alumniDto.getWorkExperience(),
				alumniDto.getCity(),
				alumniDto.getCountry()
				);
	}

}
