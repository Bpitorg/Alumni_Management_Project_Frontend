import React, { useState } from "react";
import SignInPic from "../assets/SignInPic 1.svg";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { UserService } from "../server"; // Import our UserService

const LogIn = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      emailOrUsername: "",
      password: "",
    },

    onSubmit: async (values, { setSubmitting }) => {
      try {
        setIsSubmitting(true);
        setError('');
        
        const result = await UserService.login(
          {
            email: values.emailOrUsername,
            password: values.password
          },
          {
            setErrors: (errors) => {
              if (typeof errors === 'object') {
                Object.entries(errors).forEach(([field, message]) => {
                  formik.setFieldError(field, message);
                });
              } else {
                setError(errors);
              }
            },
            setLoading: setIsSubmitting
          }
        );

        if (result.success) {
          navigate('/home');
        } else {
          setError(result.message);
        }
      } catch (error) {
        setError('An unexpected error occurred. Please try again.');
      } finally {
        setSubmitting(false);
        setIsSubmitting(false);
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.emailOrUsername) {
        errors.emailOrUsername = "Email or Username is required";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      return errors;
    },
  });

  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center font-poppins"
      style={{ backgroundColor: theme.palette.background }}
    >
      <div
        className="mt-8 flex flex-col justify-center items-center"
        style={{ color: theme.palette.primary.main }}
      >
        <h1 className="text-5xl p-1 font-medium">Welcome Back to BPIT Alumni!</h1>
        <h2 className="text-3xl p-1">Log In to continue</h2>
      </div>
      <div className="h-[60%] flex justify-center items-center">
        <div className="p-5 rounded-xl w-[65%] flex mx-5 gap-6">
          <div className="w-[50%] flex gap-6 flex-col justify-center items-center">
            <form
              className="flex w-full flex-col justify-center"
              onSubmit={formik.handleSubmit}
            >
              {error && (
                <div className="mb-4 p-2 text-center text-red-500">
                  {error}
                </div>
              )}
              
              <div className="flex w-full flex-col">
                <label
                  className="m-2 text-lg"
                  htmlFor="emailOrUsername"
                  style={{ color: theme.palette.primary.main }}
                >
                  Email or Username
                </label>
                <input
                  className="p-2 w-full border-solid border-[1.5px] rounded-md placeholder:text-sm focus:outline-none"
                  style={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.text.primary,
                  }}
                  type="text"
                  id="emailOrUsername"
                  name="emailOrUsername"
                  placeholder="Enter your email or username"
                  onChange={formik.handleChange}
                  value={formik.values.emailOrUsername}
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex flex-col">
                <label
                  className="m-2 text-lg"
                  htmlFor="password"
                  style={{ color: theme.palette.primary.main }}
                >
                  Password
                </label>
                <input
                  className="p-2 w-full border-solid border-[1.5px] rounded-md placeholder:text-sm focus:outline-none"
                  style={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.text.primary,
                  }}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  disabled={isSubmitting}
                />
              </div>
              <div className="mt-4 flex w-full">
                <button
                  type="submit"
                  className="font-medium flex justify-center w-full p-2 rounded-md transition-colors"
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'LOGGING IN...' : 'LOG IN'}
                </button>
              </div>
            </form>
            <div>
              <p className="text-md" style={{ color: theme.palette.text.secondary }}>
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  style={{
                    color: theme.palette.primary.main,
                  }}
                >
                  Sign up
                </Link>
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

export default LogIn;