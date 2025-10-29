import React from "react";
import Header from "./_components/Header";
import Sidenav from "./_components/Sidenav";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64  bg-white text-black mt-[64px]">
        <Sidenav />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Fixed Header */}
        <div className="fixed top-0  w-full right-0 h-16 bg-white shadow z-10">
          <Header />
        </div>

        {/* Page Content */}
        <div className="mt-16 p-6 overflow-y-auto h-full bg-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
