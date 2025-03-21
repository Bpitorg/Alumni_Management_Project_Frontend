import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Sidebar from "../../common-components/Sidebar";
import { FaUserFriends, FaCalendarAlt } from "react-icons/fa";
import { FaPeoplePulling, FaPeopleGroup } from "react-icons/fa6";
import { SiCodementor } from "react-icons/si";
import Maincomp from "../../common-components/Maincomp";
import AchievementCard from "../../common-components/networking/AchievementCard";
import achievements from "../../constants/achievementdata";
import { useTheme } from "@mui/material";

const Achievement = () => {
  const theme = useTheme();
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle click on achievement card
  const handleCardClick = (id) => {
    console.log("Navigating to achievement with ID:", id); // Debugging
    navigate(`/networking/achievements/${id}`); // Navigate to the detailed page
  };

  return (
    <div className="flex gap-10 p-6 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <Sidebar
        className="fixed"
        title="Grow Your Network" // Set the sidebar title
        route="networking"
      />

      {/* Main Content */}
      <div className="flex flex-col gap-4 w-3/4 ml-74">
        <Maincomp showHeader={false}>
          {/* Page Title */}
          <h1
            className="text-3xl font-bold text-center italic m-4"
            style={{
              color: theme.palette.primary.dark,
            }}
          >
            Thanks for making us proud!
          </h1>

          {/* Achievements List */}
          <div className="flex flex-col gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id} // Use a unique ID for the key
                onClick={() => handleCardClick(achievement.id)} // Add click handler
                className="cursor-pointer" // Make the card clickable
              >
                <AchievementCard
                  key={achievement.id}
                  title={achievement.title}
                  date={achievement.date}
                  description={achievement.description}
                  highlights={achievement.highlights}
                  testimonials={achievement.testimonials}
                  image={achievement.image}
                  reverse={index % 2 !== 0} // Alternate layout for even-indexed cards
                />
              </div>
            ))}
          </div>
        </Maincomp>
      </div>
    </div>
  );
};

export default Achievement;
