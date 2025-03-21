import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { allUsers } from "../../constants/dummynetworkdata";
import { useTheme } from "@mui/material";
const DetailsPage = () => {
  const { category } = useParams(); // Extract the category from the URL
  const location = useLocation(); // Access the state passed via the Link

  // Get users for the selected category
  const users = allUsers[category] || [];
  const theme = useTheme();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6"
      style={{
        color: theme.palette.primary.main 
      }}>All {category}</h1>
      {users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-lg">
            <thead>
              <tr className="bg-gray-50"
              style={{
                color: theme.palette.primary.main 
              }}
              >
                <th className="py-3 px-4 border-b text-left">Name</th>
                <th className="py-3 px-4 border-b text-left">Degree</th>
                <th className="py-3 px-4 border-b text-left">Batch</th>
                <th className="py-3 px-4 border-b text-left">Position</th>
                <th className="py-3 px-4 border-b text-left">Company</th>
                <th className="py-3 px-4 border-b text-left">Skills</th>
                {/* Conditionally render the column header based on category */}
                {category === "students" ? (
                  <th className="py-3 px-4 border-b text-left">Projects</th>
                ) : (
                  <th className="py-3 px-4 border-b text-left">Experience</th>
                )}
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-all">
                  <td className="py-3 px-4 border-b">{user.name}</td>
                  <td className="py-3 px-4 border-b">{user.degree}</td>
                  <td className="py-3 px-4 border-b">{user.batch}</td>
                  <td className="py-3 px-4 border-b">{user.position}</td>
                  <td className="py-3 px-4 border-b">{user.company}</td>
                  <td className="py-3 px-4 border-b">{user.skills.join(", ")}</td>
                  {/* Conditionally render the column data based on category */}
                  {category === "students" ? (
                    <td className="py-3 px-4 border-b">{user.projects.join(", ")}</td>
                  ) : (
                    <td className="py-3 px-4 border-b">{user.experience}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-xl text-gray-600">No users found for this category.</p>
      )}
    </div>
  );
};

export default DetailsPage;