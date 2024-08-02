import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap imported

const Navbar = () => {
  // State to manage the visibility of the links on mobile
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img
              src="https://almablog-media.s3.ap-south-1.amazonaws.com/01_Alma_Better_Logo_caa4b55aad.png"
              alt="Alma Better Logo"
              style={{ height: "70px", width: "190px" }}
            />
          </Link>
          
          {/* Toggler button for mobile */}
          
          <div className="d-flex justify-content-center">
            <button 
            className="navbar-toggler" 
            type="button" 
            onClick={() => setShowLinks(!showLinks)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          
          {/* Links */}
          <div>
            <div className={`collapse navbar-collapse ${showLinks ? 'show' : ''}`}>
            <div className="navbar-nav">
              <Link to="/template" className="nav-link">Resume Template</Link>
              <Link to="/myresume" className="nav-link">My Resume</Link>
              <Link to="/about" className="nav-link">About Us</Link>
              
            </div>
          </div>
          </div>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
