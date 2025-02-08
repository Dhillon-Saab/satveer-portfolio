import React from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";

export default function DashboardNavbar({
  user,
  isSidebarOpen,
  setIsSidebarOpen,
}) {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-600 hover:text-gray-800"
        >
          {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <div className="font-bold font-Josefin-Sans text-2xl">
            DesignLok
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-700 ">Welcome, {user}!</span>
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <FiUser size={18} />
          </div>
        </div>
      </div>
    </nav>
  );
}
