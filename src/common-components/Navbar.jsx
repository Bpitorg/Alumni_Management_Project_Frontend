import React from "react";
import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Navbar = ({ logo, links = [] }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" className="bg-white shadow-md">
      <Toolbar className="flex justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <Button
              key={index}
              color="inherit"
              className="text-gray-700 hover:text-orange-500"
              onClick={link.onClick} // ✅ Use onClick from props
            >
              {link.label}
            </Button>
          ))}
        </div>

        {/* Right: Menu Icon (for Mobile) */}
        <div className="md:hidden">
          <IconButton color="inherit">
            <MenuIcon className="text-gray-700" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;