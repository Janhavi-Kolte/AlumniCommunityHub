import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // For navigation
import { loginStudent, loginUser } from '../Service/ApiService'; // Import login functions
import '../Component/css/LoginForm.css'
import login from  '../Component/media/login.mp4'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student'); // Default to 'student'
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      emailId: email,
      password: password
    };

    try {
     
      let response;
      if (userType === 'student') {
        alert(123)
        response = await loginStudent(loginData);
      } else {
        response = await loginUser(loginData);
      }
      
      if (response.status === 200 && response.data) {
        setSuccess('Login successful!');
        setError('');
        // Navigate to different dashboards based on user type
        navigate(userType === 'student' ? '/stdDash' : '/aluDash');
      } else {
        setError('Invalid credentials.');
        setSuccess('');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('Login failed. Please check your credentials.');
      setSuccess('');
    }
  };

  return (
       
       <div className='main'>
         <video autoPlay loop muted className='video'>
            <source src={login} type='video/mp4' />
          </video>
           <div className='login-container'>
         
          <div className='login-form-container'>
            <h2 className='h2-log'>Login</h2>
            {error && <p className='p-log'style={{ color: 'red' }}>{error}</p>}
            {success && <p className='p-log'style={{ color: 'green' }}>{success}</p>}
            <form className='login-form' onSubmit={handleSubmit}>
              <label className='login-label' htmlFor="email">Email ID:</label>
              <input
                className='login-input'
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='enter the email-ID'
                required
              />
              <br />
              <label className='login-label' htmlFor="password">Password:</label>
              <input
                className='login-input'
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='enter the password'
                required
              />
              <br />
              <label className='login-label'>User Type:</label>
              <select
                className='login-select'
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="alumni">Alumni</option>
              </select>
              <br />
              <button className='login-button' type="submit">Login</button>
              <br />
              <div >
                <Link className='btn-ink' to='/register'>Alumni Sign-Up</Link> | 
                <Link className='btn-ink' to='/stuRegister'>Student Sign-Up</Link>
              </div>
            </form>
          </div>
        </div>

       </div>
       
    
  );
};

export default Login;