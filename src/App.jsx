import React from 'react'
import { Routes , Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import StudentHomepage from './pages/Homepage/StudentHomepage'
import AlumniHomepage from './pages/Homepage/AlumniHomepage'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIN'
import StudentPortfolio from './pages/StudentPortfolio'
import FindJobs from './pages/Jobs/FindJobs'
import MentorshipPage from './pages/mentorship/MentorshipPage'
import AchievementsListings from './pages/achievements/AchievementsListings'
import AddAchievement from './pages/achievements/AddAchievement'
import IndividualAchievements from './pages/achievements/IndividualAchievements'
import Interview_Listing from './pages/interviews/Interview_Listing'
import Navbar from './common-components/Navbar'
import logo from "./assets/logo.svg"
import AddInterview from './pages/interviews/AddInterview'
import AboutUs from './pages/about/AboutUs'
import ContactUs from './pages/ContactUs'
import Events_Listing from './pages/Events/Events_Listing'
import RegisterEvent from './pages/Events/RegisterEvent'
import RegistrationSuccess from './pages/Events/RegistrationSuccess'
import FacultyDetails from './pages/about/FacultyDetails'
import NoticeBoard from './pages/about/NoticeBoard'

const App = () => {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Jobs", path: "/jobs" },
    { label: "Mentorship", path: "/mentor-page" },
    { label: "Achievements", path: "/all-achievements" },
    { label: "Interviews", path: "/all-interviews" },
  ];

  return (
    <>
    <Navbar logo={logo} links={navLinks} />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/student" element={<StudentHomepage />} />
      <Route path="/alumni" element={<AlumniHomepage />}/> 
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/student-portfolio" element={<StudentPortfolio />} />
      <Route path="/jobs" element={<FindJobs/>}/>
      <Route path="/mentor-page" element={<MentorshipPage/>}/>
      <Route path="/all-achievements" element={<AchievementsListings/>}/>
      <Route path="/add-achievement" element={<AddAchievement/>}/>
      <Route path="/achievement/:id" element={<IndividualAchievements/>}/>
      <Route path="/all-interviews" element={<Interview_Listing/>}/>
      <Route path="/list-interview" element={<AddInterview/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/all-events" element={<Events_Listing/>}/>
      <Route path="/event-register" element={<RegisterEvent/>}/>
      <Route path="/success-register" element={<RegistrationSuccess/>}/>
      <Route path="/faculty-details" element={<FacultyDetails/>}/>
      <Route path="/notice" element={<NoticeBoard/>}/>
      
    </Routes>
    </>
  )
}
export default App