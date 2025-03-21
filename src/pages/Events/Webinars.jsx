import React from "react";
import { FaUserFriends, FaCalendarAlt } from "react-icons/fa";
import { FaPeoplePulling } from "react-icons/fa6";
import { SiCodementor } from "react-icons/si";
import Sidebar from "../../common-components/Sidebar";
import EventCard from "../../common-components/events/EventCard";
import { events } from "../../constants/events";
import { useTheme } from "@mui/material";



const Webinars = () => {
  const theme = useTheme();

  // Filter events to include only webinars
  const webinars = events.filter((event) => event.type === "webinar");

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
      <Sidebar
        className="fixed"
        searchPlaceholder="Search connections..."
         route="events"
         title="Events"
      />
      <div className="flex flex-col gap-3 w-full md:w-3/4 md:ml-80">
        <div className="flex flex-col gap-3">
          <h1
            className="text-3xl font-bold mb-4"
            style={{
              color: theme.palette.primary.main,
            }}
          >
            Webinars For You
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinars.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                description={event.description}
                start={event.start}
                end={event.end}
                audience={event.audience}
                mentor={event.mentor}
                organizer={event.organizer}
                certification={event.certification}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinars;