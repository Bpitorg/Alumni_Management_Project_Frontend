import React, { useState } from "react";
import SignUpPic from "../assets/SignUpPic 1.svg";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import * as Yup from "yup";
import { UserService } from "../server";

const SignUp = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      branch: "",
      password: "",
      confirmPassword: "",
      passingYear: "",
      enrollmentNumber: "",
      section: "A", // Default section
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
      branch: Yup.string().required("Branch is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
      passingYear: Yup.number()
        .min(2000, "Year must be after 2000")
        .max(new Date().getFullYear() + 5, "Invalid year")
        .required("Passing year is required"),
      enrollmentNumber: Yup.number()
        .positive("Enrollment number must be positive")
        .integer("Enrollment number must be an integer")
        .required("Enrollment number is required"),
      section: Yup.string().required("Section is required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      // Prepare data matching CreateUserDto
      const userData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        mobile: values.mobile,
        branch: values.branch,
        password: values.password,
        role: "STUDENT",
        section: values.section,
        passingYear: parseInt(values.passingYear),
        enrollmentNumber: parseInt(values.enrollmentNumber),
        societyId: 1,
      };

      // Use UserService for registration
      const result = await UserService.register(userData, {
        setErrors,
        setLoading: (isLoading) => {
          setLoading(isLoading);
          setSubmitting(isLoading);
        }
      });

      if (result.success) {
        alert(result.message);
        navigate("/home");
      } else {
        alert(result.message);
      }
    },
  });

  const inputFields = [
    {
      id: "firstName",
      name: "firstName",
      placeholder: "First Name",
      type: "text",
    },
    {
      id: "lastName",
      name: "lastName",
      placeholder: "Last Name",
      type: "text",
    },
    {
      id: "email",
      name: "email",
      placeholder: "Email Address",
      type: "email",
    },
    {
      id: "mobile",
      name: "mobile",
      placeholder: "Phone Number",
      type: "tel",
    },
    {
      id: "branch",
      name: "branch",
      placeholder: "Branch",
      type: "text",
    },
    {
      id: "enrollmentNumber",
      name: "enrollmentNumber",
      placeholder: "Enrollment Number",
      type: "number",
    },
    {
      id: "password",
      name: "password",
      placeholder: "Password",
      type: "password",
    },
    {
      id: "confirmPassword",
      name: "confirmPassword",
      placeholder: "Confirm Password",
      type: "password",
    },
  ];

  const currentYear = new Date().getFullYear();
  const passingYears = Array.from(
    { length: currentYear - 2000 },
    (_, i) => 2001 + i
  ).reverse();

  const sections = ["A", "B", "C", "D"];

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center font-poppins"
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <div
        className="mt-10 flex flex-col justify-center items-center"
        style={{ color: theme.palette.primary.main }}
      >
        <h1 className="text-5xl p-1 font-medium">Welcome to BPIT Alumni</h1>
        <h2 className="text-3xl p-1">
          Become a part of the BPIT community today!
        </h2>
      </div>
      <div className="h-full flex justify-center items-center">
        <div
          className="h-1/2 flex m-5 shadow-lg rounded-xl"
          style={{ backgroundColor: theme.palette.background.paper }}
        >
          <div className="w-1/2 flex flex-col justify-center items-center p-5">
            <form
              className="flex flex-col justify-center w-full"
              onSubmit={formik.handleSubmit}
            >
              <div className="grid grid-cols-2 gap-4">
                {inputFields.slice(0, 2).map((field) => (
                  <div key={field.id} className="flex flex-col">
                    <label
                      className="m-1 text-sm font-medium"
                      htmlFor={field.id}
                      style={{ color: theme.palette.primary.main }}
                    >
                      {field.placeholder}
                    </label>
                    <input
                      className="p-2 border-solid border-[1.5px] rounded-md text-sm focus:outline-none"
                      style={{
                        borderColor: formik.touched[field.name] && formik.errors[field.name]
                          ? theme.palette.error.main
                          : theme.palette.divider,
                        color: theme.palette.text.primary,
                      }}
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values[field.name]}
                    />
                    {formik.touched[field.name] && formik.errors[field.name] && (
                      <div className="text-xs mt-1" style={{ color: theme.palette.error.main }}>
                        {formik.errors[field.name]}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {inputFields.slice(2).map((field) => (
                <div key={field.id} className="flex flex-col mt-2">
                  <label
                    className="m-1 text-sm font-medium"
                    htmlFor={field.id}
                    style={{ color: theme.palette.primary.main}}
                  >
                    {field.placeholder}
                  </label>
                  <input
                    className="p-2 w-full border-solid border-[1.5px] rounded-md text-sm focus:outline-none"
                    style={{
                      borderColor: formik.touched[field.name] && formik.errors[field.name]
                        ? theme.palette.error.main
                        : theme.palette.divider,
                        color: theme.palette.text.primary,
                    }}
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    placeholder={field.placeholder}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[field.name]}
                  />
                  {formik.touched[field.name] && formik.errors[field.name] && (
                    <div className="text-xs mt-1" style={{ color: theme.palette.error.main }}>
                      {formik.errors[field.name]}
                    </div>
                  )}
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex flex-col">
                  <label
                    className="m-1 text-sm font-medium"
                    htmlFor="passingYear"
                    style={{ color: theme.palette.primary.main }}
                  >
                    Passing Year
                  </label>
                  <select
                    className="p-2 border-solid border-[1.5px] rounded-md text-sm focus:outline-none"
                    style={{
                      borderColor: formik.touched.passingYear && formik.errors.passingYear
                        ? theme.palette.error.main
                        : theme.palette.divider,
                      color: formik.values.passingYear
                        ? theme.palette.text.primary
                        : "#9CA3AF",
                    }}
                    id="passingYear"
                    name="passingYear"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passingYear}
                  >
                    <option value="" disabled hidden style={{ color: "#9CA3AF" }}>
                      Select passing year
                    </option>
                    {passingYears.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  {formik.touched.passingYear && formik.errors.passingYear && (
                    <div className="text-xs mt-1" style={{ color: theme.palette.error.main }}>
                      {formik.errors.passingYear}
                    </div>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    className="m-1 text-sm font-medium"
                    htmlFor="section"
                    style={{ color: theme.palette.primary.main }}
                  >
                    Section
                  </label>
                  <select
                    className="p-2 border-solid border-[1.5px] rounded-md text-sm focus:outline-none"
                    style={{
                      borderColor: formik.touched.section && formik.errors.section
                        ? theme.palette.error.main
                        : theme.palette.divider,
                      color: theme.palette.text.primary,
                    }}
                    id="section"
                    name="section"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.section}
                  >
                    {sections.map((section) => (
                      <option key={section} value={section}>
                        Section {section}
                      </option>
                    ))}
                  </select>
                  {formik.touched.section && formik.errors.section && (
                    <div className="text-xs mt-1" style={{ color: theme.palette.error.main }}>
                      {formik.errors.section}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 flex w-full">
                <button
                  type="submit"
                  className="font-medium flex justify-center w-full p-2 rounded-md transition-colors"
                  style={{
                    backgroundColor: loading
                      ? theme.palette.action.disabled
                      : theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                  disabled={loading || !formik.isValid}
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </button>
              </div>

              <div className="mt-4 text-center">
                <span style={{ color: theme.palette.text.secondary }}>
                  Already have an account?{" "}
                </span>
                <Link
                  to="/login"
                  className="font-medium"
                  style={{ color: theme.palette.primary.main }}
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
          <div className="w-1/2 m-3">
            <img
              className="w-full h-full object-contain"
              src={SignUpPic}
              alt="Sign Up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;