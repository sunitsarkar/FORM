import { useLocation } from "react-router-dom"

export default function Four(){

    const location=useLocation();

    return <div className="form">
        <h3> First name: &nbsp;  {location.state.fname}</h3>
        <h3>Last name: &nbsp;&nbsp;  {location.state.lname}</h3>
        <h3>Email:  &nbsp;&nbsp; {location.state.email}</h3>
        <h3>Password: &nbsp;&nbsp;{location.state.password}</h3>
        <h3>D.O.B: &nbsp;&nbsp;{location.state.dob}</h3>
        <h3>Gender: &nbsp;&nbsp;{location.state.gender}</h3>
        <h3>Phone: &nbsp;&nbsp;{location.state.phone}</h3>
        <h3>Address: &nbsp;&nbsp;{location.state.address}</h3>
        <h3>Education:  &nbsp;&nbsp;{location.state.education}</h3>
        <h3>Employment: &nbsp;&nbsp;{location.state.employment}</h3>
        <h3>Income: &nbsp;&nbsp;{location.state.income}</h3>
        <h3>Location:  &nbsp;{location.state.maritial}</h3>
    </div>
}