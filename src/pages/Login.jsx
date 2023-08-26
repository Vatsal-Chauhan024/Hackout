
import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import api from "../api/api";

const Login = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", {
        Email_Id: Email_Id,
        Password: Password,
      });

      // Assuming the server sends back a success message and doesn't return a token
      console.log("Login successful:", response.data.message);

      // Create a JWT token based on the combination of email and password
      const token = btoa(`${Email_Id}:${Password}`);
      console.log(token,Email_Id);
      // Store the token in localStorage or a more secure storage option
      localStorage.setItem("token", token);
      localStorage.setItem("email", Email_Id);

      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      navigate("/home");
  
    } catch (error) {
      toast.error("Login failed. Please check your credentials.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const [Email_Id, setEmail_Id] = useState("");
  const [Password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail_Id(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <ToastContainer style={{width:200}}/>
      <div className="min-w-screen min-h-screen flex justify-center items-center">
        <div className="mainCard w-96 bg-white h-3/4 overflow-hidden rounded-sm shadow-2xl mx-2 pb-3">
          <div className="greenCard bg-green-600 text-white h-28 flex items-center justify-center">
            <h1 className="text-2xl font-medium">Login</h1>
          </div>

          <form action="" onSubmit={handleSubmit}>
            <div className="inputFields flex flex-col gap-4 h-fit mt-16 items-center ">
              <div className="fields flex">
                <div className="greenDiv h-9 w-9 bg-green-400 flex items-center justify-center rounded-l-md">
                  <BsFillPersonFill className="text-white" />
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
                  <AiFillLock className="text-white" />
                </div>
                <input
                  type="password"
                  value={Password}
                  onChange={handlePassword}
                  placeholder="Password"
                  className="border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-sm w-56 outline-green-400 px-2 text-sm"
                />
              </div>
            </div>
            <div className="forget ml-16 mt-2 cursor-pointer">
              <span className="forgetPass text-green-500 font-medium tracking-wide  hover:text-green-300">
                {" "}
                Forget Password?
              </span>
            </div>

            <div className="loginButton flex justify-center mt-5 px-14">
              <button className="h-8 bg-green-500 text-white hover:bg-green-400  rounded-sm outline-none w-full px-10">
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
