// import React, { useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./Styles/AdminNavbar.css";
import profileIcon from "../../assets/user.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../Redux/slices/authSlice.js";
// import settingsIcon from "../../assets/settings.png";

const AdminNavbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch(logoutUser());                // Clear Redux and localStorage
    navigate("/admin");               // Redirect to login
  };


  // const toggleTheme = () => {
  //   const body = document.body;
  //   body.classList.toggle("dark-theme");

  //   // Store theme preference in localStorage
  //   if (body.classList.contains("dark-theme")) {
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     localStorage.setItem("theme", "light");
  //   }
  // };

  // Check and apply theme on load
  // useEffect(() => {
  //   if (localStorage.getItem("theme") === "dark") {
  //     document.body.classList.add("dark-theme");
  //   }
  // }, []);

  return (
    <nav className="admin-navbar">
      <div className="admin-greeting">Hello, Admin!</div>
      <div className="admin-nav-right">
        <input type="text" className="admin-search" placeholder="Search..." />

        {/* Settings Section with Hover Dropdown */}
        {/* <div
          className="settings-section"
          onMouseEnter={(e) => e.currentTarget.classList.add("hovered")}
          onMouseLeave={(e) => e.currentTarget.classList.remove("hovered")}
        >
          <img src={settingsIcon} alt="Settings" className="settings-icon" />
          <div className="settings-dropdown">
            <div className="dropdown-item-admin" onClick={toggleTheme}>
              Change Theme
            </div>
          </div>
        </div> */}

        {/* Profile Section with Hover Dropdown */}
        <div
          className="profile-section-admin"
          onMouseEnter={(e) => e.currentTarget.classList.add("hovered")}
          onMouseLeave={(e) => e.currentTarget.classList.remove("hovered")}
        >
          <img src={profileIcon} alt="Profile" className="profile-icon" />
          <div className="profile-dropdown-admin">
            <Link to="/admin/profile" className="dropdown-item-admin">
              My Profile
            </Link>
            <div className="dropdown-item-admin">Change Password</div>
            <div className="dropdown-item-admin" onClick={handleLogout}>
              Logout
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
