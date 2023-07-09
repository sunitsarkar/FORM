 import React, { useState } from "react"
 import Page2 from "./page2"
import { useNavigate } from "react-router-dom";

 export default function Page(){

  const [fname,setFname]=useState();
  const [lname,setLname]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  const navigate=useNavigate()

  const next=()=>{
    navigate('/second',
    {
      state: {
        fname:fname,
        lname:lname,
        email:email,
        password:password

      }
    })
  }

    return <div className="form">
      <div className="progress"><div>0%</div></div><br/>
      <hr/>
      first name
      <input onChange={(e)=>{setFname(e.target.value)}} />
      last name<input onChange={(e)=>{setLname(e.target.value)}} />
      email<input onChange={(e)=>{setEmail(e.target.value)}} />
      password<input onChange={(e)=>{setPassword(e.target.value)}} />

      <button onClick={next}>next</button>
        
    </div>
 }