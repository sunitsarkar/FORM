 import React, { useState } from "react"

import { useNavigate } from "react-router-dom";

 export default function Page(){

  const [fname,setFname]=useState('');
  const [lname,setLname]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [errors,setErrors]=useState({});

  const navigate=useNavigate()

  const next=(event)=>{
    event.preventDefault();
    const errors={};

    if(fname===""){
      errors.fname="First name is required"
    }
    if(lname===""){
      errors.lname="Last name is required"
    }
    if(email===""){
      errors.email="Email is required"
    }else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }
    if(password===""){
      errors.password="Password is required"
    }
    if(Object.keys(errors).length > 0){
      setErrors(errors)
    }
    else{
      //if no errors then navigate to next page
      alert('submitted');
      navigate('/second',
    {
      state: {
        fname:fname,
        lname:lname,
        email:email,
        password:password

      }
    })
    //clear the input
    setFname('');
    setLname('');
    setEmail('');
    setPassword('');
    setErrors({})
    }

    
  }

    return <div>
      <div className="progress"><div>0%</div></div><br/>
      <hr/>
      <form onSubmit={next} className="form">
      <div>
      <label htmlFor="fname">First name:</label>
      <input onChange={(e)=>{setFname(e.target.value)}} />
      {errors.fname && <span className="error">{errors.fname}</span>}
      </div>
      <div>
      <label htmlFor="lname">Last name:</label>
      <input onChange={(e)=>{setLname(e.target.value)}} />
      {errors.lname && <span className="error">{errors.lname}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
      <input type="email" onChange={(e)=>{setEmail(e.target.value)}} />
      {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
      <input type="password" onChange={(e)=>{setPassword(e.target.value)}} />
      {errors.password && <span className="error">{errors.password}</span>}
      </div>

      <button  type="submit">next</button>
        
    </form>
    </div>
 }