// pages/Profile.jsx
import { useState } from "react";
import DashboardLayout from "../common-components/DashboardLayout";
import ProfileHeader from "../common-components/ProfileHeader";
import ProfileTabs from "../common-components/ProfileTabs";
import OverviewSection from "../common-components/OverviewSection";
import ProjectsSection from "../common-components/ProjectsSection";
import ExperienceSection from "../common-components/ExperienceSection";
import SkillsSection from "../common-components/SkillsSection";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data
  const userData = {
    name: "Aditya Sharma",
    title: "Full Stack Developer",
    company: "TechNova Solutions",
    location: "Bangalore, India",
    profileImage: "/api/placeholder/150/150",
    coverImage: "/api/placeholder/1200/300",
    email: "aditya.sharma@example.com",
    website: "https://adityasharma.dev",
    bio: "Passionate full-stack developer with 4+ years of experience building scalable web applications. Skilled in React, Node.js, and cloud technologies. Open to mentoring and collaboration opportunities.",
    education: [
      {
        degree: "M.Tech in Computer Science",
        institution: "Indian Institute of Technology, Delhi",
        year: "2018 - 2020",
      },
      {
        degree: "B.Tech in Information Technology",
        institution: "National Institute of Technology, Surathkal",
        year: "2014 - 2018",
      },
    ],
    experience: [
      {
        role: "Senior Developer",
        company: "TechNova Solutions",
        duration: "2022 - Present",
        description:
          "Leading frontend development for enterprise SaaS products. Implemented component library that increased development speed by 40%.",
      },
      {
        role: "Software Engineer",
        company: "InnoTech Systems",
        duration: "2020 - 2022",
        description:
          "Developed and maintained RESTful APIs. Improved API response time by 35% through query optimization.",
      },
    ],
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "GraphQL", level: 65 },
      { name: "AWS", level: 60 },
      { name: "Docker", level: 55 },
    ],
    projects: [
      {
        name: "E-commerce Platform",
        description:
          "A full-featured e-commerce platform with payment processing, inventory management, and analytics dashboard.",
        tags: ["React", "Redux", "Node.js", "MongoDB"],
        image: "/api/placeholder/300/200",
        link: "https://github.com/adityasharma/ecommerce-platform",
      },
      {
        name: "Real-time Chat Application",
        description:
          "Scalable chat application built with Socket.io and React, featuring read receipts, file sharing, and end-to-end encryption.",
        tags: ["Socket.io", "React", "Express", "Redis"],
        image: "/api/placeholder/300/200",
        link: "https://github.com/adityasharma/chat-app",
      },
      {
        name: "Task Management System",
        description:
          "Kanban-style project management tool with drag-and-drop interface, time tracking, and team collaboration features.",
        tags: ["React", "TypeScript", "GraphQL", "PostgreSQL"],
        image: "/api/placeholder/300/200",
        link: "https://github.com/adityasharma/task-manager",
      },
    ],
    certificates: [
      {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        year: "2023",
      },
      {
        name: "Professional Scrum Master I",
        issuer: "Scrum.org",
        year: "2022",
      },
      {
        name: "MongoDB Certified Developer",
        issuer: "MongoDB University",
        year: "2021",
      },
    ],
    achievements: [
      "Hackathon Winner - TechCrunch Disrupt 2023",
      "Speaker at React Conference India 2022",
      "Published article on system design in InfoQ magazine",
    ],
    socialLinks: {
      github: "https://github.com/adityasharma",
      linkedin: "https://linkedin.com/in/adityasharma",
      twitter: "https://twitter.com/adityasharma",
    },
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewSection userData={userData} />;
      case "projects":
        return <ProjectsSection userData={userData} />;
      case "experience":
        return <ExperienceSection userData={userData} />;
      case "skills":
        return <SkillsSection userData={userData} />;
      default:
        return <OverviewSection userData={userData} />;
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-gray-50 min-h-screen">
        <ProfileHeader userData={userData} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="py-8">{renderTabContent()}</div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;