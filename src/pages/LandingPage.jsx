import React from "react";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import landingpage1 from "../assets/landingpage.svg";
import Footer from "../common-components/Footer";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();

  const handlePostNowClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    navigate('/login', { state: { message: 'Please log in to continue.' } }); // Redirect to the login page
  };
  const theme = useTheme();
  const SECTIONS = [
    {
      title: "Connect. Learn. Grow.",
      paragraph:
        "BPITAlumni is your exclusive space to connect with students and alumni, explore career opportunities, and share real experiences that shape futures.",
      links: [
        { text: "Community", to: "/community" },
        { text: "Networking", to: "/networking" },
        { text: "Events", to: "/interview-experiences" },
        { text: "Companies", to: "/companies" },
      ],
    },
    {
      title: "Career Opportunities",
      paragraph:
        "Get access to internships, job postings, and networking events tailored for BPIT students and alumni. Let your next opportunity find you!",
      links: [
        { text: "Job Board", to: "/leadership" },
        { text: "Internships", to: "/workshops" },
        { text: "Companies", to: "/webinars" },
        { text: "Interviews", to: "/events" },
      ],
    },
    {
      title: "Stay Updated with BPIT Events",
      paragraph:
        "Join hands with like-minded individuals to innovate and achieve greater heights together.",
      links: [
        { text: "Projects", to: "/projects" },
        { text: "Collaboration", to: "/collaboration" },
        { text: "Funding", to: "/funding" },
        { text: "Success Stories", to: "/success-stories" },
      ],
    },
  ];

  return (
    <>
      <div className="w-full h-screen grid grid-cols-2">
        <div className="flex flex-col items-center mt-30">
          <div className="text-center">
            <h1
              className="text-5xl text center"
              style={{ color: theme.palette.primary.main }}
            >
              Welcome to BPIT
            </h1>
            <h1
              className="text-5xl text-center"
              style={{ color: theme.palette.primary.main }}
            >
              Networking Community
            </h1>
          </div>
          <Link to="/signup"
            className="mt-10 w-75 py-3 rounded-md font-semibold flex justify-center"
            style={{
              background: theme.palette.primary.main,
              color: theme.palette.background.default,
            }}
          >
            <Link to="/signup">Create an account now!</Link>
          </Link>
          <Link
            to="/login"
            className="mt-5 w-75 py-3 rounded-md font-semibold flex justify-center"
            style={{
              border: `2px solid ${theme.palette.primary.main}`,
              background: theme.palette.background.default,
              color: theme.palette.primary.main,
            }}
          >
            <Link to="/login">Log In!</Link>
          </Link>
          <p className="text-xs mt-4 text-center w-70 text-gray-500">
            By continuing to join or sign in, you agree to Bpit's User
            Agreement, Privacy Policy.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            className="h-[90%] w-[90%]"
            src={landingpage1}
            alt="landingpage"
          />
        </div>
      </div>
      <div
        className="mb-20 flex flex-col p-10 items-center"
        style={{
          backgroundColor: theme.palette.background.default,
        }}
      >
        <h1 className="text-5xl" style={{ color: theme.palette.primary.main }}>
          Have a Job to Post??
        </h1>
        <Link
          to="/postjob" // This will be overridden by the onClick handler
          className="mt-10 flex justify-center items-center w-[35%] px-2 text-xl py-2 rounded-lg"
          style={{
            border: `2px solid ${theme.palette.primary.main}`,
            background: theme.palette.primary.main,
            color: theme.palette.background.default,
            boxShadow: "0px 6px 6px #0c8b87",
          }}
          onClick={handlePostNowClick} // Add the click handler
        >
          POST NOW
        </Link>
      </div>
      {SECTIONS.map((section, index) => (
        <div key={index} className="w-full grid grid-cols-2 px-15 mb-20">
          <div
            className="flex flex-col"
            style={{ color: theme.palette.primary.main }}
          >
            <h1 className="text-4xl">{section.title}</h1>
            <p className="mt-4 text-2xl text-[#6b6b6b]">{section.paragraph}</p>
          </div>
          <div
            className="grid gap-x-4 gap-y-2"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            }}
          >
            {section.links.map((link) => (
              <Link
                key={link.text}
                to={link.to}
                className="mx-4 my-4 text-md py-1 px-2 rounded-md flex justify-center items-center"
                style={{
                  border: `2px solid ${theme.palette.primary.main}`,
                  background: theme.palette.background.default,
                  color: theme.palette.primary.main,
                }}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      ))}

      <Footer />
    </>
  );
};

export default LandingPage;
