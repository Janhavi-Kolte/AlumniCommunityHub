package com.alumni.dto;

public class AlumniDTO {
	
	private Long id;
	private int collegeId;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String gender;
	private String dob;
	private int passoutYear;
	private String degree;
	private String specialization;
	private String higherEducation;
	private String specializationHigher;
	private String universityName;
	private String yopHigher;
	private String presentCompany;
	private String position;
	private String workExperience;
	private String city;
	private String country;
	
	public AlumniDTO()
	{
		
	}

	public AlumniDTO(Long id, int collegeId, String firstName, String lastName, String email, String password,
			String gender,String dob, int passoutYear, String degree, String specialization, String higherEducation,
			String specializationHigher, String universityName, String yopHigher, String presentCompany,
			String position, String workExperience, String city, String country) {
		super();
		this.id = id;
		this.collegeId = collegeId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.gender = gender;
		this.dob=dob;
		this.passoutYear = passoutYear;
		this.degree = degree;
		this.specialization = specialization;
		this.higherEducation = higherEducation;
		this.specializationHigher = specializationHigher;
		this.universityName = universityName;
		this.yopHigher = yopHigher;
		this.presentCompany = presentCompany;
		this.position = position;
		this.workExperience = workExperience;
		this.city = city;
		this.country = country;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getCollegeId() {
		return collegeId;
	}

	public void setCollegeId(int collegeId) {
		this.collegeId = collegeId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
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

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getPassoutYear() {
		return passoutYear;
	}

	public void setPassoutYear(int passoutYear) {
		this.passoutYear = passoutYear;
	}

	public String getDegree() {
		return degree;
	}

	public void setDegree(String degree) {
		this.degree = degree;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public String getHigherEducation() {
		return higherEducation;
	}

	public void setHigherEducation(String higherEducation) {
		this.higherEducation = higherEducation;
	}

	public String getSpecializationHigher() {
		return specializationHigher;
	}

	public void setSpecializationHigher(String specializationHigher) {
		this.specializationHigher = specializationHigher;
	}

	public String getUniversityName() {
		return universityName;
	}

	public void setUniversityName(String universityName) {
		this.universityName = universityName;
	}

	public String getYopHigher() {
		return yopHigher;
	}

	public void setYopHigher(String yopHigher) {
		this.yopHigher = yopHigher;
	}

	public String getPresentCompany() {
		return presentCompany;
	}

	public void setPresentCompany(String presentCompany) {
		this.presentCompany = presentCompany;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getWorkExperience() {
		return workExperience;
	}

	public void setWorkExperience(String workExperience) {
		this.workExperience = workExperience;
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
