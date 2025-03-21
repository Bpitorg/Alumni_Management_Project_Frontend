import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../common-components/Sidebar";
import Maincomp from "../../common-components/Maincomp";
import Searchbar from "../../common-components/Searchbar";
import MentorshipCard from "../../common-components/networking/MentorshipCard";
import { programs } from "../../constants/mentorshipPrograms"; // Import the programs data
import { useTheme } from "@mui/material/styles";

const Mentorshipprog = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter programs based on search query
  const filteredPrograms = programs.filter((program) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      program.title.toLowerCase().includes(lowerCaseQuery) || // Search by title
      program.description.toLowerCase().includes(lowerCaseQuery) || // Search by description
      program.targetAudience.toLowerCase().includes(lowerCaseQuery) || // Search by target audience
      program.category.toLowerCase().includes(lowerCaseQuery) // Search by category
    );
  });

  return (
    <div className="flex gap-10 p-6 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <Sidebar
        className="fixed"
        title="Grow Your Network"
        route="networking"
      />

      {/* Main Content */}
      <div className="flex flex-col gap-4 w-3/4 ml-74">
        <Maincomp showHeader={false}>
          {/* Search Bar and New Program Button */}
          <div className="flex items-center justify-between gap-4 px-2 pb-2 rounded-lg">
            <div className="flex-1">
              <Searchbar
                searchPlaceholder="Search programs by title, category, audience..."
                onSearch={(query) => setSearchQuery(query)}
              />
            </div>
            <Link
              to="/networking/new-program"
              className="font-semibold text-[#077fb2] px-4 py-2 rounded-lg border border-[#077fb2] bg-[#8ad7f813] hover:bg-[#077fb2] hover:text-white transition-all"
            >
              START A NEW PROGRAM
            </Link>
          </div>

          {/* List of Programs */}
          <div className="mt-4 px-4">
            {filteredPrograms.length > 0 ? (
              <div className="flex flex-col gap-6">
                {filteredPrograms.map((program) => (
                  <MentorshipCard
                    key={program.id}
                    id={program.id}
                    title={program.title}
                    description={program.description}
                    targetAudience={program.targetAudience}
                    duration={program.duration}
                    outcome={program.outcome}
                    category={program.category}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center mt-5">
                No programs found. Start by creating a new program!
              </p>
            )}
          </div>
        </Maincomp>
      </div>
    </div>
  );
};

export default Mentorshipprog;