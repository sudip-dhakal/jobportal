import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { USER_API } from "../constant";

const Register = () => {
  const navigation = useNavigate();
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    file: "",
    role: "",
    password: "",
  });

  const handleData = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setRegisterData({ ...registerData, file: e.target.files[0] });
  };

  const handleFormData = () => {
    let formData = new FormData();
    formData.append("fullName", registerData.fullName);
    formData.append("email", registerData.email);
    formData.append("phoneNumber", registerData.phoneNumber);
    formData.append("password", registerData.password);
    formData.append("role", registerData.role);
    if (registerData.file) {
      formData.append("file", registerData.file);
    }
    return formData;
  };

  console.log(registerData);

  const submitHandler = async (e) => {
    e.preventDefault();
    let formDataValue = handleFormData();
    console.log("Form Data Value is :", formDataValue);

    try {
      let response = await axios.post(`${USER_API}/register`, formDataValue, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (response.status===201) {
        console.log("Data sent successfully");
        navigation("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative w-full min-h-screen flex items-center justify-center px-4">
        <img
          src="/job.jpg"
          alt="Job Opportunities"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <div className="relative z-10 w-full max-w-md p-10 rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 shadow-2xl border border-white/10">
          <h1 className="text-center text-3xl overflow-hidden font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600 drop-shadow-md mb-8">
            Create Account
          </h1>

          <form className="space-y-4">
            <div className="flex items-center space-x-3">
              <label
                htmlFor="username"
                className="w-28 font-medium text-gray-300"
              >
                FullName
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={registerData.fullName}
                onChange={handleData}
                placeholder="Sudip Dhakal"
                className="flex-1 border border-white/20 bg-gray-900/40 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              />
            </div>

            <div className="flex items-center space-x-3">
              <label htmlFor="email" className="w-28 font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={registerData.email}
                onChange={handleData}
                className="flex-1 border border-white/20 bg-gray-900/40 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              />
            </div>
            <div className="flex items-center space-x-3">
              <label htmlFor="email" className="w-28 font-medium text-gray-300">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phone"
                value={registerData.phoneNumber}
                onChange={handleData}
                placeholder="Enter your email"
                className="flex-1 border border-white/20 bg-gray-900/40 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              />
            </div>

            <div className="flex items-center space-x-3">
              <label
                htmlFor="password"
                className="w-28 font-medium text-gray-300"
              >
                Password
              </label>
              <input
                value={registerData.password}
                onChange={handleData}
                name="password"
                type="password"
                id="password"
                placeholder="Enter your password"
                className="flex-1 border border-white/20 bg-gray-900/40 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              />
            </div>
            <div className="flex items-center space-x-3">
              <label htmlFor="email" className="w-28 font-medium text-gray-300">
                Profile
              </label>
              <input
                type="file"
                onChange={changeFileHandler}
                id="file"
                placeholder="Enter your email"
                className="flex-1 border border-white/20 bg-gray-900/40 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              />
            </div>
            <div className="flex items-center space-x-3">
              <label className="w-28 font-medium text-gray-300">Role</label>
              <div className="flex space-x-6">
                <label
                  htmlFor="user"
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <input
                    type="radio"
                    onChange={handleData}
                    id="user"
                    name="role"
                    value="user"
                    className="form-radio text-amber-400 focus:ring-amber-400"
                  />
                  <span>User</span>
                </label>
                <label
                  htmlFor="recruiter"
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <input
                    type="radio"
                    onChange={handleData}
                    id="recruiter"
                    name="role"
                    value="recruiter"
                    className="form-radio text-amber-400 focus:ring-amber-400"
                  />
                  <span>Recruiter</span>
                </label>
              </div>
            </div>

            <button
              className="w-full bg-gradient-to-r from-amber-400 to-yellow-600 hover:from-yellow-500 hover:to-amber-500 text-black font-semibold py-3 rounded-lg shadow-lg transform hover:scale-[1.03] transition duration-300 ease-in-out"
              onClick={submitHandler}
            >
              Register
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-amber-400 hover:text-yellow-300 font-medium transition"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
