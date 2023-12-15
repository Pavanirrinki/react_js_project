// src/App.js
import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { API } from './API';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
 
    email: '',
    password: '',
  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(API+"User/Login",formData).then((res)=>{
        console.log(res.data);
        localStorage.setItem("users_details",JSON.stringify(res.data))
    navigate("/USERDETAILS")}).catch((error)=>console.log(error.message))
  
  };

  return (
    <div className="App">
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
       
      
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{marginLeft:"55px"}}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{marginLeft:"30px"}}
          />
        </label>
        
       
        <button type="submit">LOG IN</button>
      </form>
    </div>
  );
};

export default Login;
