import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useNavigate } from 'react-router-dom';
import { FaUserFriends, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { FaPeoplePulling, FaPeopleGroup } from "react-icons/fa6";
import { SiCodementor } from "react-icons/si";
import { events } from '../../constants/events'; // Import events
import Sidebar from '../../common-components/Sidebar';
import { useTheme } from '@mui/material';


const localizer = momentLocalizer(moment);

const Events = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSelectEvent = (event) => {
    navigate(`/events/event/${event.id}`);
  };

  const eventStyleGetter = (event) => {
    let backgroundColor = theme.palette.primary.main; // Use theme primary color
    if (event.type === "networking") backgroundColor = "#4caf50"; // Green for networking
    if (event.type === "career-fair") backgroundColor = "#f44336"; // Red for career fairs
    if (event.type === "workshop") backgroundColor = "#ff9800"; // Orange for workshops

    return {
      style: {
        backgroundColor,
        borderRadius: "8px",
        color: "#fff",
        border: "none",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease",
      },
    };
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
      <Sidebar
        className="fixed"
        searchPlaceholder="Search connections..."
         route="events"
        title="Events"
      />
      <div className="flex flex-col w-full md:w-3/4 md:ml-80">
        <h1 className="text-4xl font-bold mb-6"
          style={{
            color: theme.palette.primary.main,
            fontFamily: "'Roboto', sans-serif",
          }}>
          Events Calendar
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-xl"
          style={{
            border: `2px solid ${theme.palette.primary.main}`,
            transition: "box-shadow 0.3s ease",
          }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 450 }}
            onSelectEvent={handleSelectEvent}
            eventPropGetter={eventStyleGetter}
            className="custom-calendar"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;