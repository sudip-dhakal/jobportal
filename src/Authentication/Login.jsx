import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { USER_API } from "../constant";
import axios from "axios";

const Login = () => {
  const Navigation=useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const dataChangeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  console.log(loginData);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(`${USER_API}/login`, loginData, {
        headers: {
          "content-type": "multipart/form-data",
        },
        withCredentails: true,
      });
      if (res.data.success) {
        console.log("Data sent successfully");
        Navigation('/jobs');
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
            Welcome
          </h1>

          <form className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="mb-2 font-medium text-gray-300"
              >
                Username
              </label>
              <input
                value={loginData.email}
                onChange={dataChangeHandler}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-white/20 bg-gray-900/40 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="mb-2 font-medium text-gray-300"
              >
                Password
              </label>
              <input
                value={loginData.password}
                onChange={dataChangeHandler}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border border-white/20 bg-gray-900/40 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex justify-start gap-x-10">
              <label className="flex  items-center gap-x-2 text-gray-300 cursor-pointer relative">
                <input
                  type="radio"
                  onChange={dataChangeHandler}
                  name="role"
                  value="user"
                  className="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-full checked:border-blue-500 checked:bg-blue-500 transition-all duration-200"
                />
                <span className="ml-2 text-gray-200">User</span>
              </label>

              <label className="flex items-center gap-x-2 text-gray-300 cursor-pointer relative">
                <input
                  type="radio"
                  name="role"
                  onChange={dataChangeHandler}
                  value="recruiter"
                  className="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-full checked:border-blue-500 checked:bg-blue-500 transition-all duration-200"
                />
                <span className="ml-2 text-gray-200">Recruiter</span>
              </label>
            </div>

            <button
              onClick={loginHandler}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg transform hover:scale-[1.03] transition duration-300 ease-in-out"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-blue-400 hover:text-blue-300 font-medium transition"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
