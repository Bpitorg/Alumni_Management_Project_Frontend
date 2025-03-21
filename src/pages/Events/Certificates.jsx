import React, { useState } from "react";
import { FaUserFriends, FaCalendarAlt, FaDownload } from "react-icons/fa";
import { FaPeoplePulling } from "react-icons/fa6";
import { SiCodementor } from "react-icons/si";
import Sidebar from "../../common-components/Sidebar";
import Searchbar from "../../common-components/Searchbar";

// Mock data for user certificates
const userCertificates = [
  {
    id: 1,
    title: "Advanced React Development",
    issuedBy: "React Academy",
    date: "2023-10-15",
    imageUrl: "https://via.placeholder.com/300x200.png?text=Certificate+1", // Placeholder image URL
  },
  {
    id: 2,
    title: "Node.js Mastery",
    issuedBy: "Node Institute",
    date: "2023-09-20",
    imageUrl: "https://via.placeholder.com/300x200.png?text=Certificate+2", // Placeholder image URL
  },
  // Add more certificates as needed
];



const Certificates = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter certificates based on the search query
  const filteredCertificates = userCertificates.filter((certificate) =>
    certificate.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
      <Sidebar
        className="fixed"
        searchPlaceholder="Search connections..."
        route="events"
        title="Events"
      />
      <div className="flex flex-col gap-3 w-full md:w-3/4 md:ml-80">
        <div className="flex flex-col gap-3">
          {/* Searchbar */}
          <div className="flex justify-center">
            <Searchbar
              searchPlaceholder="Search Certificates..."
              onSearch={(query) => setSearchQuery(query)}
            />
          </div>

          {/* Certificates as Images */}
          <div className="flex flex-col md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.length > 0 ? (
              filteredCertificates.map((certificate) => (
                <div
                  key={certificate.id}
                  className="flex flex-col items-center w-full bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Certificate Image */}
                  <img
                    src={certificate.imageUrl}
                    alt={certificate.title}
                    className="w-full h-auto rounded-lg mb-4"
                  />

                  {/* Certificate Details */}
                  <h2 className="text-xl font-bold mb-2 text-center">{certificate.title}</h2>
                  <p className="text-gray-600 mb-2 text-center">
                    <strong>Issued By:</strong> {certificate.issuedBy}
                  </p>
                  <p className="text-gray-600 mb-4 text-center">
                    <strong>Date:</strong> {new Date(certificate.date).toLocaleDateString()}
                  </p>

                  {/* Download Button */}
                  <a
                    href={certificate.imageUrl}
                    download={`${certificate.title.replace(/\s+/g, "_")}.png`}
                    className="flex items-center justify-center px-4 py-2 bg-blue-500 font-semibold text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    <FaDownload className="mr-2" />
                    Download
                  </a>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-600">
                No certificates found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;