import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Sidebar from "../../common-components/Sidebar";
import Maincomp from "../../common-components/Maincomp";
import { useTheme } from "@mui/material/styles";
import { interviewExperiences } from "../../constants/interviewexp";
import Searchbar from "../../common-components/Searchbar";

const InterviewExperiences = () => {
  const theme = useTheme();
  const navigate = useNavigate(); // Initialize the navigate function
  const [searchQuery, setSearchQuery] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter interview experiences based on search and filters
  const filteredExperiences = interviewExperiences.filter((exp) => {
    const matchesSearch =
      exp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.company.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCompany = companyFilter ? exp.company === companyFilter : true;
    const matchesRole = roleFilter ? exp.role === roleFilter : true;

    return matchesSearch && matchesCompany && matchesRole;
  });

  // Handle click on interview experience card
  const handleCardClick = (id) => {
    navigate(`/jobs/interview-exp/${id}`); // Navigate to the detailed page
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 p-6 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <Sidebar
        className="fixed"
        searchPlaceholder="Search connections..."
        title="Jobs and Projects"
        route="jobs"
      />

      {/* Main Content */}
      <div className="flex flex-col gap-4 w-3/4 ml-74">
        <Maincomp showHeader={false}>
          <h1
            className="text-3xl font-bold mb-6"
            style={{ color: theme.palette.primary.main }}
          >
            Interview Experiences
          </h1>

          {/* Search and Filters */}
          <div className="flex mb-6 justify-center items-center gap-2">
            <Searchbar
              searchPlaceholder="Search jobs by company, position, location..."
              onSearch={handleSearch}
            />
            <div className="flex gap-4">
              <select
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={companyFilter}
                onChange={(e) => setCompanyFilter(e.target.value)}
              >
                <option value="">Filter by Company</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Amazon">Amazon</option>
                <option value="Google">Google</option>
              </select>
              <select
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <option value="">Filter by Role</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Product Manager">Product Manager</option>
                <option value="Data Scientist">Data Scientist</option>
              </select>
            </div>
          </div>

          {/* Interview Experience Cards */}
          <div className="space-y-6">
            {filteredExperiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500 cursor-pointer"
                onClick={() => handleCardClick(exp.id)} // Add click handler
              >
                <h2
                  className="text-xl font-semibold italic"
                  style={{ color: theme.palette.text.primary }}
                >
                  {exp.name} - {exp.role} at {exp.company}
                </h2>
                <p
                  className="mt-2"
                  style={{ color: theme.palette.text.secondary }}
                >
                  <strong>Interview Type:</strong> {exp.type}
                </p>
                <p
                  className="mt-4 leading-relaxed"
                  style={{ color: theme.palette.text.primary }}
                >
                  {exp.experience}
                </p>
              </div>
            ))}
          </div>
        </Maincomp>
      </div>
    </div>
  );
};

export default InterviewExperiences;