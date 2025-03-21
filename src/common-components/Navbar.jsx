import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaGlobe } from "react-icons/fa";
import {
  IoCalendarNumberSharp,
  IoPeople,
  IoPersonCircle,
} from "react-icons/io5";
import { IoIosBriefcase } from "react-icons/io";
import { useTheme } from "@mui/material/styles"; // Import theme hook
import logo from "../assets/BPITAlumni.svg";

// Array for navbar items
const navItems = [
  { path: "/", label: "Home", icon: <FaHome size={24} /> },
  { path: "/networking/students", label: "Networking", icon: <IoPeople size={24} /> },
  { path: "/jobs", label: "Jobs", icon: <IoIosBriefcase size={24} /> },
  {
    path: "/events",
    label: "Events",
    icon: <IoCalendarNumberSharp size={24} />,
  },
];

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const theme = useTheme(); // Access theme

  const handleLoginLogout = () => setIsLoggedIn(!isLoggedIn);
  const handleSignIn = () => navigate("/login");

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme.palette.background.default,
        paddingX: 10,
        boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/">
          <img src={logo} alt="Logo" style={{ height: 20, width: "auto" }} />
        </Link>

        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <IconButton
                  sx={{
                    color: theme.palette.primary.main,
                    "&:hover": { color: theme.palette.primary.dark },
                  }}
                >
                  {item.icon}
                </IconButton>
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: theme.palette.primary.main,
                    marginTop: "-8px",
                  }}
                >
                  {item.label}
                </span>
              </div>
            </Link>
          ))}

          {isLoggedIn ? (
            <Link
              to="/home" // Replace with your logout path if needed
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <IconButton
                  sx={{
                    color: theme.palette.primary.main,
                    "&:hover": { color: theme.palette.primary.dark },
                  }}
                >
                  <IoPersonCircle size={24} />
                </IconButton>
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: theme.palette.primary.main,
                    marginTop: "-8px",
                  }}
                >
                  Profile
                </span>
              </div>
            </Link>
          ) : (
            <Button
              variant="contained"
              onClick={handleSignIn}
              sx={{
                backgroundColor: theme.palette.primary.main,
                "&:hover": { backgroundColor: theme.palette.primary.dark },
              }}
            >
              Log In
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
