import React from 'react';
import { useNavigate } from 'react-router-dom';
import landingpagepic from '../assets/landingpagepic.avif';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStudentClick = () => {
    navigate('/student-home');
  };
  const handleAlumniClick = () => {
    navigate('/alumni-home');
  };

  return (
    <div>
      <div
        className="h-screen flex flex-col justify-center items-center relative"
        style={{
          backgroundImage: `url(${landingpagepic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center">
        <div className='flex justify-center items-center gap-5'>
        <h1 className="text-[13vh] text-[#b8b8b8] italic font-nexus font-medium"
          >BPIT</h1>
          <h1 className="text-[13vh] text-[#b8b8b8] italic font-nexus font-medium"
          >Nexus</h1>
        </div>

          <p className="text-[7vh] italic font-nexus font-medium text-white">
            Bridging Generations, Building Futures
          </p>
          <div className="mt-8 flex gap-6 justify-center">
            <button
              onClick={handleStudentClick}
              className="px-6 font-nexus text-xl py-3 border-white border-3 border-solid font-semibold text-white hover:bg-white hover:text-gray-700 rounded-xl transition-all duration-400 ease-in-out"
            >
              Join as a Student
            </button>
            <button
            onClick={handleAlumniClick}
            className="px-6 font-nexus text-xl py-3 bg-blend-darken border-white border-3 border-solid font-semibold text-white hover:bg-white hover:text-gray-700 rounded-xl transition-all duration-400 ease-in-out">
              Join as an Alumni
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
