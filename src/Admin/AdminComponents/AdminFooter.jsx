import React from "react";
import "./Styles/AdminFooter.css"; // Import CSS for styling

const AdminFooter = () => {
  return (
    <footer className="admin-footer">
      <p>&copy; {new Date().getFullYear()} Admin Panel. All rights reserved.</p>
    </footer>
  );
};

export default AdminFooter;
