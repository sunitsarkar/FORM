import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

export default function Page2(){
    const [education,setEducation]=useState();
    const [employment,setEmployment]=useState();
    const [income,setIncome]=useState();
    const [maritial,setMaritial]=useState();

    const navigate=useNavigate();
    const location= useLocation();

    const next=()=>{
      navigate('/four', {
        state: {
          ...location.state,
          education:education,
          employment:employment,
          income:income,
          maritial:maritial

        }
      })
    }

    return <div className="form">
      <div className="progress"><div id="third">66% completed</div></div><br/>
      <hr/>
      education<input  onChange={(e)=>{setEducation(e.target.value)}} />
      employment<input onChange={(e)=>{setEmployment(e.target.value)}} />
      income<input type="number" onChange={(e)=>{setIncome(e.target.value)}} />
      maritial<input onChange={(e)=>{setMaritial(e.target.value)}} />

      <button onClick={next}>next</button>
    </div>
}