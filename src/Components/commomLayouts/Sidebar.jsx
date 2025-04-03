import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`user-sidebar ${isOpen ? "open" : ""}`}>
      {/* Sidebar Header with Close Icon */}
      <div className="user-sidebar-header">
        <h2>Menu</h2>
        <button className="close-button" onClick={toggleSidebar}>❌</button>
      </div>

      {/* Sidebar Menu */}
      <ul className="user-sidebar-menu">
        <li><Link to="/team-info" onClick={toggleSidebar} className="li-item">Team Info</Link></li>
        <li><Link to="/competition-progress" onClick={toggleSidebar} className="li-item">Competition Progress</Link></li>
        <li><Link to="/resource-requests" onClick={toggleSidebar} className="li-item">Resource Requests</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
