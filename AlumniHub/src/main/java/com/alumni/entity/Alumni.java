package com.alumni.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Alumni {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "collegeid")
	private int collegeId;

	@Column(name = "firstName")
	private String firstName;

	@Column(name = "lastName")
	private String lastName;

	@Column(name = "email", unique = true)
	private String email;

	@Column(name = "password")
	private String password;

	@Column(name = "gender")
	private String gender;

	@Column(name = "dob")
	private String dob;

	@Column(name = "passoutYear")
	private int passoutYear;

	@Column(name = "degree")
	private String degree;

	@Column(name = "specialization")
	private String specialization;

	@Column(name = "higherEducation")
	private String higherEducation;

	@Column(name = "specializationHigher")
	private String specializationHigher;

	@Column(name = "universityName")
	private String universityName;

	@Column(name = "yopHigher")
	private String yopHigher;

	@Column(name = "presentCompany")
	private String presentCompany;

	@Column(name = "position")
	private String position;

	@Column(name = "workExperience")
	private String workExperience;

	@Column(name = "city")
	private String city;

	@Column(name = "country")
	private String country;

	public boolean verify;
	
	public Alumni() {}

	public Alumni(Long id, int collegeId, String firstName, String lastName, String email, String password,
			String gender, String dob, int passoutYear, String degree, String specialization, String higherEducation,
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
		this.dob = dob;
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

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
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

	public boolean isVerify() {
		return verify;
	}

	public void setVerify(boolean verify) {
		this.verify = verify;
	}

}
