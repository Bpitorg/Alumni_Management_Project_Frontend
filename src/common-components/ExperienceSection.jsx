import ExperienceCard from "../common-components/ExperienceCard";
import EducationCard from "../common-components/EducationCard";

const ExperienceSection = ({ userData }) => {
  return (
    <div>
      {/* Experience Section */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm flex items-center transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Experience
          </button>
        </div>

        <div className="bg-white shadow-sm rounded-lg">
          {userData.experience.map((exp, index) => (
            <ExperienceCard
              key={index}
              experience={exp}
              isLast={index === userData.experience.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Education</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm flex items-center transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Education
          </button>
        </div>

        <div className="bg-white shadow-sm rounded-lg">
          {userData.education.map((edu, index) => (
            <EducationCard
              key={index}
              education={edu}
              isLast={index === userData.education.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;