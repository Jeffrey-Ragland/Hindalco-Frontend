import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import loginCover from '../Assets/loginCover.jpg';
import loginVector from '../Assets/loginVector.jpg';
import xymaLogo from '../Assets/xymaLogoWhite.png';
import { FaUserCheck } from "react-icons/fa";
import { PiPasswordFill } from "react-icons/pi";

const Login = () => {

    const [loginFormData, setLoginFormData] = useState({
        Username: '',
        Password: ''
    });

    const navigate = useNavigate();

    const handleLoginFormChange = (e) => {
        const {name, value} = e.target;
        setLoginFormData({...loginFormData, [name]: value});
    };

    const handleLoginFormSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/backend/login', loginFormData, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            const data = response.data;
            if(data.token) {
                localStorage.setItem('token', data.token);
                navigate(data.redirectUrl);
            } else {
                window.alert('Invalid credentials');
            };
        })
        .catch((error) => {
             if (error.response) {
               // Request made and server responded
               window.alert(
                 error.response.data.message || "Invalid credentials"
               );
             } else if (error.request) {
               // Request made but no response
               window.alert("No response from server");
             } else {
               // Something else happened
               window.alert("Error occurred");
             }
        });
    };

  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${loginCover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="backdrop-blur-sm rounded-xl p-4 text-white shadow shadow-white flex gap-4">
        <div className="p-2">
          <img src={loginVector} className="max-w-[250px] rounded-2xl" />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center p-4">
          <img src={xymaLogo} className="max-w-[100px]" />
          <form className="flex flex-col gap-4" onSubmit={handleLoginFormSubmit}>
            <div className="border border-white flex justify-between items-center rounded-md p-2">
              <input
                type="text"
                name='Username'
                value={loginFormData.Username}
                onChange={handleLoginFormChange}
                placeholder="Enter Username . . ."
                autoComplete='off'
                className="bg-transparent placeholder-gray-300 focus:outline-none"
                required
              />
              <FaUserCheck className="text-2xl" />
            </div>
            <div className="border border-white flex justify-between items-center rounded-md p-2">
              <input
                type="password"
                name='Password'
                value={loginFormData.Password}
                onChange={handleLoginFormChange}
                placeholder="Enter Password . . ."
                className="bg-transparent placeholder-gray-300 focus:outline-none"
                required
              />
              <PiPasswordFill className="text-2xl" />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login
