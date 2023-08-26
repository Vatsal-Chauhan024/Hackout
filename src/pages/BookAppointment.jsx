import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import {AiTwotoneMail} from 'react-icons/ai'
import {PiNumberOneBold, PiNumberTwoBold} from 'react-icons/pi'
import {Link} from 'react-router-dom'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import {FaHospitalAlt} from 'react-icons/fa'

const BookAppointment = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        // axios.post("https://8ff9-2409-40c1-13-9ef5-bcd5-6027-76a9-4010.ngrok-free.app/login", {
        //     Email_Id: Email_Id,
        //     Date: Date
        // }).then((response) => {
        //     setEmail_Id('')
        //     setDate('')
        //     console.log(response);
        //     toast.error("jh", {
        //     position: "top-center",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //     })
        // }).catch((err) => {
        //   console.log("Thlkjk")
        //   toast.error(err, {
        //     position: "top-center",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //     })
        // });
        
    }

    const [HospitalName, setHospitalName] = useState('')
    const [DoctorName, setDoctorName] = useState('')
    const [Date, setDate] = useState('')
    const [Date2, setDate2]  = useState('')

    const handleHospitalName = (e) =>{
      setHospitalName(e.target.value)
    }

    const handleDoctorName = (e) =>{
      setDoctorName(e.target.value);
  }



   const handleDate = (e) =>{
        setDate(e.target.value);
    }

    const handleDate2 = (e) =>{
      setDate2(e.target.value);
  }
  return (
    <>
    <ToastContainer/>
    <div className="min-w-screen min-h-screen flex justify-center items-center">
      <div className="mainCard w-96 bg-white h-3/4 overflow-hidden rounded-sm shadow-2xl mx-2 pb-3">
        <div className="greenCard bg-green-600 text-white h-28 flex items-center justify-center">
          <h1 className="text-2xl font-medium">Book Appointmnet</h1>
        </div>

        <form action="" onSubmit={handleSubmit}>

        

        <div className="inputFields flex flex-col gap-4 h-fit mt-8 items-center ">
        <div className="fields flex">
            <div className="greenDiv h-9 w-9 bg-green-400 flex items-center justify-center rounded-l-md">
              <FaHospitalAlt className="text-white"/>
            </div>
            <input
              type="text"
              value={HospitalName}
              onChange={handleHospitalName}
              placeholder='Hospital Name'
              className="border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-sm w-56 outline-green-400 px-2 text-sm"
            />
          </div>

          <div className="fields flex">
            <div className="greenDiv h-9 w-9 bg-green-400 flex items-center justify-center rounded-l-md">
              <BsFillPersonFill className="text-white"/>
            </div>
            <input
              type="text"
              value={DoctorName}
              onChange={handleDoctorName}
              placeholder='Doctor Name'
              className="border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-sm w-56 outline-green-400 px-2 text-sm"
            />
          </div>



          <div className="fields flex">
            <div className="greenDiv h-9 w-9 bg-green-400 flex items-center justify-center rounded-l-md">
              <PiNumberOneBold className="text-white" />
            </div>
            <input
              type="date"
              value={Date}
              onChange={handleDate}
              placeholder="Date"
              className="border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-sm w-56 outline-green-400 px-2  text-sm"
            />
          </div>

          <div className="fields flex">
            <div className="greenDiv h-9 w-9 bg-green-400 flex items-center justify-center rounded-l-md">
              <PiNumberTwoBold className="text-white" />
            </div>
            <input
              type="date"
              value={Date2}
              onChange={handleDate2}
              placeholder="Date"
              className="border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-sm w-56 outline-green-400 px-2  text-sm"
            />
          </div>

          <div className="flex justify-around items-center gap-10">
            <span className="">Slots: </span>
          <div className="join">
  <input className="join-item btn" type="radio" name="options" aria-label="9-11" />
  <input className="join-item btn" type="radio" name="options" aria-label="2-4" />
  <input className="join-item btn" type="radio" name="options" aria-label="4-6" />
</div>
</div>

        </div>
        

        <div className="loginButton flex justify-center mt-5 px-14">
            <button className="min-h-[44px] bg-green-500 text-white hover:bg-green-400  rounded-sm outline-none w-full px-10">Book Appointment</button>
        </div>
        </form>

        

      </div>
    </div>
    </>
  );
};

export default BookAppointment
