
// RegistrationForm
import React, { useState } from 'react';
import './css/StudentSignUp.css';
import {registerStudent } from '../Service/ApiService' ;
import { useNavigate } from 'react-router-dom';


const StudentSignUp = () => {
    const [studentData, setStudentData] = useState({
        collegeId: '',
        firstName: '',
        middleName:'',
        lastName: '',
        emailId: '',
        password: '',
        mobileNo: '',
        gender: '',
        dob: '',
        yearOfPassing: '',
        degree: '',
        stream: '',
        yearOfStudy: '',
        semester: '',
        collegeName: '',
        university: '',
        city: '',
        country: ''
    });

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData({
            ...studentData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataArray = [
           studentData.collegeId , studentData.firstName , studentData.middleName , studentData.lastName , studentData.emailId , studentData.password,
           studentData.mobileNo , studentData.gender , studentData.dob , studentData.yearOfPassing , studentData.degree , studentData.stream , 
           studentData.yearOfStudy , studentData.semester , studentData.collegeName , studentData.university , studentData.city , studentData.country
          ];
        try {
          const response = await registerStudent(dataArray); // Use the imported method
          console.log('User registered successfully:', response.data);
          navigate('/');
          
        } catch (error) {
          console.error('Error registering user:', error);
        }
      };

    return (
        <div className='std-body'>
            <h2 className='h2-std'>Student Registration Form </h2>
        <form className='student-signup' onSubmit={handleSubmit}>
           
            <label className='student-label'>
                College ID:
                <input className = 'student-input'
                    type="text"
                    name="collegeId"
                    value={studentData.collegeId}
                    onChange={handleChange}
                />
            </label>
            <label className='student-label'>
                First Name:
                <input className = 'student-input'
                    type="text"
                    name="firstName"
                    value={studentData.firstName}
                    onChange={handleChange}
                />
            </label>
            <label className='student-label'>
                Middle Name:
                <input className = 'student-input'
                    type="text"
                    name="middleName"
                    value={studentData.middleName}
                    onChange={handleChange}
                />
            </label>
            <label className='student-label'>
                Last Name:
                <input className = 'student-input'
                    type="text"
                    name="lastName"
                    value={studentData.lastName}
                    onChange={handleChange}
                />
            </label>
            <label className='student-label'>
                Email ID:
                <input className = 'student-input'
                    type="email"
                    name="emailId"
                    value={studentData.emailId}
                    onChange={handleChange}
                />
            </label>
            <label className='student-label'>
                Password:
                <input className = 'student-input'
                    type="password"
                    name="password"
                    value={studentData.password}
                    onChange={handleChange}
                />
            </label>
            <label className='student-label'>
                Gender:
                <select className='student-select'
                    name="gender"
                    value={studentData.gender}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select >
            </label>
            <label className='student-label'>
                Date of Birth:
                <input className = 'student-input'
                    type="date"
                    name="dob"
                    value={studentData.dob}
                    onChange={handleChange}
                />
            </label>
            <label className='student-label'>
                Passout Year:
                <input className = 'student-input'
                    type="text"
                    name="yearOfPassing"
                    value={studentData.yearOfPassing}
                    onChange={handleChange}
                />
            </label>
            <label className='student-label'>
                Degree:
                <input className = 'student-input'
                    type="text"
                    name="degree"
                    value={studentData.degree}
                    onChange={handleChange}
                />
            </label>
            <label className='student-label'>
                Specialization:
                <input className = 'student-input'
                    type="text"
                    name="stream"
                    value={studentData.stream}
                    onChange={handleChange}
                />
            </label>
            <label className='student-label'>
                Year of Study :
                <input className = 'student-input'
                    type="text"
                    name="yearOfStudy"
                    value={studentData.yearOfStudy}
                    onChange={handleChange}
                />
            </label>
            <label className='student-label'>
                Semester :
                <input className = 'student-input'
                    type="text"
                    name="semester"
                    value={studentData.semester}
                    onChange={handleChange}
                />
            </label>
            <label className='student-label'>
                College Name:
                <input className = 'student-input'
                    type="text"
                    name="collegeName"
                    value={studentData.collegeName}
                    onChange={handleChange}
                />
            </label>
            <label  className='student-label'>
                University:
                <input className = 'student-input'
                    type="text"
                    name="university"
                    value={studentData.university}
                    onChange={handleChange}
                />
            </label>
           
            <label  className='student-label'>
                City:
                <input className = 'student-input'
                    type="text"
                    name="city"
                    value={studentData.city}
                    onChange={handleChange}
                />
            </label>
            <label className='student-label'>
                Country:
                <input className = 'student-input'
                    type="text"
                    name="country"
                    value={studentData.country}
                    onChange={handleChange}
                />
            </label>
            <br></br>
            <button className='student-button' type="submit">Register</button>
        </form>
        </div>
    );
};

export default StudentSignUp;