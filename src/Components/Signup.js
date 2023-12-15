// src/App.js
import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { API } from './API';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    roll: 'employee', 
    designation:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(API+"User/Signup",formData).then((res)=>{
        console.log(res.data);
    navigate("/LOGIN")}).catch((error)=>console.log(error.message))
  
  };

  return (
    <div className="App">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label >
           Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{marginLeft:"50px"}}
          />
        </label>
        <label>
          Mobile:
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            style={{marginLeft:"40px"}}
          />
        </label>
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
        <label>
          Designation:
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
            style={{marginLeft:"10px"}}
          />
        </label>
        <label>
          Role:
          <div>
            <label>
              <input
                type="radio"
                name="roll"
                value="admin"
                checked={formData.roll === 'admin'}
                onChange={handleChange}
              />
              Admin
            </label>
            <label>
              <input
                type="radio"
                name="roll"
                value="employee"
                checked={formData.roll === 'employee'}
                onChange={handleChange}
              />
              Employee
            </label>
          </div>
        </label>
      
        <button type="submit">Sign Up</button>
        
      </form>
      <p>You Already have an account ? <button style={{background:"none",border:"none",color:"blue"}} onClick={()=>navigate("/LOGIN")}>LOGIN</button></p>
    </div>
  );
};

export default Signup;
