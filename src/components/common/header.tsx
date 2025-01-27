import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '/ensone-logo.svg';
import { IoPlayCircleOutline } from "react-icons/io5";
import MobileNav from "./mobile-nav";
import "@/styles/header.scss";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="main-header-container">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="ensome-logo" />
        </Link>
      </div>
      <div className="header-link-container">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/solutions" className="header-link">Solutions</Link>
        <Link to="/services" className="header-link">Services</Link>
        <Link to="/about-us" className="header-link">About</Link>
        <Link to="/our-team" className="header-link">Team</Link>
        <Link to="/contact-us" className="header-link">Contact</Link>
      </div>
        <button className="header-button">
          <IoPlayCircleOutline className="header-play-icon"/>
          Watch the demo
        </button>
        <div className="mobile-nav" onClick={handleOpen}>
          <MobileNav isOpen={open}/>
        </div>
    </div>
  )
}

export default Header