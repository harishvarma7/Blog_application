import React, { useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'//used in register and login span
import { useState } from 'react';
import axios from 'axios';
import { AuthContext } from './context/authContext';

const Login = () => {
  const navigate=useNavigate();
  const {login}=useContext(AuthContext);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

const {currentUser}=useContext(AuthContext)
console.log(currentUser)

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
   
const handlesubmit= async (e)=>{
  e.preventDefault();                                                                                                                                                         
  console.log({inputs})
  
  try{
  
  await login(inputs);
  navigate("/home");
  
  }
  catch(err)
  {
     console.log(err)
     console.log("connection failed")
  }
}

  return (
    <div className='auth'>
      <h1>Login</h1>
      
      <form>
       <input type="text" placeholder='username' name='username' onChange={handleChange} />
       <input type="password" placeholder='password' name='password' onChange={handleChange}/>
       <button  onClick={handlesubmit}>login</button>
       <span>Don't you have an account? <Link to="/register">Register</Link></span>

      </form>
    </div>
  )
}

export default Login
