import React, { useState } from "react";
import Sidebar from "../../common-components/Sidebar";
import { FaUserFriends, FaCalendarAlt } from "react-icons/fa";
import { FaPeoplePulling, FaPeopleGroup } from "react-icons/fa6";
import { SiCodementor } from "react-icons/si";
import Maincomp from "../../common-components/Maincomp";
import Searchbar from "../../common-components/Searchbar";
import ListFormat from "../../common-components/listformat";
import students from "../../constants/yourstudents";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";



const YourStudent = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter students based on the search query
  const filteredStudents = students.filter((student) => {
    if (!searchQuery) return true;

    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      student.name.toLowerCase().includes(lowerCaseQuery) ||
      student.program.toLowerCase().includes(lowerCaseQuery) ||
      student.batch.toString().includes(lowerCaseQuery) ||
      student.interests.some((interest) =>
        interest.toLowerCase().includes(lowerCaseQuery)
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
          {/* Search Bar and New Student Button */}
          <div className="flex items-center justify-between gap-4 px-4 pb-2 rounded-lg">
            <div className="flex-1">
              <Searchbar
                searchPlaceholder="Search students by name, program, interests..."
                onSearch={(query) => setSearchQuery(query)}
              />
            </div>
            <Link to="/networking/students"
              className="font-semibold text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all"
              style={{
                backgroundColor: theme.palette.primary.main,
              }}
            >
              New Student
            </Link>
          </div>

          {/* List of Students */}
          <div className="mt-4 p-6">
            {filteredStudents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStudents.map((student) => (
                  <div
                    key={student.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-6"
                  >
                    <h2 className="text-xl font-semibold text-gray-800">
                      {student.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {student.program} | Batch {student.batch}
                    </p>
                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-gray-700">
                        Interests:
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {student.interests.map((interest, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center mt-5">
                No students found. Start by adding a new student to mentor!
              </p>
            )}
          </div>
        </Maincomp>
      </div>
    </div>
  );
};

export default YourStudent;