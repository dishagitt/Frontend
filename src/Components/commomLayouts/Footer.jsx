import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="admin-footer" >
    <p>&copy; {new Date().getFullYear()} &nbsp; || &nbsp; All rights reserved.</p>
  </footer>
  )
}

export default Footer
