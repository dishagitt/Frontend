import React from "react";
import Navbar from "../../AdminComponents/AdminNavbar";
import Sidebar from "../../AdminComponents/AdminSidebar";
import Footer from "../../AdminComponents/AdminFooter";
import { Outlet } from "react-router-dom";

const MainLayout = () => {

  return (
    <div className="app-container">
      <Navbar />
      <Sidebar />
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
