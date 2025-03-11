import { Email } from "@mui/icons-material";
import React from "react";

const FacultyCard = ({ Faculty }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg overflow-hidden shadow-lg bg-white">
      <img
        className="h-64 w-full object-cover"
        src={Faculty.image}
        alt="faculty"
      />
      <div className="p-6 text-center">
        <h3 className="font-bold text-xl">{Faculty.name}</h3>
        <p className="font-semibold text-gray-600">{Faculty.designation}</p>
        <p className="text-gray-700 mt-2">{Faculty.description}</p>
        <div className="flex items-center justify-center mt-4 text-gray-700">
          <Email className="mr-2" />
          <p>{Faculty.email}</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
