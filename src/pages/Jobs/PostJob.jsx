import React from "react";
import Sidebar from "../../common-components/Sidebar";
import { FaUserFriends, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { FaPeoplePulling, FaPeopleGroup } from "react-icons/fa6";
import { SiCodementor } from "react-icons/si";
import PostJobForm from "../../common-components/jobs/PostJobForm";
const PostJob = () => {
 
  return (
    <div className="flex flex-col md:flex-row gap-10 p-6 bg-gray-50 min-h-screen">
      <Sidebar
        className="fixed"
        searchPlaceholder="Search connections..."
        title="Jobs and Projects"
       route = "jobs"
      />
      <div className="flex flex-col gap-4 w-full md:w-3/4 md:ml-74">
      <PostJobForm/>
      </div>
    </div>
  );
};

export default PostJob;
