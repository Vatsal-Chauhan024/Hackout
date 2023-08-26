import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import {PiNumberOneBold, PiNumberTwoBold} from 'react-icons/pi'
import { ToastContainer, toast } from 'react-toastify';
import {FaHospitalAlt} from 'react-icons/fa'
import api from "../api/api"
import { useNavigate } from "react-router-dom";
import useAuth from "../helper/useAuth";

const BookAppointment = () => {
  useAuth();
  const navigate = useNavigate();
   const [HospitalName, setHospitalName] = useState('')
    const [DoctorName, setDoctorName] = useState('')
    const [Date, setDate] = useState('')
    const [Date2, setDate2]  = useState('')
    const doctorOptions = [
      "Dr. John Doe",
      "Dr. Jane Smith",
      "Dr. Michael Johnson",
      "Dr. Emily Brown",
    ];
    const [selectedSlot, setSelectedSlot] = useState("");

    const handleHospitalName = (e) =>{
      setHospitalName(e.target.value)
    }

    const handleSlotChange = (e) => {
      setSelectedSlot(e.target.value);
    };

    const handleDoctorName = (e) =>{
      setDoctorName(e.target.value);
  }



   const handleDate = (e) =>{
        setDate(e.target.value);
    }

    const handleDate2 = (e) =>{
      setDate2(e.target.value);
  }

  const handleSubmit =async (e) =>{
    e.preventDefault();

    try {
      const response = await api.post("/bookappointment", {
        HospitalName: HospitalName,
        DoctorName: DoctorName,
        Date: Date,
        Date2: Date2,
        selectedSlot: selectedSlot

      });

      setHospitalName("");
      setDoctorName("");
      setDate("")
      setDate2("")
      selectedSlot("")
      
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
      });
      navigate('/home')

    
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
      });
    }
    
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
            <select
              value={DoctorName}
              onChange={handleDoctorName}
              className="border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-sm w-56 outline-green-400 px-2 text-sm"
            >
              <option value="">Select Doctor</option>
              {doctorOptions.map((doctor, index) => (
                <option key={index} value={doctor}>
                  {doctor}
                </option>
              ))}
            </select>
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
              <input
                className="join-item btn"
                type="radio"
                name="options"
                aria-label="9-11"
                value="9-11"
                checked={selectedSlot === "9-11"}
                onChange={handleSlotChange}
              />
              <input
                className="join-item btn"
                type="radio"
                name="options"
                aria-label="2-4"
                value="2-4"
                checked={selectedSlot === "2-4"}
                onChange={handleSlotChange}
              />
              <input
                className="join-item btn"
                type="radio"
                name="options"
                aria-label="4-6"
                value="4-6"
                checked={selectedSlot === "4-6"}
                onChange={handleSlotChange}
              />
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
