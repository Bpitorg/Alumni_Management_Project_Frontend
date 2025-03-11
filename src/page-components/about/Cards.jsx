import { Email } from "@mui/icons-material";
import { Bell, Calendar } from "lucide-react";
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

const NoticeCard = ({ Notice }) => {
  return (
    <div key={Notice.id} className="p-6 bg-white rounded-lg shadow-md flex items-start gap-4">
      <div className="p-3 bg-blue-500 text-white rounded-full">
        <Bell className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{Notice.title}</h3>
        <p className="text-gray-600 text-sm flex items-center gap-2 mt-1">
          <Calendar className="w-4 h-4" /> {Notice.date}
        </p>
        <p className="text-gray-700 mt-2">{Notice.description}</p>
      </div>
    </div>
  )
}

export { FacultyCard, NoticeCard };
