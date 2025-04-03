import { Link} from "react-router-dom";
import "./Navbar.css";
import homeIcon from "../../assets/home2.png";
import queryIcon from "../../assets/query.png";
import chatIcon from "../../assets/chat.png";
import profileIcon from "../../assets/user1.png";
import menuIcon from "../../assets/sidebar-icon.png";

const Navbar = ({ toggleSidebar }) => {

  return (
    <nav className="navbar">
      {/* Sidebar Toggle Button */}
      <button className="menu-button" onClick={toggleSidebar}>
        <img src={menuIcon} alt="Menu" className="menu-icon" />
      </button>

      <div className="nav-menu">
      <Link to="/home" className="nav-item">
        <img src={homeIcon} alt="Home" className="nav-icon" />
        <span className="nav-text">Home</span>
      </Link>
        <Link to="/help-queries" className="nav-item">
          <img src={queryIcon} alt="Help" className="nav-icon" />
          <span className="nav-text">Help & Queries</span>
        </Link>
        <Link to="/team-chats" className="nav-item">
          <img src={chatIcon} alt="Chat" className="nav-icon" />
          <span className="nav-text">Team Chats</span>
        </Link>
      </div>

      {/* Profile Section with Hover Dropdown */}
      <div className="nav-profile">
        <div className="profile-container" 
        onMouseEnter={(e) => e.currentTarget.classList.add("hovered")}
        onMouseLeave={(e) => e.currentTarget.classList.remove("hovered")}>
          <img src={profileIcon} alt="Profile" className="profile-icon" />
        </div>

        <div className="dropdown-menu">
          <Link to="/profile" className="dropdown-item"> My Profile </Link>
          <Link to="/change-password" className="dropdown-item"> Change Password</Link>
          <Link to="/login" className="dropdown-item">Logout</Link>
        </div>
        
      </div>

    </nav>
  );
};

export default Navbar;
