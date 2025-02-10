import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

import "@/styles/second-mobile-nav.scss";

interface Props {
  isOpen: boolean;
}

const SecondMobileNav = ({ isOpen }: Props) => {
  return (
    <div>
      <div className="second-mobile-nav-close">
        {isOpen ? <IoMdClose className="second-close-icon"/> : <LuMenu className="second-menu-icon"/>}
      </div>
      {isOpen && (
      <div className="second-mobile-nav-overlay">
        <div className="second-mobile-nav-link-container">
          <div className="second-mobile-nav-links-container">
            <Link to="/home-v1" className="second-mobile-nav-link">Home</Link>
            <Link to="/solutions" className="second-mobile-nav-link">Solutions</Link>
            <Link to="/services" className="second-mobile-nav-link">Services</Link>
            <Link to="/about-us" className="second-mobile-nav-link">About us</Link>
            <Link to="/our-team" className="second-mobile-nav-link">Our Team</Link>
            <Link to="/contact-us" className="second-mobile-nav-link">Contact Us</Link>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default SecondMobileNav;