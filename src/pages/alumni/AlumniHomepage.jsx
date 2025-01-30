import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../common-components/Navbar";

const AlumniHomepage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <Navbar />
        <div className="flex gap-4">
          <Link
            to="/alumni-signup"
            className="px-3 text-sm py-1 border-red-400 border-1 border-solid font-semibold text-red-400 rounded-md cursor-pointer"
          >
            Sign Up
          </Link>
          <Link
            to="/alumni-signin"
            className="px-3 text-sm py-1 border-red-400 border-1 border-solid font-semibold text-red-400 rounded-md cursor-pointer"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AlumniHomepage;
