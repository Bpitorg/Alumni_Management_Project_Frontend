import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const EventCard = ({ id, title, description, start, end, audience, mentor, organizer, certification, type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/events/event/${id}`); // Navigate to the event details page
  };

  return (
    <div
      className="flex flex-col justify-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={handleClick} // Make the card clickable
      style={{ minHeight: "400px" }} // Set a minimum height for the card
    >
      <div className="flex flex-col items-center text-center" style={{ height: "100px" }}>
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600 mb-2">For: {audience}</p>
        <div className="flex gap-4 text-sm text-gray-600">
          <p>{moment(start).format("MMM Do, YYYY")}</p>
          <p>{moment(start).format("h:mm A")} - {moment(end).format("h:mm A")}</p>
        </div>
      </div>

      <div className="p-3 bg-gray-100 rounded-lg mb-4" style={{ height: "100px", overflow: "hidden" }}>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>

      <div className="text-sm text-gray-600 mb-4" style={{ height: "80px" }}>
        <p><strong>Mentor:</strong> {mentor}</p>
        <p><strong>Organizer:</strong> {organizer}</p>
        <p><strong>Certification:</strong> {certification ? "Yes" : "No"}</p>
      </div>

      <div className="flex justify-center items-center" style={{ height: "40px" }}>
        <button
          className="px-4 py-2 bg-blue-500 font-semibold text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
          onClick={(e) => e.stopPropagation()} // Prevent card click when button is clicked
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;