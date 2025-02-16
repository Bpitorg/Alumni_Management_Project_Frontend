import React from "react";
import Navbar from "../common-components/Navbar";
import ProfileHeader from "../page-components/student-portfolio/ProfileHeader";
import ProfilePicture from "../page-components/student-portfolio/ProfilePicture";
import ProfileSummary from "../page-components/student-portfolio/ProfileSummary";
import AboutMe from "../page-components/student-portfolio/AboutMe";
import Skills from "../page-components/student-portfolio/Skills";
import Experience from "../page-components/student-portfolio/Experience";
import ProjectPage from "../page-components/student-portfolio/ProjectPage";
import ContactMe from "../page-components/student-portfolio/ContactMe";
const StudentPortfolio = () => {
  return (
    <div className="h-screen w-full font-poppins">
      <Navbar />
      <div className="profile h-full rounded-3xl flex gap-[8%] bg-gray-200 mx-4 mt-6">
        <ProfileHeader />
        <div className="flex flex-col items-center justify-center gap-6 max-w-xl py-8">
          <ProfilePicture />
          <ProfileSummary />
        </div>
      </div>
      <div className="about h-full rounded-3xl flex gap-[8%] bg-gray-200 mx-4 mt-3">
        <AboutMe />
        <div className="bg-[#09516fd1] text-white w-xl mt-[5%] h-[80%]">
          <Skills />
          <Experience />
        </div>
      </div>
      <div className="projects h-full rounded-3xl flex flex-col gap-[8%] bg-gray-200 mx-4 mt-3 p-3">
        <ProjectPage/>
      </div>
      <div className="contact rounded-3xl flex flex-col justify-center items-center gap-[8%] bg-gray-200 mx-4 mt-3 p-3">
      <ContactMe/>
      </div>
    </div>
  );
};

export default StudentPortfolio;
