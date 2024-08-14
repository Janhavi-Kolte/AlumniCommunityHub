package com.alumni.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.alumni.dto.AlumniDTO;
import com.alumni.dto.LoginDTO;
import com.alumni.entity.Alumni;
import com.alumni.exception.ResourceNotFoundException;
import com.alumni.mapper.AlumniMapper;
import com.alumni.repository.AlumniRepository;
import com.alumni.response.LoginMessage;

@Service
public class AlumniServiceImpl implements AlumniService {

	@Autowired
	private AlumniRepository alumniRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public String createAlumni(AlumniDTO alumniDto) {
		// TODO Auto-generated method stub
		//Alumni alumni = AlumniMapper.mapToAlumni(alumniDto);
		//Alumni savedAlumni = alumniRepo.save(alumni);
		Alumni alumni = new Alumni(
				alumniDto.getId(),
				alumniDto.getCollegeId(),
				alumniDto.getFirstName(),
				alumniDto.getLastName(),
				alumniDto.getEmail(),
				this.passwordEncoder.encode(alumniDto.getPassword()),
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
		alumniRepo.save(alumni);
		return alumni.getFirstName();
	}

	@Override
	public LoginMessage loginAlumni(LoginDTO loginDTO) {
		// TODO Auto-generated method stub
		String msg = "";
        Alumni alumni1 = alumniRepo.findByEmail(loginDTO.getEmail());
        if (alumni1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = alumni1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Alumni> alumni = alumniRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (alumni.isPresent()) {
                    return new LoginMessage("Login Success", true);
                } else {
                    return new LoginMessage("Login Failed", false);
                }
            } else {
                return new LoginMessage("password Not Match", false);
            }
        }else {
            return new LoginMessage("Email not exits", false);
        }
	}

	@Override
	public AlumniDTO getAlumniById(Long alumniId) {
		// TODO Auto-generated method stub
		Alumni alumni=alumniRepo.findById(alumniId).orElseThrow(()->new ResourceNotFoundException("Alumni doesn't exist"+alumniId));
				
		return AlumniMapper.mapToAlumniDto(alumni);
	}

	@Override
	public List<AlumniDTO> getAllAlumni() {
		// TODO Auto-generated method stub
		List<Alumni> alumnis=alumniRepo.findAll();
		return alumnis.stream().map((alumni)->AlumniMapper.mapToAlumniDto(alumni)).collect(Collectors.toList());
	}
	
	@Override
	public AlumniDTO updateAlumni(Long alumniId, AlumniDTO updatedAlumni) {
		// TODO Auto-generated method stub
		Alumni alumni = alumniRepo.findById(alumniId)
				.orElseThrow(()-> new ResourceNotFoundException("AlumniId doesn't exist!!"+alumniId));
		
		alumni.setFirstName(updatedAlumni.getFirstName());
		alumni.setLastName(updatedAlumni.getLastName());
		alumni.setEmail(updatedAlumni.getEmail());
		
		Alumni updatedAlumniObj = alumniRepo.save(alumni);
		return AlumniMapper.mapToAlumniDto(updatedAlumniObj);
	}

	@Override
	public void deleteAlumni(Long alumniId) {
		// TODO Auto-generated method stub
		Alumni alumni = alumniRepo.findById(alumniId)
				.orElseThrow(()-> new ResourceNotFoundException("AlumniId doesn't exist!!"+alumniId));
		alumniRepo.deleteById(alumniId);;
	}

}
