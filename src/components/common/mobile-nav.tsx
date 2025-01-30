import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

import "@/styles/mobile-nav.scss";

interface Props {
  isOpen: boolean;
}

const MobileNav = ({ isOpen }: Props) => {
  return (
    <div>
      <div className="mobile-nav-close">
        {isOpen ? <IoMdClose className="close-icon"/> : <LuMenu className="menu-icon"/>}
      </div>
      {isOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-link-container">
            <div className="mobile-nav-links-container">
              <Link to="/" className="mobile-nav-link">Home</Link>
              <Link to="/solutions" className="mobile-nav-link">Solutions</Link>
              <Link to="/services" className="mobile-nav-link">Services</Link>
              <Link to="/about-us" className="mobile-nav-link">About us</Link>
              <Link to="/our-team" className="mobile-nav-link">Our Team</Link>
              <Link to="/contact-us" className="mobile-nav-link">Contact Us</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileNav