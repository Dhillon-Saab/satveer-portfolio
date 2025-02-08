import Link from "next/link";
import { logOutUser } from "@/actions/authActions";

import React from "react";
import { FiFileText, FiSettings, FiImage, FiLogOut } from "react-icons/fi";

export default function DashboardSideBar({ isSidebarOpen }) {
  return (
    <aside
      className={`bg-white shadow-sm fixed h-full transition-all duration-300 ${
        isSidebarOpen ? "w-64" : "w-0 -translate-x-full"
      }`}
    >
      <div className="p-6 space-y-4 mt-20">
        <h2 className="font-black font-Lora text-2xl text-center"><span className={`${!isSidebarOpen && "hidden"}`}>Menu</span></h2>

        <Link
          href="/dashboard"
          className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
        >
          <FiFileText size={20} />
          <span className={`${!isSidebarOpen && "hidden"}`}>Posts</span>
        </Link>
        <Link
          href="/dashboard/media"
          className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
        >
          <FiImage size={20} />
          <span className={`${!isSidebarOpen && "hidden"}`}>Media</span>
        </Link>
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
        >
          <FiSettings size={20} />
          <span className={`${!isSidebarOpen && "hidden"}`}>Settings</span>
        </Link>
        <div className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <FiLogOut size={20} />
          <span className={`${!isSidebarOpen && "hidden"}`}>
          <button onClick={logOutUser}>SignOut</button>
          </span>
        </div>
      </div>
    </aside>
  );
}
