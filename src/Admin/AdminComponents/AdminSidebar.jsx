import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/AdminSidebar.css";
import dashboardIcon from "../../assets/analysis.png";
import usersIcon from "../../assets/user.png";
import chatIcon from "../../assets/chat.png";
import reportIcon from "../../assets/bill2.png";
import billIcon from "../../assets/bill.png";
import announcementIcon from "../../assets/announcement.png";
import dropdownArrow from "../../assets/down-arrow.png";
import chatroomIcon from "../../assets/chat2.png";
import queryareaIcon from "../../assets/query.png";
import userRoleIcon from "../../assets/team.png";


const AdminSidebar = () => {
  const [isDropdownHovered, setDropdownHovered] = useState(false);

  return (
    <div className="admin-sidebar">
      <div className="sidebar-title">Admin Panel</div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/admin/app/dashboard" className="li-item">
            <img src={dashboardIcon} alt="Dashboard" className="menu-icon" />
            <span className="main-item">Dashboard</span>
          </Link>
        </li>

        <li>
          <Link to="/admin/app/manage-users" className="li-item">
            <img src={usersIcon} alt="Manage Users" className="menu-icon" />
            <span className="main-item">Manage Users</span>
          </Link>
        </li>

        {/* Manage Chat Groups Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownHovered(true)}
          onMouseLeave={() => setDropdownHovered(false)}
        >
          <div className="dropdown-toggle">
            <div className="dropdown-title">
              <img
                src={chatIcon}
                alt="Manage Chat Groups"
                className="menu-icon"
              />
              <span className="main-item">Manage Chat Groups</span>
            </div>
            <img
              src={dropdownArrow}
              alt="Arrow"
              className={`dropdown-arrow ${isDropdownHovered ? "rotated" : ""}`}
            />
          </div>
          {isDropdownHovered && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/admin/app/manage-chatroom" className="li-item">
                  <img src={chatroomIcon} alt="Manage Users" className="menu-icon" />
                  <span className="sub-item">Team Chatrooms</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/app/manage-community-queries" className="li-item">
                  <img src={queryareaIcon} alt="Manage Users" className="menu-icon" />
                  <span className="sub-item">Help & Queries Area</span>
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/admin/app/generate-reports" className="li-item">
            <img
              src={reportIcon}
              alt="Generate Reports"
              className="menu-icon"
            />
            <span className="main-item">Generate Reports</span>
          </Link>
        </li>

        <li>
          <Link to="/admin/app/announcement" className="li-item">
            <img
              src={announcementIcon}
              alt="Announcement"
              className="menu-icon"
            />
            <span className="main-item">Announcement</span>
          </Link>
        </li>

        <li>
          <Link to="/admin/app/requirement-bills" className="li-item">
            <img
              src={billIcon}
              alt="Requirement Bills"
              className="menu-icon"
            />
            <span className="main-item">Requirement Bills</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/app/user-types" className="li-item">
            <img
              src={userRoleIcon}
              alt="user roles"
              className="menu-icon"
            />
            <span className="main-item">Manage User Roles</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
