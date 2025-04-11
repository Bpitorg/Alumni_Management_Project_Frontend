import React from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const UserCard = ({
  id,
  category,
  name,
  degree,
  batch,
  position,
  company,
  skills = [],
  projects = [],
  experience = [],
  imageUrl,
  onConnect,
  onMentor,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const isStudent = category === "student";
  const isAlumni = category === "alumni";
  const isMentor = category === "mentor";

  // Teal-focused color scheme
  const categoryConfig = {
    student: {
      tagBg: "bg-teal-50",
      tagText: "text-teal-700",
      tagLabel: "Looking for a Mentor",
      accent: "border-teal-400",
      buttonBg: "bg-teal-500",
      buttonHover: "hover:bg-teal-600",
      iconColor: "text-teal-500"
    },
    alumni: {
      tagBg: "bg-cyan-50",
      tagText: "text-cyan-700",
      tagLabel: "Open to be a Mentor",
      accent: "border-cyan-400",
      buttonBg: "bg-cyan-500",
      buttonHover: "hover:bg-cyan-600",
      iconColor: "text-cyan-500"
    },
    mentor: {
      tagBg: "bg-emerald-50",
      tagText: "text-emerald-700",
      tagLabel: "Certified Mentor",
      accent: "border-emerald-400",
      buttonBg: "bg-emerald-500",
      buttonHover: "hover:bg-emerald-600",
      iconColor: "text-emerald-500"
    }
  };

  const config = categoryConfig[category];
  
  const handleCardClick = () => {
    navigate(`/networking/${category}/${id}`);
  };

  const handleActionClick = (e, callback) => {
    e.stopPropagation();
    if (callback) callback();
  };

  return (
    <div 
      className="relative rounded-xl overflow-hidden bg-white shadow hover:shadow-xl transition-all duration-300 w-full max-w-sm flex flex-col border border-gray-100"
      onClick={handleCardClick}
    >
      {/* Top color bar to indicate category */}
      <div className={`h-1.5 w-full ${config.buttonBg}`}></div>
      
      {/* Main content container */}
      <div className="p-5 flex flex-col h-full">
        {/* Tag */}
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${config.tagBg} ${config.tagText} mb-4`}>
          {config.tagLabel}
        </span>
        
        {/* Profile section */}
        <div className="flex items-center mb-5 gap-4">
          <div className={`w-16 h-16 rounded-full overflow-hidden ${config.accent} border-2 flex-shrink-0 shadow-sm`}>
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            {isStudent ? (
              <div>
                <p className="text-sm text-gray-600">{degree}</p>
                <p className="text-sm text-gray-500">Batch of {batch}</p>
              </div>
            ) : (
              <div>
                <p className="text-sm text-gray-600">{position} at {company}</p>
                <p className="text-sm text-gray-500">Batch of {batch}</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Skills section */}
        <div className="mb-4">
          <h4 className={`text-sm font-semibold ${config.tagText} uppercase tracking-wider mb-2`}>
            {isStudent ? "Top Skills" : "Expertise In"}
          </h4>
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 5).map((skill, index) => (
              <span
                key={index}
                className={`py-1 px-2 rounded-md text-xs font-medium ${config.tagBg} ${config.tagText}`}
              >
                {skill}
              </span>
            ))}
            {skills.length > 5 && (
              <span className="py-1 px-2 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                +{skills.length - 5} more
              </span>
            )}
          </div>
        </div>
        
        {/* Projects/Experience section */}
        <div className="mb-5">
          <h4 className={`text-sm font-semibold ${config.tagText} uppercase tracking-wider mb-2`}>
            {isStudent ? "Projects" : "Experience"}
          </h4>
          <div className="space-y-2">
            {(isStudent ? projects : experience).slice(0, 2).map((item, index) => (
              <div 
                key={index} 
                className={`text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-md border-l-2 ${config.accent}`}
              >
                {item}
              </div>
            ))}
            {(isStudent ? projects : experience).length > 2 && (
              <p className="text-xs text-gray-500 italic pl-2">
                +{(isStudent ? projects : experience).length - 2} more items
              </p>
            )}
          </div>
        </div>
        
        {/* Action buttons with teal theme */}
        <div className="mt-auto flex gap-3" onClick={e => e.stopPropagation()}>
          <button
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium text-white ${config.buttonBg} ${config.buttonHover} transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 shadow-sm`}
            onClick={(e) => handleActionClick(e, onConnect)}
          >
            Connect
          </button>
          <button
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium bg-white border border-gray-200 ${config.tagText} hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 shadow-sm`}
            onClick={(e) => handleActionClick(e, onMentor)}
          >
            {isStudent ? "Request Mentor" : "Offer Mentoring"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;