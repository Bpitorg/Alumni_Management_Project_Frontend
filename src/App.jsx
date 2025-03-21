import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./common-components/Navbar";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import Networking from "./pages/Networking/Networking";
import Connections from "./pages/Networking/Connections";
import Mentorshipprog from "./pages/Networking/Mentorshipprog";
import CreateMentorshipProgram from "./pages/Networking/CreateMentorshipProgram";
import MentorApplication from "./pages/Networking/MentorApplication";
import YourMentor from "./pages/Networking/YourMentor";
import YourStudent from "./pages/Networking/YourStudent";
import Achievement from "./pages/Networking/Achievement";
import Jobs from "./pages/Jobs/Jobs";
import JobApplicationForm from "./pages/Jobs/JobApplicationForm";
import PostJob from "./pages/Jobs/PostJob";
import AppliedJobs from "./pages/Jobs/AppliedJobs";
import InterviewExperiences from "./pages/Jobs/InterviewExperiences";
import RecentRecruiters from "./pages/Jobs/RecentRecruiters";
import AlumniWorkplace from "./pages/Jobs/AlumniWorkplace";
import Events from "./pages/Events/Events";
import EventDetails from "./pages/Events/EventDetails";
import AllEvents from "./pages/Events/AllEvents";
import ParticipatedEvents from "./pages/Events/ParticipatedEvents";
import Certificates from "./pages/Events/Certificates";
import Webinars from "./pages/Events/Webinars";
import NetworkingEvents from "./pages/Events/NetworkingEvents";
import MentorshipDetail from "./pages/Networking/MentorshipDetail";
import DetailsPage from "./pages/Networking/DetailsPage";
import InterviewDetail from "./pages/Jobs/InterviewDetail";
import AchievementDetails from "./pages/Networking/AchievementDetails";
import RecruiterDetails from "./pages/Jobs/RecruiterDetails";
import AlumniWorkplaceDetails from "./pages/Jobs/AlumniWorkplaceData";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Networking Routes */}
        <Route path="/networking">
          <Route index element={<Networking type="all" />} />
          <Route path="all" element={<Networking type="all" />} />
          <Route path="students" element={<Networking type="students" />} />
          <Route path="alumni" element={<Networking type="alumni" />} />
          <Route path="mentors" element={<Networking type="mentors" />} />
          <Route path="connections" element={<Connections />} />
          <Route path="mentorship-programs">
            <Route index element={<Mentorshipprog />} />
            <Route path=":id" element={<MentorshipDetail />} />{" "}
          </Route>
          <Route path="new-program" element={<CreateMentorshipProgram />} />
          <Route path="mentor-application" element={<MentorApplication />} />
          <Route path="your-mentors" element={<YourMentor />} />
          <Route path="your-students" element={<YourStudent />} />
          <Route path="achievements" element={<Achievement />} />
          <Route path="achievements/:id" element={<AchievementDetails />} />
          <Route path=":category/details" element={<DetailsPage />} />
        </Route>
        ;
        {/* Jobs Routes */}
        <Route path="/jobs">
          <Route index element={<Jobs />} />
          <Route path="apply-job" element={<JobApplicationForm />} />
          <Route path="post-a-job" element={<PostJob />} />
          <Route path="applied-jobs" element={<AppliedJobs />} />
          <Route path="interview-exp" element={<InterviewExperiences />} />
          <Route path="interview-exp/:id" element={<InterviewDetail />} />
          <Route path="recent-recruiters" element={<RecentRecruiters />} />
          <Route path="recent-recruiters/:id" element={<RecruiterDetails />} />
          <Route path="alumni-workplace" element={<AlumniWorkplace />} />
          <Route path="alumni-workplace/:id" element={<AlumniWorkplaceDetails />} />
        </Route>
        {/* Events Routes */}
        <Route path="/events">
          <Route index element={<Events />} />
          <Route path="event/:id" element={<EventDetails />} />
          <Route path="all-events" element={<AllEvents />} />
          <Route path="networking-events" element={<NetworkingEvents />} />
          <Route path="participated-events" element={<ParticipatedEvents />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="webinars" element={<Webinars />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
