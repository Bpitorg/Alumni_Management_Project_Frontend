import React from "react";
import { facultList } from "../../constants/dummyData";
import {FacultyCard} from "./Cards";

const Faculty = () => {
  return (
    <div className="container mx-auto py-6 px-5 space-y-10">  
      <div className="relative w-full max-w-7xl mx-auto">
        <img
          className="w-full h-80 object-cover blur-[2px]"
          src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Member spotlight intro"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5">
          <h2 className="text-white text-4xl font-bold">
            GUIDING HANDS: OUR FACULTY
          </h2>
          <p className="text-white my-4 text-xl font-semibold">
            Meet our dedicated faculty coordinators committed to guiding and supporting our students.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {facultList.map((faculty) => (
          <FacultyCard Faculty={faculty} key={faculty.id} />
        ))}
      </div>
    </div>
  );
};

export default Faculty;
