import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

export default function Page2(){
    const [dob,setDob]=useState('');
    const [gender,setGender]=useState('');
    const [phone,setPhone]=useState('');
    const [address,setAddress]=useState('');
    const [errors,setErrors]=useState({});

    const navigate=useNavigate();
    const location= useLocation();

    const next=(event)=>{
      event.preventDefault();

      const errors={};
      if(dob === ''){
        errors.dob="dob is required"
      }
      if(gender===''){
        errors.gender="gender is required"
      }
      if(Object.keys(errors).length>0){
        setErrors(errors)
      }
      else{
        alert('submitted');
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
    }

    return <div>
       <div className="progress"><div id="second">33% </div></div><br/>
      <hr/>
      <div className="form">
      <div>
      dob<input type="date" onChange={(e)=>{setDob(e.target.value)}} />
      {errors.dob && <span className="error">{errors.dob}</span>}
      </div>
      <div>
      gender<input onChange={(e)=>{setGender(e.target.value)}} />
      {errors.gender && <span className="error">{errors.gender}</span>}
      </div>
      <div>
      phone no
      <input type="number" onChange={(e)=>{setPhone(e.target.value)}} />
      </div>
      <div>
      address<br/>
      <textarea onChange={(e)=>{setAddress(e.target.value)}}/>
      </div>
      <br/>
      <button onClick={next}>next</button>
    </div>
    </div>
}