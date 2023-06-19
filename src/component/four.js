import { useLocation } from "react-router-dom"

export default function Four(){

    const location=useLocation();

    return <div>
        <h3>{location.state.fname}</h3>
        <h3>{location.state.lname}</h3>
        <h3>{location.state.email}</h3>
        <h3>{location.state.password}</h3>
        <h3>{location.state.dob}</h3>
        <h3>{location.state.gender}</h3>
        <h3>{location.state.phone}</h3>
        <h3>{location.state.address}</h3>
        <h3>{location.state.education}</h3>
        <h3>{location.state.employment}</h3>
        <h3>{location.state.income}</h3>
        <h3>{location.state.maritial}</h3>
    </div>
}