import React from "react";
import AchievementForm from "../../page-components/achievements/AchievementForm";

const AddAchievement = () => {
  const handleFormSubmit = (data) => {
    console.log("Achievement Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AchievementForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddAchievement;
