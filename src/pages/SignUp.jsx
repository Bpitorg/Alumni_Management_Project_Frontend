import React from "react";
import SignUpPic from "../assets/SignUpPic.svg";
import { useFormik } from "formik";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        branch: "",
        password: "",
        confirmPassword: "",
        passingYear: "",
      },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="bg-gray-200 w-full flex flex-col justify-center items-center font-poppins">
        <div className="mt-13 flex flex-col justify-center items-center">
        <h1 className="text-5xl p-1 font-medium ">
              Welcome to BPIT Alumni
            </h1>
            <h2 className="text-3xl p-1 ">
              Become a part of the BPIT community today!
            </h2>
        </div>
      <div className="h-full flex justify-center items-center">
        <div className="h-1/2 flex m-5">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <form className="flex flex-col justify-center">
              <div className="flex flex-col">
                <label className="m-2 text-lg" htmlFor="Name">
                  Name
                </label>
                <div className="flex gap-2">
                  <input
                    className="p-2 border-gray-400 border-solid border-1 rounded-md placeholder:text-sm"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                  <input
                    className="p-2 border-gray-400 border-solid border-1 rounded-md placeholder:text-sm"
                    type="text"
                    id="lastName"
                    name="LastName"
                    placeholder="Last Name"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="m-2 text-lg" htmlFor="email">
                  Email
                </label>
                <div className="flex gap-2">
                  <input
                    className="p-2 w-full border-gray-400 border-solid border-1 rounded-md placeholder:text-sm"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="m-2 text-lg" htmlFor="phone">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <input
                    className="p-2 w-full border-gray-400 border-solid border-1 rounded-md placeholder:text-sm"
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="m-2 text-lg" htmlFor="branch">
                  Branch
                </label>
                <div className="flex gap-2">
                  <input
                    className="p-2 w-full border-gray-400 border-solid border-1 rounded-md placeholder:text-sm"
                    type="text"
                    id="branch"
                    name="branch"
                    placeholder="Enter your branch"
                    onChange={formik.handleChange}
                    value={formik.values.branch}
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

              <div className="flex flex-col">
                <label className="m-2 text-lg" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <div className="flex gap-2">
                  <input
                    className="p-2 w-full border-gray-400 border-solid border-1 rounded-md placeholder:text-sm"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="m-2 text-lg" htmlFor="passingYear">
                  Passing Year
                </label>
                <div className="flex gap-2">
                  <input
                    className="p-2 w-full border-gray-400 border-solid border-1 rounded-md placeholder:text-sm"
                    id="passingYear"
                    name="passingYear"
                    onChange={formik.handleChange}
                    value={formik.values.passingYear}
                    placeholder="Enter your passing year"
                  >
                  </input>
                </div>
              </div>
              <div className="mt-4">
                <button
                
                className="font-semibold w-full p-2 bg-[#6C63FF] text-white rounded-md">
                    SUBMIT
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/2 m-3">
            <img className="w-full h-full" src={SignUpPic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
