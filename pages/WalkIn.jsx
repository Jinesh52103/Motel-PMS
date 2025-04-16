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
   

    const filteredRoomInput = formData.roomType 
    ? roomData.filter((element) => {
        if(element.type === formData.roomType) return true
    }).map((element)=>{
        return({
            label : element.roomNumber + " - " + element.type,
            value : element.roomNumber
        }) 
    })

    : roomData.map((element)=>{
        return({
            label : element.roomNumber + " - " + element.type,
            value : element.roomNumber
        }) 
    })
     

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
        roomOptions={filteredRoomInput}
        />
        </div>
    )
}