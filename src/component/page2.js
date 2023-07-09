import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

export default function Page2(){
    const [dob,setDob]=useState();
    const [gender,setGender]=useState();
    const [phone,setPhone]=useState();
    const [address,setAddress]=useState();

    const navigate=useNavigate();
    const location= useLocation();

    const next=()=>{
      navigate('/third', {
        state: {
          ...location.state,
          dob:dob,
          gender:gender,
          phone:phone,
          address:address

        }
      })
    }

    return <div className="form">
      <div className="progress"><div id="second">33% </div></div><br/>
      <hr/>
      dob<input type="date" onChange={(e)=>{setDob(e.target.value)}} />
      gender<input onChange={(e)=>{setGender(e.target.value)}} />
      phone no
      <input type="number" onChange={(e)=>{setPhone(e.target.value)}} />
      address<br/>
      <textarea onChange={(e)=>{setAddress(e.target.value)}}/>
      <br/>
      <button onClick={next}>next</button>
    </div>
}