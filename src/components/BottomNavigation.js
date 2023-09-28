import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaCalendarDay, FaPlusCircle, FaCalendarCheck } from "react-icons/fa";

function BottomNavigation() {
  const [activeTab, setActiveTab] = useState("ongoing"); 

  const handleTabClick = (tab) => {
    setActiveTab(tab); 
  };

  return (
    <nav className="fixed rounded-tl-lg rounded-tr-lg bottom-0 left-0 w-full bg-white p-4 shadow-md flex justify-between border-t">
      <Link to="/" className={`text-gray-500 flex flex-col items-center cursor-pointer`} onClick={() => handleTabClick('ongoing')}>
        <FaCalendarDay className={`text-xl mb-1 ${activeTab === 'ongoing' ? 'text-blue-800' : ''}`} />
        Ongoing
      </Link>
      <Link to="/create" className={`text-gray-500 flex flex-col items-center cursor-pointer`} onClick={() => handleTabClick('create')}>
        <FaPlusCircle className={`text-xl mb-1 ${activeTab === 'create' ? 'text-blue-800' : ''}`} />
        Create
      </Link>
      <Link to="/existing" className={`text-gray-500 flex flex-col items-center cursor-pointer`} onClick={() => handleTabClick('existing')}>
        <FaCalendarCheck className={`text-xl mb-1 ${activeTab === 'existing' ? 'text-blue-800' : ''}`} />
        Existing
      </Link>
    </nav>
  );
}

export default BottomNavigation;
