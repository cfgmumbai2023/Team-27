//import { link } from 'fs';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    try{
      const response = await axios.post("http://localhost:5000/login", {
        email: email, 
        password: password
      })
      const currentUser = response.data.user
      localStorage.setItem("user", {...currentUser})
      if(currentUser === "Student"){
        navigate('/student')
      }
      else if(currentUser === "Creator"){
        navigate('/creator')
      }
      else if(currentUser === "Admin"){
        navigate('/admin/user')
      }
      else{
        navigate('/admin')
      }

    } catch(err){
      console.log(err)
    }
    // Reset form fields
    setEmail('');
    setPassword('');
  };

  const handleRegisterUser = () => {
    // Handle user registration logic here
    console.log('Register as User');
  };

  const handleRegisterCreator = () => {
    // Handle creator registration logic here
    console.log('Register as Creator');
  };

  return (
    
    

<div className="container">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <div className="mt-3">
        <button onClick={handleRegisterUser} className="btn btn-secondary me-2">Register as User</button>
        <button onClick={handleRegisterCreator} className="btn btn-secondary">Register as Creator</button>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    </div>

  );
};

export default LoginPage;
