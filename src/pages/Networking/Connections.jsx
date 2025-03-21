import React, { useState } from "react";
import Sidebar from "../../common-components/Sidebar";
import { FaUserFriends, FaCalendarAlt } from "react-icons/fa";
import { FaPeoplePulling, FaPeopleGroup } from "react-icons/fa6";
import { SiCodementor } from "react-icons/si";
import Maincomp from "../../common-components/Maincomp";
import Searchbar from "../../common-components/Searchbar";
import ShortCard from "../../common-components/ShortCard";
import demoData from "../../constants/dummyshortcard"; // Import the demo data
import LowerNav from "../../common-components/Lowernav";


const menuItems = [
  { path: "", label: "All" }, // Add "All" option
  { path: "", label: "Students" },
  { path: "", label: "Alumni" },
  { path: "", label: "Mentors" },
];

const Connections = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("All"); // Default to "All"
  const [searchQuery, setSearchQuery] = useState(""); // State to track search query

  // Filter demoData based on the selected menu item and search query
  const filteredData = demoData.filter((card) => {
    // Filter by selected menu item
    if (selectedMenuItem !== "All") {
      if (selectedMenuItem === "Students" && card.type !== "student") {
        return false;
      } else if (selectedMenuItem === "Alumni" && card.type !== "alumni") {
        return false;
      } else if (selectedMenuItem === "Mentors" && card.type !== "mentor") {
        return false;
      }
    }

    // Filter by search query (name, batch, or branch)
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      return (
        card.name.toLowerCase().includes(lowerCaseQuery) ||
        card.year.toString().includes(lowerCaseQuery) || // Assuming `year` is the batch
        card.department.toLowerCase().includes(lowerCaseQuery) // Assuming `department` is the branch
      );
    }

    return true; // Default: show all data
  });

  return (
    <div className="flex gap-10 p-6 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <Sidebar
        className="fixed"
        title="Grow Your Network"
       route = "networking"
      />

      {/* Main Content */}
      <div className="flex flex-col gap-4 w-3/4 ml-74">
        <Maincomp showHeader={false}>
          {/* Search Bar and LowerNav */}
          <div className="flex items-center justify-center mr-8">
            <Searchbar
              searchPlaceholder="Search connections by name , branch , batch .."
              onSearch={(query) => setSearchQuery(query)} // Pass the search query to state
            />
            <LowerNav
              menuItems={menuItems}
              className="mx-3 w-full flex justify-center -py-1 rounded-sm"
              onMenuItemClick={(label) => setSelectedMenuItem(label)} // Pass the selected label to state
            />
          </div>

          {/* Scrollable ShortCards */}
          <div>
            <div
              className="flex gap-10 flex-wrap justify-center mt-6"
              style={{ width: "100%" }}
            >
              {filteredData.map((card) => (
                <ShortCard
                  key={card.id} // Unique key for each card
                  name={card.name}
                  department={card.department}
                  year={card.year}
                  image={card.image}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </Maincomp>
      </div>
    </div>
  );
};

export default Connections;
