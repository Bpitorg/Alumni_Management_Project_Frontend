import React, { useState } from "react";
import { interviews } from "../../constants/dummyintdata";
import { Pagination } from "@mui/material";
import InterviewCard from "../../page-components/Interview/InterviewCard";
import Navbar from "../../common-components/Navbar";
import { useNavigate } from "react-router-dom";

function Interview_Listing() {
  const [page, setPage] = useState(1);
  const interviewsPerPage = 10;

  // Calculate the range of data to display
  const startIndex = (page - 1) * interviewsPerPage;
  const endIndex = startIndex + interviewsPerPage;
  const paginatedInterviews = interviews.slice(startIndex, endIndex);
  const navigate=useNavigate();

  const handleChange = (event, value) => {
    setPage(value);
  };
  const links=[
    { label: "Home", onClick: () => navigate("/") },
    { label: "Mentor", onClick: () => navigate("/mentor-page") },
    { label: "Interviews", onClick: () => navigate("/all-interviews") },
    { label: "Add Interview", onClick: () => navigate("/interview-form") }
  ]


  return (
    <div>
        <Navbar logo="https://media.collegedekho.com/media/img/institute/logo/1440576082.png" links={links} />
      {/* Display Interview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedInterviews.map((interview) => (
          <InterviewCard key={interview.id} interview={interview} />
        ))}
      </div>

      {/* Pagination Component */}
      <div className="flex justify-center mt-4">
        <Pagination
          count={Math.ceil(interviews.length / interviewsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </div>
    </div>
  );
}

export default Interview_Listing;

