import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../common-components/Sidebar";
import { FaUserFriends, FaBriefcase } from "react-icons/fa";
import { FaPeoplePulling } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { SiCodementor } from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";
import Maincomp from "../../common-components/Maincomp";
import Lowernav from "../../common-components/Lowernav";
import UserCard from "../../common-components/UserCard";
import Footer from "../../common-components/Footer";
import { allUsers } from "../../constants/dummynetworkdata"; // Import the dummy data

const menuItems = [
  { path: "/networking/students", label: "Students" },
  { path: "/networking/alumni", label: "Alumni" },
  { path: "/networking/mentors", label: "Mentors" },
];

const Networking = () => {
  const location = useLocation();
  const type = location.pathname.split("/")[2]; // Extract 'students', 'alumni', or 'mentors'

  // Get users based on the selected type
  const users = allUsers[type] || [];

  return (
    <>
      <div className="flex gap-10 p-6 bg-gray-50">
        {/* Sidebar */}
        <Sidebar
          className="fixed"
          searchPlaceholder="Search connections..."
          title="Grow Your Network"
          route="networking"
        />

        <div className="flex flex-col gap-4 w-3/4 ml-74">
          {/* Navigation Bar */}
          <Lowernav menuItems={menuItems} />

          {/* Main Content */}
          <Maincomp>
            <div>
              <div
                className="flex gap-6 flex-wrap justify-center mt-4"
                style={{ width: "100%" }}
              >
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <div key={index} className="w-72">
                      <UserCard
                        id={user.id}
                        category={user.category}
                        name={user.name}
                        degree={user.degree}
                        batch={user.batch}
                        position={user.position}
                        company={user.company}
                        skills={user.skills}
                        projects={user.projects}
                        experience={user.experience}
                        imageUrl={user.imageUrl}
                        onConnect={() => alert(`Connect with ${user.name}`)}
                        onMentor={() => alert(`Mentor ${user.name}`)}
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-xl text-gray-600 mt-5">
                    No users found for this category.
                  </p>
                )}
              </div>
            </div>
          </Maincomp>
        </div>
      </div>
    </>
  );
};

export default Networking;
