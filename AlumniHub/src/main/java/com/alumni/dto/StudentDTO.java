package com.alumni.dto;

import jakarta.persistence.Column;

public class StudentDTO {

	private Long id;

	private Long collegeId;
	private String firstName;
	private String middleName;
	private String lastName;
	private String email;
	private String password;

	private Long mobile_no;

	private String Gender;
	private String dob;
	private int yearOfPassing;
	private String degree;
	private String stream;
	private int yearOfStudy;
	private int semester;
	private String collegeName;
	private String university;
	private String city;
	private String country;

	public StudentDTO() {
	}

	public StudentDTO(Long id, Long collegeId, String firstName, String middleName, String lastName, String email,
			String password, Long mobile_no, String gender, String dob, int yearOfPassing, String degree, String stream,
			int yearOfStudy, int semester, String collegeName, String university, String city, String country) {
		super();
		this.id = id;
		this.collegeId = collegeId;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.mobile_no = mobile_no;
		Gender = gender;
		this.dob = dob;
		this.yearOfPassing = yearOfPassing;
		this.degree = degree;
		this.stream = stream;
		this.yearOfStudy = yearOfStudy;
		this.semester = semester;
		this.collegeName = collegeName;
		this.university = university;
		this.city = city;
		this.country = country;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getCollegeId() {
		return collegeId;
	}

	public void setCollegeId(Long collegeId) {
		this.collegeId = collegeId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Long getMobile_no() {
		return mobile_no;
	}

	public void setMobile_no(Long mobile_no) {
		this.mobile_no = mobile_no;
	}

	public String getGender() {
		return Gender;
	}

	public void setGender(String gender) {
		Gender = gender;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public int getYearOfPassing() {
		return yearOfPassing;
	}

	public void setYearOfPassing(int yearOfPassing) {
		this.yearOfPassing = yearOfPassing;
	}

	public String getDegree() {
		return degree;
	}

	public void setDegree(String degree) {
		this.degree = degree;
	}

	public String getStream() {
		return stream;
	}

	public void setStream(String stream) {
		this.stream = stream;
	}

	public int getYearOfStudy() {
		return yearOfStudy;
	}

	public void setYearOfStudy(int yearOfStudy) {
		this.yearOfStudy = yearOfStudy;
	}

	public int getSemester() {
		return semester;
	}

	public void setSemester(int semester) {
		this.semester = semester;
	}

	public String getCollegeName() {
		return collegeName;
	}

	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}

	public String getUniversity() {
		return university;
	}

	public void setUniversity(String university) {
		this.university = university;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

}
