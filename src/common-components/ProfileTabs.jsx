const ProfileTabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
      { id: "overview", label: "Overview" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience & Education" },
      { id: "skills", label: "Skills & Certifications" },
    ];
  
    return (
      <div className="mt-8 border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              } transition-colors`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    );
  };
  
  export default ProfileTabs;