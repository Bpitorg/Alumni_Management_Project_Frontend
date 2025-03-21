import React from "react";
import logo from "../assets/BPITAlumni.svg";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <div className="py-5 px-15 grid grid-cols-3 bg-[#f0f0e8]">
        <div>
          <img src={logo} alt="Logo" style={{ height: 20, width: "auto" }} />
        </div>
        <div
          className="flex flex-col text-md"
          style={{ color: theme.palette.primary.main }}
        >
          <Link to="/home">Home</Link>
          <Link tp="events">Events</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/network">Networking</Link>
          <Link to="/community">Community</Link>
          <Link to="/mentorship">Mentorship</Link>
        </div>
        <div className="flex gap-3">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          <FaFacebookSquare size={35} />
          </a>

          <a
            href="https://www.linkdin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
           <FaLinkedin size={35} />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrInstagram size={33} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={33} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
