import React from "react";
import SignInPic from "../assets/SignInPic.svg"; 
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      emailOrUsername: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="h-screen bg-gray-100 w-full flex flex-col justify-center items-center font-poppins">
      <div className="mt-8 flex flex-col justify-center items-center">
        <h1 className="text-5xl p-1 font-medium">
          Welcome Back to BPIT Alumni
        </h1>
        <h2 className="text-3xl p-1">
          Sign in to continue
        </h2>
      </div>
      <div className="h-[60%] flex justify-center items-center ">
        <div className="bg-gray-200 p-5 rounded-xl w-[65%] flex mx-5 gap-6">
          <div className="w-[50%] flex gap-6 flex-col justify-center items-center">
            <form className="flex w-full flex-col justify-center" onSubmit={formik.handleSubmit}>
              <div className="flex w-full flex-col">
                <label className="m-2 text-lg" htmlFor="emailOrUsername">
                  Email or Username
                </label>
                <div className="flex gap-2">
                  <input
                    className="p-2 w-full border-gray-400 border-solid border-1 rounded-md placeholder:text-sm"
                    type="text"
                    id="emailOrUsername"
                    name="emailOrUsername"
                    placeholder="Enter your email or username"
                    onChange={formik.handleChange}
                    value={formik.values.emailOrUsername}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="m-2 text-lg" htmlFor="password">
                  Password
                </label>
                <div className="flex gap-2">
                  <input
                    className="p-2 w-full border-gray-400 border-solid border-1 rounded-md placeholder:text-sm"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </div>
              </div>

              <div className="mt-4">
                <button type="submit" className="font-medium w-full p-2 bg-[#6C63FF] text-white rounded-md">
                  SIGN IN
                </button>
              </div>
            </form>
            <div>
            <p className="text-gray-600 text-md">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#6C63FF]">Sign up</Link>
            </p>
          </div>
          </div>
          <div className="w-[50%] m-3">
            <img className="w-full" src={SignInPic} alt="Sign In" />
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default SignIn;