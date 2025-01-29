import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlumniHomepage = () => {
  const navigate = useNavigate();
  const handleAlumnisignup = () =>{
    navigate('/alumni-signup');
  }
  const handleAlumnisignin = ()=>{
    navigate('/alumni-signin');
  }
  return (
    <div>
       <div className="flex justify-between items-center p-4">
        <div>logo</div>
       <div className="flex gap-8">
       <div>About us</div>
        <div>Contact us</div>
        <div>FAQs</div>
        <div>Help</div>
        <div>Language</div>
       </div>
        <div className="flex gap-4">
          <button
          onClick={handleAlumnisignup}
           className="px-3 text-sm py-1 border-red-400 border-1 border-solid font-semibold text-red-400 rounded-md cursor-pointer" >Sign Up</button>
          <button
          onClick={handleAlumnisignin}
          className="px-3 text-sm py-1 border-red-400 border-1 border-solid font-semibold text-red-400 rounded-md cursor-pointer">Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default AlumniHomepage