import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import logo from "../../assets/images/logo-icon.png";
import toast from "react-hot-toast";
import BackToHome from "../../components/back-to-home";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.error("Please fill in the form");
    }

else{
    try {
      const { data } = await axios.post("/user/login", 
        {
          email, 
          password 
        });
       if(data.success) {
      toast.success("Login successful!");
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      navigate("/user-profile"); 
       }
    } catch (err) {
      toast.error("Login failed. Please check your credentials.");
      console.log(err);
    }
  }
  };
  
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
    navigate("/user-profile");
    }
  }, []);

  return (
    <>
      <section className="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
        <div className="absolute inset-0 image-wrap z-1 bg-[url('../../assets/images/bg/6.jpg')] bg-no-repeat bg-center bg-cover"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2" id="particles-snow"></div>
        <div className="container relative z-3">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
              <Link to="/">
                <img src={logo} className="mx-auto" alt="Logo" />
              </Link>
              <h5 className="my-6 text-xl font-semibold">Login</h5>
              <form className="text-start" onSubmit={submitHandler}>
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="email">
                      Email Address:
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="name@example.com"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="password">
                      Password:
                    </label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="Password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>

                  <div className="flex justify-between mb-4">
                    <div className="flex items-center mb-0">
                      <input
                        className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2"
                        type="checkbox"
                        id="RememberMe"
                      />
                      <label
                        className="form-checkbox-label text-slate-400"
                        htmlFor="RememberMe"
                      >
                        Remember me
                      </label>
                    </div>
                    <p className="text-slate-400 mb-0">
                      <Link to="/forgot-password" className="text-slate-400">
                        Forgot password?
                      </Link>
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="bg-red-600 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
                  >
                    Login
                  </button>

                  <div className="text-center mt-4">
                    <span className="text-slate-400 me-2">
                      Don't have an account?
                    </span>
                    <Link
                      to="/signup"
                      className="text-black dark:text-white font-bold inline-block"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <BackToHome />
    </>
  );
}
