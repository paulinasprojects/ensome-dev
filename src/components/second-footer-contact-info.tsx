import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

const SecondFooterContactInfo = () => {
  return (
    <div>
      <h4 className="second-footer-contact-info-title">Contacts</h4>
      <div className="second-footer-contact-info-main-container">
        <div className="second-footer-contact-info-content">
          <span>+1 601-201-5580</span>
          <Link to="mailto:ensome@info.co.us">ensome@info.co.us <MdArrowRightAlt className="second-footer-arrow-icon"/></Link>
        </div>
        <div className="second-footer-contact-info-content">
          <span>1642 Washington Avenue, Jackson, MS, 39201</span>
          <Link to="#">Driving derections <MdArrowRightAlt className="second-footer-arrow-icon"/></Link>
        </div>
      </div>
    </div>
  )
}

export default SecondFooterContactInfo