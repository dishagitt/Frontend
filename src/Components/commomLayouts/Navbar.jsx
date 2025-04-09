import { Link} from "react-router-dom";
import "./Navbar.css";
import homeIcon from "../../assets/home2.png";
import queryIcon from "../../assets/query.png";
import chatIcon from "../../assets/chat.png";
import profileIcon from "../../assets/user1.png";
import menuIcon from "../../assets/sidebar-icon.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../Redux/slices/authSlice";

const Navbar = ({ toggleSidebar }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch(logoutUser());                // Clear Redux and localStorage
    navigate("/admin");               // Redirect to login
  };

  return (
    <nav className="navbar">
      {/* Sidebar Toggle Button */}
      <button className="menu-button" onClick={toggleSidebar}>
        <img src={menuIcon} alt="Menu" className="menu-icon" />
      </button>

      <div className="nav-menu">
      <Link to="/app/home" className="nav-item">
        <img src={homeIcon} alt="Home" className="nav-icon" />
        <span className="nav-text">Home</span>
      </Link>
        <Link to="/app/help-queries" className="nav-item">
          <img src={queryIcon} alt="Help" className="nav-icon" />
          <span className="nav-text">Help & Queries</span>
        </Link>
        <Link to="/app/team-chats" className="nav-item">
          <img src={chatIcon} alt="Chat" className="nav-icon" />
          <span className="nav-text">Team Chats</span>
        </Link>
      </div>

      {/* Profile Section with Hover Dropdown */}
      <div className="nav-profile">
        <div className="profile-container-user" 
        onMouseEnter={(e) => e.currentTarget.classList.add("hovered")}
        onMouseLeave={(e) => e.currentTarget.classList.remove("hovered")}>
          <img src={profileIcon} alt="Profile" className="profile-icon" />

        <div className="dropdown-menu-user">
          <Link to="/profile" className="dropdown-item-user"> My Profile </Link>
          <Link to="/change-password" className="dropdown-item-user"> Change Password</Link>
          <div className="dropdown-item-user" onClick={handleLogout}>
              Logout
          </div>
        </div>
        </div>
        
      </div>

    </nav>
  );
};

export default Navbar;
