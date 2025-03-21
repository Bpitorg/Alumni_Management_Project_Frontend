import React, { useState } from "react";
import { useTheme } from "@mui/material";
import Sidebar from "../../common-components/Sidebar";
import { FaUserFriends, FaCalendarAlt } from "react-icons/fa";
import { FaPeoplePulling, FaPeopleGroup } from "react-icons/fa6";
import { SiCodementor } from "react-icons/si";
import Maincomp from "../../common-components/Maincomp";
import Searchbar from "../../common-components/Searchbar";
import mentors from "../../constants/yourmentors"; // Import the mentors data
import { Link } from "react-router-dom";


const YourMentor = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter mentors based on the search query
  const filteredMentors = mentors.filter((mentor) => {
    if (!searchQuery) return true;

    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      mentor.name.toLowerCase().includes(lowerCaseQuery) || // Search by name
      mentor.program.toLowerCase().includes(lowerCaseQuery) || // Search by program
      mentor.position.toLowerCase().includes(lowerCaseQuery) || // Search by position
      mentor.company.toLowerCase().includes(lowerCaseQuery) || // Search by company
      mentor.expertise.some((skill) =>
        skill.toLowerCase().includes(lowerCaseQuery) // Search by expertise
      )
    );
  });

  return (
    <div className="flex gap-10 p-6 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <Sidebar
        className="fixed"
        title="Grow Your Network"
        route = "networking"

      />

      {/* Main Content */}
      <div className="flex flex-col gap-4 w-3/4 ml-74">
        <Maincomp showHeader={false}>
          {/* Search Bar and New Mentor Button */}
          <div className="flex items-center justify-between gap-4 p-4 rounded-lg">
            <div className="flex-1">
              <Searchbar
                searchPlaceholder="Search mentors by name, expertise, program..."
                onSearch={(query) => setSearchQuery(query)}
              />
            </div>
            <Link to="/networking/mentors"
              className="font-semibold text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all"
              style={{
                backgroundColor: theme.palette.primary.main,
              }}
            >
              New Mentor
            </Link>
          </div>

          {/* List of Mentors */}
          <div className="mt-4 px-6">
            {filteredMentors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMentors.map((mentor) => (
                  <div
                    key={mentor.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-6"
                  >
                    <h2 className="text-xl font-semibold text-gray-800">
                      {mentor.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {mentor.position} at {mentor.company}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {mentor.program} | Batch {mentor.batch}
                    </p>
                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-gray-700">
                        Expertise:
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {mentor.expertise.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center mt-5">
                No mentors found. Start by adding a new mentor!
              </p>
            )}
          </div>
        </Maincomp>
      </div>
    </div>
  );
};

export default YourMentor;