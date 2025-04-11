import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex w-full h-full justify-center px-10 rounded-xl bg-white my-4 ">
      {children}
    </div>
  );
};

export default DashboardLayout;