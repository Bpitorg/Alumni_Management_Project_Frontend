import React from 'react'
import { Routes , Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import StudentHomepage from './pages/students/StudentHomepage'
import AlumniHomepage from './pages/alumni/AlumniHomepage'
import StudentSignIn from './pages/students/StudentSignIn'
import StudentSignUp from './pages/students/StudentSignUp'
import AlumniSignIn from './pages/alumni/AlumniSignIn'
import AlumniSignUp from './pages/alumni/AlumniSignUp'
import AlumniDashboard from './pages/alumni/AlumniDashboard'
import StudentDashboard from './pages/students/StudentDashboard'
import MentorshipPage from './pages/mentorship/MentorshipPage'
import AchievementsListings from './pages/achievements/AchievementsListings'
import AddAchievement from './pages/achievements/AddAchievement'
import IndividualAchievement from './pages/achievements/IndividualAchievement'
import Interview_Listing from './pages/interview/Interview_Listing'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/student-home" element={<StudentHomepage />} />
      <Route path="/alumni-home" element={<AlumniHomepage />} />
      <Route path="/student-signin" element={<StudentSignIn />} />
      <Route path="/student-signup" element={<StudentSignUp />} />
      <Route path="/alumni-signin" element={<AlumniSignIn />} />
      <Route path="/alumni-signup" element={<AlumniSignUp />} />
      <Route path="/alumni-dashboard" element={<AlumniDashboard />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/mentor-page" element={<MentorshipPage/>}/>
      <Route path="/all-achievements" element={<AchievementsListings/>}/>
      <Route path="/add-achievement" element={<AddAchievement/>}/>
      <Route path="/achievement/id" element={<IndividualAchievement/>}/>
      <Route path="/all-interviews" element={<Interview_Listing/>}/>
    </Routes>
  )
}

export default App