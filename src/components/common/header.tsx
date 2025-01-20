import { Link } from "react-router-dom";
import "../../styles/header.scss";
import logo from '/ensone-logo.svg';
import { IoPlayCircleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="main-header-container">
      <div>
        <img src={logo} alt="logo" className="ensome-logo" />
      </div>
      <div className="header-link-container">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/" className="header-link">Solutions</Link>
        <Link to="/" className="header-link">Pages</Link>
        <Link to="/" className="header-link">Elements</Link>
        <Link to="/" className="header-link">Blog</Link>
        <Link to="/" className="header-link">Contact</Link>
      </div>
        <button className="header-button">
          <IoPlayCircleOutline className="header-play-icon"/>
          Watch the demo
        </button>
    </div>
  )
}

export default Header