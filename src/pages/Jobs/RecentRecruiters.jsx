import React, { useState } from "react";
import Sidebar from "../../common-components/Sidebar";
import { FaUserFriends, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { FaPeoplePulling, FaPeopleGroup } from "react-icons/fa6";
import { SiCodementor } from "react-icons/si";
import { useTheme } from "@mui/material";
import RecruiterCard from "../../common-components/jobs/RecruiterCard";
import recentRecruitersData from "../../constants/RecentRecruiters";
import Searchbar from "../../common-components/Searchbar"; // Import the Searchbar component
import { Link } from "react-router-dom";

const RecentRecruiters = () => {
  const theme = useTheme();
  const [filteredRecruiters, setFilteredRecruiters] = useState(recentRecruitersData); // State for filtered recruiters



  // Handle search functionality
  const handleSearch = (query) => {
    const filtered = recentRecruitersData.filter((recruiter) =>
      recruiter.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecruiters(filtered);
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 p-6 bg-gray-50 min-h-screen">
      <Sidebar
        className="fixed"
        searchPlaceholder="Search connections..."
        title="Jobs and Projects"
        route = "jobs"
      />
      <div className="flex flex-col gap-4 w-3/4 ml-74">
        <h1
          className="text-3xl font-bold mb-6"
          style={{
            color: theme.palette.primary.main,
          }}
        >
          Top Recruiters
        </h1>

        {/* Add the Searchbar component */}
        <div className="flex items-center justify-between gap-4 px-4 rounded-lg">
            <div className="flex-1">
              <Searchbar
                searchPlaceholder="Search jobs by company, position, location..."
                onSearch={handleSearch} // Pass the handleSearch function
              />
            </div>
            <Link to="/jobs"
              className="font-semibold text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all"
              style={{
                backgroundColor: theme.palette.primary.main,
              }}
            >
              Add Your Workplace
            </Link>
          </div>
        {/* Conditional Rendering */}
        {filteredRecruiters.length > 0 ? (
          // Display filtered recruiters
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecruiters.map((recruiter) => (
              <RecruiterCard key={recruiter.id} recruiter={recruiter} />
            ))}
          </div>
        ) : (
          // Display message if no recruiters match the search
          <p className="text-gray-600 text-center mt-5">
            Can't find your Workplace? Add your workplace now!!
          </p>
        )}
      </div>
    </div>
  );
};

export default RecentRecruiters;