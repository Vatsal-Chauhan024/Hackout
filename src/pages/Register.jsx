import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillLock, AiTwotoneMobile, AiTwotoneMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import { ToastContainer, toast } from "react-toastify";


const Register = () => {
  const [Full_Name, setFull_Name] = useState("");
  const [password, setPassword] = useState("");
  const [Email_Id, setEmail_Id] = useState("");
  const [Phone_No, setPhone_No] = useState("");
  const navigate = useNavigate();

  const handleName = e => {
    setFull_Name(e.target.value);
  };
  const handleEmail = e => {
    setEmail_Id(e.target.value);
  };

  const handleNumber = e => {
    setPhone_No(e.target.value.replace(/[^0-9]/g, "").slice(0, 10));
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/register", {
        Phone_No: Phone_No,
        Email_Id: Email_Id,
        Full_Name: Full_Name,
        Password: password,
      });

      setEmail_Id("");
      setPassword("");
      setFull_Name('')
      setPhone_No('')
      
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
      });
     
      const token = btoa(`${Email_Id}:${password}`);


      sessionStorage.setItem("token",token);
      sessionStorage.setItem("Email_Id",Email_Id);
      
      navigate('/home');
      // navigate('/home')
      
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
      });
    }
  };

  return (
    <>
    <ToastContainer/>
    <div className="min-w-screen min-h-screen flex justify-center items-center">
      <div className="mainCard w-96 bg-white h-3/4 overflow-hidden rounded-sm shadow-2xl mx-2 pb-3">
        <div className="greenCard bg-green-600 text-white h-28 flex items-center justify-center">
          <h1 className="text-2xl font-medium">Register</h1>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div className="inputFields flex flex-col gap-4 h-fit mt-8 items-center ">
            <div className="fields flex">
              <div className="greenDiv h-9 w-9 bg-green-400 flex items-center justify-center rounded-l-md">
                <BsFillPersonFill className="text-white" />
              </div>
              <input
                type="text"
                value={Full_Name}
                onChange={handleName}
                placeholder="Full Name"
                className="border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-sm w-56 outline-green-400 px-2 text-sm"
              />
            </div>
            <div className="fields flex">
              <div className="greenDiv h-9 w-9 bg-green-400 flex items-center justify-center rounded-l-md">
                <AiTwotoneMail className="text-white" />
              </div>
              <input
                type="text"
                value={Email_Id}
                onChange={handleEmail}
                placeholder="Email"
                className="border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-sm w-56 outline-green-400 px-2 text-sm"
              />
            </div>
            <div className="fields flex">
              <div className="greenDiv h-9 w-9 bg-green-400 flex items-center justify-center rounded-l-md">
                <AiTwotoneMobile className="text-white" />
              </div>
              <input
                type="text"
                value={Phone_No}
                onChange={handleNumber}
                placeholder="Mobile Number"
                className="border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-sm w-56 outline-green-400 px-2 text-sm"
              />
            </div>

            <div className="fields flex">
              <div className="greenDiv h-9 w-9 bg-green-400 flex items-center justify-center rounded-l-md">
                <AiFillLock className="text-white" />
              </div>
              <input
                type="password"
                value={password}
                onChange={handlePassword}
                placeholder="Password"
                className="border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-sm w-56 outline-green-400 px-2  text-sm"
              />
            </div>
          </div>

          <div className="loginButton flex justify-center mt-5 px-14">
            <button className="h-8 bg-green-500 text-white hover:bg-green-400  rounded-sm outline-none w-full px-10">
              Register
            </button>
          </div>
        </form>

        <div className="footerLink flex justify-center mt-6">
          <span className="text-black">Already a member?</span>
          <Link to="/login">
            <span className="text-green-500">Login now</span>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
