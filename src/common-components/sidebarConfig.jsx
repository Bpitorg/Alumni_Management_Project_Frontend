// sidebarConfig.js
import { FaUserFriends, FaCalendarAlt } from "react-icons/fa";
import { FaPeoplePulling, FaPeopleGroup } from "react-icons/fa6";
import { SiCodementor } from "react-icons/si";
export const sidebarMenuItems = {
  events: [
    { path: "/events/all-events", label: "View All Events", icon: <FaUserFriends /> },
    { path: "/events/networking-events", label: "Networking Events", icon: <FaCalendarAlt /> },
    { path: "/events/participated-events", label: "Participated Events", icon: <SiCodementor /> },
    { path: "/events/certificates", label: "Your Certificates", icon: <FaPeoplePulling /> },
    { path: "/events/webinars", label: "Webinars For You", icon: <FaPeoplePulling /> },
  ],
  jobs: [
    { path: "/jobs/post-a-job", label: "Post A Job", icon: <FaUserFriends /> },
    { path: "/jobs/applied-jobs", label: "Applied Jobs", icon: <SiCodementor /> },
    { path: "/jobs/interview-exp", label: "Interview Experience", icon: <FaPeoplePulling /> },
    { path: "/jobs/recent-recruiters", label: "Top Recruiters", icon: <FaPeopleGroup /> },
    { path: "/jobs/alumni-workplace", label: "Alumni Workplace", icon: <FaCalendarAlt /> },
  ],
  networking: [
    { path: "/networking/connections", label: "Find Connections", icon: <FaUserFriends /> },
    { path: "/networking/mentorship-programs", label: "Mentorship Programs", icon: <SiCodementor /> },
    { path: "/networking/your-mentors", label: "Your Mentors", icon: <FaPeoplePulling /> },
    { path: "/networking/your-students", label: "Your Students", icon: <FaPeopleGroup /> },
    { path: "/networking/achievements", label: "Achievements", icon: <FaCalendarAlt /> },
  ],
};