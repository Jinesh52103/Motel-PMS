import {useState} from 'react'
import NavBar from '../components/NavBar'
import GuestInput from '../components/GuestInput'
import roomData from "../src/roomData.js";

const inputForm ={
  lastName : "",
  firstName : "",
  phoneNumber : "",
  email : "",
  address : "",
  zipCode : "",
  state : "",
  city : "",
  checkIn : "",
  checkOut : "",
  roomType : "",
  availableRooms : "",
  paymentMethod : "",
  totalCost : "",
}


export default function WalkIn(){

    const [formData, setFormData] = useState(inputForm)
    const[rooms, setRooms] = useState(roomData)

    function handleChange(e){
    setFormData((prev) => {
        return{
            ...prev,
        [e.target.name]: e.target.value
        }
    })
}

function handleSubmit(){
    prevent.default
}

    return(
        <div>
        <NavBar />
        <GuestInput
        formData={formData}
        handleChange={handleChange}
        button={"Check-In"}
        onClick={handleSubmit}
        />
        </div>
    )
}