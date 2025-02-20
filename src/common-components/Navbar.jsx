// src/common-components/Navbar.jsx
import React from "react";
import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import LoginComponent from "../page-components/LoginComponent";

const Navbar = ({ logo, links = [], showMenuIcon = true }) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        margin: 2,
        borderRadius: 2,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "96vw",
        mx: "auto",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-15 w-auto" />
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <Link key={index} to={link.path} style={{ textDecoration: "none" }}>
              <Button color="inherit" sx={{ color: "gray", "&:hover": { color: "orange" } }}>
                {link.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Right: Login/Profile & Menu Icon */}
        <div className="flex items-center space-x-4">
          <LoginComponent /> 
          {showMenuIcon && (
            <div className="md:hidden">
              <IconButton color="inherit">
                <MenuIcon sx={{ color: "gray" }} />
              </IconButton>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
