import React from "react";

const ListFormat = ({ data, type }) => {
  return (
    <div className="flex flex-col gap-4 w-full " >
      {data.map((item, index) => (
        <div
          key={index}
          className="border-gray-400 rounded-lg border-solid hover:bg-gray-300"
        >
          <div className="px-5 py-2 flex items-center justify-between">
            {/* Image */}
            <img
              className="h-20 w-20 rounded-full bg-black"
              src={item.imageUrl || "https://via.placeholder.com/80"} // Fallback image if no URL is provided
              alt={type === "mentor" ? "mentor" : "student"}
            />

            {/* Details */}
            <div className="flex-1 mx-4">
              <div className="text-xl font-semibold">{item.name}</div>
              <div className="text-md font-semibold text-gray-600">
                {type === "mentor" ? item.program : item.batch}
              </div>
              <div className="text-sm text-gray-500">
                {type === "mentor"
                  ? `${item.company} • ${item.position}`
                  : `Interests: ${item.interests.join(", ")}`}
              </div>
              <div className="text-sm text-gray-500">
                {type === "mentor"
                  ? `Expertise: ${item.expertise.join(", ")}`
                  : `Program: ${item.program}`}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 justify-center items-center">
              <button className="px-4 py-2 font-semibold bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition duration-300">
                Send Message
              </button>
              <button className="px-4 py-2 font-semibold bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition duration-300">
                View Profile
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListFormat;