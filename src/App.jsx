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
import IndividualAchievement from './pages/achievements/IndividualAchievement'
import Interview_Listing from './pages/interviews/Interview_Listing'
import Navbar from './common-components/Navbar'
import logo from "./assets/logo.svg"

const App = () => {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Jobs", path: "/jobs" },
    { label: "Mentorship", path: "/about" },
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
      <Route path="/achievement/id" element={<IndividualAchievement/>}/>
      <Route path="/all-interviews" element={<Interview_Listing/>}/>
    </Routes>
    </>
  )
}
export default App