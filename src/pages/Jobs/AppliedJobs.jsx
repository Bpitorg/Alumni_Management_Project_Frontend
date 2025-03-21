import React, { useState } from "react";
import { useTheme } from "@mui/material";
import Sidebar from "../../common-components/Sidebar";
import { FaUserFriends, FaCalendarAlt } from "react-icons/fa";
import { FaPeoplePulling, FaPeopleGroup } from "react-icons/fa6";
import { SiCodementor } from "react-icons/si";
import Maincomp from "../../common-components/Maincomp";
import Searchbar from "../../common-components/Searchbar";
import JobList from "../../common-components/jobs/JobList";
import appliedJobs from "../../constants/appliedJobs";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search query change
  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query state
  };

  // Filter applied jobs based on the search query
  const filteredJobs = appliedJobs.filter((job) => {
    if (!searchQuery) return true;

    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      job.postedBy.toLowerCase().includes(lowerCaseQuery) || // Search by company
      job.jobTitle.toLowerCase().includes(lowerCaseQuery) || // Search by job title
      job.location.toLowerCase().includes(lowerCaseQuery) // Search by location
    );
  });

  return (
    <div className="flex gap-10 p-6 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <Sidebar
        className="fixed"
        title="Grow Your Network"
        route = "jobs"
      />

      {/* Main Content */}
      <div className="flex flex-col gap-4 w-3/4 ml-74">
        <Maincomp showHeader={false}>
          {/* Search Bar */}
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
              Find Jobs
            </Link>
          </div>

          {/* List of Applied Jobs */}
          <div className="mt-4 px-6">
            {filteredJobs.length > 0 ? (
              <div className="flex md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                  <JobList
                    key={job.id}
                    jobTitle={job.jobTitle}
                    location={job.location}
                    salary={job.salary}
                    experience={job.experience}
                    postedBy={job.postedBy}
                    postedTime={job.postedTime}
                    status={job.status}
                    isAppliedPage={true} // Pass the status prop
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center mt-5">
                No jobs found. Start by applying to new jobs!
              </p>
            )}
          </div>
        </Maincomp>
      </div>
    </div>
  );
};

export default AppliedJobs;
