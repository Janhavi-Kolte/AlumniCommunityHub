package com.alumni.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alumni.dto.AlumniDTO;
import com.alumni.dto.LoginDTO;
import com.alumni.response.LoginMessage;
import com.alumni.service.AlumniService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/alumni")
public class AlumniController {
	
	@Autowired
	private AlumniService alumniService;

	/*@PostMapping
	public ResponseEntity<AlumniDTO> createAlumni(@RequestBody AlumniDTO alumniDto)
	{
		AlumniDTO savedAlumni = alumniService.createAlumni(alumniDto);
		return new ResponseEntity<>(savedAlumni,HttpStatus.CREATED);
	}*/
	
	@PostMapping
	public String saveAlumni(@RequestBody AlumniDTO alumniDto)
	{
		String alumni = alumniService.createAlumni(alumniDto);
		return alumni;
	}
	@PostMapping("/login")
	public ResponseEntity<?> loginAlumni(@RequestBody LoginDTO loginDTO)
	{
		LoginMessage loginMessage = alumniService.loginAlumni(loginDTO);
		return ResponseEntity.ok(loginMessage);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<AlumniDTO> getAlumniById(@PathVariable("id") Long alumniId)
	{
		AlumniDTO alumniDto = alumniService.getAlumniById(alumniId);
		return ResponseEntity.ok(alumniDto);
	}
	
	@GetMapping
	public ResponseEntity<List<AlumniDTO>> getAllAlumni()
	{
		List<AlumniDTO> alumnies = alumniService.getAllAlumni();
		return ResponseEntity.ok(alumnies);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<AlumniDTO> updateAlumni(@PathVariable("id") Long alumniId,@RequestBody AlumniDTO updatedAlumni)
	{
		AlumniDTO alumniDto = alumniService.updateAlumni(alumniId, updatedAlumni);
		return ResponseEntity.ok(alumniDto);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteAlumniId(@PathVariable("id") Long alumniId)
	{
		alumniService.deleteAlumni(alumniId);
		return ResponseEntity.ok("Alumni Deleted Successfully!!");
	}
	
	
}
