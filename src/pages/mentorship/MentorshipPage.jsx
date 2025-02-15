import React from 'react'
import Navbar from '../../common-components/Navbar'
import Mentorhsip from '../../assets/Mentorhsip.avif'
import Footer from '../../common-components/Footer';
import { useNavigate } from 'react-router-dom';


function MentorshipPage() {
  const navigate=useNavigate();
    const mentorshipPrograms = [
        { name: "Google Summer of Code (GSoC)", link: "https://summerofcode.withgoogle.com/" },
        { name: "Outreachy", link: "https://www.outreachy.org/" },
        { name: "MLH Fellowship", link: "https://fellowship.mlh.io/" },
        { name: "Microsoft Learn Student Ambassadors", link: "https://studentambassadors.microsoft.com/" },
        { name: "Linux Foundation Mentorship", link: "https://mentorship.lfx.linuxfoundation.org/" },
        { name: "Facebook Developer Circles", link: "https://developers.facebook.com/developercircles/" },
        { name: "Coding Coach", link: "https://codingcoach.io/" },
        { name: "She Codes", link: "https://www.shecodes.io/" },
        { name: "Amazon Future Engineer", link: "https://www.amazonfutureengineer.com/" },
      ];
      const links=[
        { label: "Home", onClick: () => navigate("/") },
      { label: "Mentor", onClick: () => navigate("/mentor-page") },
      { label: "Interviews", onClick: () => navigate("/all-interviews") }
     
      ]
    return (
        <>
       <Navbar logo="https://media.collegedekho.com/media/img/institute/logo/1440576082.png" links={links} />
      <div className="relative w-full">
        <img
          src={Mentorhsip}
          alt="Mentorship"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center  bg-opacity-40">
          <h1 className="text-white text-4xl font-bold">Let's Connect</h1>
        </div>
      </div>

      {/* Mentorship Programs List */}
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Top Mentorship Programs</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          {mentorshipPrograms.map((program, index) => (
            <li key={index} className="mb-2">
              <a
                href={program.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                {program.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </>


    )
}

export default MentorshipPage

