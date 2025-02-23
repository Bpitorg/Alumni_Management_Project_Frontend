import React, { useState } from "react";
import { interviews } from "../../constants/dummyintdata";
import { Pagination } from "@mui/material";

import Navbar from "../../common-components/Navbar";
import { useNavigate } from "react-router-dom";
import InterviewCard from "../../page-components/interviews/InterviewCard";

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
 


  return (
    <div>
        <Navbar/>
      {/* Display Interview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedInterviews.map((interview) => (
          <InterviewCard key={interview.id} interview={interview}/>
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