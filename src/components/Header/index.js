import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navigation from "../Navigation";

function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <div className="container d-flex justify-content-end">
        <header>
          <nav>
            <ul className="nav nav-right mt-1">
              <li className="nav-item p-4">
                <a
                  href="#home"
                  onClick={() => handlePageChange("Home")}
                  className="font highlight"
                >
                  Home
                </a>
              </li>
              <li className="nav-item p-4">
                <a
                  href="#about"
                  onClick={() => handlePageChange("About")}
                  className="font"
                >
                  <span className="highlight">01.</span>
                   About
                </a>
              </li>
              <li className="nav-item p-4">
                <a
                  href="#portfolio"
                  onClick={() => handlePageChange("Portfolio")}
                  className="font"
                >
                  <span className="highlight">
                  02.</span> 
                  Portfolio
                </a>
              </li>
              <li className="nav-item p-4">
                <a
                  href="#contact"
                  onClick={() => handlePageChange("Contact")}
                  className="font"
                >
                <span className="highlight">
                  03.</span> Contact
                </a>
              </li>
              <li className="nav-item p-4">
                <a
                  href="#resume"
                  onClick={() => handlePageChange("Resume")}
                  className="font"
                >
                  <span className="highlight">
                  04.</span>
                   Resume
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <Navigation currentPage={currentPage}/>
    </div>
  );
}

export default Header;
