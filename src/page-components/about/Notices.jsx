import React from "react";
import { notices } from "../../constants/dummyData";
import { NoticeCard } from "./Cards";

const Notices = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="flex flex-col justify-center items-center rounded-lg">
          <h2 className="text-black text-4xl font-bold">Alumni Notice Board</h2>
          <p className="text-black mt-2 text-lg">Stay updated with the latest news and events</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10">   
        <div className="lg:col-span-3 space-y-6">
          {notices.map((notice) => (
            <NoticeCard key={notice.id} Notice={notice}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notices;
