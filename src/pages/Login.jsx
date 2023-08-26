import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure to import the CSS
import api from "../api/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", {
        Email_Id: email,
        Password: password,
      });

      setEmail("");
      setPassword("");
      
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
      });

      const token = btoa(`${email}:${password}`);


      sessionStorage.setItem("token",token);
      sessionStorage.setItem("Email_Id",email);
      
      navigate('/home');

    
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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <ToastContainer />
      <div className="min-w-screen min-h-screen flex justify-center items-center">
        <div className="mainCard w-96 bg-white h-3/4 overflow-hidden rounded-sm shadow-2xl mx-2 pb-3">
          <div className="greenCard bg-green-600 text-white h-28 flex items-center justify-center">
            <h1 className="text-2xl font-medium">Login</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="inputFields flex flex-col gap-4 h-fit mt-16 items-center ">
              <div className="fields flex">
                <div className="greenDiv h-9 w-9 bg-green-400 flex items-center justify-center rounded-l-md">
                  <BsFillPersonFill className="text-white" />
                </div>
                <input
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email"
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
                  onChange={handlePasswordChange}
                  placeholder="Password"
                  className="border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-sm w-56 outline-green-400 px-2 text-sm"
                />
              </div>
            </div>
            <div className="forget ml-16 mt-2 cursor-pointer">
              <span className="forgetPass text-green-500 font-medium tracking-wide hover:text-green-300">
                Forget Password?
              </span>
            </div>

            <div className="loginButton flex justify-center mt-5 px-14">
              <button className="h-8 bg-green-500 text-white hover:bg-green-400 rounded-sm outline-none w-full px-10">
                Login
              </button>
            </div>
          </form>
          <div className="footerLink flex justify-center mt-6">
            <span className="text-black">Not a member?</span>
            <Link to="/register">
              <span className="text-green-500">Signup now</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
