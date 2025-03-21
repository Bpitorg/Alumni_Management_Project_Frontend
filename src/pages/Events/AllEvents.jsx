import React, { useState } from "react";
import { FaUserFriends, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { FaPeoplePulling, FaPeopleGroup } from "react-icons/fa6";
import { SiCodementor } from "react-icons/si";
import Sidebar from "../../common-components/Sidebar";
import EventCard from "../../common-components/events/EventCard";
import Searchbar from "../../common-components/Searchbar";
import { events } from "../../constants/events";

const AllEvents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all"); // Default filter: show all events

  // Get the current date and time
  const now = new Date();

  // Filter events based on the selected criteria
  const filteredEvents = events.filter((event) => {
    const eventStart = new Date(event.start);
    const eventEnd = new Date(event.end);

    // Filter by search query
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by event date
    switch (filter) {
      case "upcoming":
        return matchesSearch && eventStart > now; // Upcoming events
      case "today":
        return (
          matchesSearch &&
          eventStart.toDateString() === now.toDateString() // Events today
        );
      case "past":
        return matchesSearch && eventEnd < now; // Past events
      default:
        return matchesSearch; // Show all events
    }
  });

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
      <Sidebar
        className="fixed"
        searchPlaceholder="Search connections..."
        route = "events"
        title = "Events"
      />
      <div className="flex flex-col gap-3 w-full md:w-3/4 md:ml-80">
        <div className="flex flex-col gap-3">
          {/* Searchbar and Filter Dropdown */}
          <div className="flex flex-col justify-center items-center md:flex-row gap-4">
            <Searchbar searchPlaceholder="Search Events..." onSearch={(query) => setSearchQuery(query)} />
            <select
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Events</option>
              <option value="upcoming">Upcoming Events</option>
              <option value="today">Events Today</option>
              <option value="past">Past Events</option>
            </select>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
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

export default AllEvents;