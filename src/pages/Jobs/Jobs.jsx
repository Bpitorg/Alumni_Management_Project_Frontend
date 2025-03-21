import React, { useState } from "react";
import Sidebar from "../../common-components/Sidebar";
import { FaUserFriends, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { FaPeoplePulling, FaPeopleGroup } from "react-icons/fa6";
import { SiCodementor } from "react-icons/si";
import Maincomp from "../../common-components/Maincomp";
import Searchbar from "../../common-components/Searchbar";
import Dropdownbut from "../../common-components/Dropdownbut";
import JobList from "../../common-components/jobs/JobList";
import JobDetails from "../../common-components/jobs/JobDetails";// Import the new component
import dummyJobs from "../../constants/dummyjobdata";


const Jobs = () => {
  const [salary, setSalary] = useState("");
  const [datePosted, setDatePosted] = useState("");
  const [experience, setExperience] = useState("");
  const [selectedJob, setSelectedJob] = useState(dummyJobs[0]); // Initialize with the first job
  const [searchJobTitle, setSearchJobTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  // Dropdown options
  const salaryOptions = [
    { value: "", label: "Salary", disabled: true },
    { value: "$60,000 - $80,000", label: "$60,000 - $80,000" },
    { value: "$80,000 - $100,000", label: "$80,000 - $100,000" },
    { value: "$100,000 - $120,000", label: "$100,000 - $120,000" },
  ];

  const datePostedOptions = [
    { value: "", label: "Date Posted", disabled: true },
    { value: "24h", label: "Last 24 hours" },
    { value: "7d", label: "Last 7 days" },
    { value: "30d", label: "Last 30 days" },
  ];

  const experienceOptions = [
    { value: "", label: "Experience", disabled: true },
    { value: "2+ years", label: "2+ years" },
    { value: "3+ years", label: "3+ years" },
    { value: "5+ years", label: "5+ years" },
  ];

  // Helper function to parse postedTime into a date
  const parsePostedTime = (postedTime) => {
    const timeAgo = postedTime.replace("Posted ", "").replace(" ago", "");
    const now = new Date();
    if (timeAgo.includes("mins")) {
      const mins = parseInt(timeAgo.replace(" mins", ""));
      return new Date(now.getTime() - mins * 60 * 1000);
    } else if (timeAgo.includes("hour")) {
      const hours = parseInt(timeAgo.replace(" hour", ""));
      return new Date(now.getTime() - hours * 60 * 60 * 1000);
    } else if (timeAgo.includes("days")) {
      const days = parseInt(timeAgo.replace(" days", ""));
      return new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
    }
    return now;
  };

  // Filter jobs based on search and dropdown criteria
  const filterJobs = () => {
    return dummyJobs.filter((job) => {
      // Filter by job title
      const matchesJobTitle = job.jobTitle
        .toLowerCase()
        .includes(searchJobTitle.toLowerCase());

      // Filter by location
      const matchesLocation = job.location
        .toLowerCase()
        .includes(searchLocation.toLowerCase());

      // Filter by salary
      const matchesSalary = !salary || job.salary === salary;

      // Filter by experience
      const matchesExperience = !experience || job.experience === experience;

      // Filter by date posted
      const jobDate = parsePostedTime(job.postedTime);
      const now = new Date();
      const matchesDatePosted =
        !datePosted ||
        (datePosted === "24h" && now - jobDate <= 24 * 60 * 60 * 1000) ||
        (datePosted === "7d" && now - jobDate <= 7 * 24 * 60 * 60 * 1000) ||
        (datePosted === "30d" && now - jobDate <= 30 * 24 * 60 * 60 * 1000);

      return (
        matchesJobTitle &&
        matchesLocation &&
        matchesSalary &&
        matchesExperience &&
        matchesDatePosted
      );
    });
  };

  const filteredJobs = filterJobs();

  // Handle search
  const handleSearch = (searchValue, searchType) => {
    if (searchType === "jobTitle") {
      setSearchJobTitle(searchValue);
    } else if (searchType === "location") {
      setSearchLocation(searchValue);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 p-6 bg-gray-50 min-h-screen">
      <Sidebar
        className="fixed"
        searchPlaceholder="Search connections..."
        title="Jobs and Projects"
        route = "jobs"
      />
      <div className="flex flex-col gap-4 w-full md:w-3/4 md:ml-74">
        <div className="flex flex-col mr-4 md:flex-row items-center justify-center gap-4">
          <Searchbar
            searchPlaceholder="Search Jobs"
            onSearch={(value) => handleSearch(value, "jobTitle")}
          />
          <Searchbar
            searchPlaceholder="Search Location"
            onSearch={(value) => handleSearch(value, "location")}
          />
          <Dropdownbut
            options={salaryOptions}
            defaultValue={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <Dropdownbut
            options={datePostedOptions}
            defaultValue={datePosted}
            onChange={(e) => setDatePosted(e.target.value)}
          />
          <Dropdownbut
            options={experienceOptions}
            defaultValue={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <Maincomp showHeader={false}>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Side: Job List (Scrollable) */}
            <div
              className="w-full md:w-1/2 pr-6 overflow-y-auto"
              style={{ maxHeight: "calc(160vh)" }}
            >
              <div className="px-4">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    onClick={() => setSelectedJob(job)}
                    className="cursor-pointer"
                  >
                    <JobList
                      jobTitle={job.jobTitle}
                      location={job.location}
                      salary={job.salary}
                      experience={job.experience}
                      postedBy={job.postedBy}
                      postedTime={job.postedTime}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Job Details (Fixed) */}
            <div className="w-full md:w-1/2 p-4 sticky top-0">
              <JobDetails selectedJob={selectedJob} />
            </div>
          </div>
        </Maincomp>
      </div>
    </div>
  );
};

export default Jobs;