import React from "react";
import { useParams } from "react-router-dom";
import alumniWorkplaceData from "../../constants/AlumniWorkplace";
import { useTheme } from "@mui/material";
import Sidebar from "../../common-components/Sidebar";

const AlumniWorkplaceDetails = () => {
  const { id } = useParams(); // Get the company ID from the URL
  const theme = useTheme();

  // Find the company by ID
  const company = alumniWorkplaceData.find((comp) => comp.id === parseInt(id));

  if (!company) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-bold">
        Company not found
      </div>
    );
  }

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
      <div className="flex flex-col items-center gap-4 w-3/4 ml-74">
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-2xl mx-auto w-full">
          {/* Company Logo and Title */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={company.logo}
              alt={company.name}
              className="w-24 h-24 mb-4"
            />
            <h1
              className="text-3xl font-bold text-center"
              style={{ color: theme.palette.primary.main }}
            >
              {company.name}
            </h1>
          </div>

          {/* Company Details */}
          <div className="space-y-6">
            {/* Job Roles Offered */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold" style={{ color: theme.palette.primary.main }}>
                Job Roles Offered
              </h2>
              <ul className="list-disc list-inside text-lg" style={{ color: theme.palette.text.primary }}>
                {company.jobRoles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>

            {/* Alumni Testimonials */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold" style={{ color: theme.palette.primary.main }}>
                Alumni Testimonials
              </h2>
              <div className="space-y-4">
                {company.alumniTestimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                    <p className="text-gray-600 font-semibold mt-2">
                      – {testimonial.author}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Website Link */}
            <div className="text-center mt-6">
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit {company.name}'s Careers Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniWorkplaceDetails;