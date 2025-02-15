import React from "react";
import SignUpPic from "../assets/SignUpPic.svg";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

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

  const inputFields = [
    { id: "firstName", name: "firstName", placeholder: "First Name", type: "text" },
    { id: "lastName", name: "lastName", placeholder: "Last Name", type: "text" },
    { id: "email", name: "email", placeholder: "Enter your email address", type: "text" },
    { id: "phone", name: "phone", placeholder: "Enter your phone number", type: "text" },
    { id: "branch", name: "branch", placeholder: "Enter your branch", type: "text" },
    { id: "password", name: "password", placeholder: "Enter your password", type: "password" },
    { id: "confirmPassword", name: "confirmPassword", placeholder: "Confirm your password", type: "password" },
  ];

  const currentYear = new Date().getFullYear();
  const passingYears = [];
  for (let year = 2011; year <= currentYear; year++) {
    passingYears.push(year);
  }

  return (
    <div className="bg-gray-200 w-full flex flex-col justify-center items-center font-poppins">
      <div className="mt-10 flex flex-col justify-center items-center">
        <h1 className="text-5xl p-1 font-medium">
          Welcome to BPIT Alumni
        </h1>
        <h2 className="text-3xl p-1">
          Become a part of the BPIT community today!
        </h2>
      </div>
      <div className="h-full flex justify-center items-center">
        <div className="h-1/2 flex m-5">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <form className="flex flex-col justify-center" onSubmit={formik.handleSubmit}>
              <div className="flex flex-col">
                <label className="m-2 text-lg" htmlFor="Name">
                  Name
                </label>
                <div className="flex gap-2">
                  {inputFields.slice(0, 2).map((field) => (
                    <input
                      key={field.id}
                      className="p-2 border-gray-400 border-solid border-1 rounded-md placeholder:text-sm"
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      onChange={formik.handleChange}
                      value={formik.values[field.name]}
                    />
                  ))}
                </div>
              </div>
              {inputFields.slice(2).map((field) => (
                <div key={field.id} className="flex flex-col">
                  <label className="m-2 text-lg" htmlFor={field.id}>
                    {field.placeholder}
                  </label>
                  <div className="flex gap-2">
                    <input
                      className="p-2 w-full border-gray-400 border-solid border-1 rounded-md placeholder:text-sm"
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      onChange={formik.handleChange}
                      value={formik.values[field.name]}
                    />
                  </div>
                </div>
              ))}
              <div className="flex flex-col">
                <label className="m-2 text-lg" htmlFor="passingYear">
                  Passing Year
                </label>
                <div className="flex gap-2">
                  <select
                    className="p-2 w-full border-gray-400 border-solid border-1 rounded-md placeholder:text-sm"
                    id="passingYear"
                    name="passingYear"
                    onChange={formik.handleChange}
                    value={formik.values.passingYear}
                  >
                    <option value="" label="Select your passing year" />
                    {passingYears.map((year) => (
                      <option key={year} value={year} label={year.toString()} />
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-4 flex w-full">
                <Link to="/student-portfolio" className="font-medium flex justify-center w-full p-2 bg-[#6C63FF] text-white rounded-md">
                  Create Account
                </Link>
              </div>
            </form>
          </div>
          <div className="w-1/2 m-3">
            <img className="w-full h-full" src={SignUpPic} alt="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;