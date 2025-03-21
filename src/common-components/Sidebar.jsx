import React from "react";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { sidebarMenuItems } from "./sidebarConfig.jsx"; // Import the config

const Sidebar = ({ title, route, className = "" }) => {
  const theme = useTheme();

  // Get the menu items based on the route
  const menuItems = sidebarMenuItems[route] || [];

  return (
    <div
      className={`rounded-lg w-3/16 ${className}`}
      style={{
        backgroundColor: theme.palette.background.default,
        boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
        border: "1px solid",
        borderColor: theme.palette.primary.main,
      }}
    >
      {/* Sidebar Header */}
      <div
        className="-mt-0.5 -mx-0.5 py-4 rounded-t-lg"
        style={{
          border: "1px solid",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.background.default,
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
      >
        <h1 className="text-xl ml-3 font-medium">{title}</h1>
      </div>

      {/* Menu List */}
      <div className="list flex flex-col p-0 m-0 justify-center gap-1 my-2">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex gap-2 items-center px-3 text-lg py-2 p-0 m-0 hover:bg-gray-200 ${
                isActive ? "bg-gray-200" : ""
              }`
            }
            style={({ isActive }) => ({
              color: theme.palette.primary.main,
              textDecoration: "none",
            })}
          >
            {item.icon}
            <h1 className="text-lg">{item.label}</h1>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;