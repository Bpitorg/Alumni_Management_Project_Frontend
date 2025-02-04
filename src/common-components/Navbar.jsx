import React from "react";
import LoginComponent from "../page-components/LoginComponent";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { label: "Home", to: "/home" },
    { label: "Careers", to: "/careers" },
    { label: "Community", to: "/community" },
    { label: "Events", to: "/events" },
  ];
  
  return (
    <div className="mt-4 mx-3">
      <nav className="bg-gray-200 font-poppins shadow-gray-300 shadow-md flex justify-between rounded-3xl p-4 w-full">
        <div className="font-nexus text-xl font-medium">BPITAlumni</div>
        <ul className="flex justify-between">
          {navLinks.map((link, index) => (
            <li
              className="mx-4 relative"
            >
              <Link to={link.to} className="text-black hover:font-medium hover:text-lg hover:underline hover:underline-offset-8">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <LoginComponent />
      </nav>
    </div>
  );
};

export default Navbar;
