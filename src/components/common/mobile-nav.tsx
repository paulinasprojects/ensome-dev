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
              <Link to="/">Home</Link>
              <Link to="/">Solutions</Link>
              <Link to="/">Pages</Link>
              <Link to="/">Elements</Link>
              <Link to="/">Blog</Link>
              <Link to="/">Contact</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileNav