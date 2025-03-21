import React from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const RegistrationSuccess = () => {
  const location = useLocation();
  const { username, eventDetails } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg w-full">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto" />
        <h1 className="text-2xl font-semibold text-gray-700 mt-4">{username}, You are registered!</h1>
        <div className="mt-6 text-gray-600">
          <h2 className="text-lg font-medium">Event Details</h2>
          <p className="mt-2">{eventDetails}</p>
        </div>
        <button 
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          onClick={() => window.location.href = "/"}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
