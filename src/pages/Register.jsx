import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillLock, AiTwotoneMobile, AiTwotoneMail} from "react-icons/ai";
import {Link} from 'react-router-dom'
import axios from "axios";

const Login = () => {

    const [Full_Name, setFull_Name] = useState('')
    const [PassWord, setPassWord] = useState('')
    const [Email_Id, setEmail_Id] = useState('')
    const [Phone_no, setPhone_no] = useState('')

    const handleName = (e) =>{
        setFull_Name(e.target.value);
    }
    const handleEmail = (e) =>{
        setEmail_Id (e.target.value)
    }

    const handleNumber = (e) =>{
        setPhone_no(e.target.value.replace(/[^0-9]/g, '').slice(0, 10));
    }

    const handlePassword = (e) =>{
        setPassWord(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("https://8ff9-2409-40c1-13-9ef5-bcd5-6027-76a9-4010.ngrok-free.app/register", {
            Phone_no: Phone_no,
            Email_Id: Email_Id,
            Full_Name: Full_Name,
            PassWord: PassWord
        }).then((response) => {
            setEmail_Id('')
            setFull_Name('')
            setPhone_no('')
            setPassWord('')
            console.log(response);
        }).catch((err) => {
            console.error(err);
        });
        
    }


  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center">
      <div className="mainCard w-96 bg-white h-3/4 overflow-hidden rounded-sm shadow-2xl mx-2 pb-3">
        <div className="greenCard bg-green-600 text-white h-28 flex items-center justify-center">
          <h1 className="text-2xl font-medium">Register</h1>
        </div>

<form action=""  onSubmit={handleSubmit}>
        <div className="inputFields flex flex-col gap-4 h-fit mt-8 items-center ">
          <div className="fields flex">
            <div className="greenDiv h-9 w-9 bg-green-400 flex items-center justify-center rounded-l-md">
              <BsFillPersonFill className="text-white"/>
            </div>
            <input
              type="text"
              value={Full_Name}
              onChange={handleName}
              placeholder='Full Name'
              className="border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-sm w-56 outline-green-400 px-2 text-sm"
            />
          </div>
          <div className="fields flex">
            <div className="greenDiv h-9 w-9 bg-green-400 flex items-center justify-center rounded-l-md">
              <AiTwotoneMail className="text-white"/>
            </div>
            <input
              type="text"
              value={Email_Id}
              onChange={handleEmail}
              placeholder='Email'
              className="border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-sm w-56 outline-green-400 px-2 text-sm"
            />
          </div>
          <div className="fields flex">
            <div className="greenDiv h-9 w-9 bg-green-400 flex items-center justify-center rounded-l-md">
              <AiTwotoneMobile className="text-white"/>
            </div>
            <input
              type="text"
              value={Phone_no}
              onChange={handleNumber}
              placeholder='Mobile Number'
              className="border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-sm w-56 outline-green-400 px-2 text-sm"
            />
          </div>

          <div className="fields flex">
            <div className="greenDiv h-9 w-9 bg-green-400 flex items-center justify-center rounded-l-md">
              <AiFillLock className="text-white" />
            </div>
            <input
              type="text"
              value={PassWord}
              onChange={handlePassword}
              placeholder="Password"
              className="border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-sm w-56 outline-green-400 px-2  text-sm"
            />
          </div>
        </div>


        <div className="loginButton flex justify-center mt-5 px-14">
            <button className="h-8 bg-green-500 text-white hover:bg-green-400  rounded-sm outline-none w-full px-10">Register</button>
        </div>
        </form>

        <div className="footerLink flex justify-center mt-6">
            <span className="text-black">Already a member?</span><Link to = "/login"><span className="text-green-500">Login now</span></Link>
        </div>

      </div>
    </div>
  );
};

export default Login;
