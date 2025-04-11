const SkillProgress = ({ skill, getSkillLevelText }) => {
    return (
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
          <span className="text-sm text-gray-500">
            {getSkillLevelText(skill.level)}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  export default SkillProgress;