

// RegistrationForm
import React, { useState } from 'react';
import './css/Alumni.css';
import { registerUser } from '../Service/ApiService';
import { useNavigate } from 'react-router-dom';


const Alumni = () => {
    const [formData, setFormData] = useState({
        collegeId: '',
        firstName: '',
        lastName: '',
        emailId: '',
        password: '',
        gender: '',
        dob: '',
        passoutYear: '',
        degree: '',
        specialization: '',
        higherEducation: '',
        specializationHigher: '',
        universityName: '',
        yopHigher: '',
        presentCompany: '',
        position: '',
        workExperience: '',
        city: '',
        country: ''
    });

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataArray = [
            formData.collegeId, formData.firstName, formData.lastName, formData.emailId, formData.password,
            formData.gender, formData.dob, formData.passoutYear, formData.degree, formData.specialization,
            formData.higherEducation, formData.specializationHigher, formData.universityName, formData.yopHigher,
            formData.presentCompany, formData.position, formData.workExperience, formData.city, formData.country
        ];
        try {
            const response = await registerUser(dataArray); // Use the imported method
            console.log('User registered successfully:', response.data);
            navigate('/');

        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div className='alumni-reg'>
            <div className='h2-reg'>
                <h2 >Alumni Registration Form</h2>
            </div>

            <form className='alumni-signup' onSubmit={handleSubmit}>

                <label className='alumni-label'>
                    College ID:
                    <input className='alumni-input'
                        type="text"
                        name="collegeId"
                        value={formData.collegeId}
                        onChange={handleChange}
                    />
                </label>
                <label className='alumni-label'>
                    First Name:
                    <input className='alumni-input'
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label className='alumni-label'>
                    Last Name:
                    <input className='alumni-input'
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </label>
                <label className='alumni-label'>
                    Email ID:
                    <input className='alumni-input'
                        type="email"
                        name="emailId"
                        value={formData.emailId}
                        onChange={handleChange}
                    />
                </label>
                <label className='alumni-label'>
                    Password:
                    <input className='alumni-input'
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <label className='alumni-label'>
                    Gender:
                    <select className='alumni-select'
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select >
                </label>
                <label className='alumni-label'>
                    Date of Birth:
                    <input className='alumni-input'
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                    />
                </label>
                <label className='alumni-label'>
                    Passout Year:
                    <input className='alumni-input'
                        type="text"
                        name="passoutYear"
                        value={formData.passoutYear}
                        onChange={handleChange}
                    />
                </label>
                <label className='alumni-label'>
                    Degree:
                    <input className='alumni-input'
                        type="text"
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                    />
                </label>
                <label className='alumni-label'>
                    Specialization:
                    <input className='alumni-input'
                        type="text"
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                    />
                </label>
                <label className='alumni-label'>
                    Higher Education:
                    <select className='alumni-select'
                        name="higherEducation"
                        value={formData.higherEducation}
                        onChange={handleChange}
                    >
                        <option value="">select</option>
                        <option value="Male">Yes</option>
                        <option value="Female">No</option>

                    </select>
                </label>
                <label className='alumni-label'>
                    Specialization (Higher Education):
                    <input className='alumni-input'
                        type="text"
                        name="specializationHigher"
                        value={formData.specializationHigher}
                        onChange={handleChange}
                    />
                </label>
                <label className='alumni-label'>
                    University Name:
                    <input className='alumni-input'
                        type="text"
                        name="universityName"
                        value={formData.universityName}
                        onChange={handleChange}
                    />
                </label>
                <label className='alumni-label'>
                    Year of Passing (Higher Education):
                    <input className='alumni-input'
                        type="text"
                        name="yopHigher"
                        value={formData.yopHigher}
                        onChange={handleChange}
                    />
                </label>
                <label className='alumni-label'>
                    Present Company:
                    <input className='alumni-input'
                        type="text"
                        name="presentCompany"
                        value={formData.presentCompany}
                        onChange={handleChange}
                    />
                </label>
                <label className='alumni-label'>
                    Position:
                    <input className='alumni-input'
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                    />
                </label>
                <label className='alumni-label'>
                    Work Experience:
                    <input className='alumni-input'
                        type="text"
                        name="workExperience"
                        value={formData.workExperience}
                        onChange={handleChange}
                    />
                </label>
                <label className='alumni-label'>
                    City:
                    <input className='alumni-input'
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </label>
                <label className='alumni-label'>
                    Country:
                    <input className='alumni-input'
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                    />
                </label>
                <br></br>
                <button className='alumni-button' type="submit">Register</button>
            </form>
        </div>
    );
};

export default Alumni;