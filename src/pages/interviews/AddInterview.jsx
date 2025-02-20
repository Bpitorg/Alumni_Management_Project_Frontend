import React from "react";
import InterviewForm from "../../page-components/interviews/InterviewForm";


const AddInterview = () => {
  const handleFormSubmit = (data) => {
    console.log("Interview Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <InterviewForm onSubmit={handleFormSubmit}/>
    </div>
  );
};

export default AddInterview;
