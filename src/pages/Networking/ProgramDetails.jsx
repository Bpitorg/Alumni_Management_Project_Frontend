import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";


const ProgramDetails = () => {
  const location = useLocation();
  const program = location.state?.program;

  if (!program) {
    return <div>No program data found.</div>;
  }
  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        {/* Program Title */}
        <h1 className="text-3xl font-bold text-[#077fb2] mb-4">
          {program.title}
        </h1>

        {/* Program Description */}
        <p className="text-gray-700 mb-6">{program.description}</p>

        {/* Key Details Section */}
        <div className="space-y-4">
          {/* Target Audience */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Target Audience
            </h2>
            <p className="text-gray-700">{program.targetAudience}</p>
          </div>

          {/* Duration */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Duration
            </h2>
            <p className="text-gray-700">{program.duration}</p>
          </div>

          {/* Expected Outcome */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Expected Outcome
            </h2>
            <p className="text-gray-700">{program.outcome}</p>
          </div>

          {/* Category */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Category
            </h2>
            <p className="text-gray-700">{program.category}</p>
          </div>

          {/* Schedule */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Schedule
            </h2>
            <p className="text-gray-700">{program.schedule}</p>
          </div>

          {/* Mentor Details */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Mentor Details
            </h2>
            <p className="text-gray-700">{program.mentorDetails}</p>
          </div>

          {/* Fees */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Fees</h2>
            <p className="text-gray-700">{program.fees}</p>
          </div>

          {/* Capacity */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Capacity
            </h2>
            <p className="text-gray-700">{program.capacity}</p>
          </div>

          {/* Certification */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Certification
            </h2>
            <p className="text-gray-700">
              {program.certification ? "Yes" : "No"}
            </p>
          </div>

          {/* Tags */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Tags</h2>
            <p className="text-gray-700">{program.tags}</p>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
           
            className="px-6 py-2 bg-[#077fb2] text-white rounded-md hover:bg-[#066a8f]"
          >
            Join As A Mentor
          </button>
          <button
            onClick={() =>
              navigate("/enroll", { state: { program: programData } })
            }
            className="px-6 py-2 bg-[#42a5f5] text-white rounded-md hover:bg-[#1e88e5]"
          >
            Enroll As A Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
