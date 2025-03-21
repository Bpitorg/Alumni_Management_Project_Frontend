import React from "react";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const LowerNav = ({ menuItems = [], className = "", style = {} , children , onMenuItemClick}) => {
  const theme = useTheme();

  return (
    <div
      className={`rounded-lg ${className}`}
      style={{
        backgroundColor: theme.palette.background.default,
        boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
        border: "1px solid",
        borderColor: theme.palette.primary.main,
      }}
    >
      <div
        className="py-2 px-5 text-lg flex gap-8"
        style={{
          color: theme.palette.primary.main,
        }}
      >
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path} onClick={() => onMenuItemClick(item.label)} className="hover:underline">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LowerNav;
