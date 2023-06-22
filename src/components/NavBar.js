import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleDownload = () => {
    // Logic untuk mengatur tindakan download file
    // Misalnya:
    const fileUrl =
      "https://docs.google.com/document/d/1ZeN-svUXLIGyiaRa2tJGw5lzawctP2GXJYWuEnyETyA/export?format=pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "document.pdf";
    link.target = "_blank";
    link.click();
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            PORTOFOLIO
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Certifications
              </NavLink>
            </li>
            <li className="nav-item">
              <button className="nav-download" onClick={handleDownload}>
                Download CV
              </button>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
