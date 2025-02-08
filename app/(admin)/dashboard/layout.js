"use client"
import { useState } from 'react';
import DashboardNavbar from '../_components/DashboardNavbar';
import DashboardSideBar from '../_components/DashboardSideBar';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardNavbar user={'Admin'} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <DashboardSideBar isSidebarOpen={ isSidebarOpen } />
      <main
        className={`pt-16 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } p-6`}
      >
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;