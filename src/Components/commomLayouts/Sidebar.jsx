import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import closeIcon from "../../assets/close2.png"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`user-sidebar ${isOpen ? "open" : ""}`}>
      {/* Sidebar Header with Close Icon */}
      <div className="user-sidebar-header">
        <h2>Menu</h2>
        <button className="close-button" onClick={toggleSidebar}><img src= {closeIcon} alt="Close Icon" /></button>
      </div>

      {/* Sidebar Menu */}
      <ul className="user-sidebar-menu">
      <li><Link to="/app/register-team-member" onClick={toggleSidebar} className="li-item">Register Team Members</Link></li>
        <li><Link to="/app/team-info" onClick={toggleSidebar} className="li-item">Team Info</Link></li>
        <li><Link to="/app/competition-progress" onClick={toggleSidebar} className="li-item">Competition Progress</Link></li>
        <li><Link to="/app/resource-requests" onClick={toggleSidebar} className="li-item">Resource Requests</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
