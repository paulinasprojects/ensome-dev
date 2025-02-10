import { useState } from "react"
import { Link } from "react-router-dom"
import bluelogo from '/ensome-blue-logo.svg';
import { IoPlayCircleOutline } from "react-icons/io5";
import SecondMobileNav from "./second-mobile-nav";

import "@/styles/second-header.scss";

const SecondHeader = () => {
  const [ open, setOpen ] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open)
  };

  return (
    <div className="main-second-header-container">
      <div>
        <Link to="/home-v1">
          <img src={bluelogo} alt="blue-logo" className="ensome-blue-logo" />
        </Link>
      </div>
      <div className="second-header-link-container">
        <Link to="/home-v1" className="second-header-link">Home</Link>
        <Link to="/solutions" className="second-header-link">Solutions</Link>
        <Link to="/services" className="second-header-link">Services</Link>
        <Link to="/about-us" className="second-header-link">About</Link>
        <Link to="/our-team" className="second-header-link">Team</Link>
        <Link to="/contact-us" className="second-header-link">Contact</Link>
      </div>
      <button className="second-header-button">
        <IoPlayCircleOutline className="second-header-play-icon"/>
        Watch the demo
      </button>
      <div className="second-mobile-nav" onClick={handleOpen}>
        <SecondMobileNav isOpen={open}/>
      </div>
    </div>
  );
};

export default SecondHeader;