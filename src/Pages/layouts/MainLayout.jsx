import React, { useState } from "react";
import Navbar from "../../Components/commomLayouts/Navbar";
import Sidebar from "../../Components/commomLayouts/Sidebar";
import Footer from "../../Components/commomLayouts/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="content">
        <main className="main-content">
          <Outlet /> {/* Current page content */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
