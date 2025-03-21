import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Sidebar from "../../common-components/Sidebar";
import { useTheme } from "@mui/material";
import AlumniCompanyCard from "../../common-components/jobs/AlumniCompanyCard"; // Component for companies
import alumniWorkplaceData from "../../constants/AlumniWorkplace"; // Mock data for alumni workplaces
import Searchbar from "../../common-components/Searchbar"; // Import the Searchbar component

const AlumniWorkplace = () => {
  const theme = useTheme();
  const [filteredCompanies, setFilteredCompanies] = useState(alumniWorkplaceData); // State for filtered companies

 

  // Handle search functionality
  const handleSearch = (query) => {
    const filtered = alumniWorkplaceData.filter((company) =>
      company.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCompanies(filtered);
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 p-6 bg-gray-50 min-h-screen">
      <Sidebar
        className="fixed"
        searchPlaceholder="Search connections..."
        title="Jobs and Projects"
        route='jobs'
      />
      <div className="flex flex-col gap-4 w-3/4 ml-74">
        <h1
          className="text-3xl font-bold mb-6"
          style={{
            color: theme.palette.primary.main,
          }}
        >
          Alumni Workplaces
        </h1>

        {/* Add the Searchbar and Find Jobs button */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex-1">
            <Searchbar
              searchPlaceholder="Search companies by name..."
              onSearch={handleSearch} // Pass the handleSearch function
            />
          </div>
          <Link
            to="/jobs"
            className="font-semibold text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all"
            style={{
              backgroundColor: theme.palette.primary.main,
            }}
          >
            Find Jobs
          </Link>
        </div>

        {/* Conditional Rendering */}
        {filteredCompanies.length > 0 ? (
          // Display filtered companies
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => (
              <AlumniCompanyCard key={company.id} company={company} />
            ))}
          </div>
        ) : (
          // Display message if no companies match the search
          <p className="text-gray-600 text-center mt-5">
            Can't find your company? Add your workplace now!!
          </p>
        )}
      </div>
    </div>
  );
};

export default AlumniWorkplace;