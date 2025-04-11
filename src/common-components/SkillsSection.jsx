import SkillProgress from "../common-components/SkillProgress";
import CertificationCard from "../common-components/CertificationCard";
import AchievementCard from "../common-components/AchievementCard";

const SkillsSection = ({ userData }) => {
  const getSkillLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 70) return "Advanced";
    if (level >= 50) return "Intermediate";
    return "Beginner";
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Skills Section */}
      <div className="lg:col-span-2">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
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
            Add Skill
          </button>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {userData.skills.map((skill, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
              >
                <SkillProgress
                  skill={skill}
                  getSkillLevelText={getSkillLevelText}
                />
                <div className="flex justify-end mt-2">
                  <button className="text-gray-500 hover:text-gray-700 p-1 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Visualization */}
        <div className="mt-6 bg-white shadow-sm rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Skill Visualization
          </h3>
          <div className="flex items-center justify-center">
            <div className="w-full h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <span className="text-gray-500 ml-4">
                Skill distribution chart would render here
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
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
            Add Certificate
          </button>
        </div>

        <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
          {userData.certificates.map((cert, index) => (
            <CertificationCard key={index} certification={cert} />
          ))}

          {/* Add Certification Card */}
          <div className="p-5 text-center">
            <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 hover:bg-gray-50 transition-colors flex flex-col items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
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
              </div>
              <h3 className="font-medium text-gray-900">Add Certification</h3>
              <p className="text-sm text-gray-500 mt-1">
                Showcase your professional certifications
              </p>
            </button>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
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
              Add Achievement
            </button>
          </div>

          <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
            {userData.achievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} />
            ))}

            {/* Add Achievement Card */}
            <div className="p-5 text-center">
              <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 hover:bg-gray-50 transition-colors flex flex-col items-center">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-600"
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
                </div>
                <h3 className="font-medium text-gray-900">Add Achievement</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Highlight your notable accomplishments
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;