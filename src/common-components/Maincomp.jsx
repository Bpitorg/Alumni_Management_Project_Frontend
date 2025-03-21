import React from "react";
import { useTheme } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";

const Maincomp = ({ children, showHeader = true, className = "" }) => {
  const theme = useTheme();
  const location = useLocation(); // Get the current location

  // Extract the current category from the URL (e.g., "students", "alumni", "mentors")
  const currentCategory = location.pathname.split("/")[2];

  // Determine the "See All" link based on the current category
  const seeAllLink = `/networking/${currentCategory}/details`; // Navigate to the details page

  return (
    <div
      className={`h-full ${className}`}
      style={{
        borderRadius: "8px 8px 0 0", // Top-left, top-right, bottom-right, bottom-left
      }}
    >
      {showHeader && (
        <div className="pt-4 px-6 flex justify-between items-center">
          <div
            className="text-xl font-medium"
            style={{
              color: theme.palette.primary.main,
            }}
          >
            Discover {currentCategory} with similar interests! {/* Dynamic header text */}
          </div>
          <Link
            to={seeAllLink} // Navigate to the details page
            className="text-lg px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
            style={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.background.default,
            }}
          >
            See All
          </Link>
        </div>
      )}

      {/* Render children here */}
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default Maincomp;