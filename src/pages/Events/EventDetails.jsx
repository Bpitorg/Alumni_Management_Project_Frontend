import React from "react";
import { useParams } from "react-router-dom";
import { events } from '../../constants/events'; // Import events
import moment from "moment";
import { FaUserFriends, FaBriefcase, FaCalendarAlt, FaCertificate, FaUsers, FaChalkboardTeacher } from "react-icons/fa";
import { FaPeoplePulling, FaPeopleGroup } from "react-icons/fa6";
import { SiCodementor } from "react-icons/si";
import Sidebar from "../../common-components/Sidebar";
import { useTheme } from "@mui/material";



const EventDetails = () => {
  const theme = useTheme();
  const { id } = useParams(); // Get the event ID from the URL
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return <div className="flex justify-center items-center h-screen text-2xl font-bold">Event not found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
      <Sidebar
        className="fixed"
        searchPlaceholder="Search connections..."
        route="events"
        title="Events"
      />
      <div className="flex flex-col w-full md:w-3/4 md:ml-80">
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-2xl mx-auto">
          {/* Event Title and Description */}
          <h1
            className="text-4xl font-bold mb-6"
            style={{ color: theme.palette.primary.main }}
          >
            {event.title}
          </h1>
          <p className="text-gray-600 text-lg mb-8 italic border-l-4 border-blue-500 pl-4">
            {event.description}
          </p>

          {/* Event Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-blue-500" />
                <p className="text-gray-700">
                  <strong>Start:</strong> {moment(event.start).format("LLL")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-blue-500" />
                <p className="text-gray-700">
                  <strong>End:</strong> {moment(event.end).format("LLL")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaCertificate className="text-blue-500" />
                <p className="text-gray-700">
                  <strong>Certification:</strong> {event.certification ? "Yes" : "No"}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
               
                <p className="text-gray-700">
                  <strong>Target Audience:</strong> {event.audience}
                </p>
              </div>
              <div className="flex items-center gap-3">
               
                <p className="text-gray-700">
                  <strong>Mentor/Spokesperson:</strong> {event.mentor}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-gray-700">
                  <strong>Organized By:</strong> {event.organizer}
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaPeopleGroup className="text-blue-500" />
              How You Can Benefit
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {event.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Agenda Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaCalendarAlt className="text-blue-500" />
              Event Agenda
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {event.agenda.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <FaUserFriends />
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;