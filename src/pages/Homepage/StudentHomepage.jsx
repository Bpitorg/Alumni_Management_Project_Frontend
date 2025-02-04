import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../common-components/Navbar";

const StudentHomepage = () => {
  return (
    <div className="h-screen bg-gray-100">
      <div className="flex justify-between items-center">
        <Navbar/>
      </div>
    </div>
  );
};

export default StudentHomepage;
