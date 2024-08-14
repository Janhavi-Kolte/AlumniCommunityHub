package com.alumni.service;

import java.util.List;

import com.alumni.dto.AlumniDTO;
import com.alumni.dto.LoginDTO;
import com.alumni.response.LoginMessage;


public interface AlumniService {
	
	String createAlumni(AlumniDTO alumniDto);
	
	LoginMessage loginAlumni(LoginDTO loginDTO);
	
    AlumniDTO getAlumniById(Long alumniId);
	
	List<AlumniDTO> getAllAlumni();
	
	AlumniDTO updateAlumni(Long alumniId, AlumniDTO updatedAlumni);
	
	void deleteAlumni(Long alumniId);

}
