import React, { useState } from "react";
import { events } from "../../constants/dummyeventdata";
import { Pagination, Button, Menu, MenuItem } from "@mui/material";
import { FilterList } from "@mui/icons-material";

import Navbar from "../../common-components/Navbar";
import { useNavigate } from "react-router-dom";
import EventCard from "../../page-components/events/EventCard";

function Events_Listing() {
  const [page, setPage] = useState(1);
  const [filterType, setFilterType] = useState(""); // Default is no filter
  const [anchorEl, setAnchorEl] = useState(null);
  const eventsPerPage = 10;
  const navigate = useNavigate();

  // Sorting function
  const sortedEvents = [...events].sort((a, b) => {
    if (filterType === "newest") {
      return new Date(b.date) - new Date(a.date); // Latest events first
    } else if (filterType === "oldest") {
      return new Date(a.date) - new Date(b.date); // Oldest events first
    } else if (filterType === "name") {
      return a.name.localeCompare(b.name); // Alphabetical order
    }
    return 0;
  });

  // Apply pagination after sorting
  const startIndex = (page - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const paginatedEvents = sortedEvents.slice(startIndex, endIndex);

  const handleChange = (event, value) => {
    setPage(value);
  };

  // Menu handlers
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (filter) => {
    setFilterType(filter);
    setAnchorEl(null);
  };

  return (
    <div>
      

      {/* Filter Button */}
      <div className="flex justify-end p-4">
        <Button
          variant="contained"
          startIcon={<FilterList />}
          onClick={handleMenuClick}
        >
          {filterType ? filterType.charAt(0).toUpperCase() + filterType.slice(1) : "Filter"}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleMenuClose(filterType)}
        >
          <MenuItem onClick={() => handleMenuClose("newest")}>Newest</MenuItem>
          <MenuItem onClick={() => handleMenuClose("oldest")}>Oldest</MenuItem>
          <MenuItem onClick={() => handleMenuClose("name")}>Alphabetical</MenuItem>
        </Menu>
      </div>

      {/* Display Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* Pagination Component */}
      <div className="flex justify-center mt-4">
        <Pagination
          count={Math.ceil(events.length / eventsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </div>
    </div>
  );
}

export default Events_Listing;


