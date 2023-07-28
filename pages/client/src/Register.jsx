import React from 'react'
import { Link,useNavigate } from 'react-router-dom'//used in register and login span
import { useState } from 'react';
import axios from 'axios';
 


const Register = () => {
  const navigate=useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
   
const handlesubmit= async (e)=>{
  e.preventDefault();                                                                                                                                                         
  console.log({inputs})
  const userData = {
    username: inputs.username,
    email: inputs.email,
    password: inputs.password, 
  };
  try{
  
  await axios.post("http://localhost:7000/api/auth/register",inputs).then(function (response) {
    console.log(response);
    navigate('\login');

  })
  
  }
  catch(err)
  {
     console.log(err)
     console.log("connection failed")
  }
}

  console.log(inputs)


  return (
    <div className='auth'>
    <h1>Login</h1>
    
    <form>
     <input type="text" placeholder='username' name='username' value={inputs.username} onChange={handleChange} />
     <input type='email' placeholder='email' name='email' value={inputs.email} onChange={handleChange}/>
     <input type="password" placeholder='password' name='password' value={inputs.password} onChange={handleChange} />
     <button onClick={handlesubmit}>Register</button>
     
     <span>already have an account? <Link to="/login">Login</Link> </span>

    </form>
    
  </div>
  )
}

export default Register
