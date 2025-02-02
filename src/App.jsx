import React from 'react'
import { Routes , Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import StudentHomepage from './pages/Homepage/StudentHomepage'
import AlumniHomepage from './pages/Homepage/AlumniHomepage'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import StudentPortfolio from './pages/StudentPortfolio'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/student" element={<StudentHomepage />} />
      <Route path="/alumni" element={<AlumniHomepage />}/> 
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/student-portfolio" element={<StudentPortfolio />} />


    </Routes>
  )
}

export default App