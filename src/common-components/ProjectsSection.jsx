import ProjectCard from "../common-components/ProjectCard";

const ProjectsSection = ({ userData }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
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
          Add Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} showFullDetails={true} />
        ))}

        {/* Add Project Card */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-64 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
          <div className="text-center p-5">
            <div className="mx-auto bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
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
            <h3 className="mt-2 font-medium text-gray-900">Add New Project</h3>
            <p className="text-sm text-gray-500 mt-1">
              Showcase your work and skills
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;